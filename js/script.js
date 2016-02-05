function clickMenuMb(){
    $('#menu-mb').click(function(){
        $('.menu-main').stop().slideToggle(300);
    });
}
function clickMenuGBox(){
    $('#menu-game-box').click(function(){
        $('.menu-box').stop().slideToggle(300);
    });
}
function sortLi(){
        var numitems =  $(".game-box .menu-box li").length;
        $(".game-box .menu-box").css("column-count",Math.round(numitems/2-1));
}
$(document).ready(function(){
   $('.form-search .btn-search').click(function(){
       $('.form-search-f').stop().slideToggle(300);
   });
    clickMenuMb();
    clickMenuGBox();
    //sortLi();
});