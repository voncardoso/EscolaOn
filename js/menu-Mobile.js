const btnMobile = document.querySelector('.btn-mobile');
console.log(btnMobile);

function toggleMenu(){
    const nav = document.querySelector('.menu');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);