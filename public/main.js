const cardButtons  = document.querySelector('.card button')


function handleCardButtonClick() {
  console.log('Ya clicked it')
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
)
