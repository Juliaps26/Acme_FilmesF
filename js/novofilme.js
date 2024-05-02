
'use strict'

// Pegando o input que a pessoa vai digitar o link
const inputPosterPreview = document.getElementById('link')

// Pegando a tag img que vai aparecer a foto do link
const imgPosterPreview = document.getElementById('poster')
imgPosterPreview.classList.add('w-capaWidth', 'h-capaHeight')

// Id do botão que vai ser clicado para aparecer a imagem 
const buttonPosterPreview = document.getElementById('button-preview-poster') 

const mostrarPreview = () => {
    const link = inputPosterPreview.value 
    imgPosterPreview.src = link

}


buttonPosterPreview.addEventListener('click', mostrarPreview)