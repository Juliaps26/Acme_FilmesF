// Arquivo para listar os atores

'use strict'

import { getAtores } from "./atores.js"


// Criando card dos atores 

function criarCard(ator){
    const card = document.createElement('div')
    card.classList.add('grid', 'p-8', 'gap-4')

    // Retornar o nome dos atores
    const nome = document.createElement('h2')
    nome.textContent = ator.nome
    nome.classList.add('font-inter', 'sans-serif','grid' ,'text-white', 'justify-center', 'text-lg')

    // Mostrar a foto dos atores
    const foto = document.createElement('img')
    foto.src = ator.foto
    foto.classList.add('w-capaWidth', 'h-capaHeight', 'rounded-lg', 'shadow-lg', 'p-2', 'mb-2', 'transform', 'transition', 'hover:scale-[1.2]', 'duration-300', 'max-w-sm', 'mx-auto', 'cursor-pointer')
    foto.style.borderRadius = '2vh'


    // Quando clicar em um ator vai exibir as informações de cada ator 
    card.addEventListener('click', ()=> {
        window.location.href = '../html/info-ator.html?id='+ator.id
    })

    card.append(foto, nome)
    return card

}

async function preencherContainer(){
    const container = document.getElementById('lista-atores')
    const atores = await getAtores()
    atores.forEach(ator => {
        const card = criarCard(ator)
        container.appendChild(card)
        console.log(card)
        
    });
}

preencherContainer()
console.log(getAtores);
