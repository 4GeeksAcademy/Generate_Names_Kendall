import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['el', 'nuestro', 'mi', 'tu'];
  let adj = ['gran', 'mejor', 'super', 'puro'];
  let noun = ['puedes', 'ofertas', 'donde', 'vende', 'carro', 'camioneta', 'bebe'];
  let end = ['.es', '.as', '.de', '.it', '.re'];

  const domains = [];

  function createDomainHack (names,extension) {
    let extClear = extension.replace('.','');

    if (names.endsWith(extClear)) {
      return names.slice(0 ,-extClear.length);
    } 
    return names;
  }
  
  pronoun.forEach(pr => {
    adj.forEach(ad => {
      noun.forEach(no => {
        end.forEach(en => {

          domains.push(`${pr}${ad}${createDomainHack(no,en)}${en}`)
        })
      })
    })
  })

  let domTrans = domains.map(n => {
    return `
      <li class="list-group-item">${n}</li>
    `
  })

  document.getElementById("generate").innerHTML = domTrans.join('\n');

};



