import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Details from "../Pages/Details/Details";
import Home from "../Pages/Home/Home/Home";
import Services from "../Pages/Home/Services/Services";
import MyReview from "../Pages/MyReview/MyReview";
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
            path: '/signup', element: <SignUp></SignUp>
        }
    ]}
])