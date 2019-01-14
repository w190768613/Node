var _ = require('underscore')
var User = require('../models/user')


//sign up
exports.showSignup = function(req, res){
	
	res.render('signup',{
		title: 'Douban Movie 注册'
  })
}

exports.signup = function(req,res){
	
	var _user = req.body.user //req.param('user')
    
    User.findOne({name:_user.name},function(err,user){
      if(err){
      	console.log(err)
      }
      
      if(user){
      	return res.redirect('/signin')
      }
      
      else{
      	var user = new User(_user)
      	user.save(function(err,user){
          if(err){
    	    console.log(err)
          }   	
          res.redirect('/')
        })
      }
    })   
}


//sign in
exports.showSignin = function(req, res){
	
	res.render('signin',{
		title: 'Douban Movie 登录'	
  })
}

exports.signin = function(req,res){
	
	var _user = req.body.user
    var name = _user.name
    var password = _user.password 
    
    User.findOne({name:name}, function(err,user){
    	if(err){
    		console.log(err)
    	}
    	
    	if(!user){
    		return res.redirect('/signup')
    	}
    	
    	user.comparePassword(password, function(err,isMatch){
    		if(err){
    			console.log(err)
    		}
    		console.log('password:'+ password)
    		
    		if(isMatch) {   			
    			req.session.user = user;
    			return res.redirect('/')
    		}
    		
    		else{
    			return res.redirect('/signin')
    		}
    	})
    })
}


// logout
exports.logout = function(req,res){
	
	delete req.session.user
	//delete app.locals.user
	res.redirect('/')
}


// user list page
exports.list = function(req, res){
	
	User.fetch(function(err,users){
	  if(err){
	    console.log(err)
	  }
	res.render('userlist',{
		title: 'Douban Movie 用户列表',
		users: users
	})
  })
}


// midware for user
exports.signinRequired = function(req, res, next){
	
	var user = req.session.user
	
	if(!user){
		return res.redirect('/signin')
	}
	next()
}


// midware for user
exports.adminRequired = function(req, res, next){
	
	var user = req.session.user
	
	if(user.role <= 10){
		return res.redirect('/signin')
	}
	next()
}