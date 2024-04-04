'use strict'

import {getFilmeByID} from "./filmes.js"

const indice = new URLSearchParams(window.location.search).get('id');

const infoFilme = await getFilmeByID(indice)
console.log(infoFilme)

function preencherCampos(filme){
    const titulo = document.getElementById('titulo')
    titulo.textContent = filme.nome
    const poster = document.getElementById('poster')
    poster.src = filme.foto_capa
    const sinopse = document.getElementById('sinopse')
    const duracao = document.getElementById('duracao')
    const lancamento = document.getElementById('lancamento')
    lancamento.textContent = filme.data_lancamento
    const relancamento = document.getElementById('relancamento')
    relancamento.textContent =filme.data_relancamento
   
      
    
    const valor = document.getElementById('valor')
    valor.textContent=' ALUGAR POR R$ '+filme.valor_unitario
    duracao.textContent="DURAÇÃO: "+filme.duracao
    sinopse.textContent=filme.sinopse
}

preencherCampos(infoFilme)















