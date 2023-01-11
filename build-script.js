/**
 * This is a NodeJS Script made to run before compilation. It will build a compiled-data.json file in the projects folder.
 * The goal is to facilitate adding new projects later on and make sure that Vite and React have working and valid url to the
 * images and data in the project folder.
 * */

const fs = require("fs");
const path = require("path");

const combineProjects = async () => {
	// The root directory for the projects
	const PROJECTS_ROOT = "./src/projects";
	const filePath = PROJECTS_ROOT + "/combined-data.json";

	// Delete the existing combined file if it exists
	try {
		// check if the combined file already exists
		fs.accessSync(filePath);
		// delete the file
		fs.unlinkSync(filePath);
		console.log(`${filePath} deleted`);
	} catch (error) {
		console.log(`${filePath} does not exist`);
	}

	// The resulting data object that will contain all the project data
	const projects = await Promise.all(
		fs.readdirSync(PROJECTS_ROOT).map(async (projectDir) => {
			// Read the project data JSON file
			const projectDataFilePath = path.join(PROJECTS_ROOT, projectDir, `${projectDir}.json`);
			const projectData = JSON.parse(fs.readFileSync(projectDataFilePath));

			// Add the thumbnail image to the project data object
			projectData.thumbnailUrl = path.join(PROJECTS_ROOT, projectDir, "thumbnail.webp");

			// Read all the images in the project's directory
			projectData.imgs = fs
				.readdirSync(path.join(PROJECTS_ROOT, projectDir))
				.filter((file) => file.endsWith(".webp") || file.endsWith(".png") || file.endsWith(".jpg"))
				.map((image) => path.join(PROJECTS_ROOT, projectDir, image));

			// Look for a video in the project's directory
			try {
				fs.accessSync(filePath);
				// file exists
				projectData.video = path.join(PROJECTS_ROOT, projectDir, "video.webm");
			} catch (e) {
				// file does not exists, add an empty string
				projectData.video = "";
			}

			// Add the project data to the combined data object
			return projectData;
		})
	);

	// Write the combined data object to a JSON file in the projects root directory
	fs.writeFileSync(path.join(PROJECTS_ROOT, "combined-data.json"), JSON.stringify(projects));
};

(async () => {
	await combineProjects();
})();
