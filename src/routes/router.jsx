import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home/Home";
import AddTouristsSpot from "../pages/AddTouristsSpot/AddTouristsSpot";
import TouristsSpot from "../pages/AllTouristsSpot/TouristsSpot";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ProtectedRoute from "../sharedComponents/ProtectedRoute/ProtectedRoute";
import ViewDetails from "../pages/ViewDetails/ViewDetails";

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
                element: <ProtectedRoute>
                    <AddTouristsSpot></AddTouristsSpot>
                </ProtectedRoute>
            },
            {
                path: '/tourists',
                element: <TouristsSpot></TouristsSpot>,
                loader: ()=> fetch('http://localhost:5000/tourists')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/tourist/:id',
                element:<ProtectedRoute>
                    <ViewDetails></ViewDetails>
                </ProtectedRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/tourists/${params.id}`)
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export default router;