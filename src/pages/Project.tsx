import { Container, Row, Col } from "react-bootstrap";
import ProjectData from "../types/ProjectData";
import ProjectHeader from "../components/ProjectDetails/ProjectHeader";
import ProjectVideo from "../components/ProjectDetails/ProjectVideo";
import ProjectSummary from "../components/ProjectDetails/ProjectSummary";
import ProjectImage from "../components/ProjectDetails/ProjectImage";
import ProjectTech from "../components/ProjectDetails/ProjectTech";
import projectPageText from "../content/projectText.json";
import Language from "../types/Language";

const Project: React.FC<{ project: ProjectData; lang: Language }> = ({ project, lang }) => {
	const {
		overviewText,
		descriptionText,
		roleText,
		picturesText,
		technologiesText,
		languagesText,
		frameworksText,
		databasesText,
		toolsText,
	} = projectPageText[lang];

	return (
		<Container fluid>
			<Row className="my-5">
				<ProjectHeader name={project.name} link={project.link} git={project.git} />
			</Row>
			<Row>
				<Col md={{ span: 10, offset: 1 }} className="px-3">
					<Row>
						<Col lg={8}>
							<ProjectVideo project={project} />
						</Col>
						<Col lg={4}>
							<ProjectSummary project={project} overviewText={overviewText} />
						</Col>
					</Row>
				</Col>
			</Row>
			<Row>
				<Col md={{ span: 10, offset: 1 }} className="px-3 pt-4">
					<Row>
						<Col md={6}>
							<section id="project-role" className="my-3">
								<h2 className="mb-4">
									<span>{roleText}</span>
								</h2>
								<p>{project.role}</p>
							</section>
						</Col>
						<Col md={6}>
							<section id="project-technologies">
								<ProjectTech
									texts={{
										technologiesText,
										languagesText,
										frameworksText,
										databasesText,
										toolsText,
									}}
									technologies={project.technologies}
								/>
							</section>
						</Col>
					</Row>
					<Row>
						<section id="project-description" className="my-3">
							<h2 className="mb-3">
								<span>{descriptionText}</span>
							</h2>
							{project.description.map((paragraph, key) => {
								return (
									<p key={key} className="py-1">
										{paragraph}
									</p>
								);
							})}
						</section>
					</Row>
					<Row>
						<section id="project-images" className="my-3 mt-md-4">
							<h2 className="mb-5">
								<span>{picturesText}</span>
							</h2>
							<Row md={2} xs={1} lg={3} className="g-3">
								{/** Suggestion: Could instead have a jsx file for each project if I want to add more interesting descriptions */}
								{project.imgs.map((url, key) => {
									return <ProjectImage key={key} url={url} />;
								})}
							</Row>
						</section>
					</Row>
				</Col>
			</Row>
		</Container>
	);
};

export default Project;
