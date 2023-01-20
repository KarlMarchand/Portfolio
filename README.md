# Portfolio

This is my [personnal website](http://karlmarchand.ca) where I can showcase my portfolio of projects at the moment.

## Stack used
To build this I've used Typescript, React, Bootstrap, Vite and a bit of Node.

## How to add projects
When I want to add a new project, I don't have to remember how the app is made (You're welcome future me).
All I have to do is create a new folder in "/public/projects" with the project's name. Inside of it, there's two things that are required and a few optional options: 

**Required**:
1. A thumbnail.webp file.
2. A json file with the name of the project
  ``` 
  {
	"EN": {
		"name": "Windproof",
		"git": "", // Optional
		"link": "", // Optional
		"shortDescription": "",
		"tags": ["", "", "", ""],
		"overview": "",
		"role": "",
		"technologies": {
			"languages": "",
			"frameworks": "",
			"databases": "",
			"tools": ""
		},
		"description": ["",""...] // For each string, a new <p> will be made. 
	},
} 
```

**Optional**:
1. I can add any number of images in the folder and the file name is gonna be the image's legend
2. A video with the webm or mp4 format. (It will only keeps the first one it finds)

When the build or dev script are launched, the node script will combine all the projects data, regroup them, build their url and make sure Vite can import everything it needs to work.
