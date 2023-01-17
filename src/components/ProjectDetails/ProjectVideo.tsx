import { Image } from "react-bootstrap";
import ProjectData from "../../types/ProjectData";

const ProjectVideo: React.FC<{ project: ProjectData }> = ({ project }) => {
	return (
		<div className="mb-sm-3 mb-md-0">
			{project.video.length > 1 ? (
				<video controls style={{ maxWidth: "100%", maxHeight: "100%" }} poster={project.thumbnailUrl}>
					<source src={project.video} />
				</video>
			) : (
				<Image fluid src={project.thumbnailUrl} alt="Project Thumbnail" />
			)}
		</div>
	);
};

export default ProjectVideo;
