import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"

export function Navbar() {
    return <NavbarBs sticky="top" className="mb-4 navbar-dark">
        <Container className="justify-content-center">
            <Nav>
                <Nav.Link className="mx-4" to="/" as={NavLink}>Home</Nav.Link>
                <Nav.Link className="mx-4" to="/projects" as={NavLink}>Projects</Nav.Link>
            </Nav>
        </Container>
    </NavbarBs>
}