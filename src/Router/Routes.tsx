import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";


export const routes = createBrowserRouter([
    {
    path: "/",
    element:<MainLayout></MainLayout>
    }

])