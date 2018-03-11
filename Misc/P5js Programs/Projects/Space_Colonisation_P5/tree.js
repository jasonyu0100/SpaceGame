function Tree() {
	this.leaves = [];
	this.branches = [];
	
	//Generate Leaves and append to list

	for(var i = 0; i < 500; i ++) {
		this.leaves.push(new Leaf());
	}
	/*
	Create Root of Tree
	Generate position, direction for initialisation
	*/
	var pos = createVector(width/2,height);
	var dir = createVector(0,-1);
	var tree_root = new Branch(null,pos, dir);
	this.branches.push(tree_root);
	var current = tree_root;
	/*Create Trunk
	While the current branch pos is more 
	than the designated max distance
	increase branch length by creating new branch in given direction
	*/
	var found = false;
	while(!found) {
		for (var i = 0; i < this.leaves.length; i ++) {
			var d = p5.Vector.dist(current.pos,this.leaves[i].pos);
			if (d < max_dist) {
				found = true;
			}
		}
		if (!found) {
			var branch = current.next();
			current = branch;
			this.branches.push(current);
			//console.log(current);
		}
	}

	/*
	Now that trunk has been created find leaves by extending branches
	Program works by looping through all leaves and finding branch 
	that is closest to give leaf
	*/
	this.grow = function () {
		for(var i = 0; i < this.leaves.length; i++) {
			var leaf = this.leaves[i];
			var closestBranch = null;
			var record = max_dist;
			for (var j = 0; j < this.branches.length; j++) {
				var branch = this.branches[j];
				var d = p5.Vector.dist(leaf.pos, branch.pos);
				if (d < min_dist) {
					leaf.reached = true;
					closestBranch = null;
					break;
				} else if (d > max_dist) {

				} else if (closestBranch == null || d < record) {
					closestBranch = branch;
					record = d;
				} 
			}
			/*
			Once closest Branch has been found, get the vector direction between 
			leaf position and branch position to create a direction vector
			this direction vector will influence how the branch moves
			*/
			if (closestBranch != null) {
				var newDir = p5.Vector.sub(leaf.pos,closestBranch.pos);
				newDir.normalize();
				closestBranch.dir.add(newDir);
				closestBranch.count++;
			}
		}
		/*
		Delete leaves that have been met
		*/
		for(var i = this.leaves.length - 1; i >= 0; i--) {
			if(this.leaves[i].reached) {
				this.leaves.splice(i,1);
			}
		}
		/*
		Create New branches with given direction vectors from previous
		*/
		for (var i = this.branches.length-1; i >= 0; i-- ){
			var branch = this.branches[i];
			if (branch.count > 0) {
				branch.dir.div(branch.count + 1);
		        this.branches.push(branch.next());
		        branch.reset();
			}
		}
	}






	this.show = function() {
		for(var i = 0; i < this.leaves.length;i++) {
			this.leaves[i].show();
		}

		for (var i = 0; i < this.branches.length; i++ ) {
			this.branches[i].show();
		}
 	}
}