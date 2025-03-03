import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/tourist',
                element: <AddTouristsSpot></AddTouristsSpot>
            }
        ]
    }
])

export default router;