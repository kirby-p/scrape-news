// Click events

$(document).on('click', '.addcomment', function() {
	var thisId = $(this).attr('data-id');
	$.ajax({
		type: "POST",
		url: '/addcomment/' + thisId
	});
	getNews();
});

// function getComments(){
// 	$('#stories').empty();
// 	$.getJSON('/stories', function(data){
// 		for(var i = 0; i < data.length; i++){
// 			$('#stories').prepend(
// 				'<tr><td>' + data[i].title + '</td>' + 
// 				'<td>' + data[i].story + '</td>' + 
// 				'<td>' + data[i].comments + '</td>' + 
// 				'<td><button class="addcomment" data-id="' + 
// 				data[i]._id + '">Add Comment</button></td></tr>');
// 		}
// 		$('#stories').prepend('<tr><th>Title</th><th>Story</th><th>Comments</th>');
// 	});
// }

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
// getComments();
getNews();