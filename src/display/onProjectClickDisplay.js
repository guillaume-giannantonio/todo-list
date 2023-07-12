import todosFromProjectDisplay from './todosFromProjectDisplay';
import Todo from '../logic/Todo';

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

	const header = document.querySelector('header')
	const addTodo = document.createElement('button')
	if (document.getElementById('addTodoButton') !== null) {
		header.removeChild(document.getElementById('addTodoButton'))
	}
	addTodo.textContent = 'Add a todo'
	addTodo.id = 'addTodoButton'

	addTodo.addEventListener('click', () => {
		let title = prompt('Enter a title')
		let description = prompt('Enter a description')
		let dueDate = prompt('Enter a due date')
		let priority = prompt('Enter a priority')
		let todo = Todo(title, description, dueDate, priority)
		projectObject.addTodo(todo)
		let alreadyStore = JSON.parse(localStorage.getItem(projectObject.name))
		let newStore = JSON.stringify({
			title,
			description,
			dueDate,
			priority,
			completed: false
		})
		if (alreadyStore === null) {
			localStorage.setItem(projectObject.name, newStore)
		} else {
			localStorage.setItem(projectObject.name, JSON.stringify(Object.assign(alreadyStore, {
				title,
				description,
				dueDate,
				priority,
				completed: false
			})))
		}
		/*localStorage[projectObject.name]['title'] = title
		localStorage[projectObject.name]['description'] = description
		localStorage[projectObject.name]['priority'] = priority
		localStorage[projectObject.name]['priority'] = priority
		localStorage[projectObject.name]['completed'] = false*/
	})
	header.appendChild(addTodo)
	todosFromProjectDisplay(projectObject)
}