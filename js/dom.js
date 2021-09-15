document.addEventListener('DOMContentLoaded', function () {

    var sLeft = document.getElementById('left');
    var sRight = document.getElementById('right');
    var carou = document.getElementById('carousel');
   
        sLeft.onmouseover = function sL() {
            carou.scrollLeft += 90;
            interval = setTimeout(sL, 45);
            sLeft.addEventListener('mouseout', function () {
                clearInterval(interval);
            })
        };

        sRight.onmouseover = function sR() {
            carou.scrollLeft += -90;
            interval = setTimeout(sR, 45);
            sRight.addEventListener('mouseout', function (){
                clearInterval(interval);
            })
        };   
});
var menu = document.getElementById('menuLinks');
var menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', () =>{
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
   
});
var menuLinks = document.querySelectorAll(".site-navigation li");

menuLinks.forEach(menuLinks => menuLinks.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
}));

const header = document.querySelector('.site-navigation')
const sectionOne = document.querySelector('.reverse');

const sectionOneOptions = {
    rootMargin: "150px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(
    function (entries, sectionOneObserver) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                header.classList.remove('nav-scrolled');
            } else {

                header.classList.add('nav-scrolled');
            }
        })
    },
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);