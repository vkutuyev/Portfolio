// Sticker
var adjustPic = function() {
    var picPos = document.getElementById('profilePic').getBoundingClientRect();
    var flag = document.getElementById('rusFlag');
    $(flag).css({
        'top': picPos.top,
        'left': picPos.left
    });
};

window.onload = function() {
    Sticker.init('.profile');
    adjustPic();
};

window.onresize = function() {
    if(window.innerWidth < 650){
        $('#contentWindow').removeClass('col-xs-9');
        $('#contentWindow').addClass('col-xs-6');
    }
    else{
        $('#contentWindow').removeClass('col-xs-6');
        $('#contentWindow').addClass('col-xs-9');
    }
    adjustPic();
};
