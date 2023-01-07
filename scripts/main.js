'use strict'

const burger = document.getElementById('burger');

//icons
require.config({
    paths: {
        'fontawesome': 'vendor/fontawesome/fontawesome.min',
        'fontawesome/solid': 'vendor/fontawesome/solid.min',
        'fontawesome/brands': 'vendor/fontawesome/brands.min'
    },
    shim: {
        'fontawesome': {
            deps: ['fontawesome/solid', 'fontawesome/brands'],
            exports: 'FontAwesome'
        }
    }
})


require(['fontawesome'], function (fontawesome) {

    const phNumber = document.getElementById('phNumber');
    const mail = document.getElementById('mail');


    var iconPhone = fontawesome.icon(
        fontawesome.findIconDefinition({ iconName: 'phone' }),
        {
            classes: ['fa-phone']
        }
    )
    var iconMail = fontawesome.icon(
        fontawesome.findIconDefinition({ iconName: 'envelope' }),
        {
            classes: ['fa-envelope']
        }
    )
    var iconMenu = fontawesome.icon(fontawesome.findIconDefinition({ iconName: 'bars' }),
        {
            classes: ['fa-solid', 'fa-bars']
        }
    )

    phNumber.appendChild(iconPhone.node[0]);
    mail.appendChild(iconMail.node[0]);
    burger.appendChild(iconMenu.node[0]);
})

//nav
const nav = document.getElementById('nav');

burger.addEventListener('click', function () {
    nav.classList.toggle('menu-active');
})

//advertising
const firstPage = document.querySelector('.firstPage');
const secondPage = document.querySelector('.secondPage');
const thirdPage = document.querySelector('.thirdPage');

firstPage.addEventListener("animationend", () => {
    function reset_animation() {
        firstPage.style.animation = 'none';
        firstPage.offsetHeight; /* trigger reflow */
        firstPage.style.animation = null;
    }
    reset_animation();
    firstPage.innerHTML = '- Szobafestés, <br/> - kőműves munkák <br /> - kisebb villanyszerelés <br />- vízszerelési munkák <br />- kisebb burkolások'
    firstPage.style.animation = 'fadeIn 8s forwards';
    firstPage.addEventListener("animationend", () => {
        function reset_animation() {
            firstPage.style.animation = 'none';
            firstPage.offsetHeight; /* trigger reflow */
            firstPage.style.animation = null;
        }
        reset_animation();
        firstPage.innerHTML = 'Ingyenes <span>kiszállás</span>, <br />Ingyenes <span>árkalkuláció</span>, <br /> Ingyenes <span>tanácsadás</span>, <br /> amennyiben velünk <br /> képzeled el a felújítást!'
        firstPage.style.animation = 'fadeIn 8s forwards';
    });
});

const listItems = document.querySelectorAll('li a');

for (let item of listItems) {
    item.addEventListener("click", function () {
        nav.classList.remove('menu-active');
    });
}

//gallery zoom

const windowWidth = window.outerWidth;

const pic_1 = document.getElementById('img_1');
const pic_2 = document.getElementById('img_2');
const pic_3 = document.getElementById('img_3');
const pic_4 = document.getElementById('img_4');
const pic_5 = document.getElementById('img_5');
const pic_6 = document.getElementById('img_6');
const pic_7 = document.getElementById('img_7');
const pic_8 = document.getElementById('img_8');
const pic_9 = document.getElementById('img_9');
const pic_10 = document.getElementById('img_10');
const pic_11 = document.getElementById('img_11');
const pic_12 = document.getElementById('img_12');
const pic_13 = document.getElementById('img_13');
const pic_14 = document.getElementById('img_14');

function picturesLoad() {
    pic_1.style.display = 'block';
    pic_1.classList.add('zoomPic');
};

document.getElementById('promoText').addEventListener("touchmove", picturesLoad);