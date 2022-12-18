ReactDOM.render(React.createElement(App), document.getElementById('content'));

function App() {

    return React.createElement(
        "div",
        { id: "sections" },
        React.createElement(SectionHeader, null)
    );
}

function SectionHeader() {
    return React.createElement(
        "header",
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
    );
}