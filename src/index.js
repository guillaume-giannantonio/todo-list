import Todo from './logic/Todo'
import Project from './logic/Project'
import './style.css'

const myTodo = Todo('myTodo', 'this is my first todo', Date(), 5)
const myProject = Project('myProject')
console.log(myTodo.title)
console.log(myTodo.priority)
console.log(myProject.todosList)

