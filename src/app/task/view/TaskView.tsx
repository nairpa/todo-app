import { CheckButton } from "@/app/shared/CheckButton";
import { useTaskViewController } from "../controller/taskViewController";
import { useTaskStoreImplementation } from "../data/taskStoreImplementation"
import React from 'react';
import { TextInput } from "@/app/shared/TextInput";
import { Task } from "../domain/taskEntity";

const TaskView = () => {
    const store = useTaskStoreImplementation();
    const {
        tasks,
        isLoading,
        getTasks,
        createTask,
        updateTask,
    } = useTaskViewController(store);

    React.useEffect(() => {
        getTasks();
    }, [getTasks])

    const handleTextInput = (event: any) => {
        if(event.code === 'Enter') {
            createTask(event.target.value)
        }
    }

    const handleCheckButton = (event: any, task: Task) => {
        updateTask(task)
    }

    return (
        <div className="absolute shadow-2xl text-light-gray-blue w-[500px] -mt-[200px]">
            <header>
                <h1 className="text-[42px] font-[700] text-light-gray tracking-[1rem]">TODO</h1>
                <div className="rounded-sm bg-dark-desat-blue mb-6 p-4 flex gap-2 ">
                    <CheckButton />
                    <TextInput placeholder="add a new task" onKeyDown={handleTextInput}></TextInput>
                </div>
            </header>
            { isLoading ? (
                <div> loading </div> 
            ) : (
                <div className="rounded-sm bg-dark-desat-blue">
                    { 
                       tasks?.map((task, i) => (
                           <div key={i} className="p-4 flex gap-2 border-darker-blue-gray border-b">
                                <CheckButton checked={task.isCompleted} onChange={(event) => handleCheckButton(event, task)}/>
                               <span className={`${task.isCompleted ? 'line-through text-darker-blue-gray' : ''}`}>{task.description}</span>
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