let express = require('express');
let router = express.Router();
let render = require('../utils/render');

router.get("*", (req, res, next) => {
	render(req, res, 'home', {title: 'Express Seeding'});
});

module.exports = router;