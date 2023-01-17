import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { BsArrowLeftCircle, BsGithub, BsGlobe } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProjectHeader: React.FC<{ name: string; link: string; git: string }> = ({ name, link, git }) => {
	const [screenWidth, setScreenWidth] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => setScreenWidth(window.innerWidth);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const classLinksContainer = screenWidth > 768 ? "d-flex flex-column align-items-end" : "d-flex flex-column";

	return (
		<>
			<Col xs={3} md={4} className="d-flex align-items-center">
				<Link to="/projects" className="link-primary link-primary-lighter ms-5">
					<BsArrowLeftCircle size={screenWidth > 768 ? "3.5rem" : "2.5rem"} />
				</Link>
			</Col>
			<Col xs={6} md={4} className="d-flex align-items-center justify-content-center">
				<h1>{name}</h1>
			</Col>
			<Col xs={12} md={4} className={classLinksContainer}>
				<Row className="d-flex flex-wrap justify-content-center align-items-center mt-3">
					{link.length > 0 && (
						<Col xs={6} md={12} className="my-1 d-flex justify-content-start align-items-center">
							<BsGlobe size={screenWidth > 768 ? "2rem" : "1.5rem"} className="me-2" />
							<a href={link} className="link-primary link-primary-lighter">
								{link}
							</a>
						</Col>
					)}
					<Col xs={6} md={12} className="my-1 d-flex justify-content-start align-items-center">
						<BsGithub size={screenWidth > 768 ? "2rem" : "1.5rem"} className="me-2" />
						<a href={git} className="link-primary link-primary-lighter">
							Github Repo
						</a>
					</Col>
				</Row>
			</Col>
		</>
	);
};

export default ProjectHeader;
