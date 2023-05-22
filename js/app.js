import {valida} from './validation.js'

const inputsList = document.querySelectorAll('input')

inputsList.forEach(input =>{
    input.addEventListener('blur', evento =>{
        valida(evento.target) //evento.target retorna o <input> do evento
    })
})