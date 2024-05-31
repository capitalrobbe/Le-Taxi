import {World, Actor, Circle} from "https://gymburgdorf.github.io/simhelpers/simhelpers.js"

let world = new World({
	element: document.querySelector(".app"),
  img: "img/rennstrecke.png",
  w: 1200,
  h: 600,
  color: 0x222266
})

let counter = 0
let time = 0
let timer = 0
let caseoccured = false



let herz3 = new Actor({
  img: "img/Herz.png",
  x: 600,
  y: 580,
  wUnits:70
})
let Herz3 = 3

let herz2 = new Actor({
  img: "img/Herz.png",
  x: 640,
  y: 580,
  wUnits:70
})
let Herz2 = 2

let herz4 = new Actor({
  img: "img/Herz.png",
  x: 560,
  y: 580,
  wUnits:70
})
let Herz4 = 4

let herz1= new Actor({
  img: "img/Herz.png",
  x: 680,
  y: 580,
  wUnits:70
})
let Herz1 = 1
let herz5= new Actor({
  img: "img/Herz.png",
  x: 520,
  y: 580,
  wUnits:70
})
let Herz5 = 5

let xeno  = new Actor({
	img: "img/blue car.png",
  x: 1300,
  y: 550,
  wUnits:130,
  hUnits:60,
  autorotate: false
  })
  xeno.vx =  -1 * (Math.random() * (5 - 1) + 1);
  

let tizi = new Actor({
	img: "img/white car.png",
  x: 1400,
  y: 250,
  wUnits:120,
  hUnits: 60,
  autorotate: false
  })
tizi.vx =  -1 * (Math.random() * (5 - 1) + 1);

let mael  = new Actor({
	img: "img/LKW.png",
  x: 1200,
  y: 450,
  wUnits:350,
  hUnits: 70,
  autorotate: false
  })
mael.vx =  -1 * (Math.random() * (5 - 1) + 1);

let fabu  = new Actor({
	img: "img/yellow car.png",
  x: 1350,
  y: 350,
  wUnits:120,
  hUnits:55,
  autorotate: false
  })
  fabu.vx = -1 * (Math.random() * (5 - 1) + 1);

let andu  = new Actor({
	img: "img/blue car.png",
  x: 1500,
  y: 150,
  wUnits:130,
  hUnits:60,
  autorotate: false
  })
  andu.vx =  -1 * (Math.random() * (5 - 1) + 1);

let eric  = new Actor({
	img: "img/yellow car.png",
  x: 1300,
  y: 50,
  wUnits:120,
  hUnits:55,
  autorotate: false
  })
  eric.vx =  -1 * (Math.random() * (5 - 1) + 1);

let taxi = new Actor({
	img: "img/458 italia.png",
  x: 400,
  y: 200,
  wUnits: 105,
  hUnits: 55,
  autorotate: false
})

let bombe = new Actor({
  img: "img/atompilz.png",
  x:2000,
  y:1000,
  wUnits:300
})



let tiziHitbox = { x: tizi.x, y: tizi.y, width: 120, height: 60  };
let xenoHitbox = { x: xeno.x, y: xeno.y, width: 130, height: 60  };
let maelHitbox = { x: mael.x, y: mael.y, width: 350, height: 70 };
let fabuHitbox = { x: fabu.x, y: fabu.y, width: 120, height: 55 };
let anduHitbox = { x: andu.x, y: andu.y, width: 130, height: 60  };
let ericHitbox = { x: eric.x, y: eric.y, width: 120, height: 55 };

let taxiHitbox = {
  x: taxi.x,
  y: taxi.y,
  width: 105,
  height: 55
};

function keepActorInBounds(taxi) {
  if(taxi.x<55){taxi.x = 55}
  if(taxi.x>1145){taxi.x = 1145}
  if(taxi.y < 28){taxi.y = 28}
  if(taxi.y > 572){taxi.y = 572}
}

let ax =  0
let ay = 0

window.addEventListener("keydown", taste);
window.addEventListener("keyup", tasteweg);

function taste(e) {
  if( e.key == "d") {ax = 0.5;}
  if( e.key == "a") {ax = -0.5;}
  if(e.key == "w" ) {ay = 0.5;}
  if(e.key == "s") {ay = -0.5;}
}

function tasteweg(e) {
  if( e.key == "d") {ax = 0;}
  if(e.key == "w" ) {ay = 0;}
  if(e.key == "a" ) {ax = 0;}
  if(e.key == "s" ) {ay = 0;}
}

  
function ritler1() {
  if(xeno.x<-65){
    xeno.x = 1200
    xeno.y = Math.floor(Math.random() * (570 - 400 + 1)) + 400;
    xeno.vx =  -1 * (Math.random() * (12 - 2) + 2);
  }
    }
   
function besson1() {
  if(mael.x<-175){
   mael.x = 1200
   mael.y =Math.floor(Math.random() * (500 - 100 + 1)) + 100;
   mael.vx =  -1 * (Math.random() * (12 - 2) + 2);
  } 
}       
function gratassi2() {
  if(tizi.x<-60){
    tizi.x = 1200
    tizi.y = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
    tizi.vx =  -1 * (Math.random() * (12 - 2) + 2);
  }

    
 } 
function paulus2() {
  if(fabu.x<-60){
    fabu.x = 1200
    fabu.y = Math.floor(Math.random() * (400 - 200 + 1)) + 200;
    fabu.vx =  -1 * (Math.random() * (12 - 2) + 2);
  }
    
 } 
 
function lotsch3() {
  if(andu.x<-65){
    andu.x = 1200
    andu.y = Math.floor(Math.random() * (230 - 20 + 1)) + 20;
    andu.vx =  -1 * (Math.random() * (12 - 2) + 2);
  }
    
 } 

function gachter3() {
  if(eric.x<-60){
    eric.x = 1200
    eric.y = Math.floor(Math.random() * (230 - 20 + 1)) + 20;
    eric.vx =  -1 * (Math.random() * (12 - 2) + 2);
  }
    
 } 

function isOverlap(rect1, rect2) {
  if(
    rect1.x < rect2.x + rect2.width &&
    rect1.x > rect2.x - rect1.width &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y > rect2.y - rect1.height
  ){collisionDetected = true}
  else {collisionDetected = false}
  return collisionDetected
} 
let collisionDetected = false

function checkCollision() {
  let actorsHitboxes = [
    tiziHitbox,
    xenoHitbox,
    maelHitbox,
    fabuHitbox,
    anduHitbox,
    ericHitbox
  ];

  for (let i = 0; i < actorsHitboxes.length; i++) {
      const currentActorHitbox = actorsHitboxes[i];
      let coll = isOverlap(taxiHitbox, currentActorHitbox)
      if(coll) return true
  }
  return false;
}

function heart(Herz, herz) {
  if(counter == Herz ){
    herz.y = 1000
  }
}

function keepActorOnRoad(){
  if(taxi.y<100 || taxi.y > 500){
    if(taxi.vx <= 0){
      if(taxi.vx <= -1){
        taxi.vx = -1
      }
    }
    else if(taxi.vx >= 0){
      if(taxi.vx >= 1){
        taxi.vx = 1
      }
    }
    else if(taxi.vy >= 0){
      if(taxi.vy >= 0.1){
        taxi.vy = 0.1
      }
    }
    else if(taxi.vy <= 0){
      if(taxi.vx <= -0.1){
        taxi.vx = -0.1
      }
    }
  }
}
function gameOver() {
  document.getElementById("gameover").style.display = "block";
  document.getElementById("time").style.display = "block";
  timerdisplay.style.display = "none";
}

function stop(){
  if(herz5.y > 600){
    xeno.vx = 0
    tizi.vx = 0
    mael.vx = 0
    fabu.vx = 0
    andu.vx = 0 
    eric.vx = 0
    taxi.vx = 0
    taxi.vy = 0
    gameOver()
  }
}

var timerdisplay = document.getElementById("timerdisplay");

  
function loop(dt) {
  taxi.vx =  0.99 * taxi.vx + 20 * ax *dt
	taxi.vy =  0.99 * taxi.vy + 20 * ay *dt
  taxi.x += taxi.vx 
  taxi.y += taxi.vy 
  
  keepActorInBounds(taxi);
  keepActorOnRoad();
  stop();

  xeno.x += xeno.vx
  tizi.x += tizi.vx
  mael.x += mael.vx
  fabu.x += fabu.vx
  andu.x += andu.vx
  eric.x += eric.vx

  ritler1()
  besson1()
  gratassi2()
  paulus2()
  lotsch3()
  gachter3()
  

  taxiHitbox.x = taxi.x - 0.5 * taxi.w;
  taxiHitbox.y = taxi.y + 0.5 * taxi.h;
  tiziHitbox.x = tizi.x - 0.5 * tizi.w;
  tiziHitbox.y = tizi.y + 0.5 * tizi.h;
  xenoHitbox.x = xeno.x - 0.5 * xeno.w;
  xenoHitbox.y = xeno.y + 0.5 * xeno.h;
  maelHitbox.x = mael.x - 0.5 * mael.w;
  maelHitbox.y = mael.y + 0.5 * mael.h;
  fabuHitbox.x = fabu.x - 0.5 * fabu.w;
  fabuHitbox.y = fabu.y + 0.5 * fabu.h;
  anduHitbox.x = andu.x - 0.5 * andu.w;
  anduHitbox.y = andu.y + 0.5 * andu.h;
  ericHitbox.x = eric.x - 0.5 * eric.w;
  ericHitbox.y = eric.y + 0.5 * eric.h; 
  
  checkCollision();
  if(collisionDetected ) {
    taxi.rotation = 90
    bombe.x = taxi.x
    bombe.y = taxi.y
   
  }
  else {
    taxi.rotation  = 0
    bombe.x = 2000
    bombe.y = 1000 
  }

  checkCollision();
  if(collisionDetected && !caseoccured){
    counter++
    caseoccured = true
  }
  else if (!collisionDetected){
    caseoccured = false
  }

  heart(Herz1, herz1);
  heart(Herz2, herz2);
  heart(Herz3, herz3);
  heart(Herz4, herz4);
  heart(Herz5, herz5);
  
  timer += dt
  if(herz5.y == 580){
    time = timer 
    
  }
  timerdisplay.textContent = time.toFixed(1) + " s"
  
  var timeElement = document.getElementById("time");
  timeElement.innerHTML = "<span id='timetext'>Time: </span>";
  var timeTextElement = document.createElement("span");
  timeTextElement.textContent = time.toFixed(1) + "s";
  timeElement.appendChild(timeTextElement);
}

world.addTicker(loop)
