import { useContext } from "react";
import { ContextCreate } from "../CreateContext/CreateContext";

const UseContext = () => {
    const api = useContext(ContextCreate);
    return api;
};

export default UseContext;