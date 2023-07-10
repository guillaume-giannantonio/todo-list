import Todo from './logic/Todo'
import Project from './logic/Project'
import './style.css'
import initial from './display/initial'

const projectList = []

const myTodo = Todo('myTodo', 'this is my first todo', Date(), 5)
const myProject = Project('myProject')

const body = document.querySelector('body')
const content = initial()
body.appendChild(content)

