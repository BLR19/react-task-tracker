import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
    //destructure

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
