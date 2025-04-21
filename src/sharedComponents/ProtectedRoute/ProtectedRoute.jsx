import { Navigate } from "react-router-dom";
import UseContext from "../ContextProvider/UseContext";

const ProtectedRoute = ({children}) => {
    const {user,isLoading} = UseContext();
    if(isLoading){
        return <div className="text-5xl font-bold text-center">Loading...</div>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
}
export default ProtectedRoute;