ReactDOM.render(React.createElement(App), document.getElementById('content'));

function App() {
    
    return <div id="sections">
    <SectionHeader></SectionHeader>
    <SectionNav></SectionNav>
    <SectionAdvertising></SectionAdvertising>
    <SectionIntro></SectionIntro>
    <Promo></Promo>
    <Gallery></Gallery>
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
            <li><a href="#advertising" className="navItems">Kezdőlap</a> <hr /></li>
            <li><a href="#promo" className="navItems">Rólunk</a> <hr /></li>
            <li><a href="#gallery"className="navItems">Galéria</a> <hr /></li>
            <li><a href="#" className="navItems">Kapcsolat</a> <hr /></li>
        </ul>
    </nav>
}

function SectionAdvertising() {
    return <section className="advertising" id="advertising">
        <div className="advertContent">
            <div className="advertBox">
                <h4 className="firstPage"> Unod már, hogy nem találasz normális szakembert? <br />
                Úgy vagy vele, hogy így <span>Te</span> is "megoldottad" volna? <br />
                Akkor <span>hívj</span> bizalommal!
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

function Promo(){
    return <section className="promo" id="promo">
        <h4 className="promoTitle">Miért minket válasszon?</h4>
            <div>
                <img src="./public/img/promoPic.png" alt="promo" className="promoPic" />
            </div>
            <div>
                <p id="promoText">
                    - Felmérés során amennyiben kéri, szakmai tanácsot adunk, alternatívákat kínálunk <br />
                    - 100%-ban megbízható szakemberek vagyunk <br />
                    - Minőségi munkát végzünk megfizethető áron <br />
                    - A munka elvégzését követően kitakarítunk magunk után, rendet rakunk <br />
                    - Csendesen dolgozunk, ügyelünk a ház nyugalmára <br />
                    - Pontosan, a megbeszélt időpontban érkezünk <br />
                    - munkánkat 20 éves szakmai tapasztalattal végezzük  
                </p>
            </div>
            </section>
}

function Gallery(){
    return <section className="gallery" id="gallery">
 <div className="galleryBox">
 <img src="./public/img/img_2.jpg" alt="img_2" id="img_1" className="galleryItems"/>
    <img src="./public/img/img_1.jpg" alt="img_1" id="img_2" className="galleryItems"/>
    <img src="./public/img/img_3.jpg" alt="img_3" id="img_3" className="galleryItems"/>
    <img src="./public/img/img_1.jpg" alt="img_4" id="img_4" className="galleryItems"/>
    <img src="./public/img/img_5.jpg" alt="img_5" id="img_5" className="galleryItems"/>
    <img src="./public/img/img_6.jpg" alt="img_6" id="img_6" className="galleryItems"/>
    <img src="./public/img/img_7.jpg" alt="img_7" id="img_7" className="galleryItems"/>
    <img src="./public/img/img_8.jpg" alt="img_8" id="img_8" className="galleryItems"/>
    <img src="./public/img/img_9.jpg" alt="img_9" id="img_9" className="galleryItems"/>
    <img src="./public/img/img_10.jpg" alt="img_10" id="img_10" className="galleryItems"/>
    <img src="./public/img/img_11.jpg" alt="img_11" id="img_11" className="galleryItems"/>
    <img src="./public/img/img_12.jpg" alt="img_12" id="img_12" className="galleryItems"/>
    <img src="./public/img/img_13.jpg" alt="img_13" id="img_13" className="galleryItems"/>
    <img src="./public/img/img_14.jpg" alt="img_14" id="img_14" className="galleryItems"/>

 </div>
    </section>
}