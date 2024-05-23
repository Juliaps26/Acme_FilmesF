'use strict'

// document.getElementById('background').style.backgroundImage = "url('../img/barbiecapa.png')";


const imagePath = '../img/capabarbie.png';

        // Selecionar o elemento de fundo
        const backgroundElement = document.getElementById('background');

            // Calcular a altura desejada (por exemplo, metade da largura da tela)
            const windowHeight = window.innerHeight;
            const windowWidth = window.innerWidth;
            const desiredHeight = windowWidth / 2.5; // Ajuste conforme necessário

        // Definir estilos CSS para o elemento de fundo
        backgroundElement.style.backgroundImage = `url('${imagePath}')`;
        backgroundElement.style.backgroundRepeat = 'no-repeat';
        backgroundElement.style.backgroundSize = 'cover';
        backgroundElement.style.backgroundPosition = 'center';
        backgroundElement.style.height = `${desiredHeight}px`;


        