let nav = document.querySelector('nav'), menu = document.querySelector('#menu-but');

window.addEventListener('scroll', function(){
    document.querySelector('header').classList.toggle('sticky', window.scrollY > 80);
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    nav.classList.remove('open');
}

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('open');
}

const sr = ScrollReveal ({
    origin: 'top',
    distance : '85px',
    duration : 2500,
    reset : true
});

sr.reveal('#home .content', {delay : 300});
sr.reveal('#home .image', {delay : 400});
sr.reveal('.features', {delay : 400});
sr.reveal('#about .content', {});
sr.reveal('#about .image', {delay : 300});
sr.reveal('.title', {});
sr.reveal('#product .container, .sec-but', {delay : 300});
sr.reveal('#review .container, #contact', {delay : 300});