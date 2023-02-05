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
                <p id="user" className="headerTxt"></p>
                <p className="headerTxt"> Rácz-Molnár András</p>
            </div>
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
                <h4 className="firstPage"> Unja már, hogy nem talál normális szakembert? <br />
                Úgy van vele, hogy így <span>Ön</span> is "megoldotta" volna? <br />
                Akkor <span>hívjon</span> bizalommal!
                </h4>
            </div>
            
            <div className="controllerBox">
                <a href="#" className="controllers showWhite" id="firstPoint">1</a>
                <a href="#" className="controllers" id="secondPoint">2</a>
                <a href="#" className="controllers" id="thirdPoint">3</a>
            </div>

        </div> 
    </section>
} 

function SectionIntro() {
    return <section className="intro">
<div>   
<h4 className="promoTitle">Miért minket válasszon?</h4>
<div className="box">
    <span className="i1">
        <img src="./public/img/can_1.png" alt="can_1" className="buckets" />
    </span>
    <span className="i2">
        <img src="./public/img/can_2.png" alt="can_2" className="buckets"/>
    </span>
    <span className="i3">
        <img src="./public/img/can_3.png" alt="can_3" className="buckets" />
    </span>
    <span className="i4">
        <img src="./public/img/can_4.png" alt="can_4" className="buckets"/>
    </span>
    <span className="i5">
        <img src="./public/img/can_5.png" alt="can_5" className="buckets"/>
    </span>
    <span className="i6">
        <img src="./public/img/can_6.png" alt="can_6" className="buckets" />
    </span>
    <span className="i7">
        <img src="./public/img/can_7.png" alt="can_7" className="buckets"/>
    </span>

</div>
<p className="introText">Vállalkozásunk mögött kiváló <span className="introPull"> szakemberek</span> állnak, <span className="introPull">20 éves </span> szakmai <span className="introPull">tapasztalattal </span>  a hátunk mögött,
munkáinkra garanciát vállalva, 
<span className="introPull"> kedvező áron</span>  dolgozunk.<br /> Keressen meg minket szobafestés, tapétázás, hideg-meleg burkolás, vagy kisebb kőműves, villanyszerelési munkával kapcsolatban. <br /> <span className="introPull"> Várjuk hívását:</span>  <a href="tel:+36 30 200 4017" style={{color: '#0c1e4d', fontWeight: 'bold'}} >+3630 200 4017</a> </p>
</div>
<div>
                <img src="./public/img/promoPic.jpg" alt="promo" className="promoPic" />
            </div>
            <div id="promoText" className="brushIcon">
                <div className="introParags">
                    <p id="intro_1" className="brushIcon"></p>
                    <p className="ParagContent">Felmérés során amennyiben kéri, szakmai tanácsot adunk, alternatívákat kínálunk  
                    </p> 
                </div>
                
                <div className="introParags">
                    <p id="intro_2" className="brushIcon"></p>
                    <p className="ParagContent">
                    100%-ban megbízható szakemberek vagyunk 
                    </p>
                </div>
                <div className="introParags">
                    <p id="intro_3" className="brushIcon"></p>
                    <p className="ParagContent">
                    Minőségi munkát végzünk megfizethető áron 
                    </p>
                </div>
                <div className="introParags">
                    <p id="intro_4" className="brushIcon"></p>
                    <p className="ParagContent">    
                    A munka elvégzését követően kitakarítunk magunk után, rendet rakunk 
                </p>
                </div>
                <div className="introParags">
                    <p id="intro_5" className="brushIcon"></p>
                    <p className="ParagContent">
                    Csendesen dolgozunk, ügyelünk a ház nyugalmára 
                    </p>
                </div>
                <div className="introParags">
                    <p id="intro_6" className="brushIcon"></p>
                    <p className="ParagContent">
                    Pontosan, a megbeszélt időpontban érkezünk 
                    </p>
                </div>
                <div className="introParags">
                    <p id="intro_7" className="brushIcon"></p>    
                    <p className="ParagContent">
                    Munkánkat 20 éves szakmai tapasztalattal végezzük
                    </p>
                </div>

            </div>
    </section>
}

function Promo(){
    return <section className="promo promoBox" id="promo">
        <div>
            <h3>Lépjen velünk kapcsolatba!</h3>
            <p>Ha kérdése van, vagy ajánlatot szeretne kérni.</p>
            <h4>Rácz-Molnár András</h4>
            <h5><a href="tel:+36 30 200 4017" className="headerTxt">Telefonszám: +36 30 200 4017</a></h5>
            <h5> <a href="mailto:racz1980@hotmail.fr" className="headerTxt">Email: racz1980@hotmail.fr </a></h5>

                   
        </div>
            
            </section>
}

function Gallery(){
    return <section className="gallery" id="gallery">
 <div className="galleryBox">
 <img src="./public/img/img_14.jpg" alt="img_2" id="img_1" className="galleryItems"/>
    <img src="./public/img/img_3.jpg" alt="img_3" id="img_3" className="galleryItems"/>
    <img src="./public/img/img_4.jpg" alt="img_4" id="img_4" className="galleryItems"/>
    <img src="./public/img/img_10.jpg" alt="img_5" id="img_5" className="galleryItems"/>
    <img src="./public/img/img_13.jpg" alt="img_6" id="img_6" className="galleryItems"/>
    <img src="./public/img/img_8.jpg" alt="img_7" id="img_7" className="galleryItems"/>
    <img src="./public/img/img_7.jpg" alt="img_8" id="img_8" className="galleryItems"/>
    <img src="./public/img/img_6.jpg" alt="img_9" id="img_9" className="galleryItems"/>
    <img src="./public/img/img_5.jpg" alt="img_10" id="img_10" className="galleryItems"/>
    <img src="./public/img/img_11.jpg" alt="img_11" id="img_11" className="galleryItems"/>
    <img src="./public/img/img_12.jpg" alt="img_12" id="img_12" className="galleryItems"/>
    <img src="./public/img/img_9.jpg" alt="img_13" id="img_13" className="galleryItems"/>
    <img src="./public/img/img_2.jpeg" alt="img_14" id="img_14" className="galleryItems"/>

 </div>
    </section>
}