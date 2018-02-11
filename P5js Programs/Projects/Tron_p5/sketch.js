var tracers = [];
var scl = 4;
var total_history = [];

function setup() {
	frameRate(60);
	createCanvas(1200,1200);
	player_1 = new Tracer('Player_1',width/10,height/10,[38,39,40,37],color(255,0,0),1);
	player_2 = new Tracer('Player_2',width - width/10,height/10,[87,68,83,65],color(0,255,0),2);
	//player_3 = new Tracer('Player_3',width/10,height - height/10,[84,72,71,70],color(255,255,255),3);
	// player_4 = new Tracer('Player_4',width - width/10,height - height/10,[73,76,75,74],color(255,0,255),4);
	tracers.push(player_1);
	tracers.push(player_2);
	//tracers.push(player_3);
	// tracers.push(player_4);
}

function draw() {
	background(0);
	for(var i = 0; i < tracers.length; i ++) {
		tracers[i].update();
	}
	win_check();
} 
