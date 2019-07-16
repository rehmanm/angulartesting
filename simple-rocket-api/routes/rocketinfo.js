var express = require('express');
var router = express.Router();

var rocketInfos = [];


router.get('/rocketinfo', function(req, res, next) {
    res.send(rocketInfos);
});

router.post('/rocketinfo', function(req, res, next) {
    
    var rocketInfo = req.body;
    rocketInfos.push(rocketInfo);
    res.send(rocketInfo);

});
  

module.exports = router;