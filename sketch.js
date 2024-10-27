var pacman, pacmanImg;
var backgroundImg, restart, restartImg;
var ghost1, ghost2, ghost3, ghost4;
var ghost1Img, ghost2Img, ghost3Img, ghost4Img;
var gameOver, gameOverImg;
var mouse;
var r1, r2, r3, r4, r5, r6, r7, r8, r9, r10;
var r11, r12, r13, r14, r15, r16, r17, r18, r19, r20;
var r21, r22, r23, r24, r25, r26, r27, r28, r29, r30;
var r31, r32, r33, r34, r35, r36, r37, r38, r39, r40;
//for food
var f1,f2,f3,f4,f5,f6,f7,f8,f9,f10;
var f11,f12,f13,f14,f15,f16,f17,f18,f19,f20;

function preload(){
    pacmanImg = loadImage("images/pacman_right.png");
    backgroundImg = loadImage("images/background.png");
    ghost1Img = loadImage("images/ghost1.png");
    ghost2Img = loadImage("images/ghost2.png");
    ghost3Img = loadImage("images/ghost3.png");
    ghost4Img = loadImage("images/ghost4.png");
    restartImg = loadImage("images/restart.png");
    gameOverImg = loadImage("images/gameOver.png");
}

function setup(){
    createCanvas(800,800);

   
    spawnBoxes();


    pacman = createSprite(400,387);
    pacman.addImage("pacman",pacmanImg);
    pacman.scale = 0.6;

    ghost1 = createSprite(45,65);
    ghost1.addImage("ghost",ghost1Img);
    ghost1.scale = 0.2;

    ghost2 = createSprite(759,65);
    ghost2.addImage("ghost",ghost2Img);
    ghost2.scale = 0.2;

    ghost3 = createSprite(758,763);
    ghost3.addImage("ghosst",ghost3Img);
    ghost3.scale = 0.2;

    ghost4 = createSprite(42,763);
    ghost4.addImage("ghost",ghost4Img);
    ghost4.scale = 0.08;

    ghost1.debug = true;
    ghost1.setCollider("rectangle",0,0,100,30)
    ghost1.velocityX= 2.5;

    ghost2.debug = true;
    ghost2.setCollider("rectangle",0,0,20,30);
    ghost2.velocityX = -2.5;
    
    ghost3.debug = true;
    ghost3.setCollider("rectangle",0,0,20,30);
    ghost3.velocityX = -2.5;

    ghost4.debug = true;
    ghost4.setCollider("rectangle",0,0,20,30);
    ghost4.velocityX = 2.5;
    
    
}

function draw(){
    background(backgroundImg);

    


    // ghost1.bounceOff(r3);


    // //colliding with the edges

    // ghost1.bounceOff(r45)
    // ghost1.bounceOff(r43)
    // ghost1.bounceOff(r47)
    // ghost1.bounceOff(r42)
    // ghost1.bounceOff(r44)
    // ghost1.bounceOff(r46)

    // ghost2.bounceOff(r45)
    // ghost2.bounceOff(r43)
    // ghost2.bounceOff(r47)
    // ghost2.bounceOff(r42)
    // ghost2.bounceOff(r44)
    // ghost2.bounceOff(r46)

    // ghost3.bounceOff(r45)
    // ghost3.bounceOff(r43)
    // ghost3.bounceOff(r47)
    // ghost3.bounceOff(r42)
    // ghost3.bounceOff(r44)
    // ghost3.bounceOff(r46)

    // ghost4.bounceOff(r45)
    // ghost4.bounceOff(r43)
    // ghost4.bounceOff(r47)
    // ghost4.bounceOff(r42)
    // ghost4.bounceOff(r44)
    // ghost4.bounceOff(r46)

    if(ghost1.isTouching(r3) || ghost1.isTouching(r7) || ghost1.isTouching(r10) || ghost1.isTouching(r14) || ghost1.isTouching(r16) || ghost1.isTouching(r19) || ghost1.isTouching(r26) || ghost1.isTouching(r28)){
            ghost1.velocityY = 2.5;
            ghost1.velocityX=0;
    }

    ghost1Mov();
    ghost2Mov();
    ghost3Mov();
    ghost4Mov();

    food();

    if(keyDown("up")){
        pacman.y = pacman.y -5;
        }
        if(keyDown("down")){
        pacman.y = pacman.y +5;
        }
        if(keyDown("left")){
        pacman.x = pacman.x - 5;
        }
        if(keyDown("right")){
        pacman.x = pacman.x + 5;
        }    
        

    
    console.log(mouseX,mouseY);
    drawSprites();
}

function ghost1Mov(){
    if(ghost1.x>176){
        option = Math.round(random(1,2))
        if(option ===1){
            ghost1.velocityY = 2.5;
            ghost1.velocityX=0;
        }
        else if(option ===1){
            ghost1.velocityY = -2.5;
            ghost1.velocityX=0;
        }
        
    }
    if(ghost1.x>628){
        option = Math.round(random(1,2))
        if(option ===1){
            ghost1.velocityY = -2.5;
            ghost1.velocityX=0;
        }
        else if(option ===1){
            ghost1.velocityY = 2.5;
            ghost1.velocityX=0;
        }
    }
}

function ghost2Mov(){

    if(ghost2.x<176){
        option = Math.round(random(1,2))
        if(option ===1){
            ghost1.velocityY = 2.5;
            ghost1.velocityX=0;
        }
        else if(option ===1){
            ghost1.velocityY = -2.5;
            ghost1.velocityX=0;
        }
        
    }
    if(ghost2.x<628){
        option = Math.round(random(1,2))
        if(option ===1){
            ghost2.velocityY = -2.5;
            ghost2.velocityX=0;
        }
        else if(option ===1){
            ghost2.velocityY = 2.5;
            ghost2.velocityX=0;
        }
    }
}

function ghost3Mov(){
    if(ghost3.x<437){        
        ghost3.velocityY = -2.5;
        ghost3.velocityX = 0;            
    }
}

function ghost4Mov(){
    if(ghost4.x>367){
        ghost4.velocityY = -2.5;
        ghost4.velocityX = 0;
    } 
}

function food(){
f1 = createSprite(50,65,10,10);
f2 = createSprite(90,65,10,10);
f3 = createSprite(130,65,10,10);
f4 = createSprite(170,65,10,10);
f5 = createSprite(210,65,10,10);
f6 = createSprite(250,65,10,10);
f7 = createSprite(290,65,10,10);
f8 = createSprite(330,65,10,10);
f9 = createSprite(370,65,10,10);

f10 = createSprite(360,105,10,10);
f11= createSprite(345,155,10,10);

f12 = createSprite(185,105,10,10);
f13 = createSprite(185,145,10,10);
f14 = createSprite(185,185,10,10);
f15 = createSprite(185,225,10,10);
f16 = createSprite(185,265,10,10);
f17 = createSprite(185,305,10,10);
f18 = createSprite(185,345,10,10);
f19 = createSprite(185,385,10,10);
f20 = createSprite(185,425,10,10);
f21 = createSprite(185,465,10,10);
f22 = createSprite(185,505,10,10);
f23 = createSprite(185,545,10,10);
f24 = createSprite(185,585,10,10);
f25 = createSprite(185,625,10,10);
f26 = createSprite(185,665,10,10);
f27 = createSprite(185,705,10,10);

f28 = createSprite(50,105,10,10);
f29 = createSprite(50,145,10,10);
f30 = createSprite(50,185,10,10);
f31 = createSprite(50,225,10,10);

f84 = createSprite(145,385,10,10);
f85 = createSprite(105,385,10,10);
f86 = createSprite(65,385,10,10);
f87 = createSprite(25,385,10,10);

f94 = createSprite(225,385,10,10);
f95 = createSprite(265,385,10,10);

f96 = createSprite(265,345,10,10);
f97 = createSprite(265,305,10,10);
f98 = createSprite(265,425,10,10);
f99 = createSprite(265,465,10,10);
f100 = createSprite(265,505,10,10);
f111 = createSprite(265,545,10,10);



















f32 = createSprite(430,65,10,10);
f33 = createSprite(470,65,10,10);
f34 = createSprite(510,65,10,10);
f35 = createSprite(550,65,10,10);
f36 = createSprite(590,65,10,10);
f37 = createSprite(630,65,10,10);
f38 = createSprite(670,65,10,10);
f39 = createSprite(710,65,10,10);
f40 = createSprite(750,65,10,10);

f41 = createSprite(445,105,10,10);
f42= createSprite(425,155,10,10);

f43 = createSprite(615,105,10,10);
f44 = createSprite(615,145,10,10);
f45 = createSprite(615,185,10,10);
f46 = createSprite(615,225,10,10);
f47 = createSprite(615,265,10,10);
f48 = createSprite(615,305,10,10);
f49 = createSprite(615,345,10,10);
f50 = createSprite(615,385,10,10);
f51 = createSprite(615,425,10,10);
f52 = createSprite(615,465,10,10);
f53 = createSprite(615,505,10,10);
f54 = createSprite(615,545,10,10);
f56 = createSprite(615,585,10,10);
f57 = createSprite(615,625,10,10);
f58 = createSprite(615,665,10,10);
f59 = createSprite(615,705,10,10);

f60 = createSprite(750,105,10,10);
f61 = createSprite(750,145,10,10);
f62 = createSprite(750,185,10,10);
f63 = createSprite(750,225,10,10);




f64 = createSprite(50,760,10,10);
f65 = createSprite(90,760,10,10);
f66 = createSprite(130,760,10,10);
f67 = createSprite(170,760,10,10);
f68 = createSprite(210,760,10,10);
f69 = createSprite(250,760,10,10);
f70 = createSprite(290,760,10,10);
f71 = createSprite(330,760,10,10);
f72 = createSprite(370,760,10,10);
f73 = createSprite(410,760,10,10);
f74 = createSprite(450,760,10,10);
f75 = createSprite(490,760,10,10);
f76 = createSprite(530,760,10,10);
f78 = createSprite(570,760,10,10);
f79 = createSprite(610,760,10,10);
f80 = createSprite(650,760,10,10);
f81 = createSprite(690,760,10,10);
f82 = createSprite(730,760,10,10);
f83 = createSprite(770,760,10,10);

f88 = createSprite(655,385,10,10);
f89 = createSprite(695,385,10,10);
f90 = createSprite(735,385,10,10);
f91 = createSprite(775,385,10,10);

f92 = createSprite(575,385,10,10);
f93 = createSprite(535,385,10,10);

f112 = createSprite(535,345,10,10);
f113 = createSprite(535,305,10,10);
f114 = createSprite(535,425,10,10);
f115 = createSprite(535,465,10,10);
f116 = createSprite(535,505,10,10);
f117 = createSprite(535,545,10,10);

f118 = createSprite(145,545,10,10);
f119 = createSprite(105,545,10,10);
f120 = createSprite(65,545,10,10);
f121 = createSprite(30,545,10,10);

f122 = createSprite(225,545,10,10);
f123 = createSprite(305,545,10,10);
f124 = createSprite(345,545,10,10);

f125 = createSprite(495,545,10,10);
f126 = createSprite(455,545,10,10);
f127 = createSprite(575,545,10,10);
f128 = createSprite(655,545,10,10);
f129 = createSprite(695,545,10,10);
f130 = createSprite(735,545,10,10);
f131 = createSprite(765,545,10,10);

f131 = createSprite(765,585,10,10);
f132 = createSprite(765,625,10,10);

f133 = createSprite(30,585,10,10);
f134 = createSprite(30,625,10,10);

f135 = createSprite(70,625,10,10);
f136 = createSprite(110,625,10,10);
f137 = createSprite(225,625,10,10);
f138 = createSprite(265,625,10,10);
f139 = createSprite(305,625,10,10);
f140 = createSprite(345,625,10,10);
f141 = createSprite(385,625,10,10);
f142 = createSprite(425,625,10,10);
f143 = createSprite(465,625,10,10);
f144 = createSprite(505,625,10,10);
f145 = createSprite(545,625,10,10);
f146 = createSprite(585,625,10,10);
f147 = createSprite(690,625,10,10);
f148 = createSprite(730,625,10,10);

f135 = createSprite(100,155,10,10);
f136 = createSprite(140,155,10,10);
f137 = createSprite(225,155,10,10);
f138 = createSprite(265,155,10,10);
f139 = createSprite(305,155,10,10);

f142 = createSprite(385,155,10,10);
f143 = createSprite(465,155,10,10);
f144 = createSprite(505,155,10,10);
f145 = createSprite(545,155,10,10);
f146 = createSprite(585,155,10,10);
f147 = createSprite(655,155,10,10);
f148 = createSprite(700,155,10,10);

f148 = createSprite(90,235,10,10);
f148 = createSprite(130,235,10,10);
f148 = createSprite(255,235,10,10);
f148 = createSprite(295,235,10,10);
f148 = createSprite(335,235,10,10);
f148 = createSprite(375,235,10,10);
f148 = createSprite(425,235,10,10);
f148 = createSprite(465,235,10,10);
f148 = createSprite(505,235,10,10);
f148 = createSprite(545,235,10,10);
f148 = createSprite(655,235,10,10);
f148 = createSprite(695,235,10,10);
f148 = createSprite(735,235,10,10);

f148 = createSprite(265,200,10,10);
f148 = createSprite(530,200,10,10);

f148 = createSprite(355,275,10,10);
f148 = createSprite(445,275,10,10);

f148 = createSprite(445,315,10,10);
}