ReactDOM.render(React.createElement(App), document.getElementById('content'));

function App() {
    
    return <div id="sections">
    <SectionHeader></SectionHeader>
    <SectionNav></SectionNav>
    </div>
}


function SectionHeader() {
    return <header >
        <div>
            <div>
                <p id="phNumber" className="headerTxt"></p>
                <p className="headerTxt">+36 30 200 4017</p>    
            </div>
            <div>
                <p id="mail" className="headerTxt"></p>
                <p className="headerTxt">racz1980@hotmail.fr</p>    
            </div>    
        </div>
        
        <div id="burger">
        </div>
        
    </header>
}

function SectionNav() {
    return <nav className="menu-active"> 
        <ul className="menu">
            <li><a href="#">Kezdőlap</a> <hr /></li>
            <li><a href="#">Rólunk</a> <hr /></li>
            <li><a href="#">Galéria</a> <hr /></li>
            <li><a href="#">Kapcsolat</a> <hr /></li>
        </ul>
    </nav>
}