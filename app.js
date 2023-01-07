ReactDOM.render(React.createElement(App), document.getElementById('content'));

function App() {

    return React.createElement(
        "div",
        { id: "sections" },
        React.createElement(SectionHeader, null),
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
        React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                null,
                React.createElement("p", { id: "phNumber", className: "headerTxt" }),
                React.createElement(
                    "a",
                    { href: "tel:+36 30 200 4017", className: "headerTxt" },
                    "+36 30 200 4017"
                )
            ),
            React.createElement(
                "div",
                null,
                React.createElement("p", { id: "mail", className: "headerTxt" }),
                React.createElement(
                    "a",
                    { href: "mailto:racz1980@hotmail.fr", className: "headerTxt" },
                    "racz1980@hotmail.fr"
                )
            )
        ),
        React.createElement("div", { id: "burger" })
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
                    " Unod m\xE1r, hogy nem tal\xE1lasz norm\xE1lis szakembert? ",
                    React.createElement("br", null),
                    "\xDAgy vagy vele, hogy \xEDgy ",
                    React.createElement(
                        "span",
                        null,
                        "Te"
                    ),
                    " is \"megoldottad\" volna? ",
                    React.createElement("br", null),
                    "Akkor ",
                    React.createElement(
                        "span",
                        null,
                        "h\xEDvj"
                    ),
                    " bizalommal!"
                )
            ),
            React.createElement(
                "div",
                { className: "controllerBox" },
                React.createElement(
                    "a",
                    { href: "#", className: "controllers showWhite" },
                    "1"
                ),
                React.createElement(
                    "a",
                    { href: "#", className: "controllers" },
                    "2"
                ),
                React.createElement(
                    "a",
                    { href: "#", className: "controllers" },
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
            React.createElement("img", { src: "./public/img/introPic.png", alt: "", className: "pics" }),
            React.createElement(
                "p",
                { className: "introText" },
                "V\xE1llalkoz\xE1sunk m\xF6g\xF6tt kiv\xE1l\xF3 szakemberek \xE1llnak, 20 \xE9ves szakmai tapasztalattal a h\xE1tunk m\xF6g\xF6tt, munk\xE1inkra garanci\xE1t v\xE1llalva, kedvez\u0151 \xE1ron dolgozunk.",
                React.createElement("br", null),
                " Keressen meg minket szobafest\xE9s, tap\xE9t\xE1z\xE1s, burkol\xE1s, vagy kisebb k\u0151m\u0171ves, villanyszerel\xE9si munk\xE1val kapcsolatban. ",
                React.createElement("br", null),
                " ",
                React.createElement(
                    "span",
                    { style: { color: '#0c1e4d' } },
                    " V\xE1rjuk h\xEDv\xE1s\xE1t:"
                ),
                "  ",
                React.createElement(
                    "a",
                    { href: "tel:+36 30 200 4017", style: { color: '#51c2f3', textDecoration: 'none' } },
                    "+36 30 200 4017"
                ),
                " "
            )
        )
    );
}

function Promo() {
    return React.createElement(
        "section",
        { className: "promo", id: "promo" },
        React.createElement(
            "h4",
            { className: "promoTitle" },
            "Mi\xE9rt minket v\xE1lasszon?"
        ),
        React.createElement(
            "div",
            null,
            React.createElement("img", { src: "./public/img/promoPic.png", alt: "promo", className: "promoPic" })
        ),
        React.createElement(
            "div",
            null,
            React.createElement(
                "p",
                { id: "promoText" },
                "- Felm\xE9r\xE9s sor\xE1n amennyiben k\xE9ri, szakmai tan\xE1csot adunk, alternat\xEDv\xE1kat k\xEDn\xE1lunk ",
                React.createElement("br", null),
                "- 100%-ban megb\xEDzhat\xF3 szakemberek vagyunk ",
                React.createElement("br", null),
                "- Min\u0151s\xE9gi munk\xE1t v\xE9gz\xFCnk megfizethet\u0151 \xE1ron ",
                React.createElement("br", null),
                "- A munka elv\xE9gz\xE9s\xE9t k\xF6vet\u0151en kitakar\xEDtunk magunk ut\xE1n, rendet rakunk ",
                React.createElement("br", null),
                "- Csendesen dolgozunk, \xFCgyel\xFCnk a h\xE1z nyugalm\xE1ra ",
                React.createElement("br", null),
                "- Pontosan, a megbesz\xE9lt id\u0151pontban \xE9rkez\xFCnk ",
                React.createElement("br", null),
                "- munk\xE1nkat 20 \xE9ves szakmai tapasztalattal v\xE9gezz\xFCk"
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
            React.createElement("img", { src: "./public/img/img_2.jpg", alt: "img_2", id: "img_1", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_1.jpg", alt: "img_1", id: "img_2", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_3.jpg", alt: "img_3", id: "img_3", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_4.jpg", alt: "img_4", id: "img_4", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_5.jpg", alt: "img_5", id: "img_5", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_6.jpg", alt: "img_6", id: "img_6", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_7.jpg", alt: "img_7", id: "img_7", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_8.jpg", alt: "img_8", id: "img_8", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_9.jpg", alt: "img_9", id: "img_9", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_10.jpg", alt: "img_10", id: "img_10", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_11.jpg", alt: "img_11", id: "img_11", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_12.jpg", alt: "img_12", id: "img_12", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_13.jpg", alt: "img_13", id: "img_13", className: "galleryItems" }),
            React.createElement("img", { src: "./public/img/img_14.jpg", alt: "img_14", id: "img_14", className: "galleryItems" })
        )
    );
}