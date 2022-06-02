const cardButtons  = document.querySelectorAll('.card button')
const modalInner = document.querySelector('.modal-inner')
const modalOuter = document.querySelector('.modal-outer')


console.log(cardButtons)

function handleCardButtonClick(event) {
  console.log('Ya clicked it')
  const button = event.currentTarget
  const card = button.closest('.card')
  console.log(button)
  console.log(card)

  // grab the image source

  const imgSrc = card.querySelector('img').src
  console.log(imgSrc)

  const desc = card.dataset.description
  console.log(desc)

  const name = card.querySelector('h2').textContent

  // populate the modal with the new info
  modalInner.innerHTML = `
    <img src="${imgSrc.replace('200', '600')}" alt=""/>
  `
}

cardButtons.forEach(button => {
    button.addEventListener('click', handleCardButtonClick)
})
