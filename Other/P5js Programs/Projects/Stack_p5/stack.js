function Stack(base) {
	this.base = base;
	this.previous = null;
	this.current = base;
	this.blocks = [base];
	this.spawn = function() {
		var current_block = this.current;
		var new_block = new Block(current_block.top_origin.copy(),current_block.length,current_block.breadth,current_block.thickness);
		this.blocks.push(new_block);
		this.previous = current_block;
		this.current = new_block;
	}
	this.spawn();
	this.scroll = function() {
		for(var i = 0; i < this.blocks.length;i ++) {
			var block = this.blocks[i];
			block.origin = createVector(block.origin.x,block.origin.y+block.thickness);
			block.set_vertices();
		}
	}
}