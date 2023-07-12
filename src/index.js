import Todo from './logic/Todo'
import Project from './logic/Project'
import './style.css'
import initial from './display/initial'
import projectsDisplay from './display/projectsDisplay';

const projectList = []

const myTodo = Todo('myTodo', 'this is my first todo', '06-11-2023', 5)
const mySecondTodo = Todo('mySecondTodo', 'this is my second todo', '07-12-2023', 5)
const myProject = Project('myProject')
const mySecondProject = Project('mySecondProject')
myProject.addTodo(myTodo)
myProject.addTodo(mySecondTodo)
console.log(myProject)

const body = document.querySelector('body')
const content = initial()
body.appendChild(content)

projectList.push(myProject)
projectList.push(mySecondProject)
projectsDisplay(projectList, 'leftMenu')