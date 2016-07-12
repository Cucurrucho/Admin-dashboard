$('.profile-img-heading').mouseenter(function () {
    $('.extended-profile').show();
    var mOver = false;
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