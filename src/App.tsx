import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import ProjectData from "./types/ProjectData";
import data from "../public/projects/combined-data.json";

const App: React.FC = () => {
	const [projectsList, setProjectsList] = useState<ProjectData[]>([]);

	// Each project in the compiled-data file will be converted in a projectData instance
	useMemo(() => {
		setProjectsList([]);
		data.forEach((p) => {
			const projectData = new ProjectData(p);
			setProjectsList((prevList) => [...prevList, projectData]);
		});
	}, [data]);

	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Portfolio projects={projectsList} />} />
				{/** For each project, we create a dynamic url to link to its details page */}
				{projectsList.map((project, key) => (
					<Route key={key} path={project.localUrl} element={<Project project={project} />} />
				))}
			</Routes>
		</>
	);
};

export default App;
