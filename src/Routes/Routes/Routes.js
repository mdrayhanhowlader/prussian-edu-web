import AllCourses from "../../Pages/AllCourses/AllCourses";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import Course from "../../Pages/Course/Course";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import SideBar from "../../Pages/SideBar/SideBar";
import Login from "../../shared/Login/Login/Login";
import Register from "../../shared/Login/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../layout/Main");

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://prussian-server.vercel.app/courses')
            },
            {
                path: '/courses',
                element: <AllCourses></AllCourses>,
                loader: () => fetch('https://prussian-server.vercel.app/courses')
            },
            {
                path: '/course',
                element: <Course></Course>
            },
            {
                path: '/blog',
                element: <Blog></Blog>,
                loader: () => fetch('https://prussian-server.vercel.app/blogs')
            },
            {
                path: '/sidebar',
                element: <SideBar></SideBar>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader: ({params}) => fetch(`https://prussian-server.vercel.app/courses${params.id}`)
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            }
        ]
    }
])