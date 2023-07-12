export default function () {
	const content = document.createElement('div')
	const header = document.createElement('header')
	const h1 = document.createElement('h1')
	h1.textContent = 'TODO LIST'
	header.appendChild(h1)
	content.appendChild(header)

	const leftMenu = document.createElement('leftMenu')
	leftMenu.classList.add('left-menu')
	leftMenu.id = 'leftMenu'

	const bottom = document.createElement('bottom')
	bottom.classList.add('bottom')
	bottom.appendChild(leftMenu)

	const main = document.createElement('div')
	main.id = 'main'
	main.classList.add('main')
	bottom.appendChild(main)

	content.appendChild(bottom)

	return content
}