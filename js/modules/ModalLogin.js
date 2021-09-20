export default function modalLogin(){
    const botaoAbrir = document.querySelectorAll('[data-modal="abrir"]');
    const botaoFechar = document.querySelector('[data-modal="fechar"]');
    console.log(botaoFechar);
    const cantaianerModal = document.querySelector('[data-modal="container"]')
    
    
    function toggleModal(event){
        event.preventDefault(event);
        cantaianerModal.classList.toggle('active');
    }

    function clickForaModal(event){
        if(event.target === this){
            toggleModal(event);
        }
    }

    
    botaoAbrir.forEach((item) =>{
        item.addEventListener('click', toggleModal);
    })
    botaoFechar.addEventListener('click', toggleModal);
    cantaianerModal.addEventListener('click', clickForaModal);
}

