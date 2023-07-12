import Project from './logic/Project'
import './style.css'
import initial from './display/initial'
import projectsDisplay from './display/projectsDisplay';
import Todo from './logic/Todo';

const projectList = []
for (const entry of Object.entries(localStorage)) {
	let projectName = entry[0]
	let project = Project(projectName)
	let todoList = JSON.parse(entry[1])
	for (const todo in todoList) {
		let todoItem = Todo(todo, todoList[todo]['description'], todoList[todo]['dueDate'], todoList[todo]['priority'], todoList[todo]['completed'])
		project.addTodo(todoItem)
	}
	projectList.push(project)
}

const defaultProject = Project('Default')
projectList.push(defaultProject)

const body = document.querySelector('body')
const content = initial()
body.appendChild(content)

projectsDisplay(projectList, 'leftMenu')