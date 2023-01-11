import { Container, Row, Col } from "react-bootstrap";
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
				<Col>
					<Row className="mx-5">
						<Col sm={8} className="bg-warning">
							<video></video>
						</Col>
						<Col sm={4} className="bg-info">
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
