!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)}(function(e){function t(e){return s.raw?e:encodeURIComponent(e)}function o(e){return s.raw?e:decodeURIComponent(e)}function n(e){return t(s.json?JSON.stringify(e):String(e))}function i(t,o){var n=s.raw?t:function(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(r," ")),s.json?JSON.parse(e):e}catch(e){}}(t);return e.isFunction(o)?o(n):n}var r=/\+/g,s=e.cookie=function(r,a,c){if(void 0!==a&&!e.isFunction(a)){if("number"==typeof(c=e.extend({},s.defaults,c)).expires){var u=c.expires,l=c.expires=new Date;l.setTime(+l+864e5*u)}return document.cookie=[t(r),"=",n(a),c.expires?"; expires="+c.expires.toUTCString():"",c.path?"; path="+c.path:"",c.domain?"; domain="+c.domain:"",c.secure?"; secure":""].join("")}for(var d=r?void 0:{},f=document.cookie?document.cookie.split("; "):[],p=0,v=f.length;v>p;p++){var m=f[p].split("="),h=o(m.shift()),g=m.join("=");if(r&&r===h){d=i(g,a);break}r||void 0===(g=i(g))||(d[h]=g)}return d};s.defaults={},e.removeCookie=function(t,o){return void 0!==e.cookie(t)&&(e.cookie(t,"",e.extend({},o,{expires:-1})),!e.cookie(t))}}),function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.Blazy=t()}(this,function(){function e(e){var o=e._util;o.elements=function(e){for(var t=[],o=(e=e.root.querySelectorAll(e.selector)).length;o--;t.unshift(e[o]));return t}(e.options),o.count=o.elements.length,o.destroyed&&(o.destroyed=!1,e.options.container&&d(e.options.container,function(e){u(e,"scroll",o.validateT)}),u(window,"resize",o.saveViewportOffsetT),u(window,"resize",o.validateT),u(window,"scroll",o.validateT)),t(e)}function t(e){for(var t=e._util,n=0;n<t.count;n++){var i,r=t.elements[n],a=r;i=e.options;var c=a.getBoundingClientRect();((i=i.container&&h&&(a=a.closest(i.containerClass))?!!o(a=a.getBoundingClientRect(),v)&&o(c,{top:a.top-i.offset,right:a.right+i.offset,bottom:a.bottom+i.offset,left:a.left-i.offset}):o(c,v))||s(r,e.options.successClass))&&(e.load(r),t.elements.splice(n,1),t.count--,n--)}0===t.count&&e.destroy()}function o(e,t){return e.right>=t.left&&e.bottom>=t.top&&e.left<=t.right&&e.top<=t.bottom}function n(e,t,o){if(!s(e,o.successClass)&&(t||o.loadInvisible||0<e.offsetWidth&&0<e.offsetHeight))if(t=e.getAttribute(p)||e.getAttribute(o.src)){var n=(t=t.split(o.separator))[m&&1<t.length?1:0],c=e.getAttribute(o.srcset),f="img"===e.nodeName.toLowerCase(),v=(t=e.parentNode)&&"picture"===t.nodeName.toLowerCase();if(f||void 0===e.src){var h=new Image,g=function(){o.error&&o.error(e,"invalid"),a(e,o.errorClass),l(h,"error",g),l(h,"load",w)},w=function(){f?v||r(e,n,c):e.style.backgroundImage='url("'+n+'")',i(e,o),l(h,"load",w),l(h,"error",g)};v&&(h=e,d(t.getElementsByTagName("source"),function(e){var t=o.srcset,n=e.getAttribute(t);n&&(e.setAttribute("srcset",n),e.removeAttribute(t))})),u(h,"error",g),u(h,"load",w),r(h,n,c)}else e.src=n,i(e,o)}else"video"===e.nodeName.toLowerCase()?(d(e.getElementsByTagName("source"),function(e){var t=o.src,n=e.getAttribute(t);n&&(e.setAttribute("src",n),e.removeAttribute(t))}),e.load(),i(e,o)):(o.error&&o.error(e,"missing"),a(e,o.errorClass))}function i(e,t){a(e,t.successClass),t.success&&t.success(e),e.removeAttribute(t.src),e.removeAttribute(t.srcset),d(t.breakpoints,function(t){e.removeAttribute(t.src)})}function r(e,t,o){o&&e.setAttribute("srcset",o),e.src=t}function s(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")}function a(e,t){s(e,t)||(e.className+=" "+t)}function c(e){v.bottom=(window.innerHeight||document.documentElement.clientHeight)+e,v.right=(window.innerWidth||document.documentElement.clientWidth)+e}function u(e,t,o){e.attachEvent?e.attachEvent&&e.attachEvent("on"+t,o):e.addEventListener(t,o,{capture:!1,passive:!0})}function l(e,t,o){e.detachEvent?e.detachEvent&&e.detachEvent("on"+t,o):e.removeEventListener(t,o,{capture:!1,passive:!0})}function d(e,t){if(e&&t)for(var o=e.length,n=0;n<o&&!1!==t(e[n],n);n++);}function f(e,t,o){var n=0;return function(){var i=+new Date;i-n<t||(n=i,e.apply(o,arguments))}}var p,v,m,h;return function(o){if(!document.querySelectorAll){var i=document.createStyleSheet();document.querySelectorAll=function(e,t,o,n,r){for(r=document.all,t=[],o=(e=e.replace(/\[for\b/gi,"[htmlFor").split(",")).length;o--;){for(i.addRule(e[o],"k:v"),n=r.length;n--;)r[n].currentStyle.k&&t.push(r[n]);i.removeRule(0)}return t}}var r=this,s=r._util={};s.elements=[],s.destroyed=!0,r.options=o||{},r.options.error=r.options.error||!1,r.options.offset=r.options.offset||100,r.options.root=r.options.root||document,r.options.success=r.options.success||!1,r.options.selector=r.options.selector||".img__load",r.options.separator=r.options.separator||"|",r.options.containerClass=r.options.container,r.options.container=!!r.options.containerClass&&document.querySelectorAll(r.options.containerClass),r.options.errorClass=r.options.errorClass||"b-error",r.options.breakpoints=r.options.breakpoints||!1,r.options.loadInvisible=r.options.loadInvisible||!1,r.options.successClass=r.options.successClass||"b-loaded",r.options.validateDelay=r.options.validateDelay||25,r.options.saveViewportOffsetDelay=r.options.saveViewportOffsetDelay||50,r.options.srcset=r.options.srcset||"data-srcset",r.options.src=p=r.options.src||"data-src",h=Element.prototype.closest,m=1<window.devicePixelRatio,(v={}).top=0-r.options.offset,v.left=0-r.options.offset,r.revalidate=function(){e(r)},r.load=function(e,t){var o=this.options;void 0===e.length?n(e,t,o):d(e,function(e){n(e,t,o)})},r.destroy=function(){var e=this._util;this.options.container&&d(this.options.container,function(t){l(t,"scroll",e.validateT)}),l(window,"scroll",e.validateT),l(window,"resize",e.validateT),l(window,"resize",e.saveViewportOffsetT),e.count=0,e.elements.length=0,e.destroyed=!0},s.validateT=f(function(){t(r)},r.options.validateDelay,r),s.saveViewportOffsetT=f(function(){c(r.options.offset)},r.options.saveViewportOffsetDelay,r),c(r.options.offset),d(r.options.breakpoints,function(e){if(e.width>=window.screen.width)return p=e.src,!1}),setTimeout(function(){e(r)})}});var bLazy=new Blazy({breakpoints:[{width:420,src:"data-src"}],success:function(e){setTimeout(function(){var t=e.parentNode;t.className=t.className.replace(/\bimg__loading\b/,"")},200)}});function changeFavorite(e){radio_id=$(e).val(),checked=$(e).prop("checked"),favoritesradio=$.cookie("favoritesradio"),null==favoritesradio?$.cookie("favoritesradio",radio_id,{expires:365,path:"/"}):(arr=favoritesradio.split(","),checked?arr.push(radio_id):arr=$.grep(arr,function(e){return e!=radio_id}),favoritesradio=arr.join(),$.cookie("favoritesradio",favoritesradio,{expires:365,path:"/"})),$.ajax({url:"/ajax",type:"POST",data:{checked:checked,id:radio_id,action:"catalogfavorite"},success:function(e){$(".player__button-count").text(e)}})}function getCookie(e){var t=new RegExp("(?:^|; )"+e.replace(/\([\.$?*|{}\(\)\[\]\\\/\+^]\)/g,"\\$1")+"=([^;]*)"),o=document.cookie.match(t);return o?decodeURIComponent(o[1]):void 0}favoritesradio=getCookie("favoritesradio"),arr=favoritesradio.split(","),arr.forEach(function(e,t,o){inp=$('input[type="checkbox"][value="'+e+'"]'),inp.prop("checked",!0)});
