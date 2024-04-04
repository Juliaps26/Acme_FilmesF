'use strict'

import { getFilmes, getFilmeByID, postFilme, deleteFilme } from "./filmes.js"

function criarCard(filme){
    // Card dos filmes 
    const card=document.createElement('div')
    card.classList.add('grid', 'p-8', 'gap-4')

    // Retornar o nome do filme
    const titulo=document.createElement('h2')
    titulo.textContent=filme.nome
    titulo.classList.add('font-inter', 'sans-serif','grid' ,'text-white', 'justify-center', 'text-lg')

    // Mostrar a capa dos filmes 
    const capa = document.createElement('img')
    capa.src = filme.foto_capa
    capa.classList.add('w-capaWidth', 'h-capaHeight', 'rounded-lg', 'shadow-lg', 'p-2', 'mb-2', 'transform', 'transition', 'hover:scale-[1.2]', 'duration-300', 'max-w-sm', 'mx-auto', 'cursor-pointer')
    

    // Quando clicar em um filme para aparecer as informações
    card.addEventListener('click', ()=>{
        window.location.href = '../html/info.html?id='+filme.id
    })

   // Retornar a data de lancamento
    // const data= document.createElement('h2', 'text-white')
    // data.textContent=filme.data_lancamento
    // data.classList.add('font-bold')

    // const texto=document.createElement('textarea')
    // texto.textContent=filme.sinopse


    card.append(capa, titulo)
    return card
}

async function preencherContainer(){
    const container=document.getElementById('lista')
    const filmes=await getFilmes()
    filmes.forEach (filme=>{
        const card=criarCard(filme)
        container.appendChild(card)
        console.log(card)
    })
}

preencherContainer()

// const filme = {
//    nome : "Gente Grande",
//    sinopse : "Em Gente Grande Lenny (Adam Sandler), Kurt (Chris Rock), Eric (Kevin James), Marcus (David Spade) e Rob (Rob Schneider) se conhecem desde pequenos. Passados trinta anos, os cinco amigos se reencontram para curtir um fim de semana juntos com as respectivas famílias, mas o feriado de 4 de Julho em uma casa no lago promete muito mais diversão do que apenas lembranças dos bons momentos. Casados e com várias crianças, os homens de família terão de confrontar o fato de não serem mais tão jovens",
//    duracao : "",
//    data_lancamento :"",
//    data_relancamento: "",
//    foto_capa: "",
//    valor_unitario: ""
// }
// Deletar o filme pelo ID
// deleteFilme('10')
// postFilme(filme)

console.log(getFilmes)