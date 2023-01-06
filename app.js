ReactDOM.render(React.createElement(App), document.getElementById('content'));

function App() {

    return React.createElement(
        "div",
        { id: "sections" },
        React.createElement(SectionHeader, null),
        React.createElement(SectionNav, null),
        React.createElement(SectionAdvertising, null),
        React.createElement(SectionIntro, null)
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
                    { href: "#", className: "navItems" },
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
                    { href: "#", className: "navItems" },
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
                    { href: "#", className: "navItems" },
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
        { className: "advertising" },
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