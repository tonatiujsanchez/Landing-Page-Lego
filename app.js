const modal = document.querySelector('.modal')
const button1 = document.querySelector('#button1')
const buttonClose = document.querySelector('.modal__close')


button1.addEventListener('click', ()=> {
    modal.classList.remove('hidden')
    modal.classList.add('visible')
})

buttonClose.addEventListener('click', ()=> {
    modal.classList.remove('visible')
    modal.classList.add('hidden')
})