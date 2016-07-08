window.onload = function(){

    $('.profile-img-heading').each(function() {

        $(this).mouseenter(function(){ $('.extended-profile').show(); });
    });
    $('.extended-profile').each(function () {

        $(this).mouseleave(function(){ $('.extended-profile').hide(); });

    })

}