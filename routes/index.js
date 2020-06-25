var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];
const title = 'Mini Messageboard';

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: title, messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form', { title: title });
});

router.post('/new', function (req, res, next) {
  let formData = req.body;
  messages.push({
    text: formData.text,
    user: formData.user,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
