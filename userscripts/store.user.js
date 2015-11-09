// ==UserScript==
// @name         The West Multi-Purchase 
// @version      0.01 
// @description  public build 1
// @author       Alin "xShteff" Olaru
// @website      https://xshteff.github.io
// @include      *.the-west.*/game.php*
// @downloadURL  https://xshteff.github.io/userscripts/store.user.js
// @updateURL    https://xshteff.github.io/userscripts/store.user.js
// ==/UserScript==

/*
    COPYRIGHT
    End users are licensed the right to download the code into their web browser(s) for standard and reasonable usage only.
    If you want the script translated, you shall contact the script owner for this.
*/


function runScript(source) {
    if ('function' == typeof source) {
        source = '(' + source + ')();';
    }
    var script = document.createElement('script');
    script.setAttribute("type", "application/javascript");
    script.textContent = source;
    document.body.appendChild(script);
    document.body.removeChild(script);
}


runScript(function() {
    var styling = "<style>#xsht_load_screen { position:absolute; top: 0px; left: 0px; height:100%; width:100%; z-index:100; display:none; } </style>";
    $('head').append(styling);
    var loadingScreen = $('<div></div>').attr('id', 'xsht_load_screen');
    $('body').append(loadingScreen);
    var progressBar = new west.gui.Progressbar(0, 100);
    Trader.amountChanged = function() {
		var totalPrice = $('#xsht_item_buy_amount').val() * $('#xsht_item_price').text();
		$('#xsht_total_price').text('$ ' + totalPrice);
		if(totalPrice > Character.deposit + Character.money){
			$('#xsht_total_price').css({
                'color' : 'red',
                'font-weight' : 'bold'
            });
            $('.tw2gui_dialog_actions .tw2gui_button .textart_title:contains("Yes")').parent().fadeOut();
        }
		else{
			$('#xsht_total_price').css({
                'color' : 'black',
                'font-weight' : 'normal'
            });
            $('.tw2gui_dialog_actions .tw2gui_button .textart_title:contains("Yes")').parent().fadeIn();
        }
    }
    var buyStatus = "All the products were bought.";
    Trader.initProgress = function(bar) {
    	$('#xsht_load_screen').html('<div id="xsht_load_screen"></div>');
    	var barContainer = $('<div></div>').attr('id', 'xsht_bar_container').append(bar.getMainDiv());
    	$('#xsht_load_screen').append(barContainer);
    	$('#xsht_load_screen').fadeIn();
    	if(bar.maxValue > 1)
    		new UserMessage("Started buying " + bar.maxValue + " products! Please wait until the process is completed.", UserMessage.TYPE_ERROR).show();

    }

    Trader.increaseProgress = function() {
    	progressBar.increase(1);
    	if(progressBar.value == progressBar.maxValue){
    		$('#xsht_load_screen').fadeOut();
    		if(progressBar.maxValue > 1)
    			new UserMessage(buyStatus, UserMessage.TYPE_SUCCESS).show();
    	}
    }

    Trader.buy_popup_xhtml = '<div class="bag_item float_left"><img src="%buy_img%" /></div>' + '<span class="item_popup_sell_value">' + 'Single Purchase price:'.escapeHTML() + '$ <span id="xsht_item_price">%buy_popup_price%</span></span><br />' + '<span style="font-size:12px;">' + 'Are you sure you want to purchase this item?'.escapeHTML() + '<br>Amount: ' + '<span class="tw2gui_textfield"><span><input type="number" id="xsht_item_buy_amount" value="1" min="1" max="2147483647" style="width:75px" onchange="Trader.amountChanged()" onkeyup="Trader.amountChanged()"><span class="search_lable_span" style="display: none;">Amount</span></span></span>' + '<div id="xsht_total_price_desc" style="font-size:12px;">Total price: <span id="xsht_total_price">$ %buy_popup_price%</span></div>' +  '</span>';
    Trader.buyDialog = function(item_id) {
        var buy_popup;
        if ($('#buy_popup')) {
            $('#buy_popup').remove();
        }
        buy_popup = $('<div id="buy_popup" style="opacity: 0.9;"></div>');
        var item = Trader.getItemByItemId(item_id);
        if (item) {
            var html = Trader.buy_popup_xhtml.fillValues({
                buy_img: item.getImgEl()[0].src,
                buy_popup_price: item.getBuyPrice(),
                buy_popup_item_name: item.getName()
            });
            var coords = $(Trader.window.divMain).position();
            new west.gui.Dialog(item.getName(), html).setX(coords.left).setY(coords.top).addButton('yes', function() {
                var totalAmount = $('#xsht_item_buy_amount').val();
                progressBar = new west.gui.Progressbar(0, totalAmount);
                Trader.initProgress(progressBar);
                for(var i = 0; i < totalAmount; i++)
                    Trader.buyItem(item);
            }).addButton('no', function() {
                Trader.cancelBuy();
            }).setModal(true, true).show();
        }
    };
    
    Trader.buyItem = function(item) {
        item.getImgEl().css('opacity', '0.3');
        Ajax.remoteCall(Trader.types[Trader.type], 'buy', {
            item_id: item.obj.item_id,
            town_id: Trader.id,
            last_inv_id: Bag.getLastInvId()
        }, function(json) {
            if (json.error) {
                return new UserMessage(json.error, UserMessage.TYPE_ERROR).show();
                buyStatus = json.error;
                Trader.increaseProgress();
            } else {
                if (json.expressoffer) {
                    if(progressBar.value == 1)
                        Premium.confirmUse(json.expressoffer + " " + Bag.getLastInvId(), 'Express delivery', "You aren\'t currently in this town. But this item can be delivered to you immediately for a few nuggets.", json.price);
                	buyStatus = "You are not in the town!"
                    Trader.increaseProgress();
                } else {
                    Trader.handleBuyResponse(json);
                    buyStatus = "All the products were bought.";
                    if (Trader.type == "item_trader") {
                        item.divMain.remove();
                    }
                }
            }
            item.getImgEl().css('opacity', '1.0');
            Trader.increaseProgress();
        });
        Trader.cancelBuy();
    };
  

});