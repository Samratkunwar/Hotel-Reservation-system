var express             = require('express'),
    router              = express.Router();



//------------------------------------------------Routes---------------------------------------//

router.get('/', function(req, res){
    res.render('landingpage');
});


router.get('demo', function(req, res){
    res.render('header');
})

module.exports = router;