;(function($){

	var mOver;

	$('.profile-img-heading').mouseenter(function () {
		$('.extended-profile').show();
		mOver = false;
		setTimeout(function () {

			if (!mOver) {
				$('.extended-profile').hide();
			}

		}, 2000);
	});


	$('.extended-profile').mouseover(function () {
		mOver = true;
	});

	$('.extended-profile').mouseleave(function () {
		$('.extended-profile').hide();
	});
}(jQuery));