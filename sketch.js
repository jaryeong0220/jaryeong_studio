let img1 = [];
let img2 = [];
let img3 = [];
let img4 = [];
let img5 = [];
let img6 = [];
let img7 = [];
let img8 = [];
let img9 = [];

let imgIndex = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let a1 =0;
let a2 =0;
let a3 =0;
let b1 =0;
let b2 =0;
let b3 =0;
let c1 =0;
let c2 =0;
let c3 =0;

let button;

function preload(){
  for(let i = 0; i < 5; i++){
    img1[i] = loadImage("sexual_image/" + nf(i, 2) + ".png");
    img2[i] = loadImage("sexual_image_2/" + nf(i, 2) + ".png");
    img3[i] = loadImage("sexual_image_3/" + nf(i, 2) + ".png");
    img4[i] = loadImage("sexual_image_4/" + nf(i, 2) + ".png");
    img5[i] = loadImage("sexual_image_5/" + nf(i, 2) + ".png");
    img6[i] = loadImage("sexual_image_6/" + nf(i, 2) + ".png");
    img7[i] = loadImage("sexual_image_7/" + nf(i, 2) + ".png");
    img8[i] = loadImage("sexual_image_8/" + nf(i, 2) + ".png");
    img9[i] = loadImage("sexual_image_9/" + nf(i, 2) + ".png");
  }
}

function setup() {
createCanvas(windowWidth, windowHeight);
button = createButton('확인');
button.position(900, 1000);
init();
}

function draw() {
  background(255);
  fill(255);
  noStroke();
  display();

  //1행
  fill(0, 150, 255, a1);
  rect(5, 140, 133, 133);
  fill(0, 150, 255, a2);
  rect(144, 140, 133, 133);
  fill(0, 150, 255, a3);
  rect(283, 140, 133 ,133);

  //2행
  fill(0, 150, 255, b1);
  rect(5, 278, 133, 133);
  fill(0, 150, 255, b2);
  rect(144, 278, 133, 133);
  fill(0, 150, 255, b3);
  rect(283, 278, 133, 133);
  
  //3행
  fill(0, 150, 255, c1);
  rect(5, 416, 133, 133);
  fill(0, 150, 255, c2);
  rect(144, 416, 133, 133);
  fill(0, 150, 255, c3);
  rect(283, 416, 133, 133);

  if(0<a1+a2+a3+b1+b2+b3+c1+c2+c3<900){
    button.mouseClicked(reset);
  }
  if(a1+a2+a3+b1+b2+b3+c1+c2+c3 === 900){
    button.mouseClicked(gotolink);
  }
  // if(a1 == 100 && a2 == 100 && a3 == 100 && b1 == 100 && b2 == 100 && b3 == 100 && c1 == 100 && c2 == 100 && c3 == 100){
  //   button.mouseClicked(gotolink);
  // }
}

function display() {
  //배너
 
  rect(0, 0, 421, 630);
  fill(100, 165, 240);
  //noStroke();
  rect(5, 5, 411, 130);
  fill(255);
  textSize(30);
  text('성적대상화', 25, 50);
  textSize(16);
  text('가 있는 이미지를 모두 선택하세요 ', 25, 75);
  text('위의 조건과 일치하는 새 이미지를 모두 선택했으면 확인을', 25, 98);
  text('클릭하세요', 25, 120);
  
  //새로고침 버튼
  noFill();
  stroke(120);
  strokeWeight(3)
  ellipse(30, 580, 20, 20);
  fill(255);
  noStroke();
  rect(33, 576, 10, 7);
  fill(120);
  triangle(31, 578, 41, 578, 41, 567);
  
  //오디오 버튼
  noFill();
  stroke(120);
  strokeWeight(3)
  ellipse(75, 580, 24, 24);
  fill(255);
  noStroke();
  rect(68, 585, 14, 10);
  fill(120);
  rect(62, 582, 8, 12, 5, 0, 0, 5);
  rect(80, 582, 8, 12, 0, 5, 5, 0);
  
  //인포 버튼
  noFill();
  stroke(120);
  strokeWeight(3);
  ellipse(124, 580, 24, 24);
  point(124, 574);
  line(124, 579, 124, 586);
  
  //확인 버튼
  fill(100, 165, 240);
  noStroke();
  rect(320, 565, 85, 37, 3);
  fill(255);
  textSize(16);
  text('확인', 348, 589);  
  
  //이미지 영역
  noStroke();
  
  //1행
  image(img1[imgIndex[0]], 5, 140, 133, 133);
  image(img2[imgIndex[1]], 144, 140, 133, 133);
  image(img3[imgIndex[2]], 283, 140, 133 ,133);
  //2행
  image(img4[imgIndex[3]], 5, 278, 133, 133);
  image(img5[imgIndex[4]], 144, 278, 133, 133);
  image(img6[imgIndex[5]], 283, 278, 133, 133);
  //3행
  image(img7[imgIndex[6]], 5, 416, 133, 133);
  image(img8[imgIndex[7]], 144, 416, 133, 133);
  image(img9[imgIndex[8]], 283, 416, 133, 133);
  }


function mousePressed() {
  if(mouseX >= 5 && mouseX <= 138 && mouseY >= 140 && mouseY <= 273){
    if(a1 === 0){
      a1 = 100;
     }else{
      a1 = 0;
    }
  }else if(mouseX >= 144 && mouseX <= 277 && mouseY >= 140 && mouseY <= 273){
    if(a2 === 0){
      a2 = 100;
     }else{
      a2 = 0;
     }
  }else if(mouseX >= 283 && mouseX <= 416 && mouseY >= 140 && mouseY <= 273){
    if(a3 === 0){
      a3 = 100;
     }else{
      a3 = 0;
     }
  }else if(mouseX >= 5 && mouseX <= 138 && mouseY >= 278 && mouseY <= 411){
    if(b1 === 0){
      b1 = 100;
     }else{
      b1 = 0;
     }
  }else if(mouseX >= 144 && mouseX <= 277 && mouseY >= 278 && mouseY <= 411){
    if(b2 === 0){
      b2 = 100;
     }else{
      b2 = 0;
     }
  }else if(mouseX >= 283 && mouseX <= 416 && mouseY >= 278 && mouseY <= 411){
    if(b3 === 0){
      b3 = 100;
     }else{
      b3 = 0;
     }
  }else if(mouseX >= 5 && mouseX <= 138 && mouseY >= 416 && mouseY <= 549){
    if(c1 === 0){
      c1 = 100;
     }else{
      c1 = 0;
     }
  }else if(mouseX >= 144 && mouseX <= 277 && mouseY >= 416 && mouseY <= 549){
    if(c2 === 0){
      c2 = 100;
     }else{
      c2 = 0;
     }
  }else if(mouseX >= 283 && mouseX <= 416&& mouseY >= 416 && mouseY <= 549){
    if(c3 === 0){
      c3 = 100;
     }else{
      c3 = 0;
     }
  }
}
  
  function reset() {
    redraw();
    init();
    a1 = 0;
    a2 = 0;
    a3 = 0;
    b1 = 0;
    b2 = 0;
    b3 = 0;
    c1 = 0;
    c2 = 0;
    c3 = 0;
  }

  function gotolink() {
    location.href='test.html';
  }

  function init() {
    for(let i = 0; i < imgIndex.length; i++) {
      imgIndex[i] = round(random(4))
    }
    console.log(imgIndex);
  }
