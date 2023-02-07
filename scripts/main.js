'use strict'

const burger = document.getElementById('burger');
const chevron = document.getElementById('chevron');

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

    const user = document.getElementById('user')
    const phNumber = document.getElementById('phNumber');
    const mail = document.getElementById('mail');
    const intro_1 = document.getElementById('intro_1');
    const intro_2 = document.getElementById('intro_2');
    const intro_3 = document.getElementById('intro_3');
    const intro_4 = document.getElementById('intro_4');
    const intro_5 = document.getElementById('intro_5');
    const intro_6 = document.getElementById('intro_6');
    const intro_7 = document.getElementById('intro_7');

    var iconUser = fontawesome.icon(
        fontawesome.findIconDefinition({ iconName: 'user' }),
        {
            classes: ['fa-regular', 'fa-user-helmet-safety']
        }
    )
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
    var iconBrush = fontawesome.icon(fontawesome.findIconDefinition({ iconName: 'brush' }),
        {
            classes: ['fa-duotone', 'fa-brush']
        }
    )
    var iconChevron = fontawesome.icon(fontawesome.findIconDefinition({ iconName: 'chevron-down' }),
        {
            classes: ['fa-square-chevron-down', 'navItems']
        }
    )


    burger.appendChild(iconMenu.node[0]);
    chevron.appendChild(iconChevron.node[0]);
    user.appendChild(iconUser.node[0]);
    phNumber.append(iconPhone.node[0]);
    mail.appendChild(iconMail.node[0]);
    intro_1.appendChild(iconBrush.node[0]);
    intro_2.appendChild(iconBrush.node[0]);
    intro_3.appendChild(iconBrush.node[0]);
    intro_4.appendChild(iconBrush.node[0]);
    intro_5.appendChild(iconBrush.node[0]);
    intro_6.appendChild(iconBrush.node[0]);
    intro_7.appendChild(iconBrush.node[0]);


})

//nav
const nav = document.getElementById('nav');

burger.addEventListener('click', function () {
    nav.classList.toggle('menu-active');
});

const chevronButton = document.getElementById('navLeftBox');
chevron.addEventListener('click', function () {
    chevronButton.classList.toggle('menu-activeLeft');
});


//advertising
const firstPage = document.querySelector('.firstPage');
const secondPage = document.querySelector('.secondPage');
const thirdPage = document.querySelector('.thirdPage');
const fisrtPoint = document.getElementById('firstPoint');
const secondPoint = document.getElementById('secondPoint');
const thirdPoint = document.getElementById('thirdPoint');

function reset_animation() {
    firstPage.style.animation = 'none';
    firstPage.offsetHeight;
    firstPage.style.animation = null;
}
let animate = 1;

firstPage.addEventListener("animationend", function () {
    if (animate === 1) {
        reset_animation();
        firstPage.innerHTML = '- Szobafestés <br/> - kőműves munkák <br /> - kisebb villanyszerelés <br />- vízszerelési munkák <br />- kisebb burkolások'
        fisrtPoint.classList.remove('showWhite');
        secondPoint.classList.add('showWhite');
        animate = 2;
    }
    else if (animate == 2) {
        reset_animation();
        firstPage.innerHTML = 'Ingyenes <span>kiszállás</span>, <br />Ingyenes <span>árkalkuláció</span>, <br /> Ingyenes <span>tanácsadás</span>, <br /> amennyiben velünk <br /> képzeli el a felújítást!'
        secondPoint.classList.remove('showWhite');
        thirdPoint.classList.add('showWhite');
        animate = 0;
    }
    else {
        reset_animation();
        firstPage.innerHTML = 'Unja már, hogy nem talál normális szakembert? <br /> Úgy van vele, hogy így <span>Ön</span> is "megoldotta" volna? <br /> Akkor <span>hívjon</span> bizalommal!'
        thirdPoint.classList.remove('showWhite');
        fisrtPoint.classList.add('showWhite');
        animate = 1;
    }
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

let lastScrollTop = 0;
window.addEventListener('scroll', function (e) {

    const st = window.pageYOffset || document.documentElement.scrollTop;
    console.log(st);
    if (st > lastScrollTop) {
        pic_1.style.visibility = 'visible';
        pic_1.classList.add('zoomPic');
    }
    if (st > 1100) {
        pic_3.style.visibility = 'visible';
        pic_3.classList.add('zoomPic');
    } if (st > 1600) {
        pic_4.style.visibility = 'visible';
        pic_4.classList.add('zoomPic');
    } if (st > 2100) {
        pic_5.style.visibility = 'visible';
        pic_5.classList.add('zoomPic');
    } if (st > 2500) {
        pic_6.style.visibility = 'visible';
        pic_6.classList.add('zoomPic');
    } if (st > 2910) {
        pic_7.style.visibility = 'visible';
        pic_7.classList.add('zoomPic');
    } if (st > 3365) {
        pic_8.style.visibility = 'visible';
        pic_8.classList.add('zoomPic');
    } if (st > 3800) {
        pic_9.style.visibility = 'visible';
        pic_9.classList.add('zoomPic');
    } if (st > 4200) {
        pic_10.style.visibility = 'visible';
        pic_10.classList.add('zoomPic');
    } if (st > 4620) {
        pic_11.style.visibility = 'visible';
        pic_11.classList.add('zoomPic');
    } if (st > 5055) {
        pic_12.style.visibility = 'visible';
        pic_12.classList.add('zoomPic');
    } if (st > 5495) {
        pic_13.style.visibility = 'visible';
        pic_13.classList.add('zoomPic');
    } if (st > 5950) {
        pic_14.style.visibility = 'visible';
        pic_14.classList.add('zoomPic');
    }
    lastScrollTop = st <= 0 ? 0 : st;
}, false);


