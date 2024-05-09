'use strict'

// Imagem de fundo
const imagePath = '../img/cinema1.webp';

        // Selecionar o elemento de fundo
        const backgroundElement = document.getElementById('background');

            // Calcular a altura desejada (por exemplo, metade da largura da tela)
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;
         

        // Definir estilos CSS para o elemento de fundo
        backgroundElement.style.backgroundImage = `url('${imagePath}')`;
        backgroundElement.style.backgroundRepeat = 'no-repeat';
        backgroundElement.style.backgroundSize = 'cover';
        backgroundElement.style.backgroundPosition = 'center';
      
// Login cms

const botao=document.getElementById('btn')

function logar(){
    const email=document.getElementById('email').value
    const senha=document.getElementById('senha').value
    if(senha=='admin'&&email=='admin@gmail')
        window.location.href='../html/adm.html'
    else
        alert('Usuário ou senha incorretos.')
}

botao.addEventListener('click', logar)