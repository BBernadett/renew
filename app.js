ReactDOM.render(React.createElement(App), document.getElementById('content'));

function App() {

    return React.createElement(
        "div",
        { id: "sections" },
        React.createElement(SectionHeader, null),
        React.createElement(SectionNav, null)
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
                    "p",
                    { className: "headerTxt" },
                    "+36 30 200 4017"
                )
            ),
            React.createElement(
                "div",
                null,
                React.createElement("p", { id: "mail", className: "headerTxt" }),
                React.createElement(
                    "p",
                    { className: "headerTxt" },
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
        { className: "menu-active" },
        React.createElement(
            "ul",
            { className: "menu" },
            React.createElement(
                "li",
                null,
                React.createElement(
                    "a",
                    { href: "#" },
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
                    { href: "#" },
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
                    { href: "#" },
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
                    { href: "#" },
                    "Kapcsolat"
                ),
                " ",
                React.createElement("hr", null)
            )
        )
    );
}