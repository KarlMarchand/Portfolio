import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import Thumbnail from "../components/Thumbnail";
import FilterDropdown from "../components/FilterDropdown";
import ProjectData from "../types/ProjectData";
import portfolioText from "../content/portfolioText.json";

/**
 * Portfolio will, for each project in the list, generate a small card that includes:
 * - An image with the thumbnail of the project
 * - The title of the project
 * - A short description
 * - The 4 first tags of the tag list
 * - A button that leads to the dynamically generated url for the project's details page
 */
const Portfolio: React.FC<{ projects: ProjectData[] }> = ({ projects }) => {
	const [selectedTags, setSelectedTags] = useState<string[]>([]);
	const [filteredProjects, setFilteredProjects] = useState<ProjectData[]>(projects);

	const { title, filterButton, filterHolder, detailsButtons } = portfolioText["EN"];

	// List all existing tags in all the projects to create the filters
	const allTags = Array.from(new Set(projects.flatMap((project) => project.tags.map((tag) => tag.toLowerCase()))));

	// Update the project's list when a new filter is selected.
	useEffect(() => {
		setFilteredProjects(
			selectedTags.length === 0
				? [...projects]
				: projects.filter((project) => selectedTags.every((tag) => project.tags.includes(tag)))
		);
	}, [selectedTags]);

	return (
		<>
			<Container className="d-flex justify-content-between align-items-center">
				<h1 className="mb-4">{title}</h1>

				<FilterDropdown
					texts={{ title: filterButton, holder: filterHolder }}
					filters={allTags}
					selectedFilters={selectedTags}
					onFilterSelectionChanged={setSelectedTags}
				/>
			</Container>

			<Container className="scrollable-container">
				<Row md={2} xs={1} lg={3} className="g-3">
					{filteredProjects.map((project, key) => (
						<Col key={key} className="mb-3">
							<Thumbnail buttonText={detailsButtons} project={project} />
						</Col>
					))}
				</Row>
			</Container>
		</>
	);
};

export default Portfolio;
