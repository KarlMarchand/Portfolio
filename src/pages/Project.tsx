import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import ProjectData from "../types/ProjectData";
import ProjectHeader from "../components/ProjectDetails/ProjectHeader";
import { BsFillTagFill } from "react-icons/bs";
import ProjectImage from "../components/ProjectDetails/ProjectImage";
import ProjectTech from "../components/ProjectDetails/ProjectTech";

const Project: React.FC<{ project: ProjectData }> = ({ project }) => {
	return (
		<Container fluid>
			<Row className="my-5">
				<ProjectHeader name={project.name} link={project.link} git={project.git} />
			</Row>
			<Row>
				<Col md={{ span: 10, offset: 1 }} className="px-3">
					<Row>
						<Col lg={8}>
							<div className="mb-sm-3 mb-md-0">
								{project.video.length > 0 && (
									<video
										controls
										style={{ maxWidth: "100%", maxHeight: "100%" }}
										poster={project.thumbnailUrl}
									>
										<source src={project.video} />
									</video>
								)}
								{project.video.length === 0 && (
									<Image fluid src={project.thumbnailUrl} alt="Project Thumbnail" />
								)}
							</div>
						</Col>
						<Col lg={4}>
							<section className="pt-3 pt-md-0">
								<h2 className="mb-3">
									<span>Overview</span>
								</h2>
								<p>{project.overview}</p>
								<ListGroup variant="flush" className="bg-dark mt-2">
									{project.tags.map((tag, key) => {
										return (
											<ListGroup.Item
												key={key}
												className="bg-dark text-light mb-2"
												style={{ borderColor: "var(--bs-light)" }}
											>
												<BsFillTagFill fill="var(--bs-primary)" />
												<span className="ms-2">{tag}</span>
											</ListGroup.Item>
										);
									})}
								</ListGroup>
							</section>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 10, offset: 1 }} className="px-3 pt-4">
					<section className="my-3">
						<h2 className="mb-3">
							<span>Description</span>
						</h2>
						<p>{project.description}</p>
					</section>
					<Row>
						<Col md={6}>
							<section className="my-3">
								<h2 className="mb-4">
									<span>Role</span>
								</h2>
								<p>{project.role}</p>
							</section>
						</Col>
						<Col md={6}>
							<ProjectTech technologies={project.technologies} />
						</Col>
					</Row>
					<section className="my-3 mt-md-4">
						<h2 className="mb-5">
							<span>Pictures</span>
						</h2>
						<Row md={2} xs={1} lg={3} className="g-3">
							{project.imgs.map((url, key) => {
								return <ProjectImage key={key} url={url} />;
							})}
						</Row>
					</section>
				</Col>
			</Row>
		</Container>
	);
};

export default Project;
