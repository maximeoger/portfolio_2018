import 'flexboxgrid';
import './styles/styles.scss';

// fonction qui avance de 1 ou recule de 1
    // incrémente ou décrémente l'état actuel de la bare de chargement
    // change les informations en fonction de l'index du tableau
    //


// model
import {data} from './scripts/data.js'

const leftBtn = document.querySelector('.leftDir');
const rightBtn = document.querySelector('.rightDir');
const maximum = document.querySelector('.max');
const current = document.querySelector('.current');
maximum.innerHTML = "0" + data.projects.length;
let counter = 0;

let init = () => {
  current.innerHTML = "0" + counter;
}

let count = () => {

  if(counter < data.projects.length - 1){
    counter = counter + 1;
    render(counter);
  }else{
    counter = 0;
    render(counter);
  }
  current.innerHTML = "0" + counter;
}
let render = (nb) => {
  document.querySelector('.Infos_stackContainer').innerHTML = '';
  document.querySelector('.Infos_title').innerHTML = data.projects[nb].title;
  document.querySelector('.Infos_text').innerHTML = data.projects[nb].description;

  for (let i = 0; i <= data.projects[nb].stack.length - 1; i++){
    document.querySelector('.Infos_stackContainer').innerHTML += '<span class="Infos_stack">'+ data.projects[nb].stack[i] +'</span>';
  }
}
render(0);


rightBtn.addEventListener('click', function(){
  let title = document.querySelector('.Infos_title');
  let img = document.querySelector('.Displayer_img');
  count();
  title.classList.toggle('--isHidden');
  img.classList.toggle('--isChanging');
  title.addEventListener('transitionend', function(){
    this.classList.remove('--isHidden');
  });
  img.addEventListener('transitionend', function(){
    this.classList.remove('--isChanging');
  })

});
leftBtn.addEventListener('click', count);
