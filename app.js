var express = require('express');
var app = express();

var request = require('request');
var cheerio = require('cheerio'); // Scrapes our html

var mongojs = require('mongojs');
var databaseUrl = "usatoday";
var collections = ["news"];

// use mongojs to hook the database to the db variable 
var db = mongojs(databaseUrl, collections);

// this makes sure that any errors are logged if mongodb runs into an issue
db.on('error', function(err) {
  console.log('Database Error:', err);
});

// Main route (simple Hello World Message)
app.get('/', function(req, res) {
  res.send("Hello world");
});

// Retrieves data from usatoday collection
app.get('/all', function(req, res){
	db.news.find({}, function(err, data){
		if (err) throw err;

		res.json(data);
	});
});

app.get('/scrape', function(req, res){
	// Snatches data from USA Today
	request('http://www.usatoday.com/news/', function(err, res, body) {

		var $ = cheerio.load(body);
		var results = [];

		$('span[itemprop|="headline"]').each(function(i, element) {
		// $('span.hgpm-list-text').each(function(i, element) {
		// $('a[itemprop|="url"]').each(function(i, element) {
			// var title = $(this).children('span[itemprop|="headline"]').text();
			var title = $(this).text();
			var story = $(this).next().text();

			results.push({
				title: title,
				story: story
			});

			db.news.insert(results, function(err, saved){
				if (err){
					console.log(err);
				}

				// res.json(saved);
			});
		});
		console.log(results);
	});
});

// listen on port 3000
app.listen(3000, function() {
  console.log('App running on port 3000!');
});

