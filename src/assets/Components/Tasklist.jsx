import { useState, useEffect } from "react";
import { getLocalStorage } from "../../utils/localStorage";
import TaskView from "./TaskView";

function Tasklist({ updated, setupdated }) {
  const [taskData, settaskData] = useState(null);
  const [taskView, settaskView] = useState(false);
  const [selected, setSelected] = useState();
  // const [crossed, setcrossed] = useState(false)

  useEffect(() => {
    settaskData(getLocalStorage());
  }, [updated]);


  //   const setId = (e) => {
  //     settaskView(true);
  //   }
function set(e){
    console.log(e)
}
  // console.log(taskData)

  return (
    <>
      <div className="w-full min-h-80 bg-zinc-700 p-5 lg:p-10">
        {taskData === null && (
          <p className="opacity-50">
            There's no task left... Click Create Task To Add A Task
          </p>
        )}
        {taskData?.map((e) => {
          return (
            <>
              <div
                className={`w-full bg-zinc-600 px-10 mb-3 py-4 ${
                  e.isCompleted && "line-through decoration-2"
                } font-semibold relative overflow-clip `}
              >
                {e.taskTittle}
                <button
                  onClick={() => {
                    setSelected(e), settaskView(true)
                  }}
                  className="sm:py-2 scale-90 lg:scale-100 px-6 bg-amber-300 text-black font-semibold sm:absolute mt-2 py-1 sm:mt-0 block right-5 top-2 rounded-md cursor-pointer"
                >
                  View
                </button>
              </div>
            </>
          );
          
        })}
        {taskView && (
            <TaskView
              setupdated={setupdated}
              task={selected}
              settaskView={settaskView}
            />
          )}
      </div>
    </>
  );
}

export default Tasklist;
