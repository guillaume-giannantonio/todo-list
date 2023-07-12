import Todo from './logic/Todo'
import Project from './logic/Project'
import './style.css'
import initial from './display/initial'
import projectsDisplay from './display/projectsDisplay';

const projectList = []

const defaultProject = Project('Default')

const body = document.querySelector('body')
const content = initial()
body.appendChild(content)

projectList.push(defaultProject)
projectsDisplay(projectList, 'leftMenu')