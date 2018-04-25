import 'flexboxgrid';
import './styles/styles.scss';
import {data} from './scripts/data.js';

const selectors = {
  leftBtn : document.querySelector('.leftDir'),
  rightBtn : document.querySelector('.rightDir'),
  maximum : document.querySelector('.max'),
  current : document.querySelector('.current'),
  title : document.querySelector('.Infos_title'),
  img : document.querySelector('.Displayer_img')
}

let counter = 0;

let init = () => {
  selectors.maximum.innerHTML = "0" + data.projects.length;
  selectors.current.innerHTML = "0" + (counter + 1);
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

selectors.rightBtn.addEventListener('click', function(){
  if(counter < data.projects.length - 1){
    counter = counter + 1;
    selectors.current.innerHTML = "0" + (counter + 1);
  }else{
    counter = 0
    selectors.current.innerHTML = "0" + (counter + 1);
  }
  render(counter);
});

selectors.leftBtn.addEventListener('click', function(){
  if(counter > 0){
    counter = counter - 1;
    selectors.current.innerHTML = "0" + (counter + 1);
  }else{
    counter = data.projects.length - 1;
    selectors.current.innerHTML = "0" + (counter + 1);
  }
  render(counter);
});
