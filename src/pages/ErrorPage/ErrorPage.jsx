import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mx-auto mt-52">
            <h1 className="text-7xl font-bold">404</h1>
            <p className="text-xl font-thin">Page not found.</p>
            <Link to='/' className="btn btn-primary mt-5 text-white">Home</Link>            
        </div>
    );
};

export default ErrorPage;