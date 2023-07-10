export default function () {
	const content = document.createElement('div')
	const header = document.createElement('header')
	const h1 = document.createElement('h1')
	h1.textContent = 'TODO LIST'
	header.appendChild(h1)
	content.appendChild(header)

	const leftMenu = document.createElement('leftMenu')
	leftMenu.classList.add('left-menu')
	const h2 = document.createElement('h2')
	h2.textContent = 'Projects'
	leftMenu.appendChild(h2)
	content.appendChild(leftMenu)
	
	return content
}