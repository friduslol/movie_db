import { NavLink } from "react-router-dom";
import * as ReactBootstrap from "react-bootstrap";

const NavbarComp = () => {
    return(
        <ReactBootstrap.Navbar bg="light" expand="lg">
            <ReactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">
                        <ReactBootstrap.Nav.Link as={NavLink} to="/">Movie Genres</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link as={NavLink} to="/topRated">Topp Movies</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link as={NavLink} to="/popular">Popular Movies</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link as={NavLink} to="/upcoming">Upcoming Movies</ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
            </ReactBootstrap.Navbar.Collapse>
        </ReactBootstrap.Navbar>
    )
};

export default NavbarComp;