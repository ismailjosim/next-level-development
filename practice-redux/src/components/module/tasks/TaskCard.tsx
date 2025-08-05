import { Trash2 } from "lucide-react";
import { Button } from "../../ui/button";
import { Checkbox } from "../../ui/checkbox";
import type { ITask } from "../../../types";
import { cn } from "../../../lib/utils";
import { useAppDispatch } from "../../../redux/store/hook";
import { deleteTask, toggleCompleteState } from "../../../redux/features/task/taskSlice";

interface IProps {
    task: ITask
}

const TaskCard = ({ task }: IProps) => {
    const { id, title, description, priority, dueDate } = task || {}
    const dispatch = useAppDispatch()
    return (
        <div className="border px-5 py-3 rounded-md">
            <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                    <div className={cn("size-3 rounded-full", {
                        "bg-green-500": priority === 'Low',
                        "bg-red-500": priority === 'High',
                        "bg-yellow-500": priority === 'Medium',
                    })}></div>
                    <h1>{title}</h1>
                </div>
                <div className="flex gap-3 items-center">
                    <Button onClick={() => dispatch(deleteTask(id))} variant={'link'} className="p-0 text-red-500">
                        <Trash2 />
                    </Button>
                    <Checkbox onClick={() => dispatch(toggleCompleteState(id))} />
                </div>
            </div>
            <p className="mt-5">{description}</p>
            <p className="mt-5 text-sm text-gray-500">
                Due: {new Date(dueDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                })}
            </p>
        </div>
    );
};

export default TaskCard;
