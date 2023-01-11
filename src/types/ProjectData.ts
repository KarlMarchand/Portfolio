type ProjectParameters = {
	name: string;
	git: string;
	link: string;
	shortDescription: string;
	tags: string[];
	overview: string;
	role: string;
	technologies: {
		languages: string;
		frameworks: string;
		databases: string;
		tools: string;
	};
	description: string;
	thumbnailUrl: string;
	imgs: string[];
	videos: string[];
};

class ProjectData {
	name: string;
	git: string;
	link: string;
	shortDescription: string;
	tags: string[];
	overview: string;
	role: string;
	technologies: {
		languages: string;
		frameworks: string;
		databases: string;
		tools: string;
	};
	description: string;
	thumbnailUrl: string;
	imgs: string[];
	videos: string[];
	localUrl: string;

	constructor(projectInformations: ProjectParameters) {
		this.name = projectInformations.name;
		this.git = projectInformations.git;
		this.overview = projectInformations.overview;
		this.role = projectInformations.role;
		this.technologies = projectInformations.technologies;
		this.description = projectInformations.description;
		this.link = projectInformations.link;
		this.shortDescription = projectInformations.shortDescription;
		this.tags = projectInformations.tags.map((tag) => tag.toLowerCase());
		this.thumbnailUrl = projectInformations.thumbnailUrl;
		this.imgs = projectInformations.imgs;
		this.videos = projectInformations.videos;
		this.localUrl = `/projects/${this.convertNameToUrl(this.name)}`;
	}

	// Will convert the name of the project to a url compatible name
	convertNameToUrl(name: string) {
		let url = name.toLowerCase();
		// Replace all space with an Hyphen
		url = url.replace(/ /g, "-");
		// Will remove all accents and converts them to their no-accent equivalent
		url = url.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		// Remove all remaining non-alphanumeric characters
		url = url.replace(/[^a-z0-9-]/g, "");
		return url;
	}
}

export default ProjectData;
