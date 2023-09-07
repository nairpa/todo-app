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
        <div className="task">
            { isLoading ? (
                <div> loading </div> 
            ) : (
                <>
                    <div>{ tasks?.map(task => <div>{task.description}</div>) }</div>
                </>
            )}
        </div>
    )
}

export default TaskView;