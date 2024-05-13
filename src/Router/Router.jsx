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
                loader: () => fetch('http://localhost:5000/users'),
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
                loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
            },
            {
                path: '/update/:id',
                element:<UpdateCycle></UpdateCycle>,
                loader: ({params}) => fetch(`http://localhost:5000/users/${params.id}`),
            },
            {
                path: '/recomendations/:id',
                element: <AllRecomandation></AllRecomandation>,
                loader: ({params}) => fetch(`http://localhost:5000/recommended/${params.id}`),
            },
            {
                path: '/myRecommendation',
                element: <PrivateRouter><MyRecommendations></MyRecommendations></PrivateRouter>,
                
            },
            {
                path: '/recommendationForMe',
                element: <RecommendationMe></RecommendationMe>
            }

        ]
    },
]);