'use strict'

import { getGeneros , deleteGenero} from "./genero.js"


function editarGenero() {
    const idGeneroEdit = this.id
    console.log(idGeneroEdit)
    // Adicione aqui a lógica para editar o gênero
}

function criarTr(genero) {
    const tr = document.createElement('tr')
    tr.classList.add('bg-white', 'border-b', 'dark:bg-gray-800', 'dark:border-gray-700')

    const nome = document.createElement('th')
    nome.scope = 'row'
    nome.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-900', 'font-medium', 'text-gray-900', 'whitespace-nowrap', 'dark:text-white')
    nome.textContent = genero.nome

    const deletar = document.createElement('th')
    deletar.classList.add('px-6', 'py-4', 'bg-white', 'w-20')
    const deletarImg = document.createElement('img')
    deletarImg.classList.add('h-deletarh', 'w-deletarw')
    deletarImg.src = '../img/excluir.png'
    const deletarBtn = document.createElement('button')
    deletarBtn.id = genero.id
    deletarBtn.onclick = deletarGenero

    const editar = document.createElement('th')
    editar.classList.add('px-6', 'w-20', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
    const editarImg = document.createElement('img')
    editarImg.src = '../img/escrever.png'
    editarImg.classList.add('h-deletarh', 'w-deletarw')
    const editarBtn = document.createElement('button')
    editarBtn.id = genero.id
    editarBtn.onclick = editarGenero

    editarBtn.append(editarImg)
    editar.append(editarBtn)
    deletarBtn.append(deletarImg)
    deletar.append(deletarBtn)

    tr.append(nome)
    tr.append(deletar)
    tr.append(editar)
   
    
    return tr
}

async function preencherTela() {
    const table = document.getElementById('tbody')
    const generos = await getGeneros()
    console.log(generos)
    generos.forEach(genero => {
        const tr = criarTr(genero)
        table.append(tr)
    })
}

async function deletarGenero(){
    const idGeneroDelete = this.id
    await deleteGenero(idGeneroDelete)
    window.location.reload()
}


preencherTela()
