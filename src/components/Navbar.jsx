import { NavLink } from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <NavLink to="/">Movie Genres</NavLink>
            <NavLink to="/topRated">Topp Movies</NavLink>
            <NavLink to="/popular">Popular Movies</NavLink>
        </div>
    )
};

export default Navbar;