import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Root from "../Root/Root";
import Login from "../Home/Login";
import Register from "../Home/Register";
import ErrorPage from "../Pages/ErrorPage";
import AllCycle from "../Pages/AllCycle";
import AddCycle from "../Pages/AddCycle";
import PrivateRouter from "./PrivateRouter";
import MyCycle from "../Pages/MyCycle";
import CycleCardDetails from "../Components/CycleCardDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: '/allCycle',
                element: <AllCycle></AllCycle>,
                loader: () => fetch('http://localhost:5000/users'),
            },
            {
                path: '/addCycle',
                element: <PrivateRouter><AddCycle></AddCycle></PrivateRouter>
            },
            {
                path: '/myCycle',
                element: <PrivateRouter><MyCycle></MyCycle> </PrivateRouter>,
                loader: () => fetch('http://localhost:5000/new'),
            },
            {
                path:'/cycle/:id',
                element: <PrivateRouter> <CycleCardDetails></CycleCardDetails></PrivateRouter> ,
                loader: ({params}) => fetch(`https://y-ochre-six.vercel.app/users/${params.id}`),
            },
        ]
    },
]);