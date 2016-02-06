var script = document.createElement('script');
script.type = 'text/javascript';
script.textContent = '(' + (function () {
	var asd = $('<iframe></iframe>').attr({
		'width' : '140px',
		'height' : '140px',
		'src' : 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1',
		'frameborder' : '0'
	}).css('padding-top', '7px');
	WestUi.setAvatar(asd);
}).toString() + ')()';
if (location.hostname.indexOf('the-west') >= 0 && location.pathname === '/game.php')
    document.head.appendChild(script);