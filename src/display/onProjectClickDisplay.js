import todosFromProjectDisplay from './todosFromProjectDisplay';

export default function (displayMenuID, projectsList) {
	const displayMenu = document.getElementById(displayMenuID)
	for (let i = 1; i < displayMenu.childElementCount; i++) {
		displayMenu.children[i].classList.remove('project-name-clicked')
	}
	this.classList.add('project-name-clicked')
	todosFromProjectDisplay(this.textContent, projectsList)
}