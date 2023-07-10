import onProjectClickDisplay from './onProjectClickDisplay';

export default function (projectsList, displayMenuID) {
	const displayMenu = document.getElementById(displayMenuID)
	projectsList.forEach((project) => {
		const projectName = document.createElement('h3')
		projectName.classList.add('project-name')
		projectName.textContent = project.name
		projectName.onclick = function () {
			onProjectClickDisplay.call(this, displayMenuID, projectsList)
		}
		displayMenu.appendChild(projectName)
	})
}