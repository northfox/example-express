var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  models.user.findAll({
    include: [ models.task ]
  }).then((users) => {
    res.render('index', {
      title: 'Sequelize: Express Example',
      users: users
    });
  });
});

module.exports = router;
