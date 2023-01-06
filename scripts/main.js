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
    firstPage.style.visibility = 'hidden';
    secondPage.classList.remove('secondPage');
    secondPage.classList.add('secondAnimated');
});

secondPage.addEventListener("animationend", () => {
    secondPage.style.visibility = 'hidden';
    thirdPage.classList.remove('thirdPage');
    thirdPage.classList.add('thirdAnimated');
})

