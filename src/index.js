import Todo from './logic/Todo'
import Project from './logic/Project'
import './style.css'
import initial from './display/initial'

const myTodo = Todo('myTodo', 'this is my first todo', Date(), 5)
const myProject = Project('myProject')

console.log(myTodo.title)
console.log(myTodo.priority)
console.log(myProject.todosList)

const body = document.querySelector('body')
const content = initial()
body.appendChild(content)