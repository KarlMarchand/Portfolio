import { Col, Row } from "react-bootstrap";
import { Project } from "../components/Project";
import projects from "../data/projects.json";

export function Projects() {
    return <>
        <h1 className="mb-4">Projects</h1>
        <Row md={2} xs={1} lg={3} className="g-3">
            {projects.map(project => (
                <Col key={project.id}>
                    <Project {...project} />
                </Col>
            ))}
        </Row>
    </>
}