import React, { useState, useEffect } from 'react'
import './App.css'
export default function App() {

  const [temp, setTemp] = useState('');
  const [word, setWord] = useState('');
  const [qrCode, setQrCode] = useState('');
  const [bgColor, setBgColor] = useState('#fff');

  useEffect(() => {
    setQrCode(`http://api.qrserver.com/v1/create-qr-code/?data=${word}&size=${""}x${""}&bgcolor=${bgColor}`)
  }, [word, bgColor]);

  function handleGenerate() {
    setWord(temp);
  }

  return (
    <>
      <h1 className='themeText'>React QRCode generator</h1>
      <div className='inputSec'>
        <input type="text" 
        placeholder='Enter text...'
        className='placeInput'
        onChange={(e) => {setTemp(e.target.value)}}
        />
      </div>

      <div className='output'>
        <img src={qrCode} alt='qr code image' />
      </div>
      <div className='buttonsArea'>
        <button className='generateBtn'
          onClick={handleGenerate}
        >
          Generate
        </button>
        <a href={qrCode} download='QRCode'>
          <button className='downloadBtn' type='button'>Download</button>
        </a>
        <input type="color" onChange={(e) => setBgColor(e.target.value.substring(1))} />
      </div>
    </>
  )
}
