import onProjectClickDisplay from './onProjectClickDisplay';

export default function (projectsList, displayMenuID) {
	const displayMenu = document.getElementById(displayMenuID)
	projectsList.forEach((project) => {
		const projectName = document.createElement('h3')
		projectName.classList.add('project-name')
		projectName.textContent = project.name
		projectName.addEventListener('click', (e) => {
			onProjectClickDisplay(e.target, project, displayMenu)
		})
		displayMenu.appendChild(projectName)
	})
}