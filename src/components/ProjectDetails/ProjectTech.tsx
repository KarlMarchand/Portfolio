import { Row, Col } from "react-bootstrap";

type Props = {
	technologies: {
		languages: string;
		frameworks: string;
		databases: string;
		tools: string;
	};
};

const ProjectTech: React.FC<Props> = ({ technologies }) => {
	const { languages, frameworks, databases, tools } = technologies;

	return (
		<section className="p-3 my-3 mt-md-4" style={{ border: "solid 2px var(--bs-primary)", borderRadius: "16px" }}>
			<h2>
				<span>Technologies</span>
			</h2>
			<Row>
				<Col>
					<h3>Languages</h3>
					<p>{languages}</p>
					<h3>Frameworks</h3>
					<p>{frameworks}</p>
				</Col>
				<Col>
					<h3>Databases</h3>
					<p>{databases}</p>
					<h3>Tools</h3>
					<p>{tools}</p>
				</Col>
			</Row>
		</section>
	);
};

export default ProjectTech;
