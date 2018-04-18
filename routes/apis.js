
const User = require('../models/userModel');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, data){
    res.json(data);
  })
});

router.post('/sendData', (req, res, next) => {
  let userObj = User.create(req.body, function(err, user){
    res.json(user);
  });
});
module.exports = router;
