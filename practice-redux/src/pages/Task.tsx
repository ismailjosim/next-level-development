import { AddTaskModal } from "../components/module/tasks/AddTaskModal";
import TaskCard from "../components/module/tasks/TaskCard";
import { useGetTasksQuery } from "../redux/api/baseApi";
import { selectTasks, updateFilter } from "../redux/features/task/taskSlice";
import { useAppDispatch, useAppSelector } from "../redux/store/hook";
import {
    Tabs,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
const Task = () => {
    const tasks = useAppSelector(selectTasks)
    const dispatch = useAppDispatch()
    const { data } = useGetTasksQuery(undefined)
    console.log(data);

    return (
        <div className="mx-auto w-11/12 px-5 mt-20">
            <div className="flex justify-end gap-5 items-center">
                <h1 className="mr-auto">Tasks</h1>
                <Tabs defaultValue={'All'} >
                    <TabsList>
                        <TabsTrigger onClick={() => dispatch(updateFilter('All'))} value="All">All</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('Low'))} value="Low">Low</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('Medium'))} value="Medium">Medium</TabsTrigger>
                        <TabsTrigger onClick={() => dispatch(updateFilter('High'))} value="High">High</TabsTrigger>
                    </TabsList>
                </Tabs>
                <AddTaskModal />

            </div>
            <div className="space-y-5 mt-5">
                {tasks.map(task => <TaskCard key={task.id} task={task} ></TaskCard>)}
            </div>
        </div>
    );
};

export default Task;
