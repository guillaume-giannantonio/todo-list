export default function (projectObject) {
	const main = document.getElementById('main')
	projectObject.todosList.forEach((todo) => {
		const todoNode = document.createElement('div')
		const todoLeft = document.createElement('div')
		todoLeft.textContent = todo.title
		const todoMid = document.createElement('div')
		todoMid.textContent = todo.dueDate
		const todoRight = document.createElement('div')
		todoRight.textContent = 'delete'
		todoNode.appendChild(todoLeft)
		todoNode.appendChild(todoMid)
		todoNode.appendChild(todoRight)
		todoNode.classList.add('todo')
		main.appendChild(todoNode)
	})
}