/**
 * This is a NodeJS Script made to run before compilation. It will build a compiled-data.json file in the projects folder.
 * The goal is to facilitate adding new projects later on and make sure that Vite and React have working and valid url to the
 * images and data in the project folder.
 * */

const colors = require("colors");

const fs = require("fs");
const path = require("path");

const combineProjects = async (buildMode) => {
	// The root directory for the projects
	const PROJECTS_ROOT = "./public/projects";
	const PROJECTS_DIST = buildMode ? "./projects" : PROJECTS_ROOT;
	const filePath = "./src/content" + "/projectsData.json";

	// Delete the existing combined file if it exists
	try {
		// check if the combined file already exists
		fs.accessSync(filePath);
		// delete the file
		fs.unlinkSync(filePath);
		console.log(`${filePath} deleted\n`);
	} catch (error) {
		console.log(`${filePath} does not exist\n`);
	}

	// The resulting data object that will contain all the project data
	const projects = await Promise.all(
		fs.readdirSync(PROJECTS_ROOT).map(async (projectDir) => {
			// Read the project data JSON file
			const projectDataFilePath = path.join(PROJECTS_ROOT, projectDir, `${projectDir}.json`);

			// ! Will crash the script if the folder doesn't contains the json file
			const projectData = JSON.parse(fs.readFileSync(projectDataFilePath));

			// Create a common Object that will hold all the medias's urls for any languages
			const medias = new Object();

			// Add the thumbnail image to the project data object
			// ! check if the thumbnail exists and crash if it doesn't
			try {
				fs.accessSync(
					path.join(PROJECTS_ROOT, projectDir, "thumbnail.webp"),
					fs.constants.F_OK | fs.constants.R_OK
				);
			} catch {
				throw new Error("Thumbnail doesn't exists".red);
			}

			medias.thumbnailUrl = path.join(PROJECTS_DIST, projectDir, "thumbnail.webp");

			// Read all the images in the project's directory
			medias.imgs = fs
				.readdirSync(path.join(PROJECTS_ROOT, projectDir))
				.filter(
					(file) =>
						(file.endsWith(".webp") || file.endsWith(".png") || file.endsWith(".jpg")) &&
						!file.includes("thumbnail")
				)
				.map((image) => path.join(PROJECTS_DIST, projectDir, image));

			// Look for a video in the project's directory
			const videos = fs
				.readdirSync(path.join(PROJECTS_ROOT, projectDir))
				.filter((file) => file.endsWith(".webm") || file.endsWith(".mp4"))
				.map((video) => path.join(PROJECTS_DIST, projectDir, video));

			medias.video = videos.shift() ?? "";

			// For each language in the project's json, we add the medias
			Object.keys(projectData).forEach((k) => {
				projectData[k] = { ...projectData[k], ...medias };
			});

			// Add the project data to the combined data object
			return projectData;
		})
	);

	// Write the combined data object to a JSON file in the projects root directory
	fs.writeFileSync(filePath, JSON.stringify(projects));
};

(async () => {
	const args = process.argv.slice(2);
	let buildMode = false;
	if (args.length > 0) {
		buildMode = true;
	}
	await combineProjects(buildMode);
})();
