function keyPressed() {
	for(var i = 0; i < tracers.length; i ++) {
		if (contains(tracers[i].movement_keys, keyCode)) {
			tracers[i].change_dir(keyCode);
		}
	}
}

function win_check() {
  for(var i = 0; i < tracers.length; i ++) {
    status = tracers[i].status;
    if (!tracers[i].status) {
      // console.log(tracers[i].name + ' is dead');
    }
  }
}

function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}