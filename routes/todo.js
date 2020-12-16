const router = require('express').Router();


// require controllers
const indexController = require('../controllers/index')

// index route
router.get('/', indexController.getIndex);





module.exports = router;