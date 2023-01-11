import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
	return (
		<NavbarBs sticky="top" className="mb-4 navbar-dark bg-dark shadow">
			<Container className="justify-content-center">
				<Nav>
					<Nav.Link className="mx-4" to="/" as={NavLink}>
						Home
					</Nav.Link>
					<Nav.Link className="mx-4" to="/projects" as={NavLink}>
						Projects
					</Nav.Link>
				</Nav>
			</Container>
		</NavbarBs>
	);
};

export default Navbar;
