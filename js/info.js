'use strict'

import {getFilmeByID} from "./filmes.js"

const indice = new URLSearchParams(window.location.search).get('id');

const infoFilme = await getFilmeByID(indice)
console.log(infoFilme)

function preencherCampos(infoFilme){
    const titulo = document.getElementById('titulo')
    titulo.textContent = infoFilme.nome
    titulo.style.whiteSpace = "nowrap";

    const capa = document.getElementById('capa')
    capa.src = infoFilme.foto_capa
    capa.classList.add( 'w-capaWidth', 'h-capaHeight', 'ml-gap', 'mt-margin')
    capa.style.borderRadius = '2vh'


    const sinopse = document.getElementById('sinopse')
    sinopse.textContent=infoFilme.sinopse
    sinopse.classList.add('text-white', 'font-semibold', 'text-balance', 'text-center', 'w-[50vh]')

    const duracao = document.getElementById('duracao')
    duracao.textContent="Duração: "+ tratarDuracao(infoFilme.duracao)
    duracao.style.color = "red";

    

    const lancamento = document.getElementById('lancamento')
    lancamento.textContent = "Lançamento: "+ tratarData(infoFilme.data_lancamento)
    lancamento.style.color = "red";


    const relancamento = document.getElementById('relancamento')
    relancamento.style.color = "red";
    relancamento.textContent =infoFilme.data_relancamento
    if(infoFilme.relancamento){
        relancamento.textContent = "Relançamento: "+tratarData(infoFilme.data_relancamento)
    } else{
        relancamento.textContent = "Relançamento: Este filme não possui data de relançamento "
    }
   
      
    
    const valor = document.getElementById('valor')
    valor.textContent=' Por apenas R$ '+infoFilme.valor_unitario
    valor.style.color = '.verde'

    const classificacao = document.getElementById('classificacao')
    classificacao.src = infoFilme.classificacao[0].icon




    const btnAssistir = document.getElementById('btn')
 btnAssistir.textContent='Assistir'
    btnAssistir.classList.add('bg-black')


}

function tratarData(string){
    let dataTratada = string.slice(0,10)
    dataTratada = dataTratada.split('-')
    dataTratada = dataTratada[2]+"/"+dataTratada[1]+"/"+dataTratada[0]
    return dataTratada
}

function tratarDuracao(string){
    const duracaoTratada = string.slice(11,19)
    return duracaoTratada
}


preencherCampos(infoFilme)















