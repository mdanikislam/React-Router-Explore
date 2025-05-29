import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="my-10 flex flex-wrap gap-10 justify-center text-2xl font-bold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink  to="/contact">Contact</NavLink>
            <NavLink to="/meals">Meals</NavLink>
            
        </div>
    );
};

export default Header;