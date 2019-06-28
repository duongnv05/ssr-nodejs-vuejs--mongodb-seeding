let express = require('express');
let router = express.Router();
let fs = require('fs');
let path = require('path');

// Load all controller in app
console.log("# Init Controllers!");
let files = fs.readdirSync("./controllers");
files.forEach(function(file) {
	let nameController = path.parse(file).name;
	if(nameController != "index") {
		router.use(require('./' + nameController));
	}
});

module.exports = router;