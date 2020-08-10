/* Utilities for RA GlobalSite and CountrySites
Modified 12-11-14 by SB = added new toggle open/close with class activation
Modified 10-28-18 by BM = added Preferences Check, removed Lang Selector and C5 Nav Toggle
Modified 02-12-19 by BM = removed EU Cookie Banner
*/


//BEGIN COOKIE CLEAN-UP
Delete_Cookie( "ra-md-accesstoken", "/", ".rockwellautomation.com" );
Delete_Cookie( "ra-md-refreshtoken", "/", ".rockwellautomation.com" );
//END COOKIE CLEAN-UP


//BEGIN GET COOKIE FUNCTION
function grabCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i=0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}
//END GET COOKIE FUNCTION


//BEGIN PREFERENCES CHECK
var thisPage= encodeURI(window.location.href);
var isBot= /akamai|archive|bot|Chrome-Lighthouse|crawl|demandbase|facebook|insights|ping|PTST|siteimprove|speed|spider|yahoo/i.test(navigator.userAgent);
var isCN= /\.rockwellautomation\.com\.cn/.test(thisPage); //China-specific domain
var isUTM= /utm_source|csel/.test(thisPage); //URL with Tracking code (or manual param to avoid sel page)
var isTS= /ma-ts(d|q|p)\.ra\.rockwell\.com/.test(thisPage); //TeamSite Preview
if ( navigator.cookieEnabled && !(isBot || isCN || isUTM || isTS) ) {
	if ( /^.+\/\/(origin-)?(www|test(qa)?|ra[^\.]*)\.rockwellautomation\.com\/$/.test(thisPage) ) thisPage += 'global/overview.page';
	if ( /code\=/.test(thisPage) ) thisPage = thisPage.slice(0,thisPage.search("code=")-1); //remove auth code
	Set_Cookie('myRokPrevUrl',thisPage,'365','/','.rockwellautomation.com');
	var myLangPref= grabCookie('myRokLang');
	var myCtryPref= grabCookie('myRokCtry');
	if ( myCtryPref==null ) { //if cookie doesn't exist, then go to Prefs Page
		window.location.href = '/site-selection.html';
	} else if ( myLangPref !='' && myLangPref !='NoPref' ) { //otherwise check cookies
		var prefSite= (myCtryPref=='GLOBAL') ? 'global' : myLangPref +'_'+ myCtryPref; // e.g. 'global','fr_BE',etc.
		var thisSite= thisPage.replace(/^.+\.rockwellautomation\.com[^\/]*\/([^\/]+)\/.+$/,'$1');
		if ( prefSite != thisSite ) { //if this page NOT on preferred site
			console.log( "SITE/LANG REDIRECT: requested site = "+ thisSite +", preferred site = "+ prefSite );
			var prefPage= thisPage.replace(/^(.+\.rockwellautomation\.com[^\/]*\/)[^\/]+(\/.+)$/,'$1'+ prefSite +'$2');
			$.ajax({ //check this page exists on preferred site
				type: 'GET',
				url: prefPage,
				success: function(response) { //if preferred page exists
					if ( /\<h1[\s\S]+?/.test(response) ) { //check for valid h1 tag
						window.location.href= prefPage;
					} else { //otherwise go to requested page
						console.log( "SITE/LANG REDIRECT: No content detected on preferred page ("+ prefPage +"), so opening originally requested page" );
					}
				}
			});
		}
	}
}
//END PREFERENCES CHECK


//BEGIN ALTERNATE TABLE ROW HIGHLIGHT
$(document).ready(function(){
	$("table.data tr:nth-child(even)").addClass("even");
	$("#alltabs table tr:nth-child(even)").addClass("even");
	$("#C11 #content table table.data tr:nth-child(even)").addClass("even");
});
//END ALTERNATE TABLE ROW HIGHLIGHT


//BEGIN BAD LINK
function reportlink(code) {
	var to = 'RAWebContact@ra.rockwell.com';
	var subject = null;
	switch (code) {
		case 401: subject = '401-Web Page Authorization Required'; break;
		case 403: subject = '403-Forbidden Web Page or Directory'; break;
		case 404: subject = '404-Web Page Not Found'; break;
		case 405: subject = '405-Website Method Not Allowed'; break;
		case 408: subject = '408-Website Request Timeout'; break;
		case 500: subject = '500-Website Experiencing Internal Server Error'; break;
		case 501: subject = '501-Request Not Implemented'; break;
		case 502: subject = '502-Server Experiencing Bad Gateway'; break;
		case 503: subject = '503-Website Service unavailable'; break;
		default: subject = 'Unexpected Error';
	}
	var badURL = window.location.href;
	var from = document.referrer;
	var message1 = 'I would like to report a ' + code + ' error on this page:  ' + badURL;
	var message2 = 'I linked to this page from:  ' + from;
	var message3 = 'Thank you for addressing this matter in a timely fashion.';
	if (from != "") {
		var ad = 'mailto:' + to + '?subject=' + subject + '&body=Dear Webmaster:%0a' + message1 + '.%0a' + message2 + '.%0a' + message3;
	} else {
		var ad = 'mailto:' + to + '?subject=' + subject + '&body=Dear Webmaster:%0a' + message1 + '.%0a' + message3;
	}
	document.location = ad ; 
}
//END BAD LINK


//HIDE AND SHOW TOGGLE - NEW DECEMBER 2014 - SUE
$(document).ready(function() {
	$(".toggle").hide()     
	$("a.togglelink").click(function(event) {
		$(this).siblings().removeClass('active'); 
		$(this).addClass('active');
		event.preventDefault();
		$(".toggle").hide();
		var relatedDivID = $(this).attr('href');
		$("" + relatedDivID).show('fast'); 
	});
	$('a.active').trigger('click');
});

//BEGIN IN-PAGE TOGGLE
function toggle(el) {
	myEl = document.getElementById(el);
	myEl.style.display = (myEl.style.display == 'block') ? 'none' : 'block';
}
// showSection function. designed to be run at body.onload.
// toggles div(s) referenced by # in URL. if multiple divs targeted, separate by -s. eg. #div1-div2-div3
function opentoggle() {
var loc = window.location.href;
	if (loc.lastIndexOf('#') != -1) {
		var section = loc.substring(loc.lastIndexOf('#')+1);
		var secs = section.split('-');
		if (secs.length > 1) {
			for (var i = 0; i< secs.length; i++ ){ toggle(secs[i]); }
		} else {
			toggle(section);
		}
	}
	window.attachEvent('onload', toggle);
}
//END IN-PAGE TOGGLE


//BEGIN PRINT THIS PAGE
(function(jQuery) {
    jQuery.fn.printPage = function() {
       return this.each(function() {
            // Wrap each element in a <a href="#">...</a> tag
            var $current = jQuery(this);
            $current.wrapInner('<a href="#"></a>');
            jQuery('span.print > a').click(function() {
                window.print(); 
                return false;    
            });
       });
    }
})(jQuery);
/*
addPrintLink function by Roger Johansson, www.456bereastreet.com
*/
var addPrintLink = {
	init:function(sTargetEl,sLinkText) {
		if (!document.getElementById || !document.createTextNode) {return;} // Check for DOM support
		if (!document.getElementById(sTargetEl)) {return;} // Check that the target element actually exists
		if (!window.print) {return;} // Check that the browser supports window.print
		var oTarget = document.getElementById(sTargetEl);
		var oLink = document.createElement('a');
		oLink.id = 'print-link'; // Give the link an id to allow styling
		oLink.href = '#'; // Make the link focusable for keyboard users
		oLink.appendChild(document.createTextNode(sLinkText));
		oLink.onclick = function() {window.print(); return false;} // Return false prevents the browser from following the link and jumping to the top of the page after printing
		oTarget.appendChild(oLink);
	},
	/*
	addEvent function included here for portability. Replace with your own addEvent function if you use one.
	addEvent function from http://www.quirksmode.org/blog/archives/2005/10/_and_the_winner_1.html
	*/
	addEvent:function(obj, type, fn) {
		if (obj.addEventListener)
			obj.addEventListener(type, fn, false);
		else if (obj.attachEvent) {
			obj["e"+type+fn] = fn;
			obj[type+fn] = function() {obj["e"+type+fn](window.event);}
			obj.attachEvent("on"+type, obj[type+fn]);
		}
	}
};
addPrintLink.addEvent(window, 'load', function(){addPrintLink.init('article','');});
//END PRINT THIS PAGE
