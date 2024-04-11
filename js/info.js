'use strict'

import {getFilmeByID} from "./filmes.js"

const indice = new URLSearchParams(window.location.search).get('id');

const infoFilme = await getFilmeByID(indice)
console.log(infoFilme)

function preencherCampos(filme){
    const titulo = document.getElementById('titulo')
    titulo.textContent = filme.nome


    const capa = document.getElementById('capa')
    capa.src = filme.foto_capa
    capa.classList.add( 'w-capaWidth', 'h-capaHeight', 'ml-gap', 'mt-margin')


    const sinopse = document.getElementById('sinopse')
    sinopse.textContent=filme.sinopse
    sinopse.classList.add('text-white', 'font-semibold', 'text-balance', 'text-center', 'w-[50vh]')

    const duracao = document.getElementById('duracao')

    const lancamento = document.getElementById('lancamento')
    lancamento.textContent = filme.data_lancamento


    const relancamento = document.getElementById('relancamento')
    relancamento.textContent =filme.data_relancamento
   
      
    
    const valor = document.getElementById('valor')
    valor.textContent=' ALUGAR POR R$ '+filme.valor_unitario
    duracao.textContent="DURAÇÃO: "+filme.duracao

}

preencherCampos(infoFilme)















