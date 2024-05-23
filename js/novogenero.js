'use strict'
import {postGenero, getGeneros } from "./genero.js"


const inputNome = document.getElementById('nome')




const btnCadastrar = document.getElementById('cadastrar')

function pegarDados(){

    let JSONGenero = {
        nome: inputNome.value
    }

    if(inputNome.value == ''){
        return false
    }else{
        return JSONGenero
    }
}



async function inserirGenero (){

    const dadosGenero = pegarDados()
    console.log(dadosGenero)
    if(dadosGenero){
        const retorno = await postGenero(dadosGenero)
        console.log(retorno)
        if(retorno){
            btnCadastrar.textContent = 'Genero cadastrado com sucesso!'
            window.location.href = '../html/cmsgenero.html'
        }
        else
        btnCadastrar.textContent = 'Houve um erro!'
    } else {
        alert('Prencha todos os campos!')
    }
}


btnCadastrar.addEventListener('click', inserirGenero )