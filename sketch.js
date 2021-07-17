var gamestate =1;
var dp , dp1;
var q1,q2,q3,q4,q5,q6,q7,q8,q9,q10;
var a1,a2,a3,a4,a5,a6,a7,a8,a9,a10;
var code , secur , systm ;
var ans1 , ans2;
var thank;
var con;
var sec , sec1;

function preload(){
  dp = loadImage("dp.jpeg");
  dp1 = loadImage("dp1.jpeg");
  q1 = loadImage("q1.jpeg");
  a1 = loadImage("a1.jpeg");
  q2 = loadImage("q2.jpeg");
  a2 = loadImage("a2.jpeg");
  ans1 = loadSound("ans1.mp4");
  ans2 = loadSound("ans2.mp4");
  thank = loadImage("thank.jpeg");
}
function setup() {
  createCanvas(1200,625);
  //secur = new S1();
  sec = new Security();
  sec1 = new Sec2();
  systm = new System();
  con = new Cont();
}

function draw() {
  background(dp);  
  

  if(keyDown("space")){
    gamestate = 2;
  }
  if(gamestate === 2){
    background(dp1);
  }
  if(keyDown("Right_Arrow")){
    gamestate = 3;
  }
  if(gamestate === 3){
  background(q1);
  sec.display ();
  }
  if(gamestate === 4){
    background(a1);
    ans1.play();
    con.display();
    gamestate = 5;
  }
  if(gamestate === 5){
    background(q2);
  //  sec1.display();
    ans1.stop();
    gamestate = 6;
    }
  if(gamestate === 6){
    background(a2);
    ans2.play();
    con.display();
    gamestate = 7;

  }
  if(gamestate=== 7){

    background(thank);
    ans2.stop();
  }
  drawSprites();
}
