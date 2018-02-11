var tree;
var max_dist = 50;
var min_dist = 5;

function setup() {
  createCanvas(400, 400);
  tree = new Tree();
}

function draw() {
  background(51);
  tree.show();
  tree.grow();
}