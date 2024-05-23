'use strict'

import { putFilme, getFilmeByID } from "./filmes.js"



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

async function inserirDados(){
    let filme=await getFilmeByID(localStorage.getItem('idFilme'))
    console.log(filme);

    const titulo=document.getElementById('titulo')
    titulo.value=filme.nome

    const sinopse=document.getElementById('sinopse')
    sinopse.value=filme.sinopse

    const duracao=document.getElementById('duracao')
    const duracaoCompleta=filme.duracao
    duracao.value=duracaoCompleta.split('T')[1].split('.')[0];

    const data_nascimento=document.getElementById('lancamento')
    const dataCompleta = filme.data_lancamento
    data_nascimento.value=dataCompleta.substring(0, 10)

    const relancamento=document.getElementById('relancamento')
    const dataRelancamento = filme.data_relancamento
    if(dataRelancamento==null||dataRelancamento==''||dataRelancamento==undefined)
        relancamento.value=''
    else
        relancamento.value=dataRelancamento.substring(0, 10)

    const id_classificacao=document.getElementById('classificacao')
    id_classificacao.value=filme.classificacao[0].id
    
    const foto=document.getElementById('link')
    foto.value=filme.foto_capa

    const valor=document.getElementById('valor')
    valor.value=filme.valor_unitario

}

async function pegarDados(){
    let filme=await getFilmeByID(localStorage.getItem('idFilme'))
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

    if(relancamento==null||relancamento==undefined||relancamento==''){
        //console.log(JSONFilme);
        JSONFilme.data_relancamento=null
        return JSONFilme
    }
    else{
        JSONFilme.data_relancamento=relancamento
        //console.log(JSONFilme);
        return JSONFilme
    }
}

async function atualizarFilme(){
    const dadosFilme=await pegarDados()
    console.log(dadosFilme)
    console.log(localStorage.getItem('idFilme'));
    const retorno=await putFilme(dadosFilme, localStorage.getItem('idFilme'))
    console.log(retorno)
    if(retorno){
        btnCadastrar.textContent='Filme atualizado com sucesso!!'
        window.location.href='../html/cms.html'
    }
    else
        btnCadastrar.textContent='Não foi possivel atualizar!'
}

btnCadastrar.addEventListener('click', atualizarFilme)

inserirDados()