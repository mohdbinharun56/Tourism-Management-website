import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import TouristsSpot from "../pages/AllTouristsSpot/TouristsSpot";
import Login from "../pages/Authentication/Login/Login";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/tourists')
            },
            {
                path: '/tourist',
                element: <AddTouristsSpot></AddTouristsSpot>
            },
            {
                path: '/tourists',
                element: <TouristsSpot></TouristsSpot>,
                loader: ()=> fetch('http://localhost:5000/tourists')
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    }
])

export default router;