export default function (project, projectsList) {
	let projectObject;
	for (let i = 0; i < projectsList.length; i++) {
		if (projectsList[i].name === project) {
			projectObject = projectsList[i]
		}
	}
	for (const todo of projectObject.todosList) {
		console.log(todo)
	}
}