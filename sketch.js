var iron, ground, edges;
var iron_Image, bgImage;

function preload() {
    iron_Image = loadImage("images/iron.png");
    bgImage = loadImage("images/bg.jpg");
} 

function setup() {
    createCanvas(1300,750);

    edges = createEdgeSprites();

    iron = createSprite(50, 680, 20, 50);
    iron.addImage(iron_Image);
    iron.scale = 0.4;

    {    
        ground = createSprite(10, 740, 2550, 10);
        
        ground.visible = false;
    }

    // iron.debug = true;
    iron.setCollider('rectangle', 100, -50, 400, 410)
}


function draw() {
    background(bgImage);

    {
        if(keyDown("space") ) {
          iron.velocityY = -5;
        }
    
        if(keyDown("left")) {
          iron.velocityX = -5;   
        }
    
        if(keyDown("right")) {
          iron.velocityX = 5;
        }
    
        if(keyDown("up")) {
          iron.velocityY = -5;
        }

        
        if(keyDown("down")) {
          iron.velocityY = 5;
        }
    }
    
    {
        iron.bounceOff(edges[0]);
        iron.bounceOff(edges[1]);
        iron.bounceOff(edges[2]);
        iron.bounceOff(edges[3])
    }


    drawSprites();

}