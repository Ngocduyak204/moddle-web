$(document).ready(function(){
    $('.top-nav_menu .nav-bar').click(function(){
        $('top-nav_menu .nav-bar').removeClass('nav-bar-link');
        $(this).addClass('nav-bar-link');
        return false;
    });
});