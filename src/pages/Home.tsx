import { Container, Row, Col, Image, Card, ListGroup } from "react-bootstrap";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";
import imgUrl from "../imgs/b&w.webp";

const Home: React.FC = () => {
	return (
		<Container className="presentation-card">
			<Row>
				<Col xs={12} md={8}>
					<Card bg="transparent" border="none">
						<Card.Body>
							<Card.Title className="card-title d-flex justify-content-between">
								Welcome to my portfolio!
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
							<Card.Text>
								I am Karl Marchand, a computer science graduate with a strong passion for programming in
								backend and software development. I have worked on a variety of projects using
								technologies such as the MERN stack (MongoDB, Express, React, Node.JS), Python, and C#.
							</Card.Text>
							<ListGroup variant="flush">
								<ListGroup.Item className="bg-dark text-light">
									<strong>Backend Development:</strong>
									<br /> I have experience building classic and AJAX servers (PHP) as well as REST API
									servers (Node.JS, Python). I&apos;ve used many different Databases Management
									Systems including NoSQL and SQL (MongoDB, MySQL, SQLite, PostGreSQL, NEO4J, Berkeley
									DB).
								</ListGroup.Item>
								<ListGroup.Item className="bg-dark text-light">
									<strong>Other Skills and Interests:</strong>
									<br /> I am interested in design patterns, DevOps methodologies, and good practices
									in general, and value continuous learning. If there&apos;s a more optimal way to do
									something, I want to know.
								</ListGroup.Item>
								<ListGroup.Item className="bg-dark text-light">
									<strong>Recent Projects:</strong>
									<br /> I recently worked with a team to build a social media style application for
									families using the MERN stack, with a focus on the backend. To see more project and
									details, you can check my{" "}
									<Link to="/projects" className="link-primary link-primary-lighter">
										projects
									</Link>{" "}
									page.
								</ListGroup.Item>
								<ListGroup.Item className="bg-dark text-light">
									<strong>About Me</strong>
									<br /> After completing a Bachelor&apos;s degree in Business Administration, I
									worked for five years as an IT recruiter. During that time, I discovered my passion
									for the IT industry and always wanted to learn more. When COVID arrived, I took it
									as a sign and went back to school. Now, after 1.5 years of intensive study, I have a
									new diploma, renewed passion, a head full of projects, and a thirst for learning new
									technologies.
								</ListGroup.Item>
							</ListGroup>
							<Card.Text>
								I am excited to share my skills and experience with you, and hope that you enjoy
								exploring my portfolio. Thank you for visiting!
							</Card.Text>
							<Card.Text>Karl Marchand</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={12} md={4}>
					<div className="d-flex align-items-center justify-content-center h-100">
						<Image src={imgUrl} alt="Picture of Karl Marchand" roundedCircle className="shadow-lg w-100" />
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
