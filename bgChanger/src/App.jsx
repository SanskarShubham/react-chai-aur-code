import { useState } from 'react'
import './App.css'

function App() {
    const [theme, setTheme] = useState('olive');
  return (
    <>
      {/* // i have to change the background theme by clicking multiple button design UI using tailwind */}

      <div className={`w-full h-screen duration-200  p-4 bg-${theme}-500`}>
      <div className="flex fex-wrap  justify-center items-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl " >
        <button
          className=" outline-none  py-2 px-4 rounded bg-blue-500 hover:bg-blue-700 text-white font-bold"
          onClick={() => setTheme('blue')}
          
        >
          Blue
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setTheme('red')}
        >
          Red
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setTheme('green')}
        >
          Green
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => setTheme('yellow')}
        >
          Yellow
        </button>
      </div>
      </div>
    </>
  )
}     

export default App
