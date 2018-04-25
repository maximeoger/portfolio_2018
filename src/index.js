import 'flexboxgrid';
import './styles/styles.scss';
import {data} from './scripts/data.js'

const leftBtn = document.querySelector('.leftDir');
const rightBtn = document.querySelector('.rightDir');
const maximum = document.querySelector('.max');
const current = document.querySelector('.current');
const title = document.querySelector('.Infos_title');
const img = document.querySelector('.Displayer_img');

let counter = 0;

let init = () => {
  maximum.innerHTML = "0" + data.projects.length;
  current.innerHTML = "0" + (counter + 1);
  render(counter);
}

let render = (nb) => {
  document.querySelector('.Infos_stackContainer').innerHTML = '';
  document.querySelector('.Infos_title').innerHTML = data.projects[nb].title;
  document.querySelector('.Infos_text').innerHTML = data.projects[nb].description;

  for (let i = 0; i <= data.projects[nb].stack.length - 1; i++){
    document.querySelector('.Infos_stackContainer').innerHTML += '<span class="Infos_stack">'+ data.projects[nb].stack[i] +'</span>';
  }
}

init();

rightBtn.addEventListener('click', function(){
  if(counter < data.projects.length - 1){
    counter = counter + 1;
    current.innerHTML = "0" + (counter + 1);
  }else{
    counter = 0
    current.innerHTML = "0" + (counter + 1);
  }
  render(counter);
});

leftBtn.addEventListener('click', function(){
  if(counter > 0){
    counter = counter - 1;
    current.innerHTML = "0" + (counter + 1);
  }else{
    counter = data.projects.length - 1;
    current.innerHTML = "0" + (counter + 1);
  }
  render(counter);
});
