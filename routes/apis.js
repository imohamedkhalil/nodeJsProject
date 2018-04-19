
const User = require('../models/userModel');

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, data){
    res.json(data);
  })
});

/* ADD user */
router.post('/sendData', (req, res, next) => {
  let userObj = User.create(req.body, function(err, user){
    res.json(user);
  });
});

/* DELETE user */
router.delete('/delete/:_id', function(req, res, next){
  User.deleteOne({"_id": req.params._id}, function(err, user){
      if(!err){
        res.send(user);
      } else {
        console.log("error");
      }
    })
  });

module.exports = router;
