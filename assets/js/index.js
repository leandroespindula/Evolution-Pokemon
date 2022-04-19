const elementoNome = document.getElementById('nome'); 
const elementoSituacao = document.querySelector('#situacao'); 
const elementoImg = document.querySelector('#imagem') 
let elementoBtn = document.querySelector('#alterar')


elementoBtn.addEventListener('click', () =>{
   
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/img/nivel_1.png'
        elementoNome.innerText = 'Charmander'
        elementoSituacao.innerText = 'Força 3'
        elementoBtn.value = 'segundo'
    } else if(elementoBtn.value == 'segundo') { 
        elementoImg.src = './assets/img/nivel_2.png'  
        elementoNome.innerText = 'Charmeleon'
        elementoSituacao.innerText = 'Força 4' 
        elementoBtn.value = 'terceiro' 
    } else { 
        elementoImg.src = './assets/img/nivel_3.png' 
        elementoNome.innerText = 'Charizard' 
        elementoSituacao.innerText = 'Força 5' 
        elementoBtn.value = 'primeiro' 
    }
})