// GLOBAL LANGUAGE COOKIE
function Set_Cookie( name, value, expires, path, domain, secure ) {
	// set time, it's in milliseconds
	var today = new Date();
	today.setTime( today.getTime() );
	// if the expires variable is set, make the correct expires time, the
	// current script below will set it for x number of days, to make it
	// for hours, delete * 24, for minutes, delete * 60 * 24
	if ( expires ) {
		expires = expires * 1000 * 60 * 60 * 24;
	}
	//alert( 'today ' + today.toGMTString() );// this is for testing purpose only
	var expires_date = new Date( today.getTime() + (expires) );
	//alert('expires ' + expires_date.toGMTString());// this is for testing purposes only
	document.cookie = name +"="+ escape(value) + ( (expires) ? ";expires="+ expires_date.toGMTString() : "" ) + ( (path) ? ";path="+ path : "" ) + ( (domain) ? ";domain="+ domain : "" ) + ( (secure) ? ";secure" : "" );
}

var exp = new Date();

function Get_Cookie( name ) {
	var start = document.cookie.indexOf( name +"=" );
	var len = start + name.length + 1;
	if ( ( !start ) && ( name != document.cookie.substring( 0, name.length ) ) ) {
		return null;
	}
	if ( start == -1 ) return null;
	var end = document.cookie.indexOf( ";", len );
	if ( end == -1 ) end = document.cookie.length;
	return unescape( document.cookie.substring( len, end ) );
}

// this deletes the cookie when called
function Delete_Cookie( name, path, domain ) {
	if ( Get_Cookie(name) ) document.cookie = name +"="+ ( (path) ? ";path="+ path : "" ) + ( (domain) ? ";domain="+ domain : "" ) + ";expires=Thu, 01-Jan-1970 00:00:01 GMT";
}

function getCookieVal (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

//BROWSER SNIFFER
var exclude=1;
var agt=navigator.userAgent.toLowerCase();
var win=0;var mac=0;var lin=1;
if(agt.indexOf('win')!=-1){win=1;lin=0;}
if(agt.indexOf('mac')!=-1){mac=1;lin=0;}
var lnx=0;if(lin){lnx=1;}
//var ice=0;sw     COMMENTED OUT BY SUE - WAS CAUSING AN ERROR
var ie=0;var ie4=0;var ie5=0;var ie6=0;var com=0;var dcm;
var op5=0;var op6=0;var op7=0;
var ns4=0;var ns6=0;var ns7=0;var mz7=0;var kde=0;var saf=0;
if(typeof navigator.vendor!="undefined" && navigator.vendor=="KDE"){
	var thisKDE=agt;
	var splitKDE=thisKDE.split("konqueror/");
	var aKDE=splitKDE[1].split("; ");
	var KDEn=parseFloat(aKDE[0]);
	if(KDEn>=2.2){
		kde=1;
		ns6=1;
		exclude=0;
	}
}
else if(agt.indexOf('webtv')!=-1){exclude=1;}
else if(typeof window.opera!="undefined"){
	exclude=0;
	if(/opera[\/ ][5]/.test(agt)){op5=1;}
	if(/opera[\/ ][6]/.test(agt)){op6=1;}
	if(/opera[\/ ][7-9]/.test(agt)){op7=1;}
}
else if(typeof document.all!="undefined"&&!kde){
	exclude=0;
	ie=1;
	if(typeof document.getElementById!="undefined"){
		ie5=1;
		if(agt.indexOf("msie 6")!=-1){
			ie6=1;
			dcm=document.compatMode;
			if(dcm!="BackCompat"){com=1;}
		}
	}
	else{ie4=1;}
}
else if(typeof document.getElementById!="undefined"){
	exclude=0;
	if(agt.indexOf("netscape/6")!=-1||agt.indexOf("netscape6")!=-1){ns6=1;}
	else if(agt.indexOf("netscape/7")!=-1||agt.indexOf("netscape7")!=-1){ns6=1;ns7=1;}
	else if(agt.indexOf("gecko")!=-1){ns6=1;mz7=1;}
	if(agt.indexOf("safari")!=-1 || (typeof document.childNodes!="undefined" && typeof document.all=="undefined" && typeof navigator.taintEnabled=="undefined")){mz7=0;ns6=1;saf=1;}
}
else if((agt.indexOf('mozilla')!=-1)&&(parseInt(navigator.appVersion)>=4)){
	exclude=0;
	ns4=1;
	if(typeof navigator.mimeTypes['*']=="undefined"){
		exclude=1;
		ns4=0;
	}
}
if(agt.indexOf('escape')!=-1){exclude=1;ns4=0;}
if(typeof navigator.__ice_version!="undefined"){exclude=1;ie4=0;}

//DECODE COOKIE VALUE FUNCTION
function decode(input) {
	var string = "";
	var i = 0;
	var c = c1 = c2 = 0;
	while ( i < input.length ) {
		c = input.charCodeAt(i);
		if (c < 128) {
			string += String.fromCharCode(c);
			i++;
		}
		else if ((c > 191) && (c < 224)) {
			c2 = input.charCodeAt(i+1);
			string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
			i += 2;
		}
		else {
			c2 = input.charCodeAt(i+1);
			c3 = input.charCodeAt(i+2);
			string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
			i += 3;
		}
	}
	return string;
}

// URLS REQUIRED FOR UR SITE TESTING -- EDIT BEFORE GOING LIVE
if (location.hostname == 'localhost') {
	myURServer = "localhost:8080";
} else if (location.hostname == 'uregd.rockwellautomation.com' || location.hostname == 'test.rockwellautomation.com' || location.hostname == 'ratest.rockwellautomation.com') {
	myURServer = "http://uregd.rockwellautomation.com";
} else if (location.hostname == 'wwwdev.ab.com' || location.hostname == 'uregq.rockwellautomation.com' || location.hostname == 'uregq-01.rockwellautomation.com' || location.hostname == 'uregq-02.rockwellautomation.com' || location.hostname == 'qa.rockwellautomation.com' || location.hostname == 'raqa.rockwellautomation.com') {
	myURServer = "https://uregq.rockwellautomation.com";
} else {	
	myURServer = "https://uregp.rockwellautomation.com";
}

// GLOBAL VARIABLES
var myABServer  = "www.ab.com";
var myRAProdServer  = "www.rockwellautomation.com";
var myRSIServer = "www.software.rockwell.com";
var myRAServer = "www.rockwellautomation.com"; //Make sure you change the United States case to www before going live
var Language = Get_Cookie('ra_www_lang');//multi-letter language name
var myURLang = Get_Cookie('ra_lang');//two-letter language name for CRM
var my_ra_id = Get_Cookie('ra_ur_salutation'); //old cookie name is ra_access_salutation
var myURLbl;
var myURServer;
var myForgotPasswordLbl;
var myContactLbl;
var myFeedbackLbl;
var myCookieTestLbl;
var myPrivacyLbl;
var myContactInfoLbl;
var mySubscriptionsLbl;
var myChangePassLbl;
var myMemberHelpLbl;
var myRegistrationLbl;
var myURLangMap;

// LANGUAGE CASES
switch (myURLang) {
case "en":
	Language = "English"; Set_Cookie('ra_www_lang','English','365','/','.rockwellautomation.com'); break;
case "cs":
	Language = "Czech"; Set_Cookie('ra_www_lang','Czech','365','/','.rockwellautomation.com'); break;
case "de":
	Language = "German"; Set_Cookie('ra_www_lang','German','365','/','.rockwellautomation.com'); break;
case "es":
	Language = "Spanish"; Set_Cookie('ra_www_lang','Spanish','365','/','.rockwellautomation.com'); break;
case "fr":
	Language = "French"; Set_Cookie('ra_www_lang','French','365','/','.rockwellautomation.com'); break;
case "it":
	Language = "Italian"; Set_Cookie('ra_www_lang','Italian','365','/','.rockwellautomation.com'); break;
case "ja":
	Language = "Japanese"; Set_Cookie('ra_www_lang','Japanese','365','/','.rockwellautomation.com'); break;
case "ko":
	Language = "Korean"; Set_Cookie('ra_www_lang','Korean','365','/','.rockwellautomation.com'); break;
case "pl":
	Language = "Polish"; Set_Cookie('ra_www_lang','Polish','365','/','.rockwellautomation.com'); break;
case "pt":
	Language = "Portuguese"; Set_Cookie('ra_www_lang','Portuguese','365','/','.rockwellautomation.com'); break;
case "ru":
	Language = "Russian"; Set_Cookie('ra_www_lang','Russian','365','/','.rockwellautomation.com'); break;
case "tr":
	Language = "Turkish"; Set_Cookie('ra_www_lang','Turkish','365','/','.rockwellautomation.com'); break;
case "zh":
	Language = "Chinese"; Set_Cookie('ra_www_lang','Chinese','365','/','.rockwellautomation.com'); break;
default:
	Language = "English"; Set_Cookie('ra_www_lang','English','365','/','.rockwellautomation.com');
}

var return_page;
if (return_page == null || return_page == "") {
	return_page = encodeURIComponent(location.href);
}
// Fix for non-standard long urls
if (location.href.indexOf('search.rockwellautomation.com') != -1) { //search2.rockwellautomation.com
	return_page = "http://search.rockwellautomation.com/search?site=main_all";  //http://search2.rockwellautomation.com/texis/search?pr=main-sites
}
if (location.href.indexOf('literature.rockwellautomation.com') != -1) { 
	return_page = "http://literature.rockwellautomation.com";
}
if (location.href.match("/UnifiedRegUI/thankYou.do")) {
	return_page = "http://www.rockwellautomation.com";
}

// UR COOKIE CALL
var sign_in_name;
var my_raname = Get_Cookie('ra_ur_salutation');
if (my_raname != null && my_raname != "") {
	if (ns7) { //this fixes for netcapse which does not like or require the decode function
		sign_in_name = my_raname;
	} else {
		sign_in_name =  decode(my_raname);
	}
}
