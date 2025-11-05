import { useState, useEffect } from 'react'
// import './Index.css'
import { setLocalStorage, getLocalStorage } from '../../utils/localStorage'


function CreateTask({setcreateWindow, setupdated}) {

    const [taskTittle, settaskTittle] = useState(null)
    const [taskDetails, settaskDetails] = useState(null)

    function saveToLocal(){
        let data = getLocalStorage();
        if(data===null){
            localStorage.setItem("tasklist",JSON.stringify([]))
            data = getLocalStorage();
            data?.push({taskTittle,taskDetails,IsCompleted:false})
            setLocalStorage(data)
        }else{
            data.push({taskTittle,taskDetails})
            setLocalStorage(data)
        }
        setupdated(data)
        setcreateWindow(false)
    }


  return (
    <>
            <div className='absolute h-screen w-full bg-black top-0 left-0 opacity-50'></div>
            <div className='w-[70%] h-108 bg-zinc-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-20 px-10'>
                <button onClick={()=>setcreateWindow(false)} className='py-2 px-4 bg-amber-300 text-black font-semibold absolute right-5 top-5 rounded-md cursor-pointer'>Close</button>
                <label htmlFor="taskTittle" className='font-semibold mb-2 block'>Task Title</label>
                <input required onChange={(e)=>{settaskTittle(e.target.value)}} type="text" placeholder='Enter your task title' className='p-2 w-full bg-zinc-600 mb-4'/>
                <label htmlFor="taskDetails" className='font-semibold mb-2 block'>Task Description</label>
                <textarea required onChange={(e)=>{settaskDetails(e.target.value)}} type="text" placeholder='Enter your task title' className='p-2 w-full bg-zinc-600 mb-4 h-30 resize-none'></textarea>
                <input type="submit" onClick={()=>saveToLocal()} value="Submit" className='py-2 px-4 bg-blue-300 text-black font-semibold rounded-md block mx-auto cursor-pointer'/>
            </div>

    </>
  )
}

export default CreateTask    