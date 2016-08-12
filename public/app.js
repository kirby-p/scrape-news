// Click events

$(document).on('click', '.addcomment', function() {
	var thisId = $(this).attr('data-id');
	$.ajax({
		type: 'GET',
		url: '/addcomment' + thisId
	});
	$(this).parents('tr').remove()
	getComments();
});

// function getComments(){
// 	$('#comments').empty();
// 	.getJSON('/')
// }

function getNews(){
	$('#stories').empty();
	$.getJSON('/news', function(data){
		for(var i = 0; i < data.length; i++){
			$('#stories').prepend('<tr><td>' + data[i].title + 
				'</td><td>' + data[i].story + '</td><button class="addcomment" data-id="' + 
				data[i]._id + '">Add Comment</button></td></tr>');
		}
		$('#stories').prepend('<tr><th>Title</th><th>Story</th>');
	})
}

getNews();