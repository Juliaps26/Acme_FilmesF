'use strict'

import { getFilmes, deleteFilme, postFilme } from "./filmes.js"

function criarTr(filme){
    const tr=document.createElement('tr')
    tr.classList.add('bg-white', 'dark:bg-gray-800', 'dark:border-gray-700')

    const foto_capa_td=document.createElement('td')
    foto_capa_td.classList.add('p-4', 'bg-wite')
    const foto_capa=document.createElement('img')
    foto_capa.src=filme.foto_capa


    const titulo=document.createElement('th')
    titulo.scope='row'
    titulo.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-900', 'font-medium', 'text-gray-900', 'whitespace-nowrap' ,'dark:text-white')
    titulo.textContent=filme.nome

    const sinopse=document.createElement('td')
    sinopse.classList.add('px-6', 'py-4', 'bg-white')
    sinopse.textContent=filme.sinopse

    const duracao=document.createElement('td')
    duracao.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
    const duracao_exemplo=filme.duracao
    duracao.textContent=duracao_exemplo.substring(11, 19)
    
    const data_lancamento=document.createElement('td')
    data_lancamento.classList.add('px-6', 'py-4', 'bg-white')
    const data_lancamento_exemplo=filme.data_lancamento
    data_lancamento.textContent=data_lancamento_exemplo.substring(0, 10)

    // Criando novo elemento
    const data_relancamento=document.createElement('td')
    data_relancamento.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
    // Verifica se a data de relancamento é nulo, exibindo uma mensagem
    if(filme.data_relancamento==null)
        data_relancamento.textContent='Não há data de relançamento'
    else{
        const data_relancamento_exemplo=filme.data_relancamento
        // Simplificando a exibicao da data na tela 
        data_relancamento.textContent=data_relancamento_exemplo.substring(0, 10)
    }

   
// Criando outro elemento para guardar o valor do filme
    const valor=document.createElement('td')
    valor.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
//  Simplificando o valor unitario do filme 
    const valorSimplificado = filme.valor_unitario.toFixed(2);
    valor.textContent = valorSimplificado;


//  Guardando o id do filme 
    const id=filme.id
    // Criando elemento 
    const deletar=document.createElement('td')
    deletar.classList.add('px-6', 'py-4', 'bg-white')
    const deletarImg=document.createElement('img')
    deletarImg.classList.add('h-deletarh', 'w-deletarw')
    // Imagem de excluir
    deletarImg.src='../img/excluir.png'
    const deletarBtn=document.createElement('button')
    deletarBtn.id=id
    deletarBtn.onclick=deletarFilme

    const editar=document.createElement('td')
    editar.classList.add('px-6', 'py-4', 'bg-gray-50', 'dark:bg-gray-800')
    const editarImg=document.createElement('img')
    editarImg.src='../img/escrever.png'
    editarImg.classList.add('h-deletarh', 'w-deletarw')
    const editarBtn=document.createElement('button')
    editarBtn.id=id
    editarBtn.onclick=editarFilme

    editarBtn.append(editarImg)
    editar.append(editarBtn)
    deletarBtn.append(deletarImg)
    deletar.append(deletarBtn)
    foto_capa_td.append(foto_capa)
    tr.append(foto_capa_td, titulo, sinopse, duracao, data_lancamento, data_relancamento, valor, deletar, editar)
   
    return tr
}

async function preencherTela(){
    const table=document.getElementById('tbody')
    const filmes=await getFilmes()
    filmes.forEach(filme => {
        const tr=criarTr(filme)
        table.append(tr)
    });
}

async function deletarFilme(){
    const idFilmeDelete=this.id
    await deleteFilme(idFilmeDelete)
    window.location.reload()
}

function editarFilme(){
    const idFilmeEdit=this.id
    console.log(idFilmeEdit)
}

preencherTela()