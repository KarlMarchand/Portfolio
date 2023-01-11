import { Container, Row, Col, Image } from "react-bootstrap";
import ProjectData from "../types/ProjectData";
import ProjectHeader from "../components/ProjectHeader";

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
							<div className="ratio ratio-16x9">
								{project.video.length > 0 && <video src={project.video} controls />}
								{!(project.video.length > 0) && (
									<Image fluid src={project.thumbnailUrl} alt="Project Thumbnail" />
								)}
							</div>
						</Col>
						<Col lg={4}>
							<p>{project.overview}</p>
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>{/* render other project details here */}</Row>
		</Container>
	);
};

export default Project;
