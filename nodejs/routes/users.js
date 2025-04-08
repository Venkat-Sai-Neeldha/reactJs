var express = require('express');
const { validateLogindb } = require('../controllers/validator');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/user',validateLogindb);

module.exports = router;
