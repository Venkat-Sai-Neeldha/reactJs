var express = require('express');
var router = express.Router();
const { validateLogin } = require('../controllers/validator');
var jwt = require('jsonwebtoken');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('login page 1');
});
router.post('/',validateLogin);


module.exports = router;