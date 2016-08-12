// Click events

$(document).on('click', ,'.addcomment', function() {
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