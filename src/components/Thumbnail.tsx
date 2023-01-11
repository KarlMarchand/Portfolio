import { Badge, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProjectData from "../types/ProjectData";

const Thumbnail: React.FC<{ buttonText: string; project: ProjectData }> = ({ buttonText, project }) => {
	return (
		<Card className="bg-secondary border-primary border-3 h-100">
			<Card.Img
				className="p-1"
				variant="top"
				src={project.thumbnailUrl}
				height="200px"
				alt={project.name}
				style={{ objectFit: "cover" }}
			/>
			<Card.Body className="d-flex flex-column justify-content-between">
				<Card.Title className="d-flex justify-content-center fs-2 bg-dark p-2 rounded">
					{" "}
					{project.name}{" "}
				</Card.Title>
				<div className="my-4 flex-fill">{project.shortDescription}</div>
				<div className="d-flex flex-wrap mb-1">
					{project.tags.map((tag, key) => {
						if (key < 4) {
							return (
								<Badge key={key} pill bg="dark" className="mx-1 my-1 p-2" style={{ cursor: "default" }}>
									{tag.toUpperCase()}
								</Badge>
							);
						}
					})}
				</div>
				<Link to={project.localUrl} className="btn btn-primary text-light">
					<strong>{buttonText}</strong>
				</Link>
			</Card.Body>
		</Card>
	);
};

export default Thumbnail;
