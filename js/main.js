const menu = document.querySelector(".nav-links");

const close = document.querySelector("#close");

const hambuger = document.querySelector("#toggle-menu");

hambuger.addEventListener("click", ()=>{
    
    menu.classList.toggle("active");


    hambuger.style.display = 'none';
    close.style.display ='block';

});

close.addEventListener('click', () => {
    menu.classList.toggle('active');
    hambuger.style.display = 'inline';
    close.style.display = 'none';
});