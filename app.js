ReactDOM.render(React.createElement(App), document.getElementById('content'));

function App() {

    return React.createElement(
        "div",
        { id: "sections" },
        React.createElement(SectionHeader, null),
        React.createElement(SectionChevron, null),
        React.createElement(SectionNav, null),
        React.createElement(SectionAdvertising, null),
        React.createElement(SectionIntro, null),
        React.createElement(Promo, null),
        React.createElement(Gallery, null)
    );
}

function SectionHeader() {
    return React.createElement(
        "header",
        null,
        React.createElement("div", { id: "chevron" }),
        React.createElement(
            "div",
            { className: "menuLeftItems" },
            React.createElement("p", { id: "user", className: "navItems" }),
            React.createElement(
                "p",
                { className: "navItems" },
                " R\xE1cz-Moln\xE1r Andr\xE1s"
            )
        ),
        React.createElement("div", { id: "burger" })
    );
}

function SectionChevron() {
    return React.createElement(
        "div",
        { id: "navLeftBox", className: "navLeftBox" },
        React.createElement(
            "ul",
            { className: "menuLeft" },
            React.createElement(
                "li",
                { className: "menuLeftItems" },
                React.createElement("p", { id: "phNumber", className: "navItems" }),
                React.createElement(
                    "a",
                    { href: "tel:+36 30 200 4017", className: "navItems" },
                    "+36 30 200 4017"
                )
            ),
            React.createElement(
                "li",
                { className: "menuLeftItems" },
                React.createElement("p", { id: "mail", className: "navItems" }),
                React.createElement(
                    "a",
                    { href: "mailto:racz1980@hotmail.fr", className: "navItems" },
                    "racz1980@hotmail.fr"
                )
            )
        )
    );
}

function SectionNav() {
    return React.createElement(
        "nav",
        { id: "nav" },
        React.createElement(
            "ul",
            { className: "menu" },
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#advertising", className: "navItems" },
                    "Kezd\u0151lap"
                ),
                " ",
                React.createElement("hr", null)
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#promo", className: "navItems" },
                    "R\xF3lunk"
                ),
                " ",
                React.createElement("hr", null)
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#gallery", className: "navItems" },
                    "Gal\xE9ria"
                ),
                " ",
                React.createElement("hr", null)
            ),
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#", className: "navItems" },
                    "Kapcsolat"
                ),
                " ",
                React.createElement("hr", null)
            )
        )
    );
}

function SectionAdvertising() {
    return React.createElement(
        "section",
        { className: "advertising", id: "advertising" },
        React.createElement(
            "div",
            { className: "advertContent" },
            React.createElement(
                "div",
                { className: "advertBox" },
                React.createElement(
                    "h4",
                    { className: "firstPage" },
                    " Unja m\xE1r, hogy nem tal\xE1l norm\xE1lis szakembert? ",
                    React.createElement("br", null),
                    "\xDAgy van vele, hogy \xEDgy ",
                    React.createElement(
                        "span",
                        null,
                        "\xD6n"
                    ),
                    " is \"megoldotta\" volna? ",
                    React.createElement("br", null),
                    "Akkor ",
                    React.createElement(
                        "span",
                        null,
                        "h\xEDvjon"
                    ),
                    " bizalommal!"
                )
            ),
            React.createElement(
                "div",
                { className: "controllerBox" },
                React.createElement(
                    "a",
                    { href: "#", className: "controllers showWhite", id: "firstPoint" },
                    "1"
                ),
                React.createElement(
                    "a",
                    { href: "#", className: "controllers", id: "secondPoint" },
                    "2"
                ),
                React.createElement(
                    "a",
                    { href: "#", className: "controllers", id: "thirdPoint" },
                    "3"
                )
            )
        )
    );
}

function SectionIntro() {
    return React.createElement(
        "section",
        { className: "intro" },
        React.createElement(
            "div",
            null,
            React.createElement(
                "h4",
                { className: "promoTitle" },
                "Mi\xE9rt minket v\xE1lasszon?"
            ),
            React.createElement(
                "div",
                { className: "box" },
                React.createElement(
                    "span",
                    { className: "i1" },
                    React.createElement("img", { src: "./public/img/can_1.png", alt: "can_1", className: "buckets" })
                ),
                React.createElement(
                    "span",
                    { className: "i2" },
                    React.createElement("img", { src: "./public/img/can_2.png", alt: "can_2", className: "buckets" })
                ),
                React.createElement(
                    "span",
                    { className: "i3" },
                    React.createElement("img", { src: "./public/img/can_3.png", alt: "can_3", className: "buckets" })
                ),
                React.createElement(
                    "span",
                    { className: "i4" },
                    React.createElement("img", { src: "./public/img/can_4.png", alt: "can_4", className: "buckets" })
                ),
                React.createElement(
                    "span",
                    { className: "i5" },
                    React.createElement("img", { src: "./public/img/can_5.png", alt: "can_5", className: "buckets" })
                ),
                React.createElement(
                    "span",
                    { className: "i6" },
                    React.createElement("img", { src: "./public/img/can_6.png", alt: "can_6", className: "buckets" })
                ),
                React.createElement(
                    "span",
                    { className: "i7" },
                    React.createElement("img", { src: "./public/img/can_7.png", alt: "can_7", className: "buckets" })
                )
            ),
            React.createElement(
                "p",
                { className: "introText" },
                "V\xE1llalkoz\xE1sunk m\xF6g\xF6tt kiv\xE1l\xF3 ",
                React.createElement(
                    "span",
                    { className: "introPull" },
                    " szakemberek"
                ),
                " \xE1llnak, ",
                React.createElement(
                    "span",
                    { className: "introPull" },
                    "20 \xE9ves "
                ),
                " szakmai ",
                React.createElement(
                    "span",
                    { className: "introPull" },
                    "tapasztalattal "
                ),
                "  a h\xE1tunk m\xF6g\xF6tt, munk\xE1inkra garanci\xE1t v\xE1llalva,",
                React.createElement(
                    "span",
                    { className: "introPull" },
                    " kedvez\u0151 \xE1ron"
                ),
                "  dolgozunk.",
                React.createElement("br", null),
                " Keressen meg minket szobafest\xE9s, tap\xE9t\xE1z\xE1s, hideg-meleg burkol\xE1s, vagy kisebb k\u0151m\u0171ves, villanyszerel\xE9si munk\xE1val kapcsolatban. ",
                React.createElement("br", null),
                " ",
                React.createElement(
                    "span",
                    { className: "introPull" },
                    " V\xE1rjuk h\xEDv\xE1s\xE1t:"
                ),
                "  ",
                React.createElement(
                    "a",
                    { href: "tel:+36 30 200 4017", style: { color: '#71c0e2', fontWeight: 'bold', textShadow: '1px 1px 1px rgb(113, 192, 226), 1px 2px 1px #212227, 0px 8px 16px #212227' } },
                    "+3630 200 4017"
                )
            )
        ),
        React.createElement(
            "div",
            null,
            React.createElement("img", { src: "./public/img/promoPic.jpg", alt: "promo", className: "promoPic" })
        ),
        React.createElement(
            "div",
            { id: "promoText", className: "brushIcon" },
            React.createElement(
                "div",
                { className: "introParags" },
                React.createElement("p", { id: "intro_1", className: "brushIcon" }),
                React.createElement(
                    "p",
                    { className: "ParagContent" },
                    "Felm\xE9r\xE9s sor\xE1n amennyiben k\xE9ri, szakmai tan\xE1csot adunk, alternat\xEDv\xE1kat k\xEDn\xE1lunk"
                )
            ),
            React.createElement(
                "div",
                { className: "introParags" },
                React.createElement("p", { id: "intro_2", className: "brushIcon" }),
                React.createElement(
                    "p",
                    { className: "ParagContent" },
                    "100%-ban megb\xEDzhat\xF3 szakemberek vagyunk"
                )
            ),
            React.createElement(
                "div",
                { className: "introParags" },
                React.createElement("p", { id: "intro_3", className: "brushIcon" }),
                React.createElement(
                    "p",
                    { className: "ParagContent" },
                    "Min\u0151s\xE9gi munk\xE1t v\xE9gz\xFCnk megfizethet\u0151 \xE1ron"
                )
            ),
            React.createElement(
                "div",
                { className: "introParags" },
                React.createElement("p", { id: "intro_4", className: "brushIcon" }),
                React.createElement(
                    "p",
                    { className: "ParagContent" },
                    "A munka elv\xE9gz\xE9s\xE9t k\xF6vet\u0151en kitakar\xEDtunk magunk ut\xE1n, rendet rakunk"
                )
            ),
            React.createElement(
                "div",
                { className: "introParags" },
                React.createElement("p", { id: "intro_5", className: "brushIcon" }),
                React.createElement(
                    "p",
                    { className: "ParagContent" },
                    "Csendesen dolgozunk, \xFCgyel\xFCnk a h\xE1z nyugalm\xE1ra"
                )
            ),
            React.createElement(
                "div",
                { className: "introParags" },
                React.createElement("p", { id: "intro_6", className: "brushIcon" }),
                React.createElement(
                    "p",
                    { className: "ParagContent" },
                    "Pontosan, a megbesz\xE9lt id\u0151pontban \xE9rkez\xFCnk"
                )
            ),
            React.createElement(
                "div",
                { className: "introParags" },
                React.createElement("p", { id: "intro_7", className: "brushIcon" }),
                React.createElement(
                    "p",
                    { className: "ParagContent" },
                    "Munk\xE1nkat 20 \xE9ves szakmai tapasztalattal v\xE9gezz\xFCk"
                )
            )
        )
    );
}

function Promo() {
    return React.createElement(
        "section",
        { className: "promo promoBox", id: "promo" },
        React.createElement(
            "div",
            null,
            React.createElement(
                "h3",
                null,
                "L\xE9pjen vel\xFCnk kapcsolatba!"
            ),
            React.createElement(
                "p",
                null,
                "Ha k\xE9rd\xE9se van, vagy aj\xE1nlatot szeretne k\xE9rni."
            ),
            React.createElement(
                "h4",
                null,
                "R\xE1cz-Moln\xE1r Andr\xE1s"
            ),
            React.createElement(
                "h5",
                null,
                React.createElement(
                    "a",
                    { href: "tel:+36 30 200 4017", className: "headerTxt" },
                    "Telefonsz\xE1m: +36 30 200 4017"
                )
            ),
            React.createElement(
                "h5",
                null,
                " ",
                React.createElement(
                    "a",
                    { href: "mailto:racz1980@hotmail.fr", className: "headerTxt" },
                    "Email: racz1980@hotmail.fr "
                )
            )
        )
    );
}

function Gallery() {
    return React.createElement(
        "section",
        { className: "gallery", id: "gallery" },
        React.createElement(
            "div",
            { className: "galleryBox" },
            React.createElement("img", { src: "./public/img/img_14.jpg", alt: "img_2", id: "img_1", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_3.jpg", alt: "img_3", id: "img_3", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_4.jpg", alt: "img_4", id: "img_4", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_10.jpg", alt: "img_5", id: "img_5", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_13.jpg", alt: "img_6", id: "img_6", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_8.jpg", alt: "img_7", id: "img_7", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_7.jpg", alt: "img_8", id: "img_8", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_6.jpg", alt: "img_9", id: "img_9", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_5.jpg", alt: "img_10", id: "img_10", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_11.jpg", alt: "img_11", id: "img_11", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_12.jpg", alt: "img_12", id: "img_12", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_9.jpg", alt: "img_13", id: "img_13", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_2.jpeg", alt: "img_14", id: "img_14", className: "galleryItems" })
        )
    );
}