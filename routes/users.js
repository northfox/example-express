var models = require('../models');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', (req, res) => {
  models.user.create({
    username: req.body.username
  }).then(() => {
    res.redirect('../');
  });
});

router.delete('/:user_id', (req, res) => {
  models.user.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(() => {
    res.redirect('/');
  });
});

router.post('/:user_id/tasks', (req, res) => {
  models.task.create({
    title: req.body.title,
    userId: req.params.user_id
  }).then(() => {
    res.redirect('/');
  });
});

router.delete('/:user_id/tasks/:task_id', (req, res) => {
  models.task.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(() => {
    res.redirect('/');
  });
});

module.exports = router;
