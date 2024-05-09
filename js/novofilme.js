
'use strict'
import { postFilme } from "./filmes.js"


// Pegando o input que a pessoa vai digitar o link
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



const btnCadastrar=document.getElementById('cadastrar')

function pegarDados(){
    const JSONFilme={}
    const titulo=document.getElementById('titulo').value
    JSONFilme.nome=titulo
    const sinopse=document.getElementById('sinopse').value
    JSONFilme.sinopse=sinopse
    const duracao=document.getElementById('duracao').value
    JSONFilme.duracao=duracao
    const lancamento=document.getElementById('lancamento').value
    JSONFilme.data_lancamento=lancamento
    const relancamento=document.getElementById('relancamento').value
    
    const foto=document.getElementById('link').value
    JSONFilme.foto_capa=foto
    const valor=document.getElementById('valor').value
    JSONFilme.valor_unitario=valor
    const classificacao = document.getElementById('classificacao').value;
    JSONFilme.id_classificacao=classificacao
    if(relancamento==null||relancamento==undefined||relancamento=='')
        return JSONFilme
    else{
        JSONFilme.data_relancamento=relancamento
        return JSONFilme
    }
}

async function inserirFilme(){
    const dadosFilme=pegarDados()
    console.log(dadosFilme)
    const retorno=await postFilme(dadosFilme)
    console.log(retorno)
    if(retorno)
        btnCadastrar.textContent='FILME INSERIDO COM SUCESSO!'
    else
        btnCadastrar.textContent='HOUVE UM ERRO!'
}

btnCadastrar.addEventListener('click', inserirFilme)