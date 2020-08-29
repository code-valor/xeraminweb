const express = require('express');
const ejs = require('ejs');
 
var app = express();
 
app.engine('.ejs', ejs.__express);
app.set('views',__dirname+'/web');

app.use(express.static('web'))
 
app.get("/", function(req,res) {
 
	res.render('./index.ejs', {
	});
 
});

var port = process.env.PORT || 3000;
 
app.listen(port,function(){
console.log("Server started! port: " + port);
});