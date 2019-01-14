var express = require('express')
var path = require('path')
var mongoose = require('mongoose')
var port = process.env.PORT || 3000
var app = express()
var fs = require('fs')
var bodyParser=require("body-parser")
var cookieParser = require('cookie-parser')
var session = require('express-session')
var mongoStore = require('connect-mongo')(session)
var logger = require('morgan'); 
var dbUrl = 'mongodb://localhost/imooc'
var multipart = require('connect-multiparty');

// 路径配置
var serveStatic = require('serve-static')
app.use(express.static(path.join(__dirname, 'public'))); //设置静态文件目录
app.use(serveStatic('bower_components'))

mongoose.connect(dbUrl ,{useNewUrlParser: true});

// models loading
var models_path = __dirname + '/app/models'
var walk = function(path) {
  fs
    .readdirSync(path)
    .forEach(function(file) {
      var newPath = path + '/' + file
      var stat = fs.statSync(newPath)

      if (stat.isFile()) {
        if (/(.*)\.(js|coffee)/.test(file)) {
          require(newPath)
        }
      }
      else if (stat.isDirectory()) {
        walk(newPath)
      }
    })
}
walk(models_path)

app.set('views', './app/views/pages')
app.set('view engine', 'pug')
app.use(bodyParser.json());
app.use(cookieParser())
app.use(multipart())
app.use(session({
	secret: 'imooc',
	store: new mongoStore({
		url: dbUrl,
		collection: 'sessions'
	})
}))

if('development' === app.get('env')){
	app.set('showStackError', true)
	app.use(logger(':method: url: status'))
	app.locals.pretty =true
	mongoose.set('debug', true)
}



app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'views/public')))
app.locals.moment = require('moment')
app.listen(port)

require('./config/routes')(app)
console.log('imooc started on port' + port)

