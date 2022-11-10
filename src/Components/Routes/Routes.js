import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddService from "../Pages/AddService/AddService";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Home/Services/Services";
import MyReview from "../Pages/MyReview/MyReview";
import UpdateForm from "../Pages/Update Data/UpdateForm";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Login from "../Shared/Login/Login";
import SignUp from "../Shared/Register/SignUp";


export const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/services',
            element: <Services></Services>,
        },
        {
            path: '/services/:id',
            element: <Details></Details>,
            loader: ({params})=> fetch(`https://service-review-server-sand.vercel.app/services/${params.id}`)
        },
        {
            path: '/login', element: <Login></Login>
        },
        {
            path: '/review', element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
        },
        {
            path: '/update/:id', element: <UpdateForm></UpdateForm>, loader: ({params})=> fetch(`https://service-review-server-sand.vercel.app/reviews/${params.id}`)
        },
        {
            path: '/addservice', element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
        },
        {
            path: '/signup', element: <SignUp></SignUp>
        }
    ]}
])