import { CheckButton } from "@/app/shared/CheckButton";
import { useTaskViewController } from "../controller/taskViewController";
import { useTaskStoreImplementation } from "../data/taskStoreImplementation"
import React from 'react';

const TaskView = () => {
    const store = useTaskStoreImplementation();
    const {
        tasks,
        isLoading,
        getTasks,
    } = useTaskViewController(store);

    React.useEffect(() => {
        getTasks();
    }, [getTasks])

    return (
        <div className="absolute shadow-2xl text-light-gray-blue w-[500px] -mt-[200px]">
            <header>
                <h1 className="text-[42px] font-[700] text-light-gray tracking-[1rem]">TODO</h1>
                <div className="rounded-sm bg-dark-desat-blue mb-6 p-4 flex gap-2 ">
                    <CheckButton />
                    <input type="text" placeholder="add a new task" />
                </div>
            </header>
            { isLoading ? (
                <div> loading </div> 
            ) : (
                <div className="rounded-sm bg-dark-desat-blue">
                    { 
                       tasks?.map(task => (
                           <div className="p-4 flex gap-2 border-darker-blue-gray border-b">
                                <CheckButton />
                               <span>{task.description}</span>
                           </div>
                       ))
                    }                        
                </div>
            )}
            <footer className="flex rounded-sm bg-dark-desat-blue items-center justify-between p-4 text-[14px]">
                <span>items left</span>
                <div className="flex gap-2">
                    <span>All</span>
                    <span>Active</span>
                    <span>Completed</span>
                </div>
                <span>Clear completed</span>
            </footer>
        </div>
    )
}

export default TaskView;