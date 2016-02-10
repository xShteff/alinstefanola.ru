// ==UserScript==
// @name         We love The-West!
// @version      0.01
// @description  Because magic it's true!
// @author       Alin "xShteff" Olaru
// @website      https://xshteff.github.io
// @include      *.the-west.*/game.php*
// @downloadURL  https://xshteff.github.io/userscripts/love.user.js
// @updateURL    https://xshteff.github.io/userscripts/love.user.js
// ==/UserScript==

/*
    COPYRIGHT
    End users are licensed the right to download the code into their web browser(s) for standard and reasonable usage only.
    If you want the script translated, you shall contact the script owner for this.
*/

var loveModeText;
var loveModeOn;
var loveModeOff;

if (Game.locale == 'ro_RO') {
    loveModeText = "Modul dă dragoste!";
    loveModeOn = "Modul dă dragste fo\' activat!";
    loveModeOff = "Modul dă dragste fo\' dezactivat!";
} else {
    loveModeText = "Toggle love mode!";
    loveModeOn = "Love mode has been turned on!";
    loveModeOff = "Love mode has been turned off!";
}

var purpleBG = $('<div></div>').attr('id', 'xsht-love').css({
    'position' : 'absolute',
    'width' : '100%',
    'height' : '100%',
    'top' : '0',
    'left' : '0',
    'pointer-events' : 'none',
    'opacity' : '0.3',
    'z-index' : '1336',
    'background-color' : 'purple',
    'display' : 'none'
});
/*var videoLink;
if(Character.name == "Elmer Fudd")
    videoLink = "https://www.youtube.com/embed/HPsRD_S3oZs";
else
    videoLink = "https://www.youtube.com/embed/izGwDsrQ1eQ";*/
var asd = $('<iframe></iframe>').attr({
    'width' : '140px',
    'height' : '140px',
    'src' : 'https://www.youtube.com/embed/izGwDsrQ1eQ?autoplay=1',
    'frameborder' : '0'
}).css('padding-top', '7px');


var heartCount = 0;
var addHeart = function() {
	var left = Math.floor(Math.random() * 90) + 1;
    var size = Math.floor(Math.random() * 150) + 50;
    var heart = $('<img>').attr({
        'src': 'https://puu.sh/n35p5/17b7889c71.gif',
        'class': 'heartClass',
        'id': 'xsht_heart_' + heartCount 
    }).css({
        'width' : size + 'px',
        'height' : size +'px',
        'opacity' : '0.5',
        'left': left + '%', 
        'bottom': '0%',
        'position': 'absolute',
        'pointer-events' : 'none',
        'z-index' : '1337'
    });
    $('body').append(heart);
    $("#xsht_heart_" + heartCount).animate({
            bottom: '100%',
        }, 5000,
        function() {
            $(this).remove();
        });

    heartCount++;
}

var loveMode = 0;
var timer;
var startLove = function() {
    timer = window.setInterval(addHeart, 1000);
    $('body').append(purpleBG);
    $('#xsht-love').fadeIn();
    WestUi.setAvatar(asd);
    loveMode = 1;
    new UserMessage(loveModeOn).show();
}

var stopLove = function() {
    window.clearInterval(timer);
    $('#xsht-love').fadeOut(300, function() { $(this).remove(); });
    WestUi.setAvatar(Character.avatar);
    /*$.each($('img[id^="xsht_heart_"]').fadeOut(), function() {
        $(this).fadeOut();
    });*/
    loveMode = 0;
    new UserMessage(loveModeOff).show();
}


var icon = $('<div></div>').attr({
    'title': loveModeText,
    'class': 'menulink'
}).css({
    'background': 'url(https://puu.sh/n38e0/679055f8ea.png)',
    'background-position': '0px 0px'
}).mouseleave(function() {
    $(this).css("background-position", "0px 0px");
}).mouseenter(function(e) {
    $(this).css("background-position", "25px 0px");
}).click(function() {
    if(loveMode)
        stopLove();
    else
        startLove();
});

var fix = $('<div></div>').attr({
    'class': 'menucontainer_bottom'
}); 

jQuery("#ui_menubar .ui_menucontainer :last").after($('<div></div>').attr({
    'class': 'ui_menucontainer',
    'id': 'xsht_love_button'
}).append(icon).append(fix));


