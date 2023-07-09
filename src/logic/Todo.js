export default function (title, description, dueDate, priority) {
	let completed = false;
	return {
		get title() {
			return title
		},
		get description() {
			return description
		},
		get dueDate() {
			return dueDate
		},
		get priority() {
			return priority
		},
		get completed() {
			return completed
		},
		set priority(value) {
			if (typeof value === 'number') {
				priority = value
			}
		},
		set completed(value) {
			completed = Boolean(value)
		}
	}
}