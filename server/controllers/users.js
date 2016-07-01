var User = mongoose.model('User');

module.exports={
  login: function(req, res){
    console.log('attempting to login');
    User.findOne({email: req.body.email}, function(err, user){
      if(err)res.json({error: 'something went horribly wrong, probably my fault'})
      else if(!user){
        console.log('user does not exist, creating new user');
        var user = new User(req.body);
        user.save(function(err){
          if(err)res.json({error: {err: err, error: 'something went wrong, probably your fault'}})
          else {
            console.log('user successfully saved, returning user data');
            res.json({user: {name: user.name, email: user.email, id: user._id}});
          }
        })
      }//close else if
      else {
        console.log('user exists, returning user data');
        res.json({user: {name: user.name, email: user.email, id: user._id}});
      }
    })//close find one
  }//close login
}//close module
