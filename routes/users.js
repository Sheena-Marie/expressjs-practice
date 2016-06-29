var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/show/:id', function(req, res, next) {
  res.send(`respond with user id: ${req.params.id}`);
});

module.exports = router;
