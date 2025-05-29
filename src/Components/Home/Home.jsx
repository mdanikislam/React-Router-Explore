import { Outlet } from "react-router-dom";
import Header from "../Header.jsx/Header";

const Home = () => {
    return (
        <div className="mt-10">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;