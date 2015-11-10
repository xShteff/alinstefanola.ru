// ==UserScript==
// @name         The West Magic
// @version      0.05
// @description  Because magic is awesome!
// @author       Alin "xShteff" Olaru
// @website      https://xshteff.github.io
// @include      *.the-west.*/game.php*
// @downloadURL  https://xshteff.github.io/userscripts/magic.user.js
// @updateURL    https://xshteff.github.io/userscripts/magic.user.js
// ==/UserScript==

/*
    COPYRIGHT
    End users are licensed the right to download the code into their web browser(s) for standard and reasonable usage only.
    If you want the script translated, you shall contact the script owner for this.
*/

var scriptIcon = function(iconID, iconTitle, iconURL, iconEvent) {
    var icon = $('<div></div>').attr({
        'title': iconTitle,
        'class': 'menulink'
    }).css({
        'background': 'url(' + iconURL + ')',
        'background-position': '0px 0px'
    }).mouseleave(function() {
        $(this).css("background-position", "0px 0px");
    }).mouseenter(function(e) {
        $(this).css("background-position", "25px 0px");
    }).click(function() {
        iconEvent;
    });

    var fix = $('<div></div>').attr({
        'class': 'menucontainer_bottom'
    }); /* Thanks  Sly! */

    jQuery("#ui_menubar .ui_menucontainer :last").after($('<div></div>').attr({
        'class': 'ui_menucontainer',
        'id': iconID
    }).append(icon).append(fix));
}

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

    function registerToWestApi() {
        scriptInfo = "";
        scriptInfo += "<b>Notifications: </b>" + localStorage.getItem('xsht_noti_status') + "<br>";
        scriptInfo += "<b>Veteran Point Counter: </b>" + localStorage.getItem('xsht_vet_status') + "<br>";
        scriptInfo += "<b>Task Killer: </b>" + localStorage.getItem('xsht_killer_status') + "<br>";
        scriptInfo += "<b>Jobs Window Redesign: </b>" + localStorage.getItem('xsht_jobs_status') + "<br>";
        scriptInfo += "<b>Multiple store purchase: </b>" + localStorage.getItem('xsht_buy_status') + "<br>";
        window.scriptyscript = {
            script: TheWestApi.register('ohohohitsmagic', 'The West Magic', '2.1', Game.version.toString(), 'xShteff', 'https://xshteff.github.io'),
            setGui: function() {
                this.script.setGui(scriptInfo);
            },
            init: function() {
                this.setGui();
            }
        };
        window.scriptyscript.init();
    }



    var style = "<style>.xsht_custom_unit_counter {position: absolute;top: 32px;left: 50%;margin-left: 120px;z-index: 16;width: 180px;height: 36px;text-align: left;text-shadow: 1px 1px 1px #000;background: url('https://westzzs.innogamescdn.com/images/interface/custom_unit_counter_sprite.png?2') no-repeat 50% 0;} .xsht_custom_unit_counter .value {position: absolute;left: 32px;top: 3px;width: 105px;height: 25px;line-height: 25px;padding: 0 5px;color: #f8c57c;font-size: 13pt;text-align: right;-user-select: none;-moz-user-select: none;background: url('https://westzzs.innogamescdn.com/images/interface/custom_unit_counter_sprite.png?2') no-repeat 0 -36px;z-index: 1;} .veteran_down {top:-1px !important;} .arrow_down {top:32px !important;} .xshttoggledisabled { height:20px; width: 50px; background-image:url('http://puu.sh/fSUoh/543de27864.png'); background-size:100%; } .xshttoggleenabled { height:20px; width: 50px; background-image:url('http://puu.sh/fSUxZ/18000106ca.png') !important;  background-size:100%; } </style>";
    $('head').append(style);

    function magicWindow() {
        window.MagicWindow = {
            window: null,
            currentTab: "one",
            one: {
                window: "<div class='magicwindow-one'></div>"
            },
            two: {
                window: "<div class='magicwindow-two'></div>"
            },
            three: {
                window: "<div class='magicwindow-three'></div>"
            },
            four: {
                window: "<div class='magicwindow-four'></div>"
            },
            five: {
                window: "<div class='magicwindow-five'></div>"
            }
        };

        function tabIcon(icon) {
            return '<img src=' + icon + '>';
        }

        MagicWindow.open = function(tab) {
            if (undefined === tab) tab = this.currentTab;
            var tabclick = function(win, id) {
                MagicWindow.showTab(id);
            }
            MagicWindow.window = wman.open("magicwindow", "Allen Test").setMiniTitle("Notifications").addTab(tabIcon('https://westzzs.innogamescdn.com/images/interface/chat/chat.gif'), "one", tabclick).addTab(tabIcon('http://puu.sh/gdsek/93e29796d4.png'), "two", tabclick).addTab(tabIcon('http://puu.sh/gdsnY/ecb27d9300.png'), "three", tabclick).addTab(tabIcon('https://westzzs.innogamescdn.com/images/icons/hammer.png'), "four", tabclick).addTab(tabIcon('http://puu.sh/lfvxl/187895d35c.png'), "five", tabclick).appendToContentPane(MagicWindow.one.window).appendToContentPane(MagicWindow.two.window).appendToContentPane(MagicWindow.three.window).appendToContentPane(MagicWindow.four.window).appendToContentPane(MagicWindow.five.window).setSize(375, 320);
            this.showTab(tab);
        };

        MagicWindow.showTab = function(id) {
            if (!this.window) return;
            this.currentTab = id;
            this.window.activateTab(id).$('div.tw2gui_window_content_pane > *').each(function(i, e) {
                if ($(e).hasClass('magicwindow-' + id)) {
                    $(e).children().fadeIn();
                    $(e).show();
                } else {
                    $(e).children().fadeOut();
                    $(e).hide();
                }
            });
            MagicWindow.window.setTitle("Allen Test");
            this.window.removeClass('one').removeClass('two').addClass(id);
            switch (id) {
                case "one":
                    MagicWindow.one.init();
                    break;
                case "two":
                    MagicWindow.two.init();
                    break;
                case "three":
                    MagicWindow.three.init();
                    break;
                case "four":
                    MagicWindow.four.init();
                    break;
                case "five":
                    MagicWindow.five.init();
                    break;
            }
        };

        MagicWindow.one.init = function() {
            MagicWindow.window.setTitle("Notifications");
            MagicWindow.window.setMiniTitle("Magic Window - Notifications");
            content = "";
            content += "<table>";
            content += "<tr> ";
            content += "<td><b>Toggle:</b> </td>";
            content += "<td> <div id='xsht-toggle-noti' class='xshttoggledisabled'></td>";
            content += "</tr>";
            content += "<tr> ";
            content += "<td><b>Release Date:</b> </td>";
            content += "<td> 16th September 2014</td>";
            content += "</tr>";
            content += "<tr> ";
            content += "<td colspan='2'><br><br><i>A simple userscript that displays a notification every time you get a new private message. In order for the script to work, you must press the chat bubble that will appear under the settings button, and allow your browser to display notifications for this page.</i></td>";
            content += "</tr><tr>";
            content += "<td colspan='2'><font color='red'><b>Please reload the game in order to apply the changes!</b></font></td>";
            content += "</tr>";
            content += "</table>";
            $('.magicwindow-one').html(content).hide().fadeIn();

            if (localStorage.getItem("xsht_noti_status") == "enabled")
                $('#xsht-toggle-noti').addClass('xshttoggleenabled');
            $('#xsht-toggle-noti').click(function() {
                if ($(this).hasClass('xshttoggleenabled')) {
                    new UserMessage('Notifications are now disabled').show();
                    $(this).removeClass('xshttoggleenabled');
                    localStorage.setItem("xsht_noti_status", "disabled")
                } else {
                    new UserMessage('Notifications are now enabled').show();
                    $(this).addClass('xshttoggleenabled');
                    localStorage.setItem("xsht_noti_status", "enabled")
                }
            });

        }

        MagicWindow.two.init = function() {
            MagicWindow.window.setTitle("Veteran Point Counter");
            MagicWindow.window.setMiniTitle("Magic Window -  VP Counter");
            content = "";
            content += "<table>";
            content += "<tr> ";
            content += "<td><b>Toggle: </b></td>";
            content += "<td> <div id='xsht-toggle-vet' class='xshttoggledisabled'></td>";
            content += "</tr>";
            content += "<tr> ";
            content += "<td><b>Release Date:</b> </td>";
            content += "<td> 16th September 2014</td>";
            content += "</tr>";
            content += "<tr> ";
            content += "<td colspan='2'><br><br><i>A simple display of your amount of veteran points, placed conveniently under the top bar.</i></td>";
            content += "</tr><tr>";
            content += "<td colspan='2'><font color='red'><b>Please reload the game in order to apply the changes!</b></font></td>";
            content += "</tr>";
            content += "</table>";
            $('.magicwindow-two').html(content).hide().fadeIn();

            if (localStorage.getItem("xsht_vet_status") == "enabled")
                $('#xsht-toggle-vet').addClass('xshttoggleenabled');
            $('#xsht-toggle-vet').click(function() {
                if ($(this).hasClass('xshttoggleenabled')) {
                    new UserMessage('The Veteran Point Counter is now disabled').show();
                    $(this).removeClass('xshttoggleenabled');
                    localStorage.setItem("xsht_vet_status", "disabled")
                } else {
                    new UserMessage('The Veteran Point Counter is now enabled').show();
                    $(this).addClass('xshttoggleenabled');
                    localStorage.setItem("xsht_vet_status", "enabled")
                }
            });
        }

        MagicWindow.three.init = function() {
            MagicWindow.window.setTitle("Task Killer");
            MagicWindow.window.setMiniTitle("Magic Window - Task Killer");
            content = "";
            content += "<table>";
            content += "<tr> ";
            content += "<td><b>Toggle: </b></td>";
            content += "<td> <div id='xsht-toggle-killer' class='xshttoggledisabled'></td>";
            content += "</tr>";
            content += "<tr> ";
            content += "<td><b>Release Date:</b> </td>";
            content += "<td> 21th September 2014</td>";
            content += "</tr>";
            content += "<tr> ";
            content += "<td colspan='2'><br><br><i>A perfect script for lazy people (Like the guy that made this userscript). Tired of clicking 9 times to cancel your jobs? No problem! Just press the button placed on the left of the queued jobs, and all your jobs will be gone! It's MAGIC!</i></td>";
            content += "</tr><tr>";
            content += "<td colspan='2'><font color='red'><b>Please reload the game in order to apply the changes!</b></font></td>";
            content += "</tr>";
            content += "</table>";
            $('.magicwindow-three').html(content).hide().fadeIn();

            if (localStorage.getItem("xsht_killer_status") == "enabled")
                $('#xsht-toggle-killer').addClass('xshttoggleenabled');
            $('#xsht-toggle-killer').click(function() {
                if ($(this).hasClass('xshttoggleenabled')) {
                    new UserMessage('Task Killer is now disabled').show();
                    $(this).removeClass('xshttoggleenabled');
                    localStorage.setItem("xsht_killer_status", "disabled")
                } else {
                    new UserMessage('Task Killer is now enabled').show();
                    $(this).addClass('xshttoggleenabled');
                    localStorage.setItem("xsht_killer_status", "enabled")
                }
            });
        }

        MagicWindow.four.init = function() {
            MagicWindow.window.setTitle("Job Window Redesign");
            MagicWindow.window.setMiniTitle("Magic Window - Job Window Redesign");
            content = "";
            content += "<table>";
            content += "<tr> ";
            content += "<td><b>Toggle: </b></td>";
            content += "<td> <div id='xsht-toggle-jobs' class='xshttoggledisabled'></td>";
            content += "</tr>";
            content += "<tr> ";
            content += "<td><b>Release Date:</b> </td>";
            content += "<td> 31st October 2014 </td>";
            content += "</tr>";
            content += "<tr> ";
            content += "<td colspan='2'><br><br><i>An another script for lazy people! This userscript will replace the counter inside the job window, with a custom dropdown! How amazing is that? </i></td>";
            content += "</tr><tr>";
            content += "<td colspan='2'><font color='red'><b>Please reload the game in order to apply the changes!</b></font></td>";
            content += "</tr>";
            content += "</table>";
            $('.magicwindow-four').html(content).hide().fadeIn();

            if (localStorage.getItem("xsht_jobs_status") == "enabled")
                $('#xsht-toggle-jobs').addClass('xshttoggleenabled');
            $('#xsht-toggle-jobs').click(function() {
                if ($(this).hasClass('xshttoggleenabled')) {
                    new UserMessage('Job Window modifications are now disabled').show();
                    $(this).removeClass('xshttoggleenabled');
                    localStorage.setItem("xsht_jobs_status", "disabled")
                } else {
                    new UserMessage('Job Window modifications are now enabled').show();
                    $(this).addClass('xshttoggleenabled');
                    localStorage.setItem("xsht_jobs_status", "enabled")
                }
            });
        }

        MagicWindow.five.init = function() {
            MagicWindow.window.setTitle("Multi Purchase");
            MagicWindow.window.setMiniTitle("Magic Window - Multi Purchase");
            content = "";
            content += "<table>";
            content += "<tr> ";
            content += "<td><b>Toggle: </b></td>";
            content += "<td> <div id='xsht-toggle-buy' class='xshttoggledisabled'></td>";
            content += "</tr>";
            content += "<tr> ";
            content += "<td><b>Release Date:</b> </td>";
            content += "<td> 10th November 2015 </td>";
            content += "</tr>";
            content += "<tr> ";
            content += "<td colspan='2'><br><br><i>A simple userscript that will allow you to purchase multiple items from the store! Amounts bigger than 27 will suffer a delay, in order to avoid flood protection.</i> <br> Kudos to <a href='https://forum.the-west.net/member.php?u=11236' target='_blank'>Slygoxx</a> for helping. <br></td>";
            content += "</tr><tr>";
            content += "<td colspan='2'><font color='red'><b>Please reload the game in order to apply the changes!</b></font></td>";
            content += "</tr>";
            content += "</table>";
            $('.magicwindow-five').html(content).hide().fadeIn();

            if (localStorage.getItem("xsht_buy_status") == "enabled")
                $('#xsht-toggle-buy').addClass('xshttoggleenabled');
            $('#xsht-toggle-buy').click(function() {
                if ($(this).hasClass('xshttoggleenabled')) {
                    new UserMessage('Multi purchases are now disabled').show();
                    $(this).removeClass('xshttoggleenabled');
                    localStorage.setItem("xsht_buy_status", "disabled")
                } else {
                    new UserMessage('Multi purchases are now enabled').show();
                    $(this).addClass('xshttoggleenabled');
                    localStorage.setItem("xsht_buy_status", "enabled")
                }
            });
        }

    }


    function scriptButton(image, title) {
        var icon = $('<div></div>').attr({
            'title': title,
            'class': 'menulink'
        }).css({
            'background': 'url(' + image + ')',
            'background-position': '0px 0px'
        }).mouseleave(function() {
            $(this).css("background-position", "0px 0px");
        }).mouseenter(function(e) {
            $(this).css("background-position", "25px 0px");
        }).click(function() {
            MagicWindow.open();
        });

        var fix = $('<div></div>').attr({
            'class': 'menucontainer_bottom'
        }); /* Thanks  Sly! */

        jQuery("#ui_menubar .ui_menucontainer :last").after($('<div></div>').attr({
            'class': 'ui_menucontainer',
            'id': '2048'
        }).append(icon).append(fix));
    }


    function fancyXP(color) {
        $('.fill').css('background', 'url("http://puu.sh/fTVGl/9e812f58c6.png") no-repeat').append('<div id="fancybar"></div>');
        $('#fancybar').css({
            'height': '100%',
            'width': '100%',
            'opacity': '0.5',
            'background-color': color
        });
    }

    function jobRework() {
        JobWindow.getJobAmount = function() {
            var amount = parseInt(this.window.$("#tw_work_menu_value").children("option").filter(":selected").text(), 10);

            return isNaN(amount) ? 1 : amount;
        };

        JobWindow.getJobAmountSelector = function() {
            var title = _('How often do you want to start the job?').escapeHTML(),
                cb = this.setJobAmount.bind(this);

            return $(s('<div style="position:relative;top:-50px;left:20px;" title="%1">' +
                '<select id="tw_work_menu_value">' + '      <option value="1">1</option>' + '      <option value="2">2</option>' + '      <option value="3">3</option>' + '      <option value="4">4</option>' + '      <option value="5">5</option>' + '      <option value="6">6</option>' + '      <option value="7">7</option>' + '      <option value="8">8</option>' + '      <option value="9">9</option>' + '    </select> ' +
                '</div>', title)).click(cb).mousewheel(cb);
        };
    }

    function vetPointCounter() {
        if (Game.locale == 'ro_RO') {
            var description = '<b>Puncte de Veteran</b> <br> Primești Puncte de Veteran participând la Aventuri! <br> Punctele de Veteran pot fi folosite în Magazinul Union Pacific';
        } else if (Game.locale == 'de_DE') {
            /*Thank you, Tom Robert, for the translation! */
            var description = '<b>Veteranenpunkte</b><br>Man kann bei einer Runde Abenteuer bis zu 250 Veteranenpunkte verdienen!<br>Diese können dann im Union Pacific Shop für Käufe eingesetzt werden.';
        } else {
            var description = '<b>Veteran Points</b> <br>You earn Veteran Points by fighting on Adventures! <br>Veteran points can be spent in the Union Pacific Store.';
        }

        $("#ui_topbar").before("<div class='xsht_custom_unit_counter' id='veteran_counter'><div class='value' id='veteran_value'></div> <img alt='' id='veteran_icon' class='tw-currency curr-veteran' ></div>");
        $("#veteran_counter").css({
            'position': 'absolute',
            'margin-left': '-290px',
            'margin-right': 'auto',
            'top': '30px',
            'z-index': '2',
            'transition': 'top 0.5s ease 0s'
        }).attr({
            'onclick': 'west.window.shop.open()',
            'title': description
        });
        $("#veteran_value").css({
            'text-align': 'right',
            'font-size': '15px'
        });
        $("#veteran_icon").css({
            'position': 'relative',
            'z-index': '2',
            'top': '4px',
            'left': '33px'
        }).attr("src", "/images/tw2gui/pixel-vfl3z5WfW.gif");

        $('#ui_topbar').after("<div class='tw2gui_arrow_down_top veteran_arrow'></div>");

        $(".veteran_arrow").css({
            'position': 'relative',
            'margin-left': 'auto',
            'margin-right': 'auto',
            'top': '63px',
            'right': '200px',
            'cursor': 'pointer',
            'z-index': '16',
            'transition': 'top 0.5s ease 0s'
        }).click(function() {
            $(this).toggleClass("tw2gui_arrow_down_bottom arrow_down");
            $("#veteran_counter").toggleClass("veteran_down")
        });


        EventHandler.listen("veteran_points_changed", function(amount) {
            WestUi.TopBar._redraw($("#veteran_value"), Character.veteranPoints);
        });
        WestUi.TopBar._redraw($("#veteran_value"), Character.veteranPoints);
    }

    function taskKiller() {
        var icon = $('<div></div>').attr({
            'title': "Cancel all jobs",
            'class': 'menulink'
        }).css({
            'background': 'url(http://puu.sh/bKC6c/ffbdf2ca37.jpg)',
            'background-position': '0px 0px'
        }).mouseleave(function() {
            $(this).css("background-position", "0px 0px");
        }).mouseenter(function(e) {
            $(this).css("background-position", "25px 0px");
        }).click(function() {
            var n = TaskQueue.queue.length;
            for (i = 0; i < n; i++) {
                TaskQueue.cancel(i);
            }
        });

        var fix = $('<div></div>').attr({
            'class': 'menucontainer_bottom'
        }); /* Thanks  Sly! */

        jQuery("#toggleTaskQueue").append($('<div></div>').attr({
            'class': 'ui_menucontainer',
            'id': 'taskKiller'
        }).append(icon).append(fix));

        jQuery("#taskKiller").css({
            "position": "relative",
            "right": "125px",
            "top": "30px",
            "z-index": "-1"
        });
    }

    function MultiPurchase() {
        var styling = "<style>#xsht_load_screen { position:absolute; top: 0px; left: 0px; height:100%; width:100%; z-index:100; display:none; } </style>";
        $('head').append(styling);
        var loadingScreen = $('<div></div>').attr('id', 'xsht_load_screen');
        $('body').append(loadingScreen);
        var progressBar = new west.gui.Progressbar(0, 100);
        Trader.amountChanged = function() {
            var totalPrice = $('#xsht_item_buy_amount').val() * $('#xsht_item_price').text();
            $('#xsht_total_price').text('$ ' + totalPrice);
            if (totalPrice > Character.deposit + Character.money) {
                $('#xsht_total_price').css({
                    'color': 'red',
                    'font-weight': 'bold'
                });
                $('.tw2gui_dialog_actions .tw2gui_button .textart_title:contains("Yes")').parent().fadeOut();
            } else {
                $('#xsht_total_price').css({
                    'color': 'black',
                    'font-weight': 'normal'
                });
                $('.tw2gui_dialog_actions .tw2gui_button .textart_title:contains("Yes")').parent().fadeIn();
            }
        }
        var buyStatusText = "All the products were bought.";
        var buyStatus = UserMessage.TYPE_SUCCESS;
        Trader.initProgress = function(bar) {
            $('#xsht_load_screen').html('<div id="xsht_load_screen"></div>');
            var barContainer = $('<div></div>').attr('id', 'xsht_bar_container').append(bar.getMainDiv());
            $('#xsht_load_screen').append(barContainer);
            $('#xsht_load_screen').fadeIn();
            if (bar.maxValue > 1)
                new UserMessage("Started buying " + bar.maxValue + " products! Please wait until the process is completed.", UserMessage.TYPE_ERROR).show();
            $('#xsht_load_screen .tw2gui_progressbar_progress').append("<span id='xsht_bar_timer' style=\"z-index: 2; right: 5px; top: 0; bottom: 0; position: absolute; color: white; font-size: 12px;line-height: 19px;text-shadow: black 1px 1px 1px;\">1:00</span>");
            Trader.startTime = new Date().getTime() / 1000;
        }

        Trader.increaseProgress = function() {
            progressBar.increase(1);
            if (progressBar.value == progressBar.maxValue) {
                $('#xsht_load_screen').fadeOut();
                if (progressBar.maxValue > 1)
                    new UserMessage(buyStatusText, buyStatus).show();
            }
            Trader.updateTimer();
        }

        Trader.buy_popup_xhtml = '<div class="bag_item float_left"><img src="%buy_img%" /></div>' + '<span class="item_popup_sell_value">' + 'Single Purchase price:'.escapeHTML() + '$ <span id="xsht_item_price">%buy_popup_price%</span></span><br />' + '<span style="font-size:12px;">' + 'Are you sure you want to purchase this item?'.escapeHTML() + '<br>Amount: ' + '<span class="tw2gui_textfield"><span><input type="number" id="xsht_item_buy_amount" value="1" min="1" max="2147483647" style="width:75px" onchange="Trader.amountChanged()" onkeyup="Trader.amountChanged()"><span class="search_lable_span" style="display: none;">Amount</span></span></span>' + '<div id="xsht_total_price_desc" style="font-size:12px;">Total price: <span id="xsht_total_price">$ %buy_popup_price%</span></div>' + '</span>';
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
                    for (var i = 0; i < totalAmount; i++)
                        if ($('#xsht_item_buy_amount').val() > 27)
                            setTimeout(Trader.buyItem, i * 1000, item);
                        else
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
                    buyStatusText = json.error;
                    buyStatus = UserMessage.TYPE_ERROR;
                    Trader.increaseProgress();
                    return new UserMessage(json.error, UserMessage.TYPE_ERROR).show();
                } else {
                    if (json.expressoffer) {
                        if (progressBar.maxValue == 1)
                            Premium.confirmUse(json.expressoffer + " " + Bag.getLastInvId(), 'Express delivery', "You aren\'t currently in this town. But this item can be delivered to you immediately for a few nuggets.", json.price);
                        buyStatusText = "You are not in the town!"
                        buyStatus = UserMessage.TYPE_ERROR;
                        Trader.increaseProgress();
                    } else {
                        Trader.handleBuyResponse(json);
                        buyStatusText = "All the products were bought.";
                        buyStatus = UserMessage.TYPE_SUCCESS;
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

        Trader.updateTimer = function() {
            var averageTime = (new Date().getTime() / 1000 - Trader.startTime) / progressBar.value;
            var remainingTime = averageTime * (progressBar.maxValue - progressBar.value);
            var minutes = parseInt(remainingTime / 60) % 60;
            var seconds = Math.round(remainingTime % 60);
            $("#xsht_load_screen #xsht_bar_timer").html(minutes + ":" + (seconds < 10 ? "0" + seconds : seconds));
        };
    }

    function NotificationsGo() {
        if (Game.locale == 'ro_RO') {
            IconTitle = "Activează notificările!";
            ErrorNotSupported = "Îmi pare rău, notificările nu sunt suportate!";
            ErrorDisabled = "Notificările sunt dezactivate";
            TextEnabled = "Notificările sunt activate.";
            GuiDescription = "<p>Orice feedback in legatura cu script-ul trebuie postat <a href='http://forum.the-west.net/showthread.php?t=55128' target='_blank'>aici</a>.</p>";
        } else if (Game.locale == 'de_DE') {
            /*Thank you, Tom Robert, for the translation! */
            IconTitle = "TW-Magic: Benachrichtigungen aktivieren!";
            ErrorNotSupported = "Leider werden Benachrichtigungen nicht unterstützt!";
            ErrorDisabled = "Benachrichtigungen sind deaktiviert.";
            TextEnabled = "Benachrichtigungen sind aktiviert.";
            //not used anymore:
            //GuiDescription = "<p>Für Rückmeldungen einfach <a href='http://forum.the-west.net/showthread.php?t=55128' target='_blank'>das Forum</a> besuchen.</p>";
        } else {
            IconTitle = "Activate Notifications!";
            ErrorNotSupported = "Sorry, notifications are not supported.";
            ErrorDisabled = "Notifications are disabled.";
            TextEnabled = "Notifications are enabled.";
            GuiDescription = "<p>If you have any feedback please post it <a href='http://forum.the-west.net/showthread.php?t=55128' target='_blank'>here</a>.</p>";
        }

        var icon = $('<div></div>').attr({
            'title': IconTitle,
            'class': 'menulink'
        }).css({
            'background': 'url(http://puu.sh/dCwgr/b51fa6f2c1.png)',
            'background-position': '0px 0px'
        }).mouseleave(function() {
            $(this).css("background-position", "0px 0px");
        }).mouseenter(function(e) {
            $(this).css("background-position", "25px 0px");
        }).click(function(e) {
            if (!window.Notification) {
                new UserMessage(ErrorNotSupported).show();
            } else {
                Notification.requestPermission(function(p) {
                    if (p === 'denied') {
                        new UserMessage(ErrorDisabled).show();
                    } else if (p === 'granted') {
                        new UserMessage(TextEnabled).show();
                    }
                });
            }
        });

        var fix = $('<div></div>').attr({
            'class': 'menucontainer_bottom'
        }); /* Thanks  Sly! */

        function AllenNotiIcon() {
            jQuery("#ui_menubar .ui_menucontainer :last").after($('<div></div>').attr({
                'class': 'ui_menucontainer',
                'id': 'notifications'
            }).append(icon).append(fix));
        }

        AllenNotiIcon();

        EventHandler.listen("chat_tell_received", function(room) {
            function sendNotification() {
                var regex = /<td(.*)chat_text(.*)>(.*)<\/td>/ig;
                new Notification('New Message from ' + room.client.pname, {
                    body: regex.exec(room.history[room.history.length - 1])[3],
                    icon: 'http://puu.sh/8kbK7.png'
                });
            }

            if (Notification.permission !== 'granted')
                new UserMessage("Please enable notifications").show();
            else
                sendNotification();
        });
    }

    registerToWestApi();
    magicWindow();
    scriptButton('http://puu.sh/gbV7X/4703da6942.png', 'Magic Menu!');
    if (localStorage.getItem('xsht_jobs_status') == 'enabled')
        jobRework();
    if (localStorage.getItem('xsht_vet_status') == 'enabled')
        vetPointCounter();
    if (localStorage.getItem('xsht_killer_status') == 'enabled')
        taskKiller();
    if (localStorage.getItem('xsht_noti_status') == 'enabled')
        NotificationsGo();
    if (localStorage.getItem('xsht_buy_status') == 'enabled')
        MultiPurchase();
});