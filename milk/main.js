let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick =() => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
document.querySelector('#search-icon').onclick=()=> {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}
document.querySelector('#menu-icon').onclick=()=> {
    navbar.classList.toggle('active');
    search.classList.remove('active');
}
window.onscroll = ()=>{
    navbar.classList.remove('active');
    search.classList.remove('active');
}
let header =  document.querySelector('header');
window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});