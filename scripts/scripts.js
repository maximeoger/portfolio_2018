/*
var header_link = document.querySelector('.header__container__link');
var header_name = document.querySelector('.header__container__logo__name');
var header_logo = document.querySelector('.header__container__logo__svg');
var blotter_text = document.querySelector(".bg__animate");
var randomHello = data.welcome[Math.floor(Math.random() * Math.floor(data.welcome.length))];
var AboutTitle = document.querySelector('.about__container__title span');
*/


const selectors = {
  leftBtn : document.querySelector('.leftDir'),
  rightBtn : document.querySelector('.rightDir'),
  maximum : document.querySelector('.max'),
  current : document.querySelector('.current'),
  title : document.querySelector('.Infos_title'),
  img : document.querySelector('.Displayer_img'),
  progressFill : document.querySelector('.Displayer_counterFill')
}

let counter = 0;

let textEffect = function (name){

let text = new Blotter.Text(name, {
      family : " 'Raleway', sans-serif",
      size : 200,
      fill : "#00000",
      weight: 700
});

let material = new Blotter.LiquidDistortMaterial();

let blotter = new Blotter(material, {
  texts : text
});

let elem = document.querySelector(".Distortion_bg");
let scope = blotter.forText(text);

scope.appendTo(elem);

}

let init = function(){

  selectors.maximum.innerHTML = "0" + data.projects.length;
  selectors.current.innerHTML = "0" + (counter + 1);
  render(counter);


  anime({
    targets: '.Infos',
    opacity: 1,
    easing: 'easeOutExpo',
    translateY: -25,
    delay: 200
  })

  anime({
    targets: '.Displayer_img',
    easing: 'easeOutExpo',
    opacity: 1,
    translateY: -25,
    delay: 400
  })
}

let render = function(nb) {
  document.querySelector('.Infos_stackContainer').innerHTML = '';
  document.querySelector('.Infos_title').innerHTML = data.projects[nb].title;
  document.querySelector('.Infos_text').innerHTML = data.projects[nb].description;
  textEffect(data.projects[nb].title);

  anime({
    targets: ".Infos_title",
    translateY: 0,
    duration: 500,
    easing: 'easeInExpo'
  });
  anime({
    targets: '.Displayer_img',
    scale: 1,
    duration: 500,
    easing: 'easeOutExpo'
  })
  anime({
    targets: '.Infos_stackContainer, .Infos_text',
    opacity: 1,
    duration: 200,
    easing: 'linear'
  })


  for (let i = 0; i <= data.projects[nb].stack.length - 1; i++){
    document.querySelector('.Infos_stackContainer').innerHTML += '<span class="Infos_stack">'+ data.projects[nb].stack[i] +'</span>';
  }
}

let progressFillAnimation = anime({
  targets: '.Displayer_counterFill',
  width: '100%',
  loop: true,
  duration: (1000 * 10),
  easing: 'linear',
  update: function(){
    if (selectors.progressFill.style.width === '100%'){
      forward();
    }
  }
});

init();

let forward = function(){

  if(counter < data.projects.length - 1){
    counter = counter + 1;
    selectors.current.innerHTML = "0" + (counter + 1);
  }else{
    counter = 0
    selectors.current.innerHTML = "0" + (counter + 1);
  }
  uiAnimation();
}

let backward = function(){

  if(counter > 0){
    counter = counter - 1;
    selectors.current.innerHTML = "0" + (counter + 1);
  }else{
    counter = data.projects.length - 1;
    selectors.current.innerHTML = "0" + (counter + 1);
  }
  uiAnimation();
}

let uiAnimation = function(){

  anime({
    targets: '.Infos_title',
    translateY: 50,
    duration: 500,
    easing: 'easeOutExpo',
    complete: function(){
      render(counter);
    }
  })

  anime({
    targets: '.Displayer_img',
    scale: 0.9,
    duration: 500,
    easing: 'easeOutExpo'
  })

  anime({
    targets: '.Infos_stackContainer, .Infos_text',
    opacity: 0,
    duration: 200,
    easing: 'linear'
  })
}

selectors.rightBtn.addEventListener('click', function(){
  progressFillAnimation.restart();
  forward();
});

selectors.leftBtn.addEventListener('click', function(){
  progressFillAnimation.restart();
  backward();
});
