import { ListGroup } from "react-bootstrap";
import { BsFillTagFill } from "react-icons/bs";
import ProjectData from "../../types/ProjectData";

const ProjectSummary: React.FC<{ project: ProjectData; overviewText: string }> = ({ project, overviewText }) => {
	return (
		<section className="pt-3 pt-md-0">
			<h2 className="mb-3">
				<span>{overviewText}</span>
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
	);
};

export default ProjectSummary;
