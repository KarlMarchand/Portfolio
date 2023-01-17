import { Row, Col } from "react-bootstrap";

type Props = {
	technologies: {
		languages: string;
		frameworks: string;
		databases: string;
		tools: string;
	};
	texts: {
		technologiesText: string;
		languagesText: string;
		frameworksText: string;
		databasesText: string;
		toolsText: string;
	};
};

const ProjectTech: React.FC<Props> = ({ texts, technologies }) => {
	const { languages, frameworks, databases, tools } = technologies;
	const { technologiesText, languagesText, frameworksText, databasesText, toolsText } = texts;

	return (
		<section className="p-3 my-3 mt-md-4" style={{ border: "solid 2px var(--bs-primary)", borderRadius: "16px" }}>
			<h2>
				<span>{technologiesText}</span>
			</h2>
			<Row>
				<Col>
					<h3>{languagesText}</h3>
					<p>{languages}</p>
					<h3>{frameworksText}</h3>
					<p>{frameworks}</p>
				</Col>
				<Col>
					<h3>{databasesText}</h3>
					<p>{databases}</p>
					<h3>{toolsText}</h3>
					<p>{tools}</p>
				</Col>
			</Row>
		</section>
	);
};

export default ProjectTech;
