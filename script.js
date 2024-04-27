//Storee Moss - Spring 2024

var borderBarx = 600;
var borderBary = 800;
var pageHeight = 1500;
var pageWidth = 2500;

let x = 60;
let y = borderBary + 300;
let z = borderBarx * 2;
let max = 600 * 3;

var canvas = document.getElementById('creativeCoding');
var ctx = canvas.getContext('2d');
dpi = window.devicePixelRatio;

function fix_dpi() {
  let style = {
    height() {
      return +getComputedStyle(canvas).getPropertyValue('height').slice(0, -2);
    },
    width() {
      return +getComputedStyle(canvas).getPropertyValue('width').slice(0, -2);
    }
  }
  canvas.setAttribute('width', style.width() * dpi);
  canvas.setAttribute('height', style.height() * dpi);
}

function draw() {
  var canvas = document.getElementById('creativeCoding');
  if (canvas.getContext) {
    fix_dpi();
    var ctx = canvas.getContext('2d');
    // (x, y, width, height)
    //black - first lines/borders
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(borderBarx - x, 0, x, pageHeight + y);
    ctx.fillRect(0, borderBary, pageWidth, x);
    ctx.fillRect(0, 100, pageWidth, x);
    ctx.fillRect(0, 400, pageWidth, x);
    //red
    ctx.fillStyle = 'rgb(255,0,0)';
    ctx.fillRect(0, borderBary + x, borderBarx - x, pageHeight);
    //ctx.fillRect(borderBarx + 60, 0, pageWidth - borderBarx - 60, borderBary);
    //blue
    ctx.fillStyle = 'rgb(0,0,255)';
    ctx.fillRect(0, 0, borderBarx - x, borderBary);
    //black - bottom right verticle line
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(max, borderBary, 60, borderBary + pageHeight);
    //black - bottom right horizontile line
    ctx.fillStyle = 'rgb(0,0,0)';
    ctx.fillRect(max, y, pageWidth - pageHeight, 60);
    //yellow
    ctx.fillStyle = 'rgb(255,255,0)';
    ctx.fillRect(borderBarx, borderBary + x, z, pageWidth - borderBary);
    //ctx.fillRect(1860, borderBary + 360, borderBarx, borderBary + pageHeight);


    requestAnimationFrame(draw);
  }
}