import Project from './logic/Project'
import './style.css'
import initial from './display/initial'
import projectsDisplay from './display/projectsDisplay';

const projectList = []

const defaultProject = Project('Default')
projectList.push(defaultProject)

const body = document.querySelector('body')
const content = initial()
body.appendChild(content)

projectsDisplay(projectList, 'leftMenu')