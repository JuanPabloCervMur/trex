var PLAY=1;
var END =0;
var gamestate=PLAY;
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var nube,nibe,nubeses;
var moltre,moltres,mole;
var cact1,cact2,cact3,cact4,cactus,cactuses;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");
  groundImage = loadImage("ground2.png");
    nibe=loadImage("nube.png");
    moltre=loadImage("moltres.png");
    cact1=loadImage("cactus 1.png");
    cact2=loadImage("cactus 2.png");
    cact3=loadImage("cactus 3.png");
    cact4=loadImage("cactus 4.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);
    //create a trex sprite
    trex = createSprite(50,height-15,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 1;
    //strex.debug=true;
    //create a ground sprite
    ground = createSprite(200,height-20,width,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    //create invisible pisotion
    invisibleGround = createSprite (200,height-10,400,10);
    invisibleGround.visible = false;
    nubeses=new Group ();
    mole=new Group ();
    cactuses=new Group ();
}
function draw() {
    background(220);
    

    if (gamestate === PLAY){
        if (keyDown("space") &&  trex.y >= 80) {
            trex.velocityY = -10; 
        }
        trex.velocityY = trex.velocityY + 0.8;
        if (ground.x < 0) {
            ground.x = ground.width / 2; 
        }
        trex.collide(invisibleGround);
        nubes ();
        ave();
        cactuseses();
        if (cactuses.isTouching(trex)|| mole.isTouching(trex)){
            gamestate = END;
        }
    }
    else if (gamestate === END){
        trex.velocityY=0;
        //trex.set
        ground.velocityX=0;
        cactuses.setVelocityXEach(0);
        mole.setVelocityXEach(0);
        nubeses.setVelocityXEach(0);
    }








    
   
    
    drawSprites();
}
    function nubes () { 
        if(frameCount % 60 === 0 ){
            nube = createSprite (width,random (0,300),40,10);
            nube.addImage("nibe",nibe);
            nube.scale = 0.08;
            nube.velocityX = -3;
            nube.lifetime=500;
            nube.depth=trex.depth;
            nubeses.add (nube)
        } 
        
    
        
    }
    function ave () {
        if(frameCount % 60 === 0){
            moltres = createSprite (width,random(0,500),40,10);
            moltres.addImage("moltre",moltre) ;
            moltres.scale = 0.5 ;
            moltres.velocityX=-5;
            moltres.lifetime=300;
            mole.add (moltres);
        }

    }
    function cactuseses(){
        if(frameCount % 60 === 0){
            cactus = createSprite (width,height-50,10,40);
            var num= Math.round(random(1,4));
            switch(num){
                case 1:cactus.addImage(cact1);cactus.scale = 0.2; break;
                case 2:cactus.addImage(cact2);cactus.scale = 0.1 ; break;
                case 3:cactus.addImage(cact3);cactus.scale = 0.1 ; break;
                case 4:cactus.addImage(cact4);cactus.scale = 0.1 ; break;
               
                default:break;
            }
            
            cactus.velocityX=-5;
            cactus.lifetime=300;
            cactuses.add (cactus);
        }
    }
