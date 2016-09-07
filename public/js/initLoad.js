$(document).ready(function(){
    Sticker.init('.profile');
    linkify('a');
    var body = document.getElementsByTagName('body');
        body[0].style.overflowX = 'hidden';
});

window.onresize = function() {
    if(window.innerWidth < 650){
        $('#contentWindow').removeClass('col-xs-9');
        $('#contentWindow').addClass('col-xs-6');
    }
    else{
        $('#contentWindow').removeClass('col-xs-6');
        $('#contentWindow').addClass('col-xs-9');
    }

    if(window.innerWidth < 965){
        $('.sideItemText').css('display', 'none');
        $('.sideItemIcon').css('color', 'white');
        $('.sideItemIcon').removeClass('col-xs-3');
        $('.sideItemIcon').addClass('col-xs-8 col-xs-offset-2');
    }
    else{
        $('.sideItemText').css('display', 'inline-block');
        $('.sideItemIcon').css('color', 'black');
        $('.sideItemIcon').removeClass('col-xs-8 col-xs-offset-2');
        $('.sideItemIcon').addClass('col-xs-3');
    }
};
