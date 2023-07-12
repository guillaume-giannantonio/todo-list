import onProjectClickDisplay from './onProjectClickDisplay';
import Project from '../logic/Project'

export default function projectsDisplay(projectsList, displayMenuID) {
	const displayMenu = document.getElementById(displayMenuID)
	while (displayMenu.hasChildNodes()) {
		displayMenu.removeChild(displayMenu.firstChild)
	}
	const h2 = document.createElement('h2')
	h2.textContent = 'Projects'
	displayMenu.appendChild(h2)
	projectsList.forEach((project) => {
		const projectName = document.createElement('h3')
		projectName.classList.add('project-name')
		projectName.textContent = project.name
		projectName.addEventListener('click', (e) => {
			onProjectClickDisplay(e.target, project, displayMenu)
		})
		displayMenu.appendChild(projectName)
	})
	const addProject = document.createElement('button')
	addProject.textContent = 'Add a project'
	addProject.addEventListener('click', () => {
		let projectName = prompt('Enter a project name')
		if (projectName) {
			let project = Project(projectName)
			projectsList.push(project)
			projectsDisplay(projectsList, displayMenuID)
		}
	})

	displayMenu.appendChild(addProject)
}