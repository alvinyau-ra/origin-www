// 8/2/2017 - Sue re-added code to enable component preview.
// 10/9/2017 - Brian add Hero Search Input and Gallery Carousel code
// 4/17/2018 - Sue updated country drop down code - removing hard coded path and adding mobile animation for non-global sites
// 5/4/2018 - Brian added MyRockwell Account menu code
// 7/6/2018 - Brian removed BrandBar Country slideout code
// 7/23/2018 - Brian removed BrandBar Search slideout code
// 7/24/2018 - Brian updated Mobile Nav code for accessibility change of ID menu to mobile-menu
// 11/7/2018 - Brian removed animations from mobile menu because of height conflicts
// 7/31/2019 - Brian added product detail page expand/collapse

// Hover Menu Drop Downs
function hover_menu() {
    $('#menu li a').mouseenter(function(){
        //show its submenu
        $('+div', this).stop(true, true).delay(50).slideDown('slow');
        //console.log('mouse entered');
        $(this).parent().addClass('open');
    });

    $('#menu li').mouseleave(function(){
        //hide its submenu
        $('>div', this).stop(true, true).delay(50).slideUp('slow');
        //console.log('mouse left');
        $(this).removeClass('open');
    });
}

// Hover Menu Drop Downs - Hide Blanks
$(function() {
  	$('.cbp-hrmenu .cbp-hrsub-inner .row li:contains("hide")').addClass('hide');
  	$('#nav-mobile .navbar-menu .item li:contains("hide")').addClass('hide');
  	$('#sub-nav .nav-menu .dropdown .dropdown-menu .more-cols li:contains("hide")').addClass('hide');
  	$('#sub-nav .nav-menu-drop.dropdown .dropdown-menu .more-cols li:contains("hide")').addClass('hide');
});

// Mobile Menu - StyleFix 1.0.3 & PrefixFree 1.0.7 @author Lea Verou MIT license
(function(){function j(a,c){return[].slice.call((c||document).querySelectorAll(a))}if(window.addEventListener){var g=window.StyleFix={link:function(a){try{if("stylesheet"!==a.rel||a.hasAttribute("data-noprefix"))return}catch(c){return}var i=a.href||a.getAttribute("data-href"),f=i.replace(/[^\/]+$/,""),j=(/^[a-z]{3,10}:/.exec(f)||[""])[0],k=(/^[a-z]{3,10}:\/\/[^\/]+/.exec(f)||[""])[0],h=/^([^?]*)\??/.exec(i)[1],n=a.parentNode,e=new XMLHttpRequest,b;e.onreadystatechange=function(){4===e.readyState&&
b()};b=function(){var c=e.responseText;if(c&&a.parentNode&&(!e.status||400>e.status||600<e.status)){c=g.fix(c,!0,a);if(f)var c=c.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi,function(a,c,b){return/^([a-z]{3,10}:|#)/i.test(b)?a:/^\/\//.test(b)?'url("'+j+b+'")':/^\//.test(b)?'url("'+k+b+'")':/^\?/.test(b)?'url("'+h+b+'")':'url("'+f+b+'")'}),b=f.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g,"\\$1"),c=c.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)"+b,"gi"),"$1");b=document.createElement("style");b.textContent=
c;b.media=a.media;b.disabled=a.disabled;b.setAttribute("data-href",a.getAttribute("href"));n.insertBefore(b,a);n.removeChild(a);b.media=a.media}};try{e.open("GET",i),e.send(null)}catch(r){"undefined"!=typeof XDomainRequest&&(e=new XDomainRequest,e.onerror=e.onprogress=function(){},e.onload=b,e.open("GET",i),e.send(null))}a.setAttribute("data-inprogress","")},styleElement:function(a){if(!a.hasAttribute("data-noprefix")){var c=a.disabled;a.textContent=g.fix(a.textContent,!0,a);a.disabled=c}},styleAttribute:function(a){var c=
a.getAttribute("style"),c=g.fix(c,!1,a);a.setAttribute("style",c)},process:function(){j('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);j("style").forEach(StyleFix.styleElement);j("[style]").forEach(StyleFix.styleAttribute)},register:function(a,c){(g.fixers=g.fixers||[]).splice(void 0===c?g.fixers.length:c,0,a)},fix:function(a,c,i){for(var f=0;f<g.fixers.length;f++)a=g.fixers[f](a,c,i)||a;return a},camelCase:function(a){return a.replace(/-([a-z])/g,function(a,g){return g.toUpperCase()}).replace("-",
"")},deCamelCase:function(a){return a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()})}};setTimeout(function(){j('link[rel="stylesheet"]').forEach(StyleFix.link)},10);document.addEventListener("DOMContentLoaded",StyleFix.process,!1)}})();
(function(j){function g(d,b,c,e,f){d=a[d];d.length&&(d=RegExp(b+"("+d.join("|")+")"+c,"gi"),f=f.replace(d,e));return f}if(window.StyleFix&&window.getComputedStyle){var a=window.PrefixFree={prefixCSS:function(d,b){var c=a.prefix;-1<a.functions.indexOf("linear-gradient")&&(d=d.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig,function(a,d,b,c){return d+(b||"")+"linear-gradient("+(90-c)+"deg"}));d=g("functions","(\\s|:|,)","\\s*\\(","$1"+c+"$2(",d);d=g("keywords","(\\s|:)","(\\s|;|\\}|$)",
"$1"+c+"$2$3",d);d=g("properties","(^|\\{|\\s|;)","\\s*:","$1"+c+"$2:",d);if(a.properties.length)var e=RegExp("\\b("+a.properties.join("|")+")(?!:)","gi"),d=g("valueProperties","\\b",":(.+?);",function(a){return a.replace(e,c+"$1")},d);b&&(d=g("selectors","","\\b",a.prefixSelector,d),d=g("atrules","@","\\b","@"+c+"$1",d));d=d.replace(RegExp("-"+c,"g"),"-");return d=d.replace(/-\*-(?=[a-z]+)/gi,a.prefix)},property:function(d){return(a.properties.indexOf(d)?a.prefix:"")+d},value:function(d){d=g("functions",
"(^|\\s|,)","\\s*\\(","$1"+a.prefix+"$2(",d);return d=g("keywords","(^|\\s)","(\\s|$)","$1"+a.prefix+"$2$3",d)},prefixSelector:function(d){return d.replace(/^:{1,2}/,function(d){return d+a.prefix})},prefixProperty:function(d,b){var c=a.prefix+d;return b?StyleFix.camelCase(c):c}},c={},i=[],f=getComputedStyle(document.documentElement,null),p=document.createElement("div").style,k=function(a){if("-"===a.charAt(0)){i.push(a);var a=a.split("-"),b=a[1];for(c[b]=++c[b]||1;3<a.length;)a.pop(),b=a.join("-"),
StyleFix.camelCase(b)in p&&-1===i.indexOf(b)&&i.push(b)}};if(0<f.length)for(var h=0;h<f.length;h++)k(f[h]);else for(var n in f)k(StyleFix.deCamelCase(n));var h=0,e,b;for(b in c)f=c[b],h<f&&(e=b,h=f);a.prefix="-"+e+"-";a.Prefix=StyleFix.camelCase(a.prefix);a.properties=[];for(h=0;h<i.length;h++)n=i[h],0===n.indexOf(a.prefix)&&(e=n.slice(a.prefix.length),StyleFix.camelCase(e)in p||a.properties.push(e));"Ms"==a.Prefix&&(!("transform"in p)&&!("MsTransform"in p)&&"msTransform"in p)&&a.properties.push("transform",
"transform-origin");a.properties.sort();e=function(a,b){r[b]="";r[b]=a;return!!r[b]};b={"linear-gradient":{property:"backgroundImage",params:"red, teal"},calc:{property:"width",params:"1px + 5%"},element:{property:"backgroundImage",params:"#foo"},"cross-fade":{property:"backgroundImage",params:"url(a.png), url(b.png), 50%"}};b["repeating-linear-gradient"]=b["repeating-radial-gradient"]=b["radial-gradient"]=b["linear-gradient"];h={initial:"color","zoom-in":"cursor","zoom-out":"cursor",box:"display",
flexbox:"display","inline-flexbox":"display",flex:"display","inline-flex":"display"};a.functions=[];a.keywords=[];var r=document.createElement("div").style,l;for(l in b)k=b[l],f=k.property,k=l+"("+k.params+")",!e(k,f)&&e(a.prefix+k,f)&&a.functions.push(l);for(var m in h)f=h[m],!e(m,f)&&e(a.prefix+m,f)&&a.keywords.push(m);l=function(a){s.textContent=a+"{}";return!!s.sheet.cssRules.length};m={":read-only":null,":read-write":null,":any-link":null,"::selection":null};e={keyframes:"name",viewport:null,
document:'regexp(".")'};a.selectors=[];a.atrules=[];var s=j.appendChild(document.createElement("style")),q;for(q in m)b=q+(m[q]?"("+m[q]+")":""),!l(b)&&l(a.prefixSelector(b))&&a.selectors.push(q);for(var t in e)b=t+" "+(e[t]||""),!l("@"+b)&&l("@"+a.prefix+b)&&a.atrules.push(t);j.removeChild(s);a.valueProperties=["transition","transition-property"];j.className+=" "+a.prefix;StyleFix.register(a.prefixCSS)}})(document.documentElement);

// jQuery Actual - Version: 1.0.16 Requires: jQuery >= 1.2.3 - Copyright 2012, Ben Lin (http://dreamerslab.com/) Licensed under the MIT License (LICENSE.txt)
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a);
}else{a(jQuery);}}(function(a){a.fn.addBack=a.fn.addBack||a.fn.andSelf;a.fn.extend({actual:function(b,l){if(!this[b]){throw'$.actual => The jQuery method "'+b+'" you called does not exist';
}var f={absolute:false,clone:false,includeMargin:false,display:"block"};var i=a.extend(f,l);var e=this.eq(0);var h,j;if(i.clone===true){h=function(){var m="position: absolute !important; top: -1000 !important; ";
e=e.clone().attr("style",m).appendTo("body");};j=function(){e.remove();};}else{var g=[];var d="";var c;h=function(){c=e.parents().addBack().filter(":hidden");
d+="visibility: hidden !important; display: "+i.display+" !important; ";if(i.absolute===true){d+="position: absolute !important; ";}c.each(function(){var m=a(this);
var n=m.attr("style");g.push(n);m.attr("style",n?n+";"+d:d);});};j=function(){c.each(function(m){var o=a(this);var n=g[m];if(n===undefined){o.removeAttr("style");
}else{o.attr("style",n);}});};}h();var k=/(outer)/.test(b)?e[b](i.includeMargin):e[b]();j();return k;}});}));

// jQuery Masked Input Plugin - Version: 1.4.1 - Copyright (c) 2007 - 2015 Josh Bush (digitalbush.com) - Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

// svgxuse - Version: 1.2.6 - Copyright (c) 2017 IcoMoon.io - Licensed under MIT license (https://github.com/Keyamoon/svgxuse)
(function(){if("undefined"!==typeof window&&window.addEventListener){var e=Object.create(null),l,d=function(){clearTimeout(l);l=setTimeout(n,100)},m=function(){},t=function(){window.addEventListener("resize",d,!1);window.addEventListener("orientationchange",d,!1);if(window.MutationObserver){var k=new MutationObserver(d);k.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0});m=function(){try{k.disconnect(),window.removeEventListener("resize",d,!1),window.removeEventListener("orientationchange",
d,!1)}catch(v){}}}else document.documentElement.addEventListener("DOMSubtreeModified",d,!1),m=function(){document.documentElement.removeEventListener("DOMSubtreeModified",d,!1);window.removeEventListener("resize",d,!1);window.removeEventListener("orientationchange",d,!1)}},u=function(k){function e(a){if(void 0!==a.protocol)var c=a;else c=document.createElement("a"),c.href=a;return c.protocol.replace(/:/g,"")+c.host}if(window.XMLHttpRequest){var d=new XMLHttpRequest;var m=e(location);k=e(k);d=void 0===
d.withCredentials&&""!==k&&k!==m?XDomainRequest||void 0:XMLHttpRequest}return d};var n=function(){function d(){--q;0===q&&(m(),t())}function l(a){return function(){!0!==e[a.base]&&(a.useEl.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href","#"+a.hash),a.useEl.hasAttribute("href")&&a.useEl.setAttribute("href","#"+a.hash))}}function p(a){return function(){var c=document.body,b=document.createElement("x");a.onload=null;b.innerHTML=a.responseText;if(b=b.getElementsByTagName("svg")[0])b.setAttribute("aria-hidden",
"true"),b.style.position="absolute",b.style.width=0,b.style.height=0,b.style.overflow="hidden",c.insertBefore(b,c.firstChild);d()}}function n(a){return function(){a.onerror=null;a.ontimeout=null;d()}}var a,c,q=0;m();var f=document.getElementsByTagName("use");for(c=0;c<f.length;c+=1){try{var g=f[c].getBoundingClientRect()}catch(w){g=!1}var h=(a=f[c].getAttribute("href")||f[c].getAttributeNS("http://www.w3.org/1999/xlink","href")||f[c].getAttribute("xlink:href"))&&a.split?a.split("#"):["",""];var b=
h[0];h=h[1];var r=g&&0===g.left&&0===g.right&&0===g.top&&0===g.bottom;g&&0===g.width&&0===g.height&&!r?(f[c].hasAttribute("href")&&f[c].setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a),b.length&&(a=e[b],!0!==a&&setTimeout(l({useEl:f[c],base:b,hash:h}),0),void 0===a&&(h=u(b),void 0!==h&&(a=new h,e[b]=a,a.onload=p(a),a.onerror=n(a),a.ontimeout=n(a),a.open("GET",b),a.send(),q+=1)))):r?b.length&&e[b]&&setTimeout(l({useEl:f[c],base:b,hash:h}),0):void 0===e[b]?e[b]=!0:e[b].onload&&(e[b].abort(),
delete e[b].onload,e[b]=!0)}f="";q+=1;d()};var p=function(){window.removeEventListener("load",p,!1);l=setTimeout(n,0)};"complete"!==document.readyState?window.addEventListener("load",p,!1):p()}})();

// Windows Mobile viewport fix
(function() {
    if ("-ms-user-select" in document.documentElement.style && navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
            document.createTextNode("@-ms-viewport{width:auto!important}")
        );
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }
})();

// Brandbar Icon Animation
$(function() {
    var account_icon = $('.brandbar .account-link');
    var account_menu = $('.brandbar .account-link .icon-dropin');

    function open_account() {
      	var username = "";
      	raHeader.default.fetchUserInfo(function (response, body) {
      	    username = response.data.data.firstName;
            $('.brandbar .my-ra-welcome').text(welcomeStr +', '+ username);
        });
        account_icon.addClass('open');
        account_icon.css('background-color','#cd163f');
      	account_menu.animate({right: "10px"},350, function() {});
        $('body').addClass('modal-open');
    }
    function close_account() {
        account_icon.removeClass('open');
      	account_icon.removeAttr('style');
        account_menu.animate({right: "-400px"},350, function() {});
        $('body').removeClass('modal-open');
    }
  
  	$(".brandbar .account-link a").on('click',function(){
		if (account_icon.hasClass('open')) {
            close_account();
        }
        else if (account_icon.hasClass('active')) {
            close_account();
        }
        else {
            open_account();
        }    
    });
  
  	$(document).on('click', function(){
     	if ((account_icon.hasClass('open')) && (account_menu.css('right') == '10px')) {
            close_account();
        }
	});

});

// Mobile Menu
$(function() {
    var icon_menu = $('#nav-mobile button.menu-icon');
    var menu_content = $('#nav-mobile .navbar-menu #mobile-menu li');
    var mobile_menu = $('#nav-mobile .navbar-menu');
    var mobile_navbar = $('#nav-mobile');
    var screen_res = window.matchMedia('(min-width: 768px)');

    function open_menu() {
        if (screen_res.matches) {
            //alert("screen width more than 768");
            mobile_navbar.css('height','100%');
            function delay_sm_menu() {
                mobile_menu.addClass('open');
                icon_menu.addClass('open');
                $('body').addClass('modal-open');
                mobile_menu.animate({width: "toggle"},500, function() {
                    menu_content.fadeIn(200); 
                });
            }
            setTimeout(delay_sm_menu, 15);
        }
        else {
            //alert("screen width less than 768");
            mobile_navbar.css('height','100%');
            function delay_xs_menu() {
                mobile_menu.addClass('open');
                icon_menu.addClass('open');
                $('body').addClass('modal-open');
                mobile_menu.slideDown(500, function() {
                    menu_content.fadeIn(200); 
                });
            }
            setTimeout(delay_xs_menu, 15);
        }
    }
    function close_menu() {
        if (screen_res.matches) {
            menu_content.fadeOut(200);
            function delay_sm_content() {
                mobile_menu.removeClass('open');
                icon_menu.removeClass('open');
                $('body').removeClass('modal-open');
                mobile_menu.animate({width: "toggle"},500, function() {
                    mobile_navbar.css('height','auto');
                });
            }
            setTimeout(delay_sm_content, 200);
        }
        else {
            menu_content.fadeOut(200);
            function delay_xs_content() {
                mobile_menu.removeClass('open');
                icon_menu.removeClass('open');
                $('body').removeClass('modal-open');
                mobile_menu.slideUp(500, function() {
                    mobile_navbar.css('height','auto');
                });
            }
            setTimeout(delay_xs_content, 200);
        }
    }

    icon_menu.click(function(){
        if (mobile_menu.hasClass('open')) {
            close_menu();
        }
        else {
            open_menu();
        } 
    });
});


// Mobile Menu Items
$(function() {
    var search_icon = $('#nav-mobile .icon .search');
    var search_box = $('#nav-mobile .icon .search-box');
    var account_icon = $('#nav-mobile .icon .account');
    var account_box = $('#nav-mobile .icon .account-box');
    var menu_icon = $('#nav-mobile .icon');
    var menu_item = $('#nav-mobile h4');
    var menu_item_slideout = $('#nav-mobile ul .item ul');
    var screen_res_tablet = window.matchMedia('(min-width: 768px)');
    var screen_res_sm_mobile = window.matchMedia('(max-width: 480px)');

    function open_search() {
        menu_icon.animate({height: "127px"},350, function() {
            search_box.fadeIn(350);
        });
        search_icon.addClass('open');
    }
    function close_search() {
        search_box.fadeOut(350, function() {
            menu_icon.animate({height: "62px"},350);
        });
        search_icon.removeClass('open');
    }
    function open_account() {
        var username = "";
        raHeader.default.fetchUserInfo(function (response, body) {
      	    username = response.data.data.firstName;
            $('#mobile-menu .my-ra-welcome .my-ra-name').text(welcomeStr +', '+ username);
        });
        account_box.fadeIn(350);
        account_icon.addClass('open');
    }
    function close_account() {
        account_box.fadeOut(350);
        account_icon.removeClass('open');
    }
    function open_menu_item() {
        menu_item_slideout.slideDown();
        menu_item.addClass('open');
    }
    function close_menu_item() {
        menu_item_slideout.slideUp();
        menu_item.removeClass('open');
    }

    menu_item.click(function(){
        close_menu_item();
        if (account_icon.hasClass('open')) {
            close_account();
            $(this).next().slideDown();
            $(this).addClass('open');
        }
        else if (search_icon.hasClass('open')) {
            close_search();
            $(this).next().slideDown();
            $(this).addClass('open');
        }
        else if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
            $(this).addClass('open');
        }
    });

    search_icon.click(function(){
       if (account_icon.hasClass('open')) {
            close_account();
            function account_delay_search() {
                open_search();
            }
            setTimeout(account_delay_search, 700);
        }
        else if (menu_item.hasClass('open')) {
            close_menu_item();
            open_search();
        }
        else if (search_icon.hasClass('open')) {
            close_search();
        }
        else {
            open_search();
        }   
    });

    account_icon.click(function(){
        if (search_icon.hasClass('open')) {
            close_search();
            function search_delay_account() {
                open_account();
            }
            setTimeout(search_delay_account, 700);
        }
        else if (menu_item.hasClass('open')) {
            close_menu_item();
            open_account();
        }
        else if (account_icon.hasClass('open')) {
            close_account();
        }
        else {
            open_account();
        }  
    });

// Hero Area
$(function() {
    var hero = $('#hero');
    var hero_area = document.querySelector('#hero .hero-container .hero-container');

    if(hero_area === null) {
        hero.addClass('hide');
    }
});

// Sub Nav Links
$(function() {
    var sub_nav = $('#sub-nav');
    var hero = $('.hero .feature-container');
    var sub_nav_tag = document.querySelector('#sub-nav .nav-section');
    var sub_nav_menu = document.querySelector('#sub-nav .nav-menu');
    var content = $('.content');

    if(sub_nav_menu === null) {
        sub_nav.addClass('no-links');
        hero.addClass('no-links');
    } else {
        sub_nav.addClass('links');
        hero.addClass('links');
    }

    if(sub_nav_tag === null) {
        content.addClass('no-sub-nav');
        sub_nav.addClass('no-bar');
        hero.addClass('no-sub-nav');
    } else {
        hero.addClass('sub-nav');
    }
});

// Function to tell whether page is scrolling up or down
var lastScrollTop = 0;
$(window).scroll(function (event) {

    var scrolled_down = $(window).scrollTop() > 40;
    var brand_bar = $('.brandbar-fixed-top');
    var nav_bar = $('#nav');
    var subnav_bar = $('#sub-nav');
    var st = $(this).scrollTop();
    var screen_res = window.matchMedia('(min-width: 992px)');
    
    if (screen_res.matches) {
        if (st > lastScrollTop) {
            //if scrolled down > 40px from top
            if (scrolled_down) {
                // downscroll code
                if (!brand_bar.hasClass('brandbar-hidden')) {
                    brand_bar.removeClass('brandbar-visible');
                    brand_bar.addClass('brandbar-hidden');
                    nav_bar.removeClass('nav-scrolled-up');

                    //Brandbar animation
                    brand_bar.animate({top: "-40px"},200);

                    //Navbar animation
                    nav_bar.animate({top: "0px"},200);
                    subnav_bar.animate({top: "88px"},200);
                }
            }
        } else if (st < lastScrollTop) {
            // upscroll code
            if (!brand_bar.hasClass('brandbar-visible')) {
                brand_bar.removeClass('brandbar-hidden');
                brand_bar.addClass('brandbar-visible');
                nav_bar.addClass('nav-scrolled-up');

                //Brandbar animation
                brand_bar.animate({top: "0px"},200);

                //Navbar animation
                nav_bar.animate({top: "40px" },200);
                subnav_bar.animate({top: "128px" },200);
            }
        }
        lastScrollTop = st;
    }
});

//Scroll to Top
$(window).scroll(function() {
    if ($(this).scrollTop()>0) {
        $('.scrollTop').fadeIn(500);
    }
    else {
        $('.scrollTop').fadeOut(500);
    }
});

$(function() {
	$(".scrollTop").click(function() {
    	$("html, body").animate({scrollTop: "0"}, 1000);
    });
});

// Home Page Hero Text Size
function heading_size(){
    var heading = $(".home .parallax .hero h1");
    var numChars = heading.text().length;

    if ((numChars >= 1) && (numChars < 5)) {



        heading.addClass("char-5");
    }
    else if ((numChars >= 5) && (numChars < 10)) {
        heading.addClass("char-10");
    }
    else if ((numChars >= 10) && (numChars < 15)) {
        heading.addClass("char-15");
    }
    else if ((numChars >= 15) && (numChars < 20)) {
        heading.addClass("char-20");
    }
    else if ((numChars >= 20) && (numChars < 25)) {
        heading.addClass("char-25");
    }
    else if ((numChars >= 25) && (numChars < 30)) {
        heading.addClass("char-30");
    }
    else {
        heading.addClass("char-over");
    }    
}

// Home Page Overlay
$(function() {
    var hero_area = $('.home .hero');
    var launch_overlay = $('.home .hero .feature-content .btn-overlay');
    var country_overlay = $('.home .hero-overlay');
    var list_am = $('.country-list.am ul');
    var list_ap = $('.country-list.ap ul');
    var list_eu = $('.country-list.eu ul');
    var list_ls = $('.country-list.ls ul');
    var list_na = $('.country-list.na ul');
    var listcount_am = $('.country-list.am li').length;
    var listcount_ap = $('.country-list.ap li').length;
    var listcount_eu = $('.country-list.eu li').length;
    var listcount_ls = $('.country-list.ls li').length;
    var listcount_na = $('.country-list.na li').length;
    var scroll_am = $('.country-scroll.am');
    var scroll_ap = $('.country-scroll.ap');
    var scroll_eu = $('.country-scroll.eu');
    var scroll_ls = $('.country-scroll.ls');
    var scroll_na = $('.country-scroll.na');
    var scroll_am_up = $('.country-scroll.am .up');
    var scroll_ap_up = $('.country-scroll.ap .up');
    var scroll_eu_up = $('.country-scroll.eu .up');
    var scroll_ls_up = $('.country-scroll.ls .up');
    var scroll_na_up = $('.country-scroll.na .up');
    var scroll_am_down = $('.country-scroll.am .down');
    var scroll_ap_down = $('.country-scroll.ap .down');
    var scroll_eu_down = $('.country-scroll.eu .down');
    var scroll_ls_down = $('.country-scroll.ls .down');
    var scroll_na_down = $('.country-scroll.na .down');
    var click_am = 1;
    var click_ap = 1;
    var click_eu = 1;
    var click_ls = 1;
    var click_na = 1;
    var max_click_am = 1;
    var max_click_ap = 2;
    var max_click_eu = 4;
    var max_click_ls = 2;
    var max_click_na = 1;

    launch_overlay.click(function() {
        country_overlay.fadeIn(350);
        country_overlay.addClass('active');
        function overlay_delay_close() {
                country_overlay.mouseleave(function() {
                    country_overlay.fadeOut(350);
                    country_overlay.removeClass('active');
                });
            }
        setTimeout(overlay_delay_close, 700);
    });

    scroll_am_down.click(function() {
        if (click_am < max_click_am) {
            list_am.animate({marginTop: "-=105px"},350);
            scroll_am_up.removeClass('hideContents');
            click_am++;
            if (click_am == max_click_am) {
                scroll_am_down.addClass('hideContents');
            }
        }
    });
    scroll_am_up.click(function() {
        if (click_am > 1) {
            list_am.animate({marginTop: "+=105px"},350);
            click_am--;
            if (click_am == 1) {
                scroll_am_up.addClass('hideContents');
            }
            if (click_am == (max_click_am - 1)) {
                scroll_am_down.removeClass('hideContents');
            }
        }
    });

    scroll_ap_down.click(function() {
        if (click_ap < max_click_ap) {
            list_ap.animate({marginTop: "-=105px"},350);
            scroll_ap_up.removeClass('hideContents');
            click_ap++;
            if (click_ap == max_click_ap) {
                scroll_ap_down.addClass('hideContents');
            }
        }
    });
    scroll_ap_up.click(function() {
        if (click_ap > 1) {
            list_ap.animate({marginTop: "+=105px"},350);
            click_ap--;
            if (click_ap == 1) {
                scroll_ap_up.addClass('hideContents');
            }
            if (click_ap == (max_click_ap - 1)) {
                scroll_ap_down.removeClass('hideContents');
            }
        }
    });

    scroll_eu_down.click(function() {
        if (click_eu < max_click_eu) {
            list_eu.animate({marginTop: "-=105px"},350);
            scroll_eu_up.removeClass('hideContents');
            click_eu++;
            if (click_eu == max_click_eu) {
                scroll_eu_down.addClass('hideContents');
            }
        }
    });
    scroll_eu_up.click(function() {
        if (click_eu > 1) {
            list_eu.animate({marginTop: "+=105px"},350);
            click_eu--;
            if (click_eu == 1) {
                scroll_eu_up.addClass('hideContents');
            }
            if (click_eu == (max_click_eu - 1)) {
                scroll_eu_down.removeClass('hideContents');
            }
        }
    });

    scroll_ls_down.click(function() {
        if (click_ls < max_click_ls) {
            list_ls.animate({marginTop: "-=105px"},350);
            scroll_ls_up.removeClass('hideContents');
            click_ls++;
            if (click_ls == max_click_ls) {
                scroll_ls_down.addClass('hideContents');
            }
        }
    });
    scroll_ls_up.click(function() {
        if (click_ls > 1) {
            list_ls.animate({marginTop: "+=105px"},350);
            click_ls--;
            if (click_ls == 1) {
                scroll_ls_up.addClass('hideContents');
            }
            if (click_ls == (max_click_ls - 1)) {
                scroll_ls_down.removeClass('hideContents');
            }
        }
    });
    scroll_na_down.click(function() {
        if (click_na < max_click_na) {
            list_na.animate({marginTop: "-=105px"},350);
            scroll_na_up.removeClass('hideContents');
            click_na++;
            if (click_na == max_click_na) {
                scroll_na_down.addClass('hideContents');
            }
        }
    });
    scroll_na_up.click(function() {
        if (click_na > 1) {
            list_na.animate({marginTop: "+=105px"},350);
            click_na--;
            if (click_na == 1) {
                scroll_na_up.addClass('hideContents');
            }
            if (click_na == (max_click_na - 1)) {
                scroll_na_down.removeClass('hideContents');
            }
        }
    });

    if (listcount_am > 6) {
        scroll_am.css('display', 'block');
    } else if (listcount_am < 6) {
        scroll_am.css('display', 'none');
    }
    if (listcount_ap > 6) {
        scroll_ap.css('display', 'block');
    } else if (listcount_ap < 6) {
        scroll_ap.css('display', 'none');
    }
    if (listcount_eu > 6) {
        scroll_eu.css('display', 'block');
    } else if (listcount_eu < 6) {
        scroll_eu.css('display', 'none');
    }
    if (listcount_ls > 6) {
        scroll_ls.css('display', 'block');
    } else if (listcount_ls < 6) {
        scroll_ls.css('display', 'none');
    }
    if (listcount_na > 6) {
        scroll_na.css('display', 'block');
    } else if (listcount_na < 6) {
        scroll_na.css('display', 'none');
    }

});

// Filter v1 checkbox/tag functionality
$(function() {
    $('.filter-tag-block').on("click", "a", function(){
        var tag_filter_id = $(this).attr('data-filter-id');
        //console.log(tag_filter_id);
        $(".filter-widget-wrapper input[type='checkbox']#" + tag_filter_id).click();
    });

    $(".filter-widget-wrapper :checkbox").change(function() {    
        $('.filter-tag-block').html('');
        $(".filter-widget-wrapper :checkbox:checked").each(function(){
            var filter_label = $(this).next().html(),
                filter_id = this.id;
            $('.filter-tag-block').append('<a data-filter-id="' + filter_id + '">' + filter_label + '</a>');
        });
    });
});

// Filter v1 Options Expand/Collapse
$(function() {
    var ml_options = $('.widget-container .filter-widget-wrapper .filter-option .btn-more-less');
    
    ml_options.click(function() {
        if ($(this).prev().hasClass('collapsed')) {
            $(this).prev().addClass('expanded');
            $(this).prev().removeClass('collapsed');
            $(this).prev().find("li").css("display","block");
            $(this).children(".more").fadeOut(350, function () {
                $(this).siblings(".less").css("display","block").fadeIn(350);
            });
        } else if ($(this).prev().hasClass('expanded')) {
            $(this).prev().addClass('collapsed');
            $(this).prev().removeClass('expanded');
            $(this).prev().find("li:nth-child(n+6)").css("display","none");
            $(this).children(".less").fadeOut(350, function() {
                $(this).siblings(".more").css("display","block").fadeIn(350);
            });
        }
    });
});

// Action Blocks Equal Heights
$(function() {
    var actionBlockH3Height = 0;
    var actionBlockPHeight = 0;
    var actionBlockButtonHeight = 0;

    $('.action-blocks .block-container h3', this).each(function() {
        if($(this).actual('height') > actionBlockH3Height) {
            actionBlockH3Height = $(this).actual('height');  
        }
    });

    $('.action-blocks .block-container p', this).each(function() {
        if($(this).actual('height') > actionBlockPHeight) {
            actionBlockPHeight = $(this).actual('height');  
        }
    });

    $('.action-blocks .block-container .btn-default', this).each(function() {
        if($(this).actual('innerHeight') > actionBlockButtonHeight) {
            actionBlockButtonHeight = $(this).actual('innerHeight');  
        }
    });

    $('.action-blocks .block-container h3', this).height(actionBlockH3Height);
    $('.action-blocks .block-container p', this).height(actionBlockPHeight);
    $('.action-blocks .block-container .btn-default', this).height(actionBlockButtonHeight);
    //alert(actionBlockH3Height);
});

// Challenge Blocks Equal Heights
$(function() {
    var challengeBlockH3Height = 0;
    var challengeBlockContentHeight = 0;
    var challengeBlockPHeight = 0;

    $('.challenge-blocks .block-container h3', this).each(function() {
        if($(this).actual('height') > challengeBlockH3Height) {
            challengeBlockH3Height = $(this).actual('height');  
        }
    });

    $('.challenge-blocks .block-container .block-content', this).each(function() {
        if($(this).actual('innerHeight') > challengeBlockContentHeight) {
            challengeBlockContentHeight = $(this).actual('innerHeight') - 20;  
        }
    });
  
    $('.challenge-blocks .block-container p', this).each(function() {
        if($(this).actual('outerHeight') > challengeBlockPHeight) {
            challengeBlockPHeight = $(this).actual('outerHeight', {includeMargin:true});  
        }
    });

    $('.challenge-blocks .block-container h3', this).height(challengeBlockH3Height);
    $('.challenge-blocks .block-container .block-content', this).height(challengeBlockContentHeight);
    $('.challenge-blocks .block-container p', this).height(challengeBlockPHeight);
    //alert(challengeBlockH3Height);
});

// Rotate Text Equal Heights
$(function() {
    var rotateTextHeight = 0;

    $('.content-row.rotate-text .carousel .carousel-inner .item', this).each(function() {
        if($(this).actual('height') > rotateTextHeight) {
            rotateTextHeight = $(this).actual('height') + 40;  
        }
    });

    $('.content-row.rotate-text .carousel .carousel-inner .item', this).height(rotateTextHeight);
    //alert(rotateTextHeight);
});
  
// 3-Column Callout Equal Heights
$(function() {
    var threecolTextHeight = 0;
    var threecolButtonHeight = 0;

    $('.content-row.content-3col .callout p:nth-child(2)', this).each(function() {
        if($(this).actual('height') > threecolTextHeight) {
            threecolTextHeight = $(this).actual('height');  
        }
    });
  
    $('.content-row.content-3col .callout p .btn-default', this).each(function() {
        if($(this).actual('innerHeight') > threecolButtonHeight) {
            threecolButtonHeight = $(this).actual('innerHeight');  
        }
    });

    $('.content-row.content-3col .callout p:nth-child(2)', this).height(threecolTextHeight);
    $('.content-row.content-3col .callout p .btn-default', this).height(threecolButtonHeight);
    //alert(3colTextHeight);
});

// Product Detail Page Expand/Collapse Description
$(function() {
  	var desc_text = $('.product-detail .content-area .product-description .description-text');
	var desc_cover = $('.product-detail .content-area .product-description .description-text .cover');
  	var show_more = $('.product-detail .content-area .product-description .description-text .show-more');
  	var show_less = $('.product-detail .content-area .product-description .description-text .show-less');
  
  	$(".product-detail .content-area .product-description .description-text .show-more").on('click',function(){
		if (desc_text.hasClass('short')) {
            desc_text.addClass('full');
          	desc_text.removeClass('short');
          	show_more.css("display","none");
          	show_less.css("display","block");
        }
    });
  
  	$(".product-detail .content-area .product-description .description-text .show-less").on('click',function(){
		if (desc_text.hasClass('full')) {
            desc_text.addClass('short');
          	desc_text.removeClass('full');
          	show_less.css("display","none");
          	show_more.css("display","block");
        }  
    });

	if ($(".product-detail .content-area .product-description .description-text span").height() < 120) {
    	show_less.css("display","none");
        show_more.css("display","none");
      	desc_cover.css("display","none");
    }

});
 
// Tall Content Block Fix for IE
if ( ! Modernizr.objectfit ) {
  $('.content-blocks-1').each(function () {
    var $container = $(this),
        imgUrl = $container.find('img').prop('src');

    if (imgUrl) {
      $container
        .css('backgroundImage', 'url(' + imgUrl + ')')
        .addClass('compat-object-fit');
    }  
  });
}

// Search Input
$(function() {
    var search_input = $('.search-area .field input');
    var search_clear = $('.search-area .field .clear');
    var search_tip = $('.search-area .tip');
    var search_suggest = $('.search-area .suggest');
    var screen_res = window.matchMedia('(max-width: 992px)');

    if (screen_res.matches) {
        search_input.attr("placeholder","Search");
    } else {
        search_input.attr("placeholder","Search by product name, document, software, etc.");
    }

    search_input.keyup(function() {
        search_clear.toggle(Boolean($(this).val()));
    });

    search_clear.toggle(Boolean(search_input.val()));

    search_clear.click(function() {
        search_input.val('').focus();
        search_tip.css('visibility', 'hidden');
        search_suggest.css('visibility', 'hidden');
        $(this).hide();
    });

    search_input.on('keyup',function() {
        if (search_input.val().length > 0 && search_input.val().length < 3) {
            search_tip.css('visibility', 'visible');
            search_suggest.css('visibility', 'hidden');
        } else if (search_input.val().length >= 3) {
            search_tip.css('visibility', 'hidden');
            search_suggest.css('visibility', 'visible');
        } else if (search_input.val().length <= 0) {
            search_tip.css('visibility', 'hidden');
            search_suggest.css('visibility', 'hidden');
        }
    });
});

// Hero Search Input
$(function() {
    var search_input = $('.search .searchfld input');
    var search_clear = $('.search .searchfld .clear');
    var search_suggest = $('.search .searchfld #search_suggest');
    var page_type = $('.landing');
    var screen_res = window.matchMedia('(max-width: 992px)');

    if (screen_res.matches) {
        search_input.attr("placeholder","Search");
    } else {
        if (page_type.hasClass('lit-library')) {
            search_input.attr("placeholder","Search by product name, document, etc.");
        } else if (page_type.hasClass('lifecycle')) {
            search_input.attr("placeholder","Search by catalog number (e.g. 1771 or 1771-IC)");
        } else if (page_type.hasClass('sample-code')) {
            search_input.attr("placeholder","Search by product name, application, etc.");
        }
    }

    search_input.keyup(function() {
        search_clear.toggle(Boolean($(this).val()));
    });

    search_clear.toggle(Boolean(search_input.val()));

    search_clear.click(function() {
        search_input.val('').focus();
        search_suggest.css('visibility', 'hidden');
        $(this).hide();
    });
});

// Filter v2 Bar Menus
$(function() {
    var filter_item = $('.filter-bar .category .item');
    var filter_category = $('.filter-bar .category .item a');

    filter_category.on('click', function (event) { 
        filter_category.not(this).parent().removeClass('open')
        $(this).parent().toggleClass('open');
    });

    $('body').on('click', function (e) {
        if (!filter_item.is(e.target) && filter_item.has(e.target).length === 0 && $('.open').has(e.target).length === 0) {
            filter_item.removeClass('open');
        }
    });
});

// Filter v2 Bar Options Expand/Collapse
$(function() {
    var fb_options = $('.filter-bar .category .item .dropdown-menu .btn-more-less');
    var filter_items = $('.filter-bar .category .item ul li');
    
    fb_options.click(function() {
        if ($(this).parent().hasClass('collapsed')) {
            $(this).parent().addClass('expanded');
            $(this).parent().removeClass('collapsed');
            $(this).parent().find("li").css("display","block");
            $(this).children(".more").fadeOut(350, function () {
                $(this).siblings(".less").css("display","flex");
            });
        } else if ($(this).parent().hasClass('expanded')) {
            $(this).parent().addClass('collapsed');
            $(this).parent().removeClass('expanded');
            $(this).parent().find("li:nth-child(n+6)").css("display","none");
            $(this).children(".less").fadeOut(350, function() {
                $(this).siblings(".more").css("display","flex");
            });
        }
    });
});

// Clear Filter Button
$(function() {
	$( ".clear-applied" ).click(function() {
 	$('input:checkbox').prop("checked", false).triggerHandler('click');
	});
});
  
// Filter v2 Bar Applied Filter Tag
$(function() {
    $('.search-results .filter-bar .applied .tags').on("click", "div", function(){
        var tag_filter_id = $(this).attr('data-filter-id');
        //console.log(tag_filter_id);
        $(".search-results .filter-bar .category .item .dropdown-menu input[type='checkbox']#" + tag_filter_id).click();
        if ($('.search-results .filter-bar .applied .tags').html().length <= 0) {
            $('.search-results .filter-bar .applied').addClass('empty');
        }
    });

    $(".search-results .filter-bar .category .item .dropdown-menu :checkbox").change(function() {    
        $('.search-results .filter-bar .applied .tags').html('');
        $(".search-results .filter-bar .category .item .dropdown-menu :checkbox:checked").each(function(){
            if (!$(this).parents('.sort').length) {
                var filter_label = $(this).next().html(),
                    filter_id = this.id;
                $('.search-results .filter-bar .applied .tags').append('<div class="filter-applied" data-filter-id="' + filter_id + '"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M4.83 27.141c.339.343.939.342 1.276.001l9.889-9.835 9.898 9.826c.17.172.396.265.639.265s.469-.093.638-.264a.896.896 0 0 0 .264-.638.896.896 0 0 0-.264-.638l-9.9-9.827 9.9-9.89a.903.903 0 0 0 0-1.276.905.905 0 0 0-1.276 0l-9.9 9.89-9.888-9.89a.896.896 0 0 0-.638-.263.905.905 0 0 0-.637 1.541l9.887 9.888-9.888 9.835a.903.903 0 0 0 0 1.275z"/></svg>' + filter_label + '</a>');
                $('.search-results .filter-bar .applied').removeClass('empty');
            }
        });
        if ($('.search-results .filter-bar .applied .tags').html().length <= 0) {
            $('.search-results .filter-bar .applied').addClass('empty');
        }
    });

    $('.search-results .filter-bar .applied .buttons .clear-applied').on('click', function (event) {
        $('.search-results .filter-bar .category .item .dropdown-menu :checkbox:checkbox').removeAttr('checked');
        $('.search-results .filter-bar .applied').addClass('empty');
    }); 
});

// Mobile Filter v2 Menu
$(function() {
    var menu_button = $('.search-results .filter-bar .head.text');
    var menu_icon = $('.search-results .filter-bar .head.icon');
    var mobile_menu = $('.search-results .filter-bar .menu');
    var done_button = $('.search-results .filter-bar .buttons .done-applied');
    var screen_res = window.matchMedia('(max-width: 992px)');

    function open_menu() {
        if (screen_res.matches) {
            mobile_menu.addClass('open');
            menu_button.addClass('open');
            menu_icon.addClass('open');
        }
    }
    function close_menu() {
        if (screen_res.matches) {
            mobile_menu.removeClass('open');
            menu_button.removeClass('open');
            menu_icon.removeClass('open');
            mobile_menu.slideUp();
        }
    }

    menu_button.click(function(){
        if (mobile_menu.hasClass('open')) {
            close_menu();
        }
        else {
            open_menu();
        } 
    });
    menu_icon.click(function(){
        if (mobile_menu.hasClass('open')) {
            close_menu();
        }
        else {
            open_menu();
        } 
    });
    done_button.click(function(){
        if (mobile_menu.hasClass('open')) {
            close_menu();
        }
    });
});

// Done Typing Check
(function($){
    $.fn.extend({
        donetyping: function(callback,timeout){
            timeout = timeout || 1e3; // 1 second default timeout
            var timeoutReference,
                doneTyping = function(el){
                    if (!timeoutReference) return;
                    timeoutReference = null;
                    callback.call(el);
                };
            return this.each(function(i,el){
                var $el = $(el);

                $el.is(':input') && $el.on('keyup keypress paste',function(e){
                    if (e.type=='keyup' && e.keyCode!=8) return;
                    
                    if (timeoutReference) clearTimeout(timeoutReference);
                    timeoutReference = setTimeout(function(){
                        doneTyping(el);
                    }, timeout);
                }).on('blur',function(){
                    doneTyping(el);
                });
            });
        }
    });
})(jQuery);
  
// Sample Code Modal Launch
$(function() {
    var url = window.location.href;
    if(url.indexOf('?dID') != -1) {
        $('#terms').modal('show');
    }
});

// Move All Modal Instance to Bottom of Page
$(function() {
  $('.modal').appendTo(document.body);
});

// QA URL Test
$(function() {
  var sub_domain = window.location.href.split('.')[0].split('//')[1];

  if (sub_domain === "origin-ra-ma-uatqa") {
    $('html').addClass('qa');
  } else if (sub_domain === "ra-ma-uatqa") {
    $('html').addClass('qa');
  } else if (sub_domain === "ma-tsq") {
    $('html').addClass('qa');
  } else if (sub_domain === "origin-raqa") {
    $('html').addClass('qa');
  } else if (sub_domain === "raqa") {
    $('html').addClass('qa');
  } else if (sub_domain === "ma-tsp") {
    $('html').addClass('qa');
  } else if (sub_domain === "ra_ma_test") {
    $('html').addClass('qa');
  }
});
  
// Country Site URL Test
$(function() {
  if (/es_AR/.test(window.location.href)) {
    $('html').addClass('es-ar');
  } else if (/de_AT/.test(window.location.href)) {
    $('html').addClass('de-at');
  } else if (/en_AU/.test(window.location.href)) {
    $('html').addClass('en-au');
  } else if (/fr_BE/.test(window.location.href)) {
    $('html').addClass('fr-be');
  } else if (/nl_BE/.test(window.location.href)) {
    $('html').addClass('nl-be');
  } else if (/pt_BR/.test(window.location.href)) {
    $('html').addClass('pt-br');
  } else if (/en_CAR/.test(window.location.href)) {
    $('html').addClass('en-car');
  } else if (/es_CAR/.test(window.location.href)) {
    $('html').addClass('es-car');
  } else if (/en_CEM/.test(window.location.href)) {
    $('html').addClass('en-cem');
  } else if (/es_CL/.test(window.location.href)) {
    $('html').addClass('es-cl');
  } else if (/zh_CN/.test(window.location.href)) {
    $('html').addClass('zh-cn');
  } else if (/es_CO/.test(window.location.href)) {
    $('html').addClass('es-co');
  } else if (/cs_CZ/.test(window.location.href)) {
    $('html').addClass('cs-cz');
  } else if (/da_DK/.test(window.location.href)) {
    $('html').addClass('da-dk');
  } else if (/es_EC/.test(window.location.href)) {
    $('html').addClass('es-ec');
  } else if (/fr_FR/.test(window.location.href)) {
    $('html').addClass('fr-fr');
  } else if (/de_DE/.test(window.location.href)) {
    $('html').addClass('de-de');
  } else if (/en_IN/.test(window.location.href)) {
    $('html').addClass('en-in');
  } else if (/en_IE/.test(window.location.href)) {
    $('html').addClass('en-ie');
  } else if (/en_IL/.test(window.location.href)) {
    $('html').addClass('en-il');
  } else if (/it_IT/.test(window.location.href)) {
    $('html').addClass('it-it');
  } else if (/ja_JP/.test(window.location.href)) {
    $('html').addClass('ja-jp');
  } else if (/hu_HU/.test(window.location.href)) {
    $('html').addClass('ko-kr');
  } else if (/es_MX/.test(window.location.href)) {
    $('html').addClass('es-mx');
  } else if (/en_MDE/.test(window.location.href)) {
    $('html').addClass('en-mde');
  } else if (/nl_NL/.test(window.location.href)) {
    $('html').addClass('nl-nl');
  } else if (/en_NZ/.test(window.location.href)) {
    $('html').addClass('en-nz');
  } else if (/en_NA/.test(window.location.href)) {
    $('html').addClass('en-na');
  } else if (/es_PE/.test(window.location.href)) {
    $('html').addClass('es-pe');
  } else if (/pl_PL/.test(window.location.href)) {
    $('html').addClass('pl-pl');
  } else if (/pt_PT/.test(window.location.href)) {
    $('html').addClass('pt-PT');
  } else if (/ro_RO/.test(window.location.href)) {
    $('html').addClass('ro-ro');
  } else if (/en_SEA/.test(window.location.href)) {
    $('html').addClass('en-sea');
  } else if (/es_ES/.test(window.location.href)) {
    $('html').addClass('es-es');
  } else if (/en_ZA/.test(window.location.href)) {
    $('html').addClass('en-za');
  } else if (/sv_SE/.test(window.location.href)) {
    $('html').addClass('sv-se');
  } else if (/de_CH/.test(window.location.href)) {
    $('html').addClass('de-ch');
  } else if (/fr_CH/.test(window.location.href)) {
    $('html').addClass('fr-ch');
  } else if (/zh_TW/.test(window.location.href)) {
    $('html').addClass('zh-tw');
  } else if (/tr_TR/.test(window.location.href)) {
    $('html').addClass('tr-tr');
    document.getElementsByTagName("html")[0].setAttribute("lang", "tr"); 
  } else if (/en_UK/.test(window.location.href)) {
    $('html').addClass('en-uk');
  } else if (/es_VE/.test(window.location.href)) {
    $('html').addClass('es-ve');
  } else if (/global/.test(window.location.href)) {
    $('html').addClass('global');
  }
});
  
// Old Side Nav Hide Empty
$(function() {
    $('#C5 h4:contains("Side Navigation")').closest('#C5').addClass('hide');
});

$(document).ready(function () {

    addEventListener("touchstart", function(){}, true);

// Home Page Hero Text Size
    heading_size();

// Hover Menu Drop Downs
    hover_menu();

// Filter v1 Menu
    $(".widget-container.filter a.button").click(function(){
        if (!$(this).next().is(":visible")) {
            $(this).next().slideDown();
            $(this).toggleClass('open');
        } else if ($(this).next().is(":visible")) {
            $(this).next().slideUp();
            $(this).removeClass('open');
        }
    });

// Filter v1 Mobile Menu
    $(".widget-container.filter .btn.filter-input-wrapper").click(function(){
        //slide up all the link lists
        $(".widget-container.filter div.filter-menu-options").slideUp();
        $(".widget-container.filter .btn.filter-input-wrapper").removeClass('open');
        //slide down the link list below the h4 clicked - only if its closed
        if(!$(".widget-container.filter div.filter-menu-options").is(":visible"))
        {
            $(".widget-container.filter div.filter-menu-options").slideDown();
            $(".widget-container.filter .btn.filter-input-wrapper").toggleClass('open');
        }
    });

// Hover Share Social Blocks
    $(".share ul li:nth-child(n+3)").hover(function(){
        $('.share ul li:nth-child(-n+2)').addClass('active');
        },function(){
        $('.share ul li:nth-child(-n+2)').removeClass('active');
    });

// Hover Contact Social Blocks
    $(".source .contact ul li:nth-child(n+2)").hover(function(){
        $('.source .contact ul li:nth-child(-n+1)').addClass('active');
        $('.source .img .img-circle').addClass('active');
        },function(){
        $('.source .contact ul li:nth-child(-n+1)').removeClass('active');
        $('.source .img .img-circle').removeClass('active');
    });

// Table Row Shading
    $('table tr:nth-child(odd)').addClass('odd');
});
});