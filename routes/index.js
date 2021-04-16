var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200).send({
    name: 'Yash Datir',
    type: 'sample API',
    message: 'Welcome to Sample API',
    map: [
      {
        API_NAME: 'index',
        path: '/',
      },
    ],
  });
});

module.exports = router;
