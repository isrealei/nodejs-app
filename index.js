const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 8090;

router.use(function (req,res,next) {
console.log('/' + req.method);
next();
});

router.get('/', function(req,res){
res.sendFile(path + 'home.html');
});

router.get('/lasagna', function(req,res){
res.sendFile(path + 'lasagna.html');
});

router.get('/guacamole', function(req,res){
res.sendFile(path + 'guacamole.html');
});

router.get('/banana-bread', function(req,res){
res.sendFile(path + 'banana_bread.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
console.log('Nodejs Express Example App listening on port ' + port)
})
