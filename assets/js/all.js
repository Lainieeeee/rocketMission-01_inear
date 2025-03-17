window.addEventListener('load', function() {

    // header
    const ham = document.querySelector('.hamburgerBtn');
    const nav = document.querySelector('.headerNav');
    ham.addEventListener('click', function () {
        ham.classList.toggle('active');
        nav.classList.toggle('active');
    });

})