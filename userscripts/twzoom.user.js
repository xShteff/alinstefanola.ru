// ==UserScript==
// @name            TW Map Zoom
// @description     Zooming the map in and out made possible!
// @author          xShteff
// @match           https://*.the-west.net/game.php*
// @match           https://*.the-west.de/game.php*
// @match           https://*.the-west.pl/game.php*
// @match           https://*.the-west.nl/game.php*
// @match           https://*.the-west.se/game.php*
// @match           https://*.the-west.ro/game.php*
// @match           https://*.the-west.com.pt/game.php*
// @match           https://*.the-west.cz/game.php*
// @match           https://*.the-west.es/game.php*
// @match           https://*.the-west.ru/game.php*
// @match           https://*.the-west.com.br/game.php*
// @match           https://*.the-west.org/game.php*
// @match           https://*.the-west.hu/game.php*
// @match           https://*.the-west.gr/game.php*
// @match           https://*.the-west.dk/game.php*
// @match           https://*.the-west.sk/game.php*
// @match           https://*.the-west.fr/game.php*
// @match           https://*.the-west.it/game.php*
// @grant           none
// @downloadURL     https://xshteff.github.io/userscripts/twzoom.user.js
// @updateURL       https://xshteff.github.io/userscripts/twzoom.user.js
// @version         1.00
// @run-at          document-end
// ==/UserScript==
var script = document.createElement('script');
script.type = 'text/javascript';
script.textContent = '(' + (function() {
    var currentZoom = 1.0;
    var maxZoomOut = 0.7;
    var maxZoomIn = 2.0;
    var adder = 0.05;
    var zoomIn = function() {
        console.log(currentZoom);
        if (currentZoom.toFixed(2) != maxZoomIn) {
            currentZoom += adder;
            document.getElementById('map').style.zoom = currentZoom;
            $('#xsht_zoom_display').text(currentZoom.toFixed(2));
        }
    }
    var zoomOut = function() {
        console.log(currentZoom);
        if (currentZoom.toFixed(2) != maxZoomOut) {
            currentZoom -= adder;
            document.getElementById('map').style.zoom = currentZoom;
            $('#xsht_zoom_display').text(currentZoom.toFixed(2));
        }
    }
    var iconPlus = $('<div></div>').attr({
        'title': 'Zoom In',
        'class': 'menulink'
    }).css({
        'background': 'url(https://puu.sh/nS9dK/37ae9203b0.png)',
        'background-position': '0px 0px'
    }).mouseleave(function() {
        $(this).css("background-position", "0px 0px");
    }).mouseenter(function(e) {
        $(this).css("background-position", "25px 0px");
    }).click(zoomIn);

    var zoomDisplay = $('<div></div>').attr({
        'title': 'Current zoom',
        'id': 'xsht_zoom_display'
    }).css({
        'color': 'white',
        'display': 'flex',
        'font-size': '12px',
        'justify-content': 'center',
        'align-items': 'center',
        'cursor': 'pointer'
    }).text('1.0');


    var iconMinus = $('<div></div>').attr({
        'title': 'Zoom Out',
        'class': 'menulink'
    }).css({
        'background': 'url(https://puu.sh/nS9e8/51058dca5d.png)',
        'background-position': '0px 0px'
    }).mouseleave(function() {
        $(this).css("background-position", "0px 0px");
    }).mouseenter(function(e) {
        $(this).css("background-position", "25px 0px");
    }).click(zoomOut);
    var fix = $('<div></div>').attr({
        'class': 'menucontainer_bottom'
    });
    $("#ui_menubar .ui_menucontainer :last").after($('<div></div>').attr({
        'class': 'ui_menucontainer',
        'id': 'twzoom'
    }).append(iconPlus).append(zoomDisplay).append(iconMinus).append(fix));

    scriptInfo = "ZOOM ZOOM!";
    window.scriptyscript = {
        script: TheWestApi.register('twzoom', 'The West Map Zoom', '2', Game.version.toString(), 'xShteff', 'https://xshteff.github.io'),
        setGui: function() {
            this.script.setGui(scriptInfo);
        },
        init: function() {
            this.setGui();
        }
    };
    window.scriptyscript.init();
}).toString() + ')()';
document.head.appendChild(script);