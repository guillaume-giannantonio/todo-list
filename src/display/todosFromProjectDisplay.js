import DownArrow from '../img/down arrow.svg'

export default function (projectObject) {
	const main = document.getElementById('main')
	projectObject.todosList.forEach((todo) => {
		const todoNode = document.createElement('div')
		todoNode.classList.add('todo')
		const todoUp = document.createElement('div')
		todoUp.classList.add('todoUp')

		const todoLeft = document.createElement('div')
		todoLeft.textContent = todo.title
		const todoMid = document.createElement('div')
		todoMid.textContent = todo.dueDate
		const todoMid2 = document.createElement('div')
		todoMid2.textContent = todo.priority.toString()
		const todoRight = document.createElement('div')
		todoRight.classList.add('todo-right')
		const downArrow = new Image()
		downArrow.src = DownArrow
		todoRight.appendChild(downArrow)
		const check = document.createElement('input')
		check.type = 'checkbox'
		todoRight.appendChild(check)
		if (todo.completed) {
			check.checked = true
			todoNode.style.backgroundColor = 'green'
		}

		check.addEventListener('change', (e) => {
			if (e.target.checked) {
				todo.completed = true
				todoNode.style.backgroundColor = 'green'
			} else {
				todo.completed = false
				todoNode.style.backgroundColor = 'lightgrey'
			}
		})

		const todoDown = document.createElement('div')
		todoDown.classList.add('todoDown')
		const todoDescription = document.createElement('div')
		todoDescription.textContent = todo.description

		todoUp.appendChild(todoLeft)
		todoUp.appendChild(todoMid)
		todoUp.appendChild(todoMid2)
		todoUp.appendChild(todoRight)

		todoDown.appendChild(todoDescription)
		todoDown.style.display = 'none'
		todoNode.appendChild(todoUp)
		todoNode.appendChild(todoDown)

		downArrow.addEventListener('click', () => {
			if (todoDown.style.display === 'block') {
				todoDown.style.display = 'none'
			} else {
				todoDown.style.display = 'block'
			}
		})


		main.appendChild(todoNode)
	})
}