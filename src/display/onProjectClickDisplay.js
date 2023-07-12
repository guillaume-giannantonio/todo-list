import todosFromProjectDisplay from './todosFromProjectDisplay';

export default function (project, projectObject, displayMenu) {
	const children = displayMenu.children
	const array = Array.from(children)
	array.forEach((projectName) => {
		projectName.classList.remove('project-name-clicked')
	})
	project.classList.add('project-name-clicked')
	const main = document.getElementById('main')
	while (main.hasChildNodes()) {
		main.removeChild(main.firstChild)
	}
	todosFromProjectDisplay(projectObject)
}