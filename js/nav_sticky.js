$(window).scroll(function(){
    if ($(window).scrollTop() >= 10) {
        $('.ais_member_nav').addClass('fixed_nav_ais');
    }
    else {
        $('.ais_member_nav').removeClass('fixed_nav_ais');
    }
});
