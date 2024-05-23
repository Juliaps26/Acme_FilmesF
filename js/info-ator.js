'use strict'

import {getAtorByID} from "./atores.js"

const indice = new URLSearchParams(window.location.search).get('id');

const infoAtor = await getAtorByID(indice)
console.log(infoAtor)

function preencherCampos(infoAtor){

    console.log(infoAtor);

    const nome = document.getElementById('nome')
    nome.textContent = infoAtor.nome
    nome.style.whiteSpace = "nowrap";

    const foto = document.getElementById('foto')
    foto.src = infoAtor.foto
    foto.classList.add('w-capaWidth', 'h-capaHeight', 'ml-gap', 'mt-margin')
    foto.style.borderRadius = '2vh'
    

    const biografia = document.getElementById('biografia')
    biografia.textContent = infoAtor.biografia
    biografia.classList.add('text-white', 'font-semibold', 'text-balance', 'text-center', 'w-[50vh]')

    const nascimento = document.getElementById('nascimento')
    nascimento.textContent = "Data de Nascimento: "+ (infoAtor.data_nascimento.slice(0,10))
    
}

preencherCampos(infoAtor)