ReactDOM.render(React.createElement(App), document.getElementById('content'));

function App() {
    
    return <div id="sections">
    <SectionHeader></SectionHeader>
    <SectionNav></SectionNav>
    <SectionAdvertising></SectionAdvertising>
    <SectionIntro></SectionIntro>
    </div>
}


function SectionHeader() {
    return <header >
        <div>
            <div>
                <p id="phNumber" className="headerTxt"></p>
                <a href="tel:+36 30 200 4017" className="headerTxt">+36 30 200 4017</a>    
            </div>
            <div>
                <p id="mail" className="headerTxt"></p>
                <a href="mailto:racz1980@hotmail.fr" className="headerTxt">racz1980@hotmail.fr</a>     
            </div>    
        </div>
        
        <div id="burger">
        </div>
        
    </header>
}

function SectionNav() {
    return <nav id="nav"> 
        <ul className="menu">
            <li><a href="#" className="navItems">Kezdőlap</a> <hr /></li>
            <li><a href="#" className="navItems">Rólunk</a> <hr /></li>
            <li><a href="#"className="navItems">Galéria</a> <hr /></li>
            <li><a href="#" className="navItems">Kapcsolat</a> <hr /></li>
        </ul>
    </nav>
}

function SectionAdvertising() {
    return <section className="advertising">
        <div className="advertContent">
            <div className="advertBox">
                <h4 className="firstPage"> Unod már, hogy nem találasz normális szakembert? <br />
                Úgy vagy vele, hogy így <span>Te</span> is "megoldottad" volna? <br />
                Akkor <span>hívj</span> bizalommal!
                </h4>
                <h4 className="secondPage">
                    - Szobafestés <br />
                    - kőműves munkák <br />
                    - kisebb villanyszerelés <br />
                    - vízszerelési munkák <br />
                    - kisebb burkolások
                </h4>
                <h4 className="thirdPage">
                    Ingyenes <span>kiszállás</span>, <br />
                    Ingyenes <span>árkalkuláció</span>, <br />
                    Ingyenes <span>tanácsadás</span>, <br />
                    amennyiben velünk <br />
                    képzeled el a felújítást!
                </h4>
            </div>
            
            <div className="controllerBox">
                <a href="#" className="controllers showWhite">1</a>
                <a href="#" className="controllers">2</a>
                <a href="#" className="controllers">3</a>
            </div>

        </div> 
    </section>
} 

function SectionIntro() {
    return <section className="intro">
<div>   

<img src="./public/img/introPic.png" alt="" className="pics" />
<p className="introText">Vállalkozásunk mögött kiváló szakemberek állnak, 20 éves szakmai tapasztalattal a hátunk mögött,
munkáinkra garanciát vállalva,
kedvező áron dolgozunk.<br /> Keressen meg minket szobafestés, tapétázás, burkolás, vagy kisebb kőműves, villanyszerelési munkával kapcsolatban. <br /> <span style={{color: '#0c1e4d'}}> Várjuk hívását:</span>  <a href="tel:+36 30 200 4017" style={{color: '#51c2f3', textDecoration: 'none'}} >+36 30 200 4017</a> </p>

</div>
    </section>
}