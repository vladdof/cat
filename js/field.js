$(document).ready(function() {
	$('.col-auto').on('click', function() {
		let selected = ($(this).hasClass('selected')) ? true : false;

		if (!selected) {
			$(this).addClass('selected');
		} else {
			$(this).removeClass('selected');
		}
	});

	$('.disabled').off('click');
});
