import { Container, Row, Col, Image, Card, ListGroup } from "react-bootstrap";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import imgUrl from "../imgs/b&w.webp";
import homePageText from "../content/homeText.json";
import Language from "../types/Language";

const Home: React.FC<{ lang: Language }> = ({ lang }) => {
	const { title, presentation, section1, section2, section3, section4, conclusion } = homePageText[lang];

	return (
		<Container className="presentation-card">
			<Row>
				<Col xs={12} md={8}>
					<Card bg="transparent" border="none">
						<Card.Body>
							<Card.Title className="card-title d-flex justify-content-between">
								{title}
								<div>
									<a
										href="https://github.com/KarlMarchand"
										className="me-3 link-primary link-primary-lighter"
									>
										<BsGithub />
									</a>
									<a
										href="https://www.linkedin.com/in/karl-marchand-689899132/"
										className="me-3 link-primary link-primary-lighter"
									>
										<BsLinkedin />
									</a>
								</div>
							</Card.Title>
							<Card.Text className="text-light">{presentation}</Card.Text>
							<ListGroup variant="flush">
								<ListGroup.Item className="bg-dark">
									<p className="text-light">
										<strong>{section1.title}</strong>
										<br /> {section1.content}
									</p>
								</ListGroup.Item>
								<ListGroup.Item className="bg-dark">
									<p className="text-light">
										<strong>{section2.title}</strong>
										<br /> {section2.content}
									</p>
								</ListGroup.Item>
								<ListGroup.Item className="bg-dark">
									<p className="text-light">
										<strong>{section3.title}</strong>
										<br /> {section3.content} {section3.beforeLink}
										<Link to="/projects" className="link-primary link-primary-lighter">
											{section3.linkText}
										</Link>
										{section3.afterLink}
									</p>
								</ListGroup.Item>
								<ListGroup.Item className="bg-dark">
									<p className="text-light">
										<strong>{section4.title}</strong>
										<br /> {section4.content}
									</p>
								</ListGroup.Item>
							</ListGroup>
							<Card.Text>{conclusion}</Card.Text>
							<Card.Text>Karl Marchand</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={4}>
					<div className="pt-5">
						<div className="d-flex align-items-center w-100 h-100">
							<Image
								src={imgUrl}
								alt="Picture of Karl Marchand"
								roundedCircle
								className="shadow-lg w-100"
							/>
						</div>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
