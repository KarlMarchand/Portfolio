import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar as NavbarBs, NavDropdown, Col } from "react-bootstrap";
import Language from "../types/Language";
import navBarTexts from "../content/navbarText.json";

type Props = {
	changeLang: (language: Language) => void;
	actualLanguage: Language;
};

const Navbar: React.FC<Props> = ({ changeLang, actualLanguage }) => {
	const { home, projects } = navBarTexts[actualLanguage];
	const [language, setLanguage] = useState<Language>(actualLanguage);

	const handleLanguageToggle = (newLanguage: Language) => {
		// Update Navbar's language selection
		setLanguage(newLanguage);
		// Propagate to the app
		changeLang(newLanguage);
		// Store it in Local Storage for the client
		localStorage.setItem("language", newLanguage);
	};

	return (
		<NavbarBs sticky="top" className="mb-4 navbar-dark bg-dark shadow">
			<Container fluid>
				<Col xs={{ span: 6, offset: 3 }}>
					<Nav className="me-auto justify-content-center">
						<Nav.Link className="mx-4" to="/" as={NavLink}>
							{home}
						</Nav.Link>
						<Nav.Link className="mx-4" to="/projects" as={NavLink}>
							{projects}
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
