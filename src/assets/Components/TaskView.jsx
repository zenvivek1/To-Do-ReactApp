    import { useState, useEffect } from 'react'
    // import './Index.css'
    import { setLocalStorage, getLocalStorage } from '../../utils/localStorage'


    function CreateTask({task,settaskView,setupdated}) {

    function markAsComplete(task){
        let data = getLocalStorage();
        const updatedData = data.map(e=>{
            if(e.taskTittle === task.taskTittle){
                return { ...e, isCompleted: true };
            }else{
                return e;
            }
        })
        setLocalStorage(updatedData)
        // console
        settaskView(false)
        setupdated(updatedData)
    }

    function unMarkPending(task){
        let data = getLocalStorage();
        const updatedData = data.map(e=>{
            if(e.taskTittle === task.taskTittle){
                return { ...e, isCompleted: false };
            }else{
                return e;
            }
        })
        setLocalStorage(updatedData)
        // console
        settaskView(false)
        setupdated(updatedData)
    }




    return (
        <>
                <div className='absolute h-screen w-full bg-black top-0 left-0 opacity-50'></div>
                <div className='w-[70%] min-h-84 bg-zinc-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-20 px-10'>
                <button onClick={()=>settaskView(false)} className='py-2 px-4 bg-amber-300 text-black font-semibold absolute right-5 top-5 rounded-md cursor-pointer'>Close</button>
                    <h2 className='text-3xl font-bold'>
                    {task.taskTittle}
                    </h2>
                    <h4 className='mt-6 text-zinc-100'>
                    {task.taskDetails}
                    </h4>
                    {task.isCompleted?(
                        <button type="submit" onClick={()=>unMarkPending(task)} className='py-2 px-4 bg-yellow-400 text-white font-semibold rounded-md block mx-auto cursor-pointer absolute bottom-10'>Mark As Pending</button>
                    ):(
                    <button type="submit" onClick={()=>markAsComplete(task)} className='py-2 px-4 bg-blue-400 text-white font-semibold rounded-md block mx-auto cursor-pointer absolute bottom-10'>Mark As Complete</button>
                    )}

                </div>

        </>
    )
    }

    export default CreateTask    