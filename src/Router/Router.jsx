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
import UpdateCycle from "../Components/UpdateCycle";
import AllRecomandation from "../Components/AllRecomandation";
import MyRecommendations from "../Pages/MyRecommendations";
import RecommendationMe from "../Pages/RecommendationMe";

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
                loader: () => fetch('https://server-side-vert-ten.vercel.app/users', {credentials: 'include'}),
            },
            {
                path: '/addCycle',
                element: <PrivateRouter><AddCycle></AddCycle></PrivateRouter>
            },
            {
                path: '/myCycle',
                element: <PrivateRouter><MyCycle></MyCycle> </PrivateRouter>,
            },
            {
                path:'/users/:id',
                element: <PrivateRouter> <CycleCardDetails></CycleCardDetails></PrivateRouter> ,
                loader: ({params}) => fetch(`https://server-side-vert-ten.vercel.app/users/${params.id}`, {credentials: 'include'}),
            },
            {
                path: '/update/:id',
                element:<UpdateCycle></UpdateCycle>,
                loader: ({params}) => fetch(`https://server-side-vert-ten.vercel.app/users/${params.id}`, {credentials: 'include'}),
            },
            {
                path: '/recomendations/:id',
                element: <PrivateRouter><AllRecomandation></AllRecomandation></PrivateRouter>,
                loader: ({params}) => fetch(`https://server-side-vert-ten.vercel.app/recommended/${params.id}`, {credentials: 'include'}),
            },
            {
                path: '/myRecommendation',
                element: <PrivateRouter><MyRecommendations></MyRecommendations></PrivateRouter>,
                
            },
            {
                path: '/recommendationForMe',
                element: <PrivateRouter><RecommendationMe></RecommendationMe></PrivateRouter>,
                loader: () =>  fetch('https://server-side-vert-ten.vercel.app/recommended', {credentials: 'include'}),
            }

        ]
    },
]);