// Sticker
var adjustPic = function() {
    var picPos = document.getElementById('profilePic').getBoundingClientRect();
    var flag = document.getElementById('rusFlag');
    $(flag).css({
        'top': picPos.top,
        'left': picPos.left
    });
};

// Keep sidebar widths consistent on resizes
var matchSideSize = function() {
    var sideSize = $('#sideBar').css('width'),
        newSize = parseFloat(sideSize.substring(0,sideSize.length-2)) + 50,
        finalSize = newSize + 'px';
    $('#sideLinks').attr('width', finalSize);
};

window.onload = function() {
    Sticker.init('.profile');
    adjustPic();
    linkify('a');
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

    adjustPic();
};
