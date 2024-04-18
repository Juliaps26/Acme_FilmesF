'use strict'

// document.getElementById('background').style.backgroundImage = "url('../img/barbiecapa.png')";


const imagePath = '../img/fundofilmes.webp';

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
      
