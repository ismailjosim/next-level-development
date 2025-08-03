import TaskCard from "../components/module/tasks/TaskCard";
import { selectTasks } from "../redux/features/task/taskSlice";
import { useAppSelector } from "../redux/store/hook";

const Task = () => {
    const tasks = useAppSelector(selectTasks)

    return (
        <div className="mx-auto w-11/12 px-5 mt-20">
            <div>
                <h1>Tasks</h1>
            </div>
            <div className="space-y-5 mt-5">
                {tasks.map(task => <TaskCard key={task.id} task={task} ></TaskCard>)}
            </div>
        </div>
    );
};

export default Task;
