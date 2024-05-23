'use strict'

import { getGeneros} from "./genero.js"

function criarTr(genero){
    const tr=document.createElement('tr')
    tr.classList.add('bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700')



    const nome=document.createElement('th')
    nome.scope='row'
    nome.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-900', 'font-medium', 'text-gray-900', 'whitespace-nowrap' ,'dark:text-white')
    nome.textContent= genero.nome
    
  

    // const deletar=document.createElement('td')
    // deletar.classList.add('px-6', 'py-4', 'bg-white', 'w-20')
    // const deletarImg=document.createElement('img')
    // deletarImg.classList.add('h-deletarh', 'w-deletarw')
    // deletarImg.src='../img/excluir.png'
    // const deletarBtn=document.createElement('button')
    // deletarBtn.id=ator.id
    // deletarBtn.onclick= deletarGenero

    // const editar=document.createElement('td')
    // editar.classList.add('px-6', 'w-20', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
    // const editarImg=document.createElement('img')
    // editarImg.src='../img/escrever.png'
    // editarImg.classList.add('h-deletarh', 'w-deletarw')
    // const editarBtn=document.createElement('button')
    // editarBtn.id=ator.id
    // editarBtn.onclick=editarAtor

    // editarBtn.append(editarImg)
    // editar.append(editarBtn)
    // deletarBtn.append(deletarImg)
    // deletar.append(deletarBtn)
    tr.append( nome)
   
    return tr
}

async function preencherTela(){
    const table=document.getElementById('tbody')
    const generos =await getGeneros()
    generos.forEach(generos => {
        const tr=criarTr(generos)
        table.append(tr)
    });
}

// async function deletarAtor(){
//     const idAtorDelete=this.id
//     await deleteAtor(idAtorDelete)
//     window.location.reload()
// }

// function editarAtor(){
//     const idAtorEdit=this.id
//     console.log(idAtorEdit)
// }

preencherTela()