//  Arquivo para atualizar o diretor 

'use strict'

import { putDiretor, getDiretorByID } from "./diretores.js"


// Para mostrar a foto do diretor 

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

const inputSexo = document.getElementById('sexo')


const btnCadastrar = document.getElementById('cadastrar')
async function inserirDados(){
    let diretor = await getDiretorByID(localStorage.getItem('idDiretor'))
    console.log(diretor);


    const nome = document.getElementById('nome')
    nome.value = diretor.nome

    const biografia = document.getElementById('biografia')
    biografia.value= diretor.biografia

    const data_nascimento = document.getElementById('nascimento')
    const dataCompleta = diretor.data_nascimento
    data_nascimento.value = dataCompleta.substring(0, 10)

    const data_falecimento = document.getElementById('falecimento')
    const dataFalecimento = diretor.data_falecimento
    if(dataFalecimento == null || dataFalecimento == '' || dataFalecimento == undefined)
    data_falecimento.value = ''
    else
    data_falecimento.value = dataFalecimento.substring(0,10)



    
}
