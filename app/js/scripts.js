var header_link = document.querySelector('.header__container__link');
var header_name = document.querySelector('.header__container__logo__name');
var header_logo = document.querySelector('.header__container__logo__svg');
var blotter_text = document.querySelector(".bg__animate");
var randomHello = data.welcome[Math.floor(Math.random() * Math.floor(data.welcome.length))];
var AboutTitle = document.querySelector('.about__container__title span');
    

var text = new Blotter.Text( randomHello , {
      family : " 'Raleway', sans-serif",
      size : 150,
      fill : "#00000",
      weight: 700
});

var material = new Blotter.LiquidDistortMaterial();

var blotter = new Blotter(material, { 
      texts : text
});

var scope = blotter.forText(text);
scope.appendTo(blotter_text);

function initAbout () {
    header_name.style.color = "#F8FAF8";
    header_logo.setAttribute("src", "./img/logo-white.svg");
    AboutTitle.innerHTML = randomHello;
};


initAbout();