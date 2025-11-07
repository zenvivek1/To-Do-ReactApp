import { useState, useEffect } from 'react'
// import './Index.css'
import Tasklist from './assets/Components/Tasklist'
import CreateTask from './assets/Components/CreateTask' 
import { clearLocalStorage } from './utils/localStorage'

function App() {

  const [createWindow, setcreateWindow] = useState(false)
  const [updated, setupdated] = useState([])

  function ClearAllTasks(){
    clearLocalStorage()
    setupdated([])
  }
  
  return (
    <>
    
    <div className='w-full min-h-screen bg-zinc-900 text-white p-10'>
      <nav className='w-full bg-zinc-700 h-20 flex items-center justify-center text-3xl font-bold'>TO-DO List</nav>
      <button onClick={()=>setcreateWindow(true)} className='px-5 py-3 bg-blue-300 m-8 ml-0 rounded-md font-bold text-black cursor-pointer'>Add Task</button>
      <button onClick={ClearAllTasks} className='px-5 py-3 bg-red-400 rounded-md font-bold text-black cursor-pointer'>Clear All Tasks</button>
      <Tasklist updated={updated} setupdated={setupdated}/>
      {createWindow && <CreateTask setcreateWindow={setcreateWindow} setupdated={setupdated}/>}
    </div>

    </>
  )
}

export default App
