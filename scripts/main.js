/**const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';**/
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;
function random(min,max) {
  const num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}
