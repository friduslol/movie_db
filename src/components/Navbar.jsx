import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <NavLink to="/">Movie Genres</NavLink>
            <NavLink to="/topp">Topp Movies</NavLink>
        </div>
    )
};

export default Navbar;