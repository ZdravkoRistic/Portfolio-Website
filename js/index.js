const navToogle = document.querySelector('.nav-toogle');
const navLinks = document.querySelectorAll('.nav__link');

navToogle.addEventListener('click', () => {

    document.body.classList.toggle('nav-open');

});


navLinks.forEach(link => {

    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})