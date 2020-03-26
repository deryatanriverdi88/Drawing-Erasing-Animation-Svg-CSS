let button = document.querySelector("button")
let pathOne = document.querySelector("path:nth-child(1)")
let pathTwo = document.querySelector("path:nth-child(2)")
let pathThree = document.querySelector("path:nth-child(3)")
let pathFour = document.querySelector("path:nth-child(4)")
let pencil = document.querySelector(".pencil")

button.addEventListener('click', function(){
	if (button.innerText === "Draw!"){
		pathOne.classList.add("line")
		pathTwo.classList.add("line-2")
		pathThree.classList.add("line-3")
		pathFour.classList.add("line-4")
		pathOne.classList.remove("line-erase-4")
		pathTwo.classList.remove("line-erase-3")
		pathThree.classList.remove("line-erase-2")
		pathFour.classList.remove("line-erase")
		pencil.classList.add('drawing')
		pencil.classList.remove('erase')
		button.innerText = "Erase!"
	} else {
		pathFour.classList.add("line-erase")
		pathThree.classList.add("line-erase-2")
		pathTwo.classList.add("line-erase-3")
		pathOne.classList.add("line-erase-4")
		pencil.classList.add('erase')
		button.innerText = "Draw!"
	}
})
