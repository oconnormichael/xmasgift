var tree, treeImage, tree2, tree2Image;

function preload() {
  treeImage = loadImage("tree1.png");
  tree2Image = loadImage("tree2.png");

  function setup() {
    createCanvas(400, 400);
  }

  tree = createSprite(200, 200, 10, 10);
  tree.addImage(treeImage);
  tree.scale=0.5;
  
  tree2 = createSprite(200,200,10,10);
  tree2.addImage(tree2Image);
  tree2.scale=0.5;
  tree2.visible=false;
  
   
   
}

function draw() {
  background(220);
 
     if (keyDown("space")) {
    tree.visible =false;
        tree2.visible=true;
   }
     
  drawSprites();
}