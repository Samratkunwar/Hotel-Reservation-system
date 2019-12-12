var express             = require('express'),
    router              = express.Router();



//------------------------------------------------Routes---------------------------------------//

router.get('/', function(req, res){
    res.render('landingpage');
});


module.exports = router;