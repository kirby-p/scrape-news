// Click events

$(document).on('click', '.addcomment', function() {
	var thisId = $(this).attr('data-id');
	$.ajax({
		type: "GET",
		url: '/addcomment/' + thisId
	});
	getComments();
});

function getComments(){
	$('#comments').empty();
	$.getJSON('/comments', function(data){
		for(var i = 0; i < data.length; i++){
			$('#comments').prepend(
				'<tr><td>' + data[i].title + '</td>' + 
				'<td>' + data[i].story + '</td>' + 
				'<td>' + data[i].comments + '</td>' + 
				'<td><button class="addcomment" data-id="' + 
				data[i]._id + '">Add Comment</button></td></tr>');
		}
		$('#comments').prepend('<tr><th>Title</th><th>Story</th><th>Comments</th>');
	})
}

function getNews(){
	$('#stories').empty();
	$.getJSON('/news', function(data){
		for(var i = 0; i < data.length; i++){
			$('#stories').prepend(
				'<tr><td>' + data[i].title + '</td>' + 
				'<td>' + data[i].story + '</td>' + 
				'<td>' + data[i].comments + '</td>' + 
				'<td><button class="addcomment" data-id="' + 
				data[i]._id + '">Add Comment</button></td></tr>');
		}
		$('#stories').prepend('<tr><th>Title</th><th>Story</th><th>Comments</th>');
	})
}

getNews();