import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/navbar";


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;