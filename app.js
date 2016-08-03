var cheerio = require('cheerio');
var request = require('request');

request('http://www.usatoday.com/news/', function(err, res, body) {
	// console.log(body);

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
	});

	console.log(results);
});