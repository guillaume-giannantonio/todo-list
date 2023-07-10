export default function () {
	const content = document.createElement('div')
	const header = document.createElement('header')
	const h1 = document.createElement('h1')
	h1.textContent = 'TODO LIST'
	header.appendChild(h1)
	content.appendChild(header)
	return content
}