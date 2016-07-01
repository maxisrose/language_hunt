var user = require('../controllers/users.js');

module.exports = function(app){
  app.post('/login', user.login);

  //add route for getting categories and words later
}
