ReactDOM.render(React.createElement(App), document.getElementById('content'));

function App() {
    
    return <div id="sections">
    <SectionHeader></SectionHeader>
    </div>
}

function SectionHeader() {
    return <header>
        <div>
        <p id="phNumber" className="headerTxt"></p>
        <p className="headerTxt">+36 30 200 4017</p>    
        </div>
        <div>
        <p id="mail" className="headerTxt"></p>
        <p className="headerTxt">racz1980@hotmail.fr</p>    
        </div>
    </header>
        
    
}