import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as NavbarBs, NavDropdown, Col } from "react-bootstrap";
import navBarTexts from "../content/navbarText.json";

const Navbar: React.FC = () => {
	const { home: homeText, projects: projectsText } = navBarTexts["EN"];
	const [language, setLanguage] = useState("EN");

	const handleLanguageToggle = (newLanguage: string) => {
		setLanguage(newLanguage);
	};

	return (
		<NavbarBs sticky="top" className="mb-4 navbar-dark bg-dark shadow">
			<Container fluid>
				<Col xs={{ span: 6, offset: 3 }}>
					<Nav className="me-auto justify-content-center">
						<Nav.Link className="mx-4" to="/" as={NavLink}>
							{homeText}
						</Nav.Link>
						<Nav.Link className="mx-4" to="/projects" as={NavLink}>
							{projectsText}
						</Nav.Link>
					</Nav>
				</Col>
				<Col xs={1}>
					<NavDropdown
						className="me-5 justify-content-end"
						id="language-toggle"
						title={language === "EN" ? "EN" : "FR"}
						menuVariant="dark"
						drop="start"
					>
						<NavDropdown.Item onClick={() => handleLanguageToggle("EN")}>EN</NavDropdown.Item>
						<NavDropdown.Item onClick={() => handleLanguageToggle("FR")}>FR</NavDropdown.Item>
					</NavDropdown>
				</Col>
			</Container>
		</NavbarBs>
	);
};

export default Navbar;
