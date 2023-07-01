document.addEventListener("DOMContentLoaded", function () {
    var audio = document.getElementById('audio');
    var playbtn = document.getElementById('slika-1');
    var count = 0;

    function playPause() {
        if (count == 0) {
            audio.play();
            count = 1;
        }
        else {
            count = 0;
            audio.pause();
        }

    }


    playbtn.addEventListener('click', playPause);
})

window.addEventListener('scroll', function () {
    var oMeni = document.querySelector('.o-meni');
    var projekti = document.querySelector('.projekti');
    var interests = document.querySelector('.interests');
    var projekat = document.querySelector('.box-3');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight;

    if (scrollPosition > oMeni.offsetTop - windowHeight) {
        oMeni.classList.add('show');
    }

    if (scrollPosition > projekti.offsetTop - windowHeight) {
        projekti.classList.add('show');
    }

    if (scrollPosition > interests.offsetTop - windowHeight) {
        interests.classList.add('show');
    }
    if (scrollPosition > projekat.offsetTop - windowHeight) {
        projekat.classList.add('show');
    }
});

window.addEventListener('wheel', function (event) {
    if (event.ctrlKey === true) {
        event.preventDefault();
    }
}, { passive: false });
