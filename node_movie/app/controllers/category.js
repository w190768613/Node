var mongoose = require('mongoose')
var Category = require('../models/category')

// admin page
exports.new = function(req, res){
	res.render('category_admin',{
		title: 'Douban Movie 后台分类录入',	
		category: {}
	})
}


// admin post movie
exports.save = function(req,res){
	
	var _category = req.body.category
	var category = new Category(_category)
	
	category.save(function(err,movie){
				if(err){
					console.log(err)
				}
				res.redirect('/admin/category/list')			
	})
}


// category list page
exports.list = function(req, res){
	
	Category.fetch(function(err, categories){
	  if(err){
	    console.log(err)
	  }
	  res.render('categorylist',{
		  title: 'Douban Movie 分类列表',
		  categories: categories
	  })
  })
}
