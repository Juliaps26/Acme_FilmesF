
'use strict'
import { postFilme, getClassificacoes } from "./filmes.js"


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


//  Pegando o input 
const inputClassificacao = document.getElementById('classificacao')
const inputNome = document.getElementById('titulo')
const inputSinopse = document.getElementById('sinopse')
const inputDuracao = document.getElementById('duracao')
const inputLancamento = document.getElementById('lancamento')
const inputRelancamento = document.getElementById('relancamento')
const inputValor = document.getElementById('valor')



const btnCadastrar = document.getElementById('cadastrar')

function pegarDados() {
    let JSONFilme = {


        nome: inputNome.value,
        sinopse: inputSinopse.value,
        duracao: inputDuracao.value,
        data_lancamento: inputLancamento.value,
        data_relancamento: '',
        foto_capa: inputPosterPreview.value,
        valor_unitario: inputValor.value,
        id_classificacao: inputClassificacao.value



    }


    if (inputRelancamento.value != '') {
        JSONFilme.data_relancamento = inputRelancamento.value
    }

    // Se  nao preencher 
    if (inputNome.value == '' || inputSinopse.value == '' || inputDuracao.value == '' || inputLancamento.value == '' || inputValor.value == '' || inputPosterPreview.value == '') {
        return false

    } else {
        return JSONFilme
    }


}





function criarOptionClassificacao(classificacao) {
    const option = document.createElement('option')
    option.textContent = classificacao.faixa_etaria
    option.value = classificacao.id

    return option

}


async function montarClassificacoes() {
    const classificacoes = await getClassificacoes()
    classificacoes.forEach((classificacao) => {
        const optionClassificacao = criarOptionClassificacao(classificacao)
        inputClassificacao.appendChild(optionClassificacao)
    });

}


async function inserirFilme() {
  
    const dadosFilme = pegarDados()
    console.log(dadosFilme)

    if (dadosFilme) {
        const retorno = await postFilme(dadosFilme)
        console.log(retorno)
        if (retorno)
            btnCadastrar.textContent = 'FILME INSERIDO COM SUCESSO!'
        else
            btnCadastrar.textContent = 'HOUVE UM ERRO!'
    } else {
        alert('Preencha todos os campos!')
    }

}

btnCadastrar.addEventListener('click', inserirFilme)

window.addEventListener('load', montarClassificacoes)