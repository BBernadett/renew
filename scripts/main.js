'use strict'
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

    phNumber.appendChild(iconPhone.node[0]);
    mail.appendChild(iconMail.node[0])
})