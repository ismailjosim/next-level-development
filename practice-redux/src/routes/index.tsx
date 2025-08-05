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
                index: true,
                Component: Task
            },
            {
                path: 'user',
                Component: User
            },

        ]
    }

])

export default router;
