import { useState, useRef, useCallback, useEffect } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass = ""
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed,setPassword])
  
  const copyBtnClicked = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password)    
  },[password])
    
  useEffect(() => {
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className='flex justify-center w-full py-10'>
      <div className='bg-gray-700 rounded-xl w-full max-w-2xl text-center p-5 text-white'>
        <h1 className='text-center text-4xl'>Password Generator</h1>
        <div className='flex justify-center py-5 rounded-xl'>
          <input
            type="text"
            ref={passRef}
            readOnly
            className='rounded-s-lg flex outline-none shadow-md py-1 px-2 text-orange-500 bg-white w-full max-w-md'
            value={password}
          />
          <button
            className='px-3 bg-blue-500 rounded-e-lg'
            onClick={copyBtnClicked}
          >Copy</button>
        </div>
        <div className='flex text-orange-500 w-full justify-center gap-3'>
          <div className='text-center flex align-middle gap-1'>
            <input
              min={6}
              max={100}
              type="range"
              id='range'
              value={length}
              onChange={(e) => {
                setLength(e.target.value)
              }} />
            <label htmlFor="range" >Length : {length}</label>
          </div>
          <div className='text-center flex align-middle gap-1'>
            <input
              type="checkbox"
              id="num"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="num">Numbers Allow</label>
          </div>
          <div className='text-center flex align-middle gap-1'>
            <input
              type="checkbox"
              id="char"
              defaultChecked={charAllowed}
              onChange={() => {
                setCharAllowed((pre) => !pre);
              }} 
            />
            <label htmlFor="char">Charecters Allow</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
