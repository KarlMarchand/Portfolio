import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import ProjectData from "../types/ProjectData";
import ProjectHeader from "../components/ProjectHeader";
import { BsFillTagFill } from "react-icons/bs";

const Project: React.FC<{ project: ProjectData }> = ({ project }) => {
	return (
		<Container fluid>
			<Row className="my-5">
				<ProjectHeader name={project.name} link={project.link} git={project.git} />
			</Row>
			<Row>
				{/** Should contains the video and overview column */}
				<Col md={{ span: 10, offset: 1 }} className="px-3">
					<Row>
						<Col lg={8}>
							<div>
								{project.video.length > 0 && (
									<video
										src={project.video}
										controls
										style={{ maxWidth: "100%", maxHeight: "100%" }}
									/>
								)}
								{project.video.length === 0 && (
									<Image fluid src={project.thumbnailUrl} alt="Project Thumbnail" />
								)}
							</div>
						</Col>
						<Col lg={4}>
							<h3>Overview</h3>
							<p className="mt-3">{project.overview}</p>
							<ListGroup variant="flush" className="bg-dark my-5">
								{project.tags.map((tag) => {
									return (
										<ListGroup.Item
											className="bg-dark text-light mb-2"
											style={{ borderColor: "var(--bs-light)" }}
										>
											<BsFillTagFill fill="var(--bs-primary)" />
											<span className="ms-2">{tag}</span>
										</ListGroup.Item>
									);
								})}
							</ListGroup>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 10, offset: 1 }} className="px-3 pt-4">
					{/* render other project details here */}
					<section className="mb-5 mt-2">
						<h2>Description</h2>
						<p>{project.description}</p>
					</section>
					<section className="mb-5">
						<h2>Role</h2>
						<p>{project.role}</p>
					</section>
					<section>
						<h2>Technologies</h2>
						<ListGroup variant="flush">
							{Object.entries(project.technologies).map(([key, value]) => {
								return (
									<ListGroup.Item className="ms-3 mb-2 bg-dark text-light">
										<h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
										<p>{value}</p>
									</ListGroup.Item>
								);
							})}
						</ListGroup>
					</section>
				</Col>
			</Row>
		</Container>
	);
};

export default Project;
