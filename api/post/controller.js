let express = require('express');
let router = express.Router();

let Post = require('./model');

router.get('/', function(req, res, next) {
	Post.find(function (err, posts) {
    	if(err) { return console.error(err); }
    	return res.status(200).json(posts);
  });
});

router.get('/:id', function(req, res, next) {
	Post.findById(req.params.id, function (err,post) {
		if(err) { return console.error(err);}
		if(!post){ return res.send(404);}
		return res.status(200).json(post);
	});
});
module.exports = router;