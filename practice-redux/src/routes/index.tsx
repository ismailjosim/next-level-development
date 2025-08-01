import { createBrowserRouter } from "react-router";
import User from "../pages/User";
import Task from "../pages/Task";
import MainLayout from "../components/layout/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: 'user',
                Component: User
            },
            {
                path: 'task',
                Component: Task
            }
        ]
    }

])

export default router;
