import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let who = ['Mi baño', 'Mi Casa', 'Mi carro', 'Mi ducha'];
  let action = ['exploto', 'desaparecio', 'se Daño', 'huyo'];
  let what = ['por culpa de', 'por', 'despues'];
  let when = ['que estudiaba en 4geeks', 'que dormia en mi casa', 'que comia arepas', 'que jugaba al futbol', 'que manejaba el carro'];

  let excusa = `${who[Math.floor(Math.random() * who.length)]} ${action[Math.floor(Math.random() * action.length)]} ${what[Math.floor(Math.random() * what.length)]} ${when[Math.floor(Math.random() * when.length)]}`;
    document.getElementById('excusa').innerHTML = excusa;


};
