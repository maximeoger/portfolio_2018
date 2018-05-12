import 'flexboxgrid';
import './styles/styles.scss';
import {data} from './scripts/data.js';

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
let width = 0;

let init = () => {
  selectors.maximum.innerHTML = "0" + data.projects.length;
  selectors.current.innerHTML = "0" + (counter + 1);
  render(counter);
  progressCounter();
}

let render = (nb) => {
  document.querySelector('.Infos_stackContainer').innerHTML = '';
  document.querySelector('.Infos_title').innerHTML = data.projects[nb].title;
  document.querySelector('.Infos_text').innerHTML = data.projects[nb].description;

  for (let i = 0; i <= data.projects[nb].stack.length - 1; i++){
    document.querySelector('.Infos_stackContainer').innerHTML += '<span class="Infos_stack">'+ data.projects[nb].stack[i] +'</span>';
  }
}

let progressCounter = () => {

  let timer = setInterval( () => {
    width = width + 1;
    selectors.progressFill.style.width = width + "%";
    if(width >= 100){
      forward();
      width = 0;
    }
  }, 100);
}

init();

let forward = () => {
  if(counter < data.projects.length - 1){
    counter = counter + 1;
    selectors.current.innerHTML = "0" + (counter + 1);
  }else{
    counter = 0
    selectors.current.innerHTML = "0" + (counter + 1);
  }
  uiAnimation();
}

let backward = () => {
  if(counter > 0){
    counter = counter - 1;
    selectors.current.innerHTML = "0" + (counter + 1);
  }else{
    counter = data.projects.length - 1;
    selectors.current.innerHTML = "0" + (counter + 1);
  }
  uiAnimation();
}

let uiAnimation = () => {
  let anim = anime.timeline();
  anim.add({
    targets: '.Infos_title',
    translateY: 50,
    duration: 400,
    complete: function(){
      render(counter);
    }
  })
  .add({
    targets: '.Infos_title',
    translateY: 0,
    duration: 400
  })
}

selectors.rightBtn.addEventListener('click', function(){
  forward();
  titleAnim.start;
  width = 0;
});

selectors.leftBtn.addEventListener('click', function(){
  backward();
  titleAnim.start;
  width = 0;
});
