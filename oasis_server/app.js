var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var passport = require('passport');
var auth = require('./routes/auth');
var post = require('./routes/routes.posts');
var subscribes = require('./routes/sub.routes');
var contact = require('./routes/contact.route');
var aboutUs = require('./routes/aboutUs.route');
var service = require('./routes/service.route');
var cors = require('cors')

   // mongoose.connect('mongodb://localhost/blog-cms',{})
  mongoose.connect('mongodb+srv://rene:653251799@cluster0.b10ud.mongodb.net/test', { 
    promiseLibrary: require('bluebird'), 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() =>  console.log('Database connection successful'))
  .catch((err) => console.error(err));


var app = express();


//app.use(express.static(__dirname, '/dist'));

app.use(cors())
app.use(passport.initialize());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.status(200).send('Hello world this is the backend to the oasis project ');
});


app.use('/api/post', post);
//app.use('/api/auth', auth);
 app.use('/api/contact', contact);
app.use('/api/subscribers', subscribes);
app.use('/api/aboutUs', aboutUs);
app.use('/api/service', service);

const port = 3000;
// port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log('Connected to port' + port)
})

module.exports = app;

