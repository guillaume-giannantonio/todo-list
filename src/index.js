import Todo from './logic/Todo'
import Project from './logic/Project'
import './style.css'
import initial from './display/initial'
import projectsDisplay from './display/projectsDisplay';

const projectList = []

const myTodo = Todo('myTodo', 'this is my first todo', Date(), 5)
const myProject = Project('myProject')
const mySecondProject = Project('mySecondProject')

const body = document.querySelector('body')
const content = initial()
body.appendChild(content)

projectList.push(myProject)
projectList.push(mySecondProject)
projectsDisplay(projectList, 'leftMenu')