function Project(name) {
	const todosList = []
	return {
		get name() {
			return name
		},
		get todosList() {
			return todosList
		},
		addTodo: (todo) => {
			todosList.push(todo)
		}
	}
}