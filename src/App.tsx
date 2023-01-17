import { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Project from "./pages/Project";
import Navbar from "./components/Navbar";
import ProjectData, { ProjectParameters } from "./types/ProjectData";
import data from "./content/projectsData.json";
import Language, { getUserLanguage } from "./types/Language";

const App: React.FC = () => {
	const [projectsList, setProjectsList] = useState<ProjectData[]>([]);
	const [language, setLanguage] = useState<Language>(getUserLanguage());

	// Each project in the projectsData file will be converted in a projectData instance
	useMemo(() => {
		setProjectsList([]);
		data.forEach((p) => {
			const project: ProjectParameters = p[language] ?? p["EN"];
			const projectData: ProjectData = new ProjectData(project);
			setProjectsList((prevList) => [...prevList, projectData]);
		});
	}, [data, language]);

	return (
		<>
			<Navbar changeLang={setLanguage} actualLanguage={language} />
			<Routes>
				<Route path="/" element={<Home lang={language} />} />
				<Route path="/projects" element={<Portfolio projects={projectsList} lang={language} />} />
				{/** For each project, we create a dynamic url to link to its details page */}
				{projectsList.map((project, key) => (
					<Route key={key} path={project.localUrl} element={<Project project={project} lang={language} />} />
				))}
			</Routes>
		</>
	);
};

export default App;
