var express = require("express");
var sqlite3 = require("sqlite3");
var db = new sqlite3.Database("Quotes.db");
var app = express();
var port = 3000;


app.get(`/`, function(request, response){
    response.send("Hello, World");
});

app.get(`/quotes`, function(request, response){
    db.all("SELECT * FROM Quotes" , function  (err,rows) {
    	if (err) {
    		response.send("some thing wrong happend");
    	} else {
    		console.log(rows);
    		response.send("get all quotes"+ rows);
    	} 
    });
});

app.get(`/quotes`, function(request, response){
    db.all("SELECT * FROM Quotes" , function  (err,rows) {
    	if (err) {
    		response.send("some thing wrong happend");
    	} else {
    		console.log(rows);
    		response.send("get all quotes"+ rows);
    	} 
    });
});

app.get(`/quotes/:author`, function(request, response){
    db.all("SELECT * FROM Quotes where Author = ?" , request.params.author  , function  (err,rows) {
    	if (err) {
    		response.send("some thing wrong happend");
    	} else {
    		console.log(rows);
    		response.send("get all quotes from " + request.params.author + rows);
    	} 
    });
});

app.post(`/quotes`, function (request, response) {
	console.log(request.body,"request.body");
	db.run("INSERT INTO Quotes VLAUES ? ",request.body,function (err, row ) {
		if (err) {
			response.send(err);
		} else {
			response.send(row);
		}

	})
});
app.listen(port, function(){
    console.log("Express app listening on port " + port);
});