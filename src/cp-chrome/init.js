// This file contains the webcomponents polyfill and our portal-wide script bundle.

console.log('cp-chrome init.js');

window.portal = {
    host    : 'https://access.redhat.com',
    idp_url : 'https://idp.redhat.com',
    nrid    : '14615289',
    nrlk    : '2a497fa56f',
};

function chrometwo_ready(a){is_chrome_two()?"undefined"!=typeof window.PORTAL_CHROME_READY?a():require(["jquery"],function(b){b(document).ready(function(){"undefined"!=typeof window.PORTAL_CHROME_READY?a():b(document).bind("portal_chrome_ready",function(){a()})})}):window.ajq(document).ready(function(){a()})}function is_chrome_two(){var a,b;return a=document.getElementsByTagName("html")[0],b=a.getAttribute("class"),null!==b&&b.indexOf("chrometwo")!==-1}function chrometwo_require(){var a;a=[arguments[0],arguments[1],arguments[2]],a[0]instanceof Function&&(a[0]=["jquery"],a[1]=arguments[0]),is_chrome_two()?require(["load_html"],function(){window.chrometwo_ready(function(){require(["base"],function(){require.apply(this,a)})})}):require.apply(this,a)}!function(){var a=window.onerror,b="1"==window.doNotTrack||"1"==navigator.doNotTrack||"1"==navigator.msDoNotTrack||"yes"==navigator.doNotTrack,c="undefined"!=typeof window.portal&&"undefined"!=typeof window.portal.nrid&&"undefined"!=typeof window.portal.nrlk;!b&&c&&(window.NREUM||(NREUM={}),__nr_require=function(a,b,c){function d(c){if(!b[c]){var e=b[c]={exports:{}};a[c][0].call(e.exports,function(b){var e=a[c][1][b];return d(e||b)},e,e.exports)}return b[c].exports}if("function"==typeof __nr_require)return __nr_require;for(var e=0;e<c.length;e++)d(c[e]);return d}({QJf3ax:[function(a,b){function c(a){function b(b,c,g){a&&a(b,c,g),g||(g={});for(var i=h(b),j=i.length,k=f(g,e,d),l=0;j>l;l++)i[l].apply(k,c);return k}function g(a,b){j[a]=h(a).concat(b)}function h(a){return j[a]||[]}function i(){return c(b)}var j={};return{on:g,emit:b,create:i,listeners:h,_events:j}}function d(){return{}}var e="nr@context",f=a("gos");b.exports=c()},{gos:"7eSDFh"}],ee:[function(a,b){b.exports=a("QJf3ax")},{}],3:[function(a){function b(a){try{f.console&&console.log(a)}catch(b){}}var c,d=a("ee"),e=a(1),f={};try{c=localStorage.getItem("__nr_flags").split(","),console&&"function"==typeof console.log&&(f.console=!0,-1!==c.indexOf("dev")&&(f.dev=!0),-1!==c.indexOf("nr_dev")&&(f.nrDev=!0))}catch(g){}f.nrDev&&d.on("internal-error",function(a){b(a.stack)}),f.dev&&d.on("fn-err",function(a,c,d){b(d.stack)}),f.dev&&(b("NR AGENT IN DEVELOPMENT MODE"),b("flags: "+e(f,function(a){return a}).join(", ")))},{1:22,ee:"QJf3ax"}],4:[function(a){function b(a,b,d,g,i){try{j?j-=1:e("err",[i||new c(a,b,d)])}catch(k){try{e("ierr",[k,(new Date).getTime(),!0])}catch(l){}}return"function"==typeof h&&h.apply(this,f(arguments))}function c(a,b,c){this.message=a||"Uncaught error with no additional information",this.sourceURL=b,this.line=c}function d(a){e("err",[a,(new Date).getTime()])}var e=a("handle"),f=a(6),g=a("ee"),h=window.onerror,i=!1,j=0;a("loader").features.err=!0,a(5),window.onerror=b;try{throw new Error}catch(k){"stack"in k&&(a(1),a(2),"addEventListener"in window&&a(3),window.XMLHttpRequest&&XMLHttpRequest.prototype&&XMLHttpRequest.prototype.addEventListener&&window.XMLHttpRequest&&XMLHttpRequest.prototype&&XMLHttpRequest.prototype.addEventListener&&!/CriOS/.test(navigator.userAgent)&&a(4),i=!0)}g.on("fn-start",function(){i&&(j+=1)}),g.on("fn-err",function(a,b,c){i&&(this.thrown=!0,d(c))}),g.on("fn-end",function(){i&&!this.thrown&&j>0&&(j-=1)}),g.on("internal-error",function(a){e("ierr",[a,(new Date).getTime(),!0])})},{1:9,2:8,3:6,4:10,5:3,6:23,ee:"QJf3ax",handle:"D5DuLP",loader:"G9z0Bl"}],5:[function(a){function b(){}if(window.performance&&window.performance.timing&&window.performance.getEntriesByType){var c=a("ee"),d=a("handle"),e=a(1),f=a(2);a("loader").features.stn=!0,a(3);var g=Event;c.on("fn-start",function(a){var b=a[0];b instanceof g&&(this.bstStart=Date.now())}),c.on("fn-end",function(a,b){var c=a[0];c instanceof g&&d("bst",[c,b,this.bstStart,Date.now()])}),e.on("fn-start",function(a,b,c){this.bstStart=Date.now(),this.bstType=c}),e.on("fn-end",function(a,b){d("bstTimer",[b,this.bstStart,Date.now(),this.bstType])}),f.on("fn-start",function(){this.bstStart=Date.now()}),f.on("fn-end",function(a,b){d("bstTimer",[b,this.bstStart,Date.now(),"requestAnimationFrame"])}),c.on("pushState-start",function(){this.time=Date.now(),this.startPath=location.pathname+location.hash}),c.on("pushState-end",function(){d("bstHist",[location.pathname+location.hash,this.startPath,this.time])}),"addEventListener"in window.performance&&(window.performance.addEventListener("webkitresourcetimingbufferfull",function(){d("bstResource",[window.performance.getEntriesByType("resource")]),window.performance.webkitClearResourceTimings()},!1),window.performance.addEventListener("resourcetimingbufferfull",function(){d("bstResource",[window.performance.getEntriesByType("resource")]),window.performance.clearResourceTimings()},!1)),document.addEventListener("scroll",b,!1),document.addEventListener("keypress",b,!1),document.addEventListener("click",b,!1)}},{1:9,2:8,3:7,ee:"QJf3ax",handle:"D5DuLP",loader:"G9z0Bl"}],6:[function(a,b){function c(a){f.inPlace(a,["addEventListener","removeEventListener"],"-",d)}function d(a){return a[1]}var e=a("ee").create(),f=a(1)(e),g=a("gos");if(b.exports=e,c(window),"getPrototypeOf"in Object){for(var h=document;h&&!h.hasOwnProperty("addEventListener");)h=Object.getPrototypeOf(h);h&&c(h);for(var i=XMLHttpRequest.prototype;i&&!i.hasOwnProperty("addEventListener");)i=Object.getPrototypeOf(i);i&&c(i)}else XMLHttpRequest.prototype.hasOwnProperty("addEventListener")&&c(XMLHttpRequest.prototype);e.on("addEventListener-start",function(a,b){function c(){return h}if(a[1]){var d=a[1];if("function"==typeof d){var h=g(d,"nr@wrapped",function(){return f(d,"fn-",c,d.name||"anonymous")});this.wrapped=a[1]=h,e.emit("initEventContext",[a,b],this.wrapped)}else"function"==typeof d.handleEvent&&f.inPlace(d,["handleEvent"],"fn-")}}),e.on("removeEventListener-start",function(a){var b=this.wrapped;b&&(a[1]=b)})},{1:24,ee:"QJf3ax",gos:"7eSDFh"}],7:[function(a,b){var c=a("ee").create(),d=a(1)(c);b.exports=c,d.inPlace(window.history,["pushState","replaceState"],"-")},{1:24,ee:"QJf3ax"}],8:[function(a,b){var c=a("ee").create(),d=a(1)(c);b.exports=c,d.inPlace(window,["requestAnimationFrame","mozRequestAnimationFrame","webkitRequestAnimationFrame","msRequestAnimationFrame"],"raf-"),c.on("raf-start",function(a){a[0]=d(a[0],"fn-")})},{1:24,ee:"QJf3ax"}],9:[function(a,b){function c(a,b,c){a[0]=f(a[0],"fn-",null,c)}function d(a,b,c){function d(){return g}this.ctx={};var g={"nr@context":this.ctx};e.emit("initTimerContext",[a,c],g),a[0]=f(a[0],"fn-",d,c)}var e=a("ee").create(),f=a(1)(e);b.exports=e,f.inPlace(window,["setTimeout","setImmediate"],"setTimer-"),f.inPlace(window,["setInterval"],"setInterval-"),f.inPlace(window,["clearTimeout","clearImmediate"],"clearTimeout-"),e.on("setInterval-start",c),e.on("setTimer-start",d)},{1:24,ee:"QJf3ax"}],10:[function(a,b){function c(){j.inPlace(this,m,"fn-",e)}function d(a,b){j.inPlace(b,["onreadystatechange"],"fn-")}function e(a,b){return b}function f(a,b){for(var c in a)b[c]=a[c];return b}var g=a("ee").create(),h=a(1),i=a(2),j=i(g),k=i(h),l=window.XMLHttpRequest,m=["onload","onerror","onabort","onloadstart","onloadend","onprogress","ontimeout"];b.exports=g,window.XMLHttpRequest=function(a){var b=new l(a);try{g.emit("new-xhr",[],b),b.hasOwnProperty("addEventListener")&&k.inPlace(b,["addEventListener","removeEventListener"],"-",e),b.addEventListener("readystatechange",c,!1)}catch(d){try{g.emit("internal-error",[d])}catch(f){}}return b},f(l,XMLHttpRequest),XMLHttpRequest.prototype=l.prototype,j.inPlace(XMLHttpRequest.prototype,["open","send"],"-xhr-",e),g.on("send-xhr-start",d),g.on("open-xhr-start",d)},{1:6,2:24,ee:"QJf3ax"}],11:[function(a){function b(a){var b=this.params,d=this.metrics;if(!this.ended){this.ended=!0;for(var f=0;i>f;f++)a.removeEventListener(h[f],this.listener,!1);if(!b.aborted){if(d.duration=(new Date).getTime()-this.startTime,4===a.readyState){b.status=a.status;var g=a.responseType,j="arraybuffer"===g||"blob"===g||"json"===g?a.response:a.responseText,k=c(j);if(k&&(d.rxSize=k),this.sameOrigin){var l=a.getResponseHeader("X-NewRelic-App-Data");l&&(b.cat=l.split(", ").pop())}}else b.status=0;d.cbTime=this.cbTime,e("xhr",[b,d,this.startTime])}}}function c(a){if("string"==typeof a&&a.length)return a.length;if("object"==typeof a){if("undefined"!=typeof ArrayBuffer&&a instanceof ArrayBuffer&&a.byteLength)return a.byteLength;if("undefined"!=typeof Blob&&a instanceof Blob&&a.size)return a.size;if(!("undefined"!=typeof FormData&&a instanceof FormData))try{return JSON.stringify(a).length}catch(b){return}}}function d(a,b){var c=f(b),d=a.params;d.host=c.hostname+":"+c.port,d.pathname=c.pathname,a.sameOrigin=c.sameOrigin}if(window.XMLHttpRequest&&XMLHttpRequest.prototype&&XMLHttpRequest.prototype.addEventListener&&!/CriOS/.test(navigator.userAgent)){a("loader").features.xhr=!0;var e=a("handle"),f=a(2),g=a("ee"),h=["load","error","abort","timeout"],i=h.length,j=a(1),k=window.XMLHttpRequest;a(4),a(3),g.on("new-xhr",function(){this.totalCbs=0,this.called=0,this.cbTime=0,this.end=b,this.ended=!1,this.xhrGuids={}}),g.on("open-xhr-start",function(a){this.params={method:a[0]},d(this,a[1]),this.metrics={}}),g.on("open-xhr-end",function(a,b){"loader_config"in NREUM&&"xpid"in NREUM.loader_config&&this.sameOrigin&&b.setRequestHeader("X-NewRelic-ID",NREUM.loader_config.xpid)}),g.on("send-xhr-start",function(a,b){var d=this.metrics,e=a[0],f=this;if(d&&e){var j=c(e);j&&(d.txSize=j)}this.startTime=(new Date).getTime(),this.listener=function(a){try{"abort"===a.type&&(f.params.aborted=!0),("load"!==a.type||f.called===f.totalCbs&&(f.onloadCalled||"function"!=typeof b.onload))&&f.end(b)}catch(c){try{g.emit("internal-error",[c])}catch(d){}}};for(var k=0;i>k;k++)b.addEventListener(h[k],this.listener,!1)}),g.on("xhr-cb-time",function(a,b,c){this.cbTime+=a,b?this.onloadCalled=!0:this.called+=1,this.called!==this.totalCbs||!this.onloadCalled&&"function"==typeof c.onload||this.end(c)}),g.on("xhr-load-added",function(a,b){var c=""+j(a)+!!b;this.xhrGuids&&!this.xhrGuids[c]&&(this.xhrGuids[c]=!0,this.totalCbs+=1)}),g.on("xhr-load-removed",function(a,b){var c=""+j(a)+!!b;this.xhrGuids&&this.xhrGuids[c]&&(delete this.xhrGuids[c],this.totalCbs-=1)}),g.on("addEventListener-end",function(a,b){b instanceof k&&"load"===a[0]&&g.emit("xhr-load-added",[a[1],a[2]],b)}),g.on("removeEventListener-end",function(a,b){b instanceof k&&"load"===a[0]&&g.emit("xhr-load-removed",[a[1],a[2]],b)}),g.on("fn-start",function(a,b,c){b instanceof k&&("onload"===c&&(this.onload=!0),("load"===(a[0]&&a[0].type)||this.onload)&&(this.xhrCbStart=(new Date).getTime()))}),g.on("fn-end",function(a,b){this.xhrCbStart&&g.emit("xhr-cb-time",[(new Date).getTime()-this.xhrCbStart,this.onload,b],b)})}},{1:"XL7HBI",2:12,3:10,4:6,ee:"QJf3ax",handle:"D5DuLP",loader:"G9z0Bl"}],12:[function(a,b){b.exports=function(a){var b=document.createElement("a"),c=window.location,d={};b.href=a,d.port=b.port;var e=b.href.split("://");return!d.port&&e[1]&&(d.port=e[1].split("/")[0].split("@").pop().split(":")[1]),d.port&&"0"!==d.port||(d.port="https"===e[0]?"443":"80"),d.hostname=b.hostname||c.hostname,d.pathname=b.pathname,d.protocol=e[0],"/"!==d.pathname.charAt(0)&&(d.pathname="/"+d.pathname),d.sameOrigin=!b.hostname||b.hostname===document.domain&&b.port===c.port&&b.protocol===c.protocol,d}},{}],13:[function(a,b){function c(a){return function(){d(a,[(new Date).getTime()].concat(f(arguments)))}}var d=a("handle"),e=a(1),f=a(2);"undefined"==typeof window.newrelic&&(newrelic=window.NREUM);var g=["setPageViewName","addPageAction","setCustomAttribute","finished","addToTrace","inlineHit","noticeError"];e(g,function(a,b){window.NREUM[b]=c("api-"+b)}),b.exports=window.NREUM},{1:22,2:23,handle:"D5DuLP"}],gos:[function(a,b){b.exports=a("7eSDFh")},{}],"7eSDFh":[function(a,b){function c(a,b,c){if(d.call(a,b))return a[b];var e=c();if(Object.defineProperty&&Object.keys)try{return Object.defineProperty(a,b,{value:e,writable:!0,enumerable:!1}),e}catch(f){}return a[b]=e,e}var d=Object.prototype.hasOwnProperty;b.exports=c},{}],D5DuLP:[function(a,b){function c(a,b,c){return d.listeners(a).length?d.emit(a,b,c):void(d.q&&(d.q[a]||(d.q[a]=[]),d.q[a].push(b)))}var d=a("ee").create();b.exports=c,c.ee=d,d.q={}},{ee:"QJf3ax"}],handle:[function(a,b){b.exports=a("D5DuLP")},{}],XL7HBI:[function(a,b){function c(a){var b=typeof a;return!a||"object"!==b&&"function"!==b?-1:a===window?0:f(a,e,function(){return d++})}var d=1,e="nr@id",f=a("gos");b.exports=c},{gos:"7eSDFh"}],id:[function(a,b){b.exports=a("XL7HBI")},{}],G9z0Bl:[function(a,b){function c(){var a=m.info=NREUM.info,b=j.getElementsByTagName("script")[0];if(a&&a.licenseKey&&a.applicationID&&b){h(l,function(b,c){b in a||(a[b]=c)});var c="https"===k.split(":")[0]||a.sslForHttp;m.proto=c?"https://":"http://",g("mark",["onload",f()]);var d=j.createElement("script");d.src=m.proto+a.agent,b.parentNode.insertBefore(d,b)}}function d(){"complete"===j.readyState&&e()}function e(){g("mark",["domContent",f()])}function f(){return(new Date).getTime()}var g=a("handle"),h=a(1),i=window,j=i.document;a(2);var k=(""+location).split("?")[0],l={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",agent:"js-agent.newrelic.com/nr-768.min.js"},m=b.exports={offset:f(),origin:k,features:{}};j.addEventListener?(j.addEventListener("DOMContentLoaded",e,!1),i.addEventListener("load",c,!1)):(j.attachEvent("onreadystatechange",d),i.attachEvent("onload",c)),g("mark",["firstbyte",f()])},{1:22,2:13,handle:"D5DuLP"}],loader:[function(a,b){b.exports=a("G9z0Bl")},{}],22:[function(a,b){function c(a,b){var c=[],e="",f=0;for(e in a)d.call(a,e)&&(c[f]=b(e,a[e]),f+=1);return c}var d=Object.prototype.hasOwnProperty;b.exports=c},{}],23:[function(a,b){function c(a,b,c){b||(b=0),"undefined"==typeof c&&(c=a?a.length:0);for(var d=-1,e=c-b||0,f=Array(0>e?0:e);++d<e;)f[d]=a[b+d];return f}b.exports=c},{}],24:[function(a,b){function c(a){return!(a&&"function"==typeof a&&a.apply&&!a[f])}var d=a("ee"),e=a(1),f="nr@original",g=Object.prototype.hasOwnProperty;b.exports=function(a){function b(a,b,d,g){function h(){var c,f,h,j;try{f=this,c=e(arguments),h=d&&d(c,f)||{}}catch(l){k([l,"",[c,f,g],h])}i(b+"start",[c,f,g],h);try{return j=a.apply(f,c)}catch(m){throw i(b+"err",[c,f,m],h),m}finally{i(b+"end",[c,f,j],h)}}return c(a)?a:(b||(b=""),h[f]=a,j(a,h),h)}function h(a,d,e,f){e||(e="");var g,h,i,j="-"===e.charAt(0);for(i=0;i<d.length;i++)h=d[i],g=a[h],c(g)||(a[h]=b(g,j?h+e:e,f,h))}function i(b,c,d){try{a.emit(b,c,d)}catch(e){k([e,b,c,d])}}function j(a,b){if(Object.defineProperty&&Object.keys)try{var c=Object.keys(a);return c.forEach(function(c){Object.defineProperty(b,c,{get:function(){return a[c]},set:function(b){return a[c]=b,b}})}),b}catch(d){k([d])}for(var e in a)g.call(a,e)&&(b[e]=a[e]);return b}function k(b){try{a.emit("internal-error",b)}catch(c){}}return a||(a=d),b.inPlace=h,b.flag=f,b}},{1:23,ee:"QJf3ax"}]},{},["G9z0Bl",4,11,5]),NREUM.info={beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:window.portal.nrlk,applicationID:window.portal.nrid,sa:1,agent:"js-agent.newrelic.com/nr-768.min.js"}),window.onerror=a}(),function(a){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=a();else if("function"==typeof define&&define.amd)define([],a);else{var b;b="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,b.Raven=a()}}(function(){return function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){"use strict";function d(a){this.name="RavenConfigError",this.message=a}d.prototype=new Error,d.prototype.constructor=d,b.exports=d},{}],2:[function(a,b,c){"use strict";var d=function(a,b,c){var d=a[b],e=a;if(b in a){var f="warn"===b?"warning":b;a[b]=function(){var a=[].slice.call(arguments),b=""+a.join(" "),g={level:f,logger:"console",extra:{arguments:a}};c&&c(b,g),d&&Function.prototype.apply.call(d,e,a)}}};b.exports={wrapMethod:d}},{}],3:[function(a,b,c){"use strict";function d(){return+new Date}function e(){this._hasJSON=!("object"!=typeof JSON||!JSON.stringify),this._hasDocument="undefined"!=typeof document,this._lastCapturedException=null,this._lastEventId=null,this._globalServer=null,this._globalKey=null,this._globalProject=null,this._globalContext={},this._globalOptions={logger:"javascript",ignoreErrors:[],ignoreUrls:[],whitelistUrls:[],includePaths:[],crossOrigin:"anonymous",collectWindowErrors:!0,maxMessageLength:0,stackTraceLimit:50},this._ignoreOnError=0,this._isRavenInstalled=!1,this._originalErrorStackTraceLimit=Error.stackTraceLimit,this._originalConsole=window.console||{},this._originalConsoleMethods={},this._plugins=[],this._startTime=d(),this._wrappedBuiltIns=[],this._breadcrumbs=[],this._breadcrumbLimit=20,this._lastCapturedEvent=null,this._keypressTimeout,this._location=window.location,this._lastHref=this._location&&this._location.href;for(var a in this._originalConsole)this._originalConsoleMethods[a]=this._originalConsole[a]}var f=a(6),g=a(1),h=a(5),i=h.isFunction,j=h.isUndefined,k=h.isError,l=h.isEmptyObject,m=h.hasKey,n=h.joinRegExp,o=h.each,p=h.objectMerge,q=h.truncate,r=h.urlencode,s=h.uuid4,t=h.htmlTreeAsString,u=h.parseUrl,v=h.isString,w=a(2).wrapMethod,x="source protocol user pass host port path".split(" "),y=/^(?:(\w+):)?\/\/(?:(\w+)(:\w+)?@)?([\w\.-]+)(?::(\d+))?(\/.*)/;e.prototype={VERSION:"3.0.4",debug:!1,TraceKit:f,config:function(a,b){var c=this;if(this._globalServer)return this._logDebug("error","Error: Raven has already been configured"),this;if(!a)return this;b&&o(b,function(a,b){"tags"===a||"extra"===a?c._globalContext[a]=b:c._globalOptions[a]=b});var d=this._parseDSN(a),e=d.path.lastIndexOf("/"),g=d.path.substr(1,e);return this._dsn=a,this._globalOptions.ignoreErrors.push(/^Script error\.?$/),this._globalOptions.ignoreErrors.push(/^Javascript error: Script error\.? on line 0$/),this._globalOptions.ignoreErrors=n(this._globalOptions.ignoreErrors),this._globalOptions.ignoreUrls=!!this._globalOptions.ignoreUrls.length&&n(this._globalOptions.ignoreUrls),this._globalOptions.whitelistUrls=!!this._globalOptions.whitelistUrls.length&&n(this._globalOptions.whitelistUrls),this._globalOptions.includePaths=n(this._globalOptions.includePaths),this._globalKey=d.user,this._globalSecret=d.pass&&d.pass.substr(1),this._globalProject=d.path.substr(e+1),this._globalServer=this._getGlobalServer(d),this._globalEndpoint=this._globalServer+"/"+g+"api/"+this._globalProject+"/store/",this._globalOptions.fetchContext&&(f.remoteFetching=!0),this._globalOptions.linesOfContext&&(f.linesOfContext=this._globalOptions.linesOfContext),f.collectWindowErrors=!!this._globalOptions.collectWindowErrors,this},install:function(){var a=this;return this.isSetup()&&!this._isRavenInstalled&&(f.report.subscribe(function(){a._handleOnErrorStackInfo.apply(a,arguments)}),this._wrapBuiltIns(),this._drainPlugins(),this._isRavenInstalled=!0),Error.stackTraceLimit=this._globalOptions.stackTraceLimit,this},context:function(a,b,c){return i(a)&&(c=b||[],b=a,a=void 0),this.wrap(a,b).apply(this,c)},wrap:function(a,b,c){function d(){var d=[],f=arguments.length,g=!a||a&&a.deep!==!1;for(c&&i(c)&&c.apply(this,arguments);f--;)d[f]=g?e.wrap(a,arguments[f]):arguments[f];try{return b.apply(this,d)}catch(h){throw e._ignoreNextOnError(),e.captureException(h,a),h}}var e=this;if(j(b)&&!i(a))return a;if(i(a)&&(b=a,a=void 0),!i(b))return b;try{if(b.__raven__)return b}catch(f){return b}if(b.__raven_wrapper__)return b.__raven_wrapper__;for(var g in b)m(b,g)&&(d[g]=b[g]);return d.prototype=b.prototype,b.__raven_wrapper__=d,d.__raven__=!0,d.__inner__=b,d},uninstall:function(){return f.report.uninstall(),this._restoreBuiltIns(),Error.stackTraceLimit=this._originalErrorStackTraceLimit,this._isRavenInstalled=!1,this},captureException:function(a,b){if(!k(a))return this.captureMessage(a,b);this._lastCapturedException=a;try{var c=f.computeStackTrace(a);this._handleStackInfo(c,b)}catch(d){if(a!==d)throw d}return this},captureMessage:function(a,b){if(!this._globalOptions.ignoreErrors.test||!this._globalOptions.ignoreErrors.test(a))return this._send(p({message:a+""},b)),this},captureBreadcrumb:function(a){var b=p({timestamp:d()/1e3},a);this._breadcrumbs.push(b),this._breadcrumbs.length>this._breadcrumbLimit&&this._breadcrumbs.shift()},addPlugin:function(a){var b=Array.prototype.slice.call(arguments,1);return this._plugins.push([a,b]),this._isRavenInstalled&&this._drainPlugins(),this},setUserContext:function(a){return this._globalContext.user=a,this},setExtraContext:function(a){return this._mergeContext("extra",a),this},setTagsContext:function(a){return this._mergeContext("tags",a),this},clearContext:function(){return this._globalContext={},this},getContext:function(){return JSON.parse(JSON.stringify(this._globalContext))},setRelease:function(a){return this._globalOptions.release=a,this},setDataCallback:function(a){return this._globalOptions.dataCallback=a,this},setShouldSendCallback:function(a){return this._globalOptions.shouldSendCallback=a,this},setTransport:function(a){return this._globalOptions.transport=a,this},lastException:function(){return this._lastCapturedException},lastEventId:function(){return this._lastEventId},isSetup:function(){return!!this._hasJSON&&(!!this._globalServer||(this.ravenNotConfiguredError||(this.ravenNotConfiguredError=!0,this._logDebug("error","Error: Raven has not been configured.")),!1))},afterLoad:function(){var a=window.RavenConfig;a&&this.config(a.dsn,a.config).install()},showReportDialog:function(a){if(window.document){a=a||{};var b=a.eventId||this.lastEventId();if(!b)throw new g("Missing eventId");var c=a.dsn||this._dsn;if(!c)throw new g("Missing DSN");var d=encodeURIComponent,e="";e+="?eventId="+d(b),e+="&dsn="+d(c);var f=a.user||this._globalContext.user;f&&(f.name&&(e+="&name="+d(f.name)),f.email&&(e+="&email="+d(f.email)));var h=this._getGlobalServer(this._parseDSN(c)),i=document.createElement("script");i.async=!0,i.src=h+"/api/embed/error-page/"+e,(document.head||document.body).appendChild(i)}},_ignoreNextOnError:function(){var a=this;this._ignoreOnError+=1,setTimeout(function(){a._ignoreOnError-=1})},_triggerEvent:function(a,b){var c,d;if(this._hasDocument){b=b||{},a="raven"+a.substr(0,1).toUpperCase()+a.substr(1),document.createEvent?(c=document.createEvent("HTMLEvents"),c.initEvent(a,!0,!0)):(c=document.createEventObject(),c.eventType=a);for(d in b)m(b,d)&&(c[d]=b[d]);if(document.createEvent)document.dispatchEvent(c);else try{document.fireEvent("on"+c.eventType.toLowerCase(),c)}catch(e){}}},_breadcrumbEventHandler:function(a){var b=this;return function(c){if(b._keypressTimeout=null,b._lastCapturedEvent!==c){b._lastCapturedEvent=c;var d,e=c.target;try{d=t(e)}catch(f){d="<unknown>"}b.captureBreadcrumb({category:"ui."+a,message:d})}}},_keypressEventHandler:function(){var a=this,b=1e3;return function(c){var d=c.target,e=d&&d.tagName;if(e&&("INPUT"===e||"TEXTAREA"===e)){var f=a._keypressTimeout;f||a._breadcrumbEventHandler("input")(c),clearTimeout(f),a._keypressTimeout=setTimeout(function(){a._keypressTimeout=null},b)}}},_captureUrlChange:function(a,b){var c=u(this._location.href),d=u(b),e=u(a);this._lastHref=b,c.protocol===d.protocol&&c.host===d.host&&(b=d.relative),c.protocol===e.protocol&&c.host===e.host&&(a=e.relative),this.captureBreadcrumb({category:"navigation",data:{to:b,from:a}})},_wrapBuiltIns:function(){function a(a,b,c,d){var f=a[b];a[b]=c(f),d||e._wrappedBuiltIns.push([a,b,f])}function b(a){return function(b,c){for(var d=new Array(arguments.length),f=0;f<d.length;++f)d[f]=arguments[f];var g=d[0];return i(g)&&(d[0]=e.wrap(g)),a.apply?a.apply(this,d):a(d[0],d[1])}}function c(b){var c=window[b]&&window[b].prototype;c&&c.hasOwnProperty&&c.hasOwnProperty("addEventListener")&&(a(c,"addEventListener",function(a){return function(c,d,f,g){try{d&&d.handleEvent&&(d.handleEvent=e.wrap(d.handleEvent))}catch(h){}var i;return"EventTarget"!==b&&"Node"!==b||("click"===c?i=e._breadcrumbEventHandler(c):"keypress"===c&&(i=e._keypressEventHandler())),a.call(this,c,e.wrap(d,void 0,i),f,g)}}),a(c,"removeEventListener",function(a){return function(b,c,d,e){return c=c&&(c.__raven_wrapper__?c.__raven_wrapper__:c),a.call(this,b,c,d,e)}}))}function d(b,c){b in c&&i(c[b])&&a(c,b,function(a){return e.wrap(a)},!0)}var e=this;a(window,"setTimeout",b),a(window,"setInterval",b),window.requestAnimationFrame&&a(window,"requestAnimationFrame",function(a){return function(b){return a(e.wrap(b))}}),this._hasDocument&&(document.addEventListener("click",e._breadcrumbEventHandler("click")),document.addEventListener("keypress",e._keypressEventHandler()));for(var f=["EventTarget","Window","Node","ApplicationCache","AudioTrackList","ChannelMergerNode","CryptoOperation","EventSource","FileReader","HTMLUnknownElement","IDBDatabase","IDBRequest","IDBTransaction","KeyOperation","MediaController","MessagePort","ModalWindow","Notification","SVGElementInstance","Screen","TextTrack","TextTrackCue","TextTrackList","WebSocket","WebSocketWorker","Worker","XMLHttpRequest","XMLHttpRequestEventTarget","XMLHttpRequestUpload"],g=0;g<f.length;g++)c(f[g]);if("XMLHttpRequest"in window){var h=XMLHttpRequest.prototype;a(h,"open",function(a){return function(b,c){return v(c)&&c.indexOf(e._globalKey)===-1&&(this.__raven_xhr={method:b,url:c,status_code:null}),a.apply(this,arguments)}}),a(h,"send",function(b){return function(c){function f(){if(g.__raven_xhr&&(1===g.readyState||4===g.readyState)){try{g.__raven_xhr.status_code=g.status}catch(a){}e.captureBreadcrumb({type:"http",category:"xhr",data:g.__raven_xhr})}}for(var g=this,h=["onload","onerror","onprogress"],j=0;j<h.length;j++)d(h[j],g);return"onreadystatechange"in g&&i(g.onreadystatechange)?a(g,"onreadystatechange",function(a){return e.wrap(a,void 0,f)},!0):g.onreadystatechange=f,b.apply(this,arguments)}})}if("history"in window&&history.pushState){var j=window.onpopstate;window.onpopstate=function(){var a=e._location.href;if(e._captureUrlChange(e._lastHref,a),j)return j.apply(this,arguments)},a(history,"pushState",function(a){return function(){var b=arguments.length>2?arguments[2]:void 0;return b&&e._captureUrlChange(e._lastHref,b+""),a.apply(this,arguments)}})}var k=function(a,b){e.captureBreadcrumb({message:a,level:b.level,category:"console"})};"console"in window&&console.log&&o(["debug","info","warn","error","log"],function(a,b){w(console,b,k)});var l=window.jQuery||window.$;l&&l.fn&&l.fn.ready&&a(l.fn,"ready",function(a){return function(b){return a.call(this,e.wrap(b))}})},_restoreBuiltIns:function(){for(var a;this._wrappedBuiltIns.length;){a=this._wrappedBuiltIns.shift();var b=a[0],c=a[1],d=a[2];b[c]=d}},_drainPlugins:function(){var a=this;o(this._plugins,function(b,c){var d=c[0],e=c[1];d.apply(a,[a].concat(e))})},_parseDSN:function(a){var b=y.exec(a),c={},d=7;try{for(;d--;)c[x[d]]=b[d]||""}catch(e){throw new g("Invalid DSN: "+a)}if(c.pass&&!this._globalOptions.allowSecretKey)throw new g("Do not specify your secret key in the DSN. See: http://bit.ly/raven-secret-key");return c},_getGlobalServer:function(a){var b="//"+a.host+(a.port?":"+a.port:"");return a.protocol&&(b=a.protocol+":"+b),b},_handleOnErrorStackInfo:function(){this._ignoreOnError||this._handleStackInfo.apply(this,arguments)},_handleStackInfo:function(a,b){var c=this,d=[];a.stack&&a.stack.length&&o(a.stack,function(a,b){var e=c._normalizeFrame(b);e&&d.push(e)}),this._triggerEvent("handle",{stackInfo:a,options:b}),this._processException(a.name,a.message,a.url,a.lineno,d.slice(0,this._globalOptions.stackTraceLimit),b)},_normalizeFrame:function(a){if(a.url){var b,c={filename:a.url,lineno:a.line,colno:a.column,"function":a.func||"?"},d=this._extractContextFromFrame(a);if(d){var e=["pre_context","context_line","post_context"];for(b=3;b--;)c[e[b]]=d[b]}return c.in_app=!(this._globalOptions.includePaths.test&&!this._globalOptions.includePaths.test(c.filename)||/(Raven|TraceKit)\./.test(c["function"])||/raven\.(min\.)?js$/.test(c.filename)),c}},_extractContextFromFrame:function(a){if(a.context&&this._globalOptions.fetchContext){for(var b=a.context,c=~~(b.length/2),d=b.length,e=!1;d--;)if(b[d].length>300){e=!0;break}if(e){if(j(a.column))return;return[[],b[c].substr(a.column,50),[]]}return[b.slice(0,c),b[c],b.slice(c+1)]}},_processException:function(a,b,c,d,e,f){var g,h;if((!this._globalOptions.ignoreErrors.test||!this._globalOptions.ignoreErrors.test(b))&&(b+="",b=q(b,this._globalOptions.maxMessageLength),h=(a?a+": ":"")+b,h=q(h,this._globalOptions.maxMessageLength),e&&e.length?(c=e[0].filename||c,e.reverse(),g={frames:e}):c&&(g={frames:[{filename:c,lineno:d,in_app:!0}]}),(!this._globalOptions.ignoreUrls.test||!this._globalOptions.ignoreUrls.test(c))&&(!this._globalOptions.whitelistUrls.test||this._globalOptions.whitelistUrls.test(c)))){var i=p({exception:{values:[{type:a,value:b,stacktrace:g}]},culprit:c,message:h},f);this._send(i)}},_trimPacket:function(a){var b=this._globalOptions.maxMessageLength;if(a.message=q(a.message,b),a.exception){var c=a.exception.values[0];c.value=q(c.value,b)}return a},_getHttpData:function(){if(this._hasDocument&&document.location&&document.location.href){var a={headers:{"User-Agent":navigator.userAgent}};return a.url=document.location.href,document.referrer&&(a.headers.Referer=document.referrer),a}},_send:function(a){var b=this,c=this._globalOptions,e={project:this._globalProject,logger:c.logger,platform:"javascript"},f=this._getHttpData();if(f&&(e.request=f),a=p(e,a),a.tags=p(p({},this._globalContext.tags),a.tags),a.extra=p(p({},this._globalContext.extra),a.extra),a.extra["session:duration"]=d()-this._startTime,this._breadcrumbs&&this._breadcrumbs.length>0&&(a.breadcrumbs={values:[].slice.call(this._breadcrumbs,0)}),l(a.tags)&&delete a.tags,this._globalContext.user&&(a.user=this._globalContext.user),c.release&&(a.release=c.release),c.serverName&&(a.server_name=c.serverName),i(c.dataCallback)&&(a=c.dataCallback(a)||a),a&&!l(a)&&(!i(c.shouldSendCallback)||c.shouldSendCallback(a))&&(this._lastEventId=a.event_id||(a.event_id=s()),a=this._trimPacket(a),this._logDebug("debug","Raven about to send:",a),this.isSetup())){var g={sentry_version:"7",sentry_client:"raven-js/"+this.VERSION,sentry_key:this._globalKey};this._globalSecret&&(g.sentry_secret=this._globalSecret),this.captureBreadcrumb({category:"sentry",message:a.message,event_id:a.event_id});var h=this._globalEndpoint;(c.transport||this._makeRequest).call(this,{url:h,auth:g,data:a,options:c,onSuccess:function(){b._triggerEvent("success",{data:a,src:h})},onError:function(){b._triggerEvent("failure",{data:a,src:h})}})}},_makeRequest:function(a){function b(){200===c.status?a.onSuccess&&a.onSuccess():a.onError&&a.onError()}var c=new XMLHttpRequest,d="withCredentials"in c||"undefined"!=typeof XDomainRequest;if(d){var e=a.url;"withCredentials"in c?c.onreadystatechange=function(){4===c.readyState&&b()}:(c=new XDomainRequest,e=e.replace(/^https?:/,""),c.onload=b),c.open("POST",e+"?"+r(a.auth)),c.send(JSON.stringify(a.data))}},_newImage:function(){return document.createElement("img")},_logDebug:function(a){this._originalConsoleMethods[a]&&this.debug&&Function.prototype.apply.call(this._originalConsoleMethods[a],this._originalConsole,[].slice.call(arguments,1))},_mergeContext:function(a,b){j(b)?delete this._globalContext[a]:this._globalContext[a]=p(this._globalContext[a]||{},b)}},e.prototype.setUser=e.prototype.setUserContext,e.prototype.setReleaseContext=e.prototype.setRelease,b.exports=e},{1:1,2:2,5:5,6:6}],4:[function(a,b,c){"use strict";var d=a(3),e=window.Raven,f=new d;f.noConflict=function(){return window.Raven=e,f},f.afterLoad(),b.exports=f},{3:3}],5:[function(a,b,c){"use strict";function d(a){return void 0===a}function e(a){return"function"==typeof a}function f(a){return"[object String]"===t.toString.call(a);
}function g(a){return"object"==typeof a&&null!==a}function h(a){for(var b in a)return!1;return!0}function i(a){var b=t.toString.call(a);return g(a)&&"[object Error]"===b||"[object Exception]"===b||a instanceof Error}function j(a,b){var c,e;if(d(a.length))for(c in a)m(a,c)&&b.call(null,c,a[c]);else if(e=a.length)for(c=0;c<e;c++)b.call(null,c,a[c])}function k(a,b){return b?(j(b,function(b,c){a[b]=c}),a):a}function l(a,b){return!b||a.length<=b?a:a.substr(0,b)+"…"}function m(a,b){return t.hasOwnProperty.call(a,b)}function n(a){for(var b,c=[],d=0,e=a.length;d<e;d++)b=a[d],f(b)?c.push(b.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1")):b&&b.source&&c.push(b.source);return new RegExp(c.join("|"),"i")}function o(a){var b=[];return j(a,function(a,c){b.push(encodeURIComponent(a)+"="+encodeURIComponent(c))}),b.join("&")}function p(a){var b=a.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);if(!b)return{};var c=b[6]||"",d=b[8]||"";return{protocol:b[2],host:b[4],path:b[5],relative:b[5]+c+d}}function q(){var a=window.crypto||window.msCrypto;if(!d(a)&&a.getRandomValues){var b=new Uint16Array(8);a.getRandomValues(b),b[3]=4095&b[3]|16384,b[4]=16383&b[4]|32768;var c=function(a){for(var b=a.toString(16);b.length<4;)b="0"+b;return b};return c(b[0])+c(b[1])+c(b[2])+c(b[3])+c(b[4])+c(b[5])+c(b[6])+c(b[7])}return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"===a?b:3&b|8;return c.toString(16)})}function r(a){for(var b,c=5,d=80,e=[],f=0,g=0,h=" > ",i=h.length;a&&f++<c&&(b=s(a),!("html"===b||f>1&&g+e.length*i+b.length>=d));)e.push(b),g+=b.length,a=a.parentNode;return e.reverse().join(h)}function s(a){var b,c,d,e,g,h=[];if(!a||!a.tagName)return"";if(h.push(a.tagName.toLowerCase()),a.id&&h.push("#"+a.id),b=a.className,b&&f(b))for(c=b.split(" "),g=0;g<c.length;g++)h.push("."+c[g]);var i=["type","name","title","alt"];for(g=0;g<i.length;g++)d=i[g],e=a.getAttribute(d),e&&h.push("["+d+'="'+e+'"]');return h.join("")}var t=Object.prototype;b.exports={isUndefined:d,isFunction:e,isString:f,isObject:g,isEmptyObject:h,isError:i,each:j,objectMerge:k,truncate:l,hasKey:m,joinRegExp:n,urlencode:o,uuid4:q,htmlTreeAsString:r,htmlElementAsString:s,parseUrl:p}},{}],6:[function(a,b,c){"use strict";function d(){return"undefined"==typeof document?"":document.location.href}var e=a(5),f=e.hasKey,g=e.isString,h=e.isUndefined,i={remoteFetching:!1,collectWindowErrors:!0,linesOfContext:7,debug:!1},j=[].slice,k="?",l=/^(?:Uncaught (?:exception: )?)?((?:Eval|Internal|Range|Reference|Syntax|Type|URI)Error): ?(.*)$/;i.report=function(){function a(a){m(),s.push(a)}function b(a){for(var b=s.length-1;b>=0;--b)s[b]===a&&s.splice(b,1)}function c(){n(),s=[]}function e(a,b){var c=null;if(!b||i.collectWindowErrors){for(var d in s)if(f(s,d))try{s[d].apply(null,[a].concat(j.call(arguments,2)))}catch(e){c=e}if(c)throw c}}function h(a,b,c,f,h){var j=null;if(v)i.computeStackTrace.augmentStackTraceWithInitialElement(v,b,c,a),o();else if(h)j=i.computeStackTrace(h),e(j,!0);else{var m,n={url:b,line:c,column:f},p=void 0,r=a;if(g(a)){var m=a.match(l);m&&(p=m[1],r=m[2])}n.func=k,n.context=null,j={name:p,message:r,url:d(),stack:[n]},e(j,!0)}return!!q&&q.apply(this,arguments)}function m(){r||(q=window.onerror,window.onerror=h,r=!0)}function n(){r&&(window.onerror=q,r=!1,q=void 0)}function o(){var a=v,b=t;t=null,v=null,u=null,e.apply(null,[a,!1].concat(b))}function p(a,b){var c=j.call(arguments,1);if(v){if(u===a)return;o()}var d=i.computeStackTrace(a);if(v=d,u=a,t=c,window.setTimeout(function(){u===a&&o()},d.incomplete?2e3:0),b!==!1)throw a}var q,r,s=[],t=null,u=null,v=null;return p.subscribe=a,p.unsubscribe=b,p.uninstall=c,p}(),i.computeStackTrace=function(){function a(a){if(!h(a.stack)&&a.stack){for(var b,c,e=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|<anonymous>).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,f=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|\[native).*?)(?::(\d+))?(?::(\d+))?\s*$/i,g=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:ms-appx|https?|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,i=a.stack.split("\n"),j=[],l=(/^(.*) is undefined$/.exec(a.message),0),m=i.length;l<m;++l){if(b=e.exec(i[l])){var n=b[2]&&b[2].indexOf("native")!==-1;c={url:n?null:b[2],func:b[1]||k,args:n?[b[2]]:[],line:b[3]?+b[3]:null,column:b[4]?+b[4]:null}}else if(b=g.exec(i[l]))c={url:b[2],func:b[1]||k,args:[],line:+b[3],column:b[4]?+b[4]:null};else{if(!(b=f.exec(i[l])))continue;c={url:b[3],func:b[1]||k,args:b[2]?b[2].split(","):[],line:b[4]?+b[4]:null,column:b[5]?+b[5]:null}}!c.func&&c.line&&(c.func=k),c.line&&(c.context=null),j.push(c)}return j.length?(j[0].column||h(a.columnNumber)||(j[0].column=a.columnNumber+1),{name:a.name,message:a.message,url:d(),stack:j}):null}}function b(a){var b=a.stacktrace;if(!h(a.stacktrace)&&a.stacktrace){for(var c,e=/ line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i,f=/ line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i,g=b.split("\n"),i=[],j=0;j<g.length;j+=2){var l=null;(c=e.exec(g[j]))?l={url:c[2],line:+c[1],column:null,func:c[3],args:[]}:(c=f.exec(g[j]))&&(l={url:c[6],line:+c[1],column:+c[2],func:c[3]||c[4],args:c[5]?c[5].split(","):[]}),l&&(!l.func&&l.line&&(l.func=k),l.context=[g[j+1]],i.push(l))}return i.length?{name:a.name,message:a.message,url:d(),stack:i}:null}}function c(a){var b=a.message.split("\n");if(b.length<4)return null;for(var c,e=/^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,f=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,g=/^\s*Line (\d+) of function script\s*$/i,h=[],i=(document.getElementsByTagName("script"),2);i<b.length;i+=2){var j=null;if(c=e.exec(b[i]))j={url:c[2],func:c[3],args:[],line:+c[1],column:null};else if(c=f.exec(b[i])){j={url:c[3],func:c[4],args:[],line:+c[1],column:null};+c[1]}else if(c=g.exec(b[i])){var l=window.location.href.replace(/#.*$/,"");j={url:l,func:"",args:[],line:c[1],column:null}}j&&(j.func||(j.func=k),j.context=[b[i+1]],h.push(j))}return h.length?{name:a.name,message:b[0],url:d(),stack:h}:null}function e(a,b,c,d){var e={url:b,line:c};if(e.url&&e.line){if(a.incomplete=!1,e.func||(e.func=k),a.stack.length>0&&a.stack[0].url===e.url){if(a.stack[0].line===e.line)return!1;if(!a.stack[0].line&&a.stack[0].func===e.func)return a.stack[0].line=e.line,a.stack[0].context=e.context,!1}return a.stack.unshift(e),a.partial=!0,!0}return a.incomplete=!0,!1}function f(a,b){for(var c,h,j=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,l=[],m={},n=!1,o=f.caller;o&&!n;o=o.caller)if(o!==g&&o!==i.report){if(h={url:null,func:k,line:null,column:null},o.name?h.func=o.name:(c=j.exec(o.toString()))&&(h.func=c[1]),"undefined"==typeof h.func)try{h.func=c.input.substring(0,c.input.indexOf("{"))}catch(p){}m[""+o]?n=!0:m[""+o]=!0,l.push(h)}b&&l.splice(0,b);var q={name:a.name,message:a.message,url:d(),stack:l};return e(q,a.sourceURL||a.fileName,a.line||a.lineNumber,a.message||a.description),q}function g(e,g){var h=null;g=null==g?0:+g;try{if(h=b(e))return h}catch(j){if(i.debug)throw j}try{if(h=a(e))return h}catch(j){if(i.debug)throw j}try{if(h=c(e))return h}catch(j){if(i.debug)throw j}try{if(h=f(e,g+1))return h}catch(j){if(i.debug)throw j}return{name:e.name,message:e.message,url:d()}}return g.augmentStackTraceWithInitialElement=e,g.computeStackTraceFromStackProp=a,g}(),b.exports=i},{5:5}]},{},[4])(4)}),function(a,b){function c(a){return J.isWindow(a)?a:9===a.nodeType&&(a.defaultView||a.parentWindow)}function d(a){if(!sb[a]){var b=G.body,c=J("<"+a+">").appendTo(b),d=c.css("display");c.remove(),"none"!==d&&""!==d||(ob||(ob=G.createElement("iframe"),ob.frameBorder=ob.width=ob.height=0),b.appendChild(ob),pb&&ob.createElement||(pb=(ob.contentWindow||ob.contentDocument).document,pb.write((J.support.boxModel?"<!doctype html>":"")+"<html><body>"),pb.close()),c=pb.createElement(a),pb.body.appendChild(c),d=J.css(c,"display"),b.removeChild(ob)),sb[a]=d}return sb[a]}function e(a,b){var c={};return J.each(vb.concat.apply([],vb.slice(0,b)),function(){c[this]=a}),c}function f(){rb=b}function g(){return setTimeout(f,0),rb=J.now()}function h(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function i(){try{return new a.XMLHttpRequest}catch(b){}}function j(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d,e,f,g,h,i,j,k,l=a.dataTypes,m={},n=l.length,o=l[0];for(d=1;d<n;d++){if(1===d)for(e in a.converters)"string"==typeof e&&(m[e.toLowerCase()]=a.converters[e]);if(g=o,o=l[d],"*"===o)o=g;else if("*"!==g&&g!==o){if(h=g+" "+o,i=m[h]||m["* "+o],!i){k=b;for(j in m)if(f=j.split(" "),(f[0]===g||"*"===f[0])&&(k=m[f[1]+" "+o])){j=m[j],j===!0?i=k:k===!0&&(i=j);break}}!i&&!k&&J.error("No conversion from "+h.replace(" "," to ")),i!==!0&&(c=i?i(c):k(j(c)))}}return c}function k(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);for(;"*"===j[0];)j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function l(a,b,c,d){if(J.isArray(b))J.each(b,function(b,e){c||Sa.test(a)?d(a,e):l(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==J.type(b))d(a,b);else for(var e in b)l(a+"["+e+"]",b[e],c,d)}function m(a,c){var d,e,f=J.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&J.extend(!0,a,e)}function n(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;for(var h,i=a[f],j=0,k=i?i.length:0,l=a===fb;j<k&&(l||!h);j++)h=i[j](c,d,e),"string"==typeof h&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=n(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=n(a,c,d,e,"*",g)),h}function o(a){return function(b,c){if("string"!=typeof b&&(c=b,b="*"),J.isFunction(c))for(var d,e,f,g=b.toLowerCase().split(bb),h=0,i=g.length;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function p(a,b,c){var d="width"===b?a.offsetWidth:a.offsetHeight,e="width"===b?1:0,f=4;if(d>0){if("border"!==c)for(;e<f;e+=2)c||(d-=parseFloat(J.css(a,"padding"+Oa[e]))||0),"margin"===c?d+=parseFloat(J.css(a,c+Oa[e]))||0:d-=parseFloat(J.css(a,"border"+Oa[e]+"Width"))||0;return d+"px"}if(d=Da(a,b),(d<0||null==d)&&(d=a.style[b]),Ka.test(d))return d;if(d=parseFloat(d)||0,c)for(;e<f;e+=2)d+=parseFloat(J.css(a,"padding"+Oa[e]))||0,"padding"!==c&&(d+=parseFloat(J.css(a,"border"+Oa[e]+"Width"))||0),"margin"===c&&(d+=parseFloat(J.css(a,c+Oa[e]))||0);return d+"px"}function q(a){var b=G.createElement("div");return Ca.appendChild(b),b.innerHTML=a.outerHTML,b.firstChild}function r(a){var b=(a.nodeName||"").toLowerCase();"input"===b?s(a):"script"!==b&&"undefined"!=typeof a.getElementsByTagName&&J.grep(a.getElementsByTagName("input"),s)}function s(a){"checkbox"!==a.type&&"radio"!==a.type||(a.defaultChecked=a.checked)}function t(a){return"undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName("*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll("*"):[]}function u(a,b){var c;1===b.nodeType&&(b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),"object"===c?b.outerHTML=a.outerHTML:"input"!==c||"checkbox"!==a.type&&"radio"!==a.type?"option"===c?b.selected=a.defaultSelected:"input"===c||"textarea"===c?b.defaultValue=a.defaultValue:"script"===c&&b.text!==a.text&&(b.text=a.text):(a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value)),b.removeAttribute(J.expando),b.removeAttribute("_submit_attached"),b.removeAttribute("_change_attached"))}function v(a,b){if(1===b.nodeType&&J.hasData(a)){var c,d,e,f=J._data(a),g=J._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)J.event.add(b,c,h[c][d])}g.data&&(g.data=J.extend({},g.data))}}function w(a,b){return J.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function x(a){var b=oa.split("|"),c=a.createDocumentFragment();if(c.createElement)for(;b.length;)c.createElement(b.pop());return c}function y(a,b,c){if(b=b||0,J.isFunction(b))return J.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return J.grep(a,function(a,d){return a===b===c});if("string"==typeof b){var d=J.grep(a,function(a){return 1===a.nodeType});if(ka.test(b))return J.filter(b,d,!c);b=J.filter(b,d)}return J.grep(a,function(a,d){return J.inArray(a,b)>=0===c})}function z(a){return!a||!a.parentNode||11===a.parentNode.nodeType}function A(){return!0}function B(){return!1}function C(a,b,c){var d=b+"defer",e=b+"queue",f=b+"mark",g=J._data(a,d);g&&("queue"===c||!J._data(a,e))&&("mark"===c||!J._data(a,f))&&setTimeout(function(){!J._data(a,e)&&!J._data(a,f)&&(J.removeData(a,d,!0),g.fire())},0)}function D(a){for(var b in a)if(("data"!==b||!J.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function E(a,c,d){if(d===b&&1===a.nodeType){var e="data-"+c.replace(N,"-$1").toLowerCase();if(d=a.getAttribute(e),"string"==typeof d){try{d="true"===d||"false"!==d&&("null"===d?null:J.isNumeric(d)?+d:M.test(d)?J.parseJSON(d):d)}catch(f){}J.data(a,c,d)}else d=b}return d}function F(a){var b,c,d=K[a]={};for(a=a.split(/\s+/),b=0,c=a.length;b<c;b++)d[a[b]]=!0;return d}var G=a.document,H=a.navigator,I=a.location,J=function(){function c(){if(!h.isReady){try{G.documentElement.doScroll("left")}catch(a){return void setTimeout(c,1)}h.ready()}}var d,e,f,g,h=function(a,b){return new h.fn.init(a,b,d)},i=a.jQuery,j=a.$,k=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,l=/\S/,m=/^\s+/,n=/\s+$/,o=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,p=/^[\],:{}\s]*$/,q=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,r=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,s=/(?:^|:|,)(?:\s*\[)+/g,t=/(webkit)[ \/]([\w.]+)/,u=/(opera)(?:.*version)?[ \/]([\w.]+)/,v=/(msie) ([\w.]+)/,w=/(mozilla)(?:.*? rv:([\w.]+))?/,x=/-([a-z]|[0-9])/gi,y=/^-ms-/,z=function(a,b){return(b+"").toUpperCase()},A=H.userAgent,B=Object.prototype.toString,C=Object.prototype.hasOwnProperty,D=Array.prototype.push,E=Array.prototype.slice,F=String.prototype.trim,I=Array.prototype.indexOf,J={};return h.fn=h.prototype={constructor:h,init:function(a,c,d){var e,f,g,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if("body"===a&&!c&&G.body)return this.context=G,this[0]=G.body,this.selector=a,this.length=1,this;if("string"==typeof a){if(e="<"!==a.charAt(0)||">"!==a.charAt(a.length-1)||a.length<3?k.exec(a):[null,a,null],e&&(e[1]||!c)){if(e[1])return c=c instanceof h?c[0]:c,i=c?c.ownerDocument||c:G,g=o.exec(a),g?h.isPlainObject(c)?(a=[G.createElement(g[1])],h.fn.attr.call(a,c,!0)):a=[i.createElement(g[1])]:(g=h.buildFragment([e[1]],[i]),a=(g.cacheable?h.clone(g.fragment):g.fragment).childNodes),h.merge(this,a);if(f=G.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return d.find(a);this.length=1,this[0]=f}return this.context=G,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return h.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),h.makeArray(a,this))},selector:"",jquery:"1.7.2",length:0,size:function(){return this.length},toArray:function(){return E.call(this,0)},get:function(a){return null==a?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();return h.isArray(a)?D.apply(d,a):h.merge(d,a),d.prevObject=this,d.context=this.context,"find"===b?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return h.each(this,a,b)},ready:function(a){return h.bindReady(),f.add(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(E.apply(this,arguments),"slice",E.call(arguments).join(","))},map:function(a){return this.pushStack(h.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:D,sort:[].sort,splice:[].splice},h.fn.init.prototype=h.fn,h.extend=h.fn.extend=function(){var a,c,d,e,f,g,i=arguments[0]||{},j=1,k=arguments.length,l=!1;for("boolean"==typeof i&&(l=i,i=arguments[1]||{},j=2),"object"!=typeof i&&!h.isFunction(i)&&(i={}),k===j&&(i=this,--j);j<k;j++)if(null!=(a=arguments[j]))for(c in a)d=i[c],e=a[c],i!==e&&(l&&e&&(h.isPlainObject(e)||(f=h.isArray(e)))?(f?(f=!1,g=d&&h.isArray(d)?d:[]):g=d&&h.isPlainObject(d)?d:{},i[c]=h.extend(l,g,e)):e!==b&&(i[c]=e));return i},h.extend({noConflict:function(b){return a.$===h&&(a.$=j),b&&a.jQuery===h&&(a.jQuery=i),h},isReady:!1,readyWait:1,holdReady:function(a){a?h.readyWait++:h.ready(!0)},ready:function(a){if(a===!0&&!--h.readyWait||a!==!0&&!h.isReady){if(!G.body)return setTimeout(h.ready,1);if(h.isReady=!0,a!==!0&&--h.readyWait>0)return;f.fireWith(G,[h]),h.fn.trigger&&h(G).trigger("ready").off("ready")}},bindReady:function(){if(!f){if(f=h.Callbacks("once memory"),"complete"===G.readyState)return setTimeout(h.ready,1);if(G.addEventListener)G.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",h.ready,!1);else if(G.attachEvent){G.attachEvent("onreadystatechange",g),a.attachEvent("onload",h.ready);var b=!1;try{b=null==a.frameElement}catch(d){}G.documentElement.doScroll&&b&&c()}}},isFunction:function(a){return"function"===h.type(a)},isArray:Array.isArray||function(a){return"array"===h.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return null==a?String(a):J[B.call(a)]||"object"},isPlainObject:function(a){if(!a||"object"!==h.type(a)||a.nodeType||h.isWindow(a))return!1;try{if(a.constructor&&!C.call(a,"constructor")&&!C.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||C.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){return"string"==typeof b&&b?(b=h.trim(b),a.JSON&&a.JSON.parse?a.JSON.parse(b):p.test(b.replace(q,"@").replace(r,"]").replace(s,""))?new Function("return "+b)():void h.error("Invalid JSON: "+b)):null},parseXML:function(c){if("string"!=typeof c||!c)return null;var d,e;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&h.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&l.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(y,"ms-").replace(x,z)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var e,f=0,g=a.length,i=g===b||h.isFunction(a);if(d)if(i){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g&&c.apply(a[f++],d)!==!1;);else if(i){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g&&c.call(a[f],f,a[f++])!==!1;);return a},trim:F?function(a){return null==a?"":F.call(a)}:function(a){return null==a?"":(a+"").replace(m,"").replace(n,"")},makeArray:function(a,b){var c=b||[];if(null!=a){var d=h.type(a);null==a.length||"string"===d||"function"===d||"regexp"===d||h.isWindow(a)?D.call(c,a):h.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(I)return I.call(b,a,c);for(d=b.length,c=c?c<0?Math.max(0,d+c):c:0;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if("number"==typeof c.length)for(var f=c.length;e<f;e++)a[d++]=c[e];else for(;c[e]!==b;)a[d++]=c[e++];return a.length=d,a},grep:function(a,b,c){var d,e=[];c=!!c;for(var f=0,g=a.length;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],i=0,j=a.length,k=a instanceof h||j!==b&&"number"==typeof j&&(j>0&&a[0]&&a[j-1]||0===j||h.isArray(a));if(k)for(;i<j;i++)e=c(a[i],i,d),null!=e&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),null!=e&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){if("string"==typeof c){var d=a[c];c=a,a=d}if(!h.isFunction(a))return b;var e=E.call(arguments,2),f=function(){return a.apply(c,e.concat(E.call(arguments)))};return f.guid=a.guid=a.guid||f.guid||h.guid++,f},access:function(a,c,d,e,f,g,i){var j,k=null==d,l=0,m=a.length;if(d&&"object"==typeof d){for(l in d)h.access(a,c,l,d[l],1,g,e);f=1}else if(e!==b){if(j=i===b&&h.isFunction(e),k&&(j?(j=c,c=function(a,b,c){return j.call(h(a),c)}):(c.call(a,e),c=null)),c)for(;l<m;l++)c(a[l],d,j?e.call(a[l],l,c(a[l],d)):e,i);f=1}return f?a:k?c.call(a):m?c(a[0],d):g},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=t.exec(a)||u.exec(a)||v.exec(a)||a.indexOf("compatible")<0&&w.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}h.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(c,d){return d&&d instanceof h&&!(d instanceof a)&&(d=a(d)),h.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(G);return a},browser:{}}),h.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){J["[object "+b+"]"]=b.toLowerCase()}),e=h.uaMatch(A),e.browser&&(h.browser[e.browser]=!0,h.browser.version=e.version),h.browser.webkit&&(h.browser.safari=!0),l.test(" ")&&(m=/^[\s\xA0]+/,n=/[\s\xA0]+$/),d=h(G),G.addEventListener?g=function(){G.removeEventListener("DOMContentLoaded",g,!1),h.ready()}:G.attachEvent&&(g=function(){"complete"===G.readyState&&(G.detachEvent("onreadystatechange",g),h.ready())}),h}(),K={};J.Callbacks=function(a){a=a?K[a]||F(a):{};var c,d,e,f,g,h,i=[],j=[],k=function(b){var c,d,e,f;for(c=0,d=b.length;c<d;c++)e=b[c],f=J.type(e),"array"===f?k(e):"function"===f&&(!a.unique||!m.has(e))&&i.push(e)},l=function(b,k){for(k=k||[],c=!a.memory||[b,k],d=!0,e=!0,h=f||0,f=0,g=i.length;i&&h<g;h++)if(i[h].apply(b,k)===!1&&a.stopOnFalse){c=!0;break}e=!1,i&&(a.once?c===!0?m.disable():i=[]:j&&j.length&&(c=j.shift(),m.fireWith(c[0],c[1])))},m={add:function(){if(i){var a=i.length;k(arguments),e?g=i.length:c&&c!==!0&&(f=a,l(c[0],c[1]))}return this},remove:function(){if(i)for(var b=arguments,c=0,d=b.length;c<d;c++)for(var f=0;f<i.length&&(b[c]!==i[f]||(e&&f<=g&&(g--,f<=h&&h--),i.splice(f--,1),!a.unique));f++);return this},has:function(a){if(i)for(var b=0,c=i.length;b<c;b++)if(a===i[b])return!0;return!1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,(!c||c===!0)&&m.disable(),this},locked:function(){return!j},fireWith:function(b,d){return j&&(e?a.once||j.push([b,d]):(!a.once||!c)&&l(b,d)),this},fire:function(){return m.fireWith(this,arguments),this},fired:function(){return!!d}};return m};var L=[].slice;J.extend({Deferred:function(a){var b,c=J.Callbacks("once memory"),d=J.Callbacks("once memory"),e=J.Callbacks("memory"),f="pending",g={resolve:c,reject:d,notify:e},h={done:c.add,fail:d.add,progress:e.add,state:function(){return f},isResolved:c.fired,isRejected:d.fired,then:function(a,b,c){return i.done(a).fail(b).progress(c),this},always:function(){return i.done.apply(i,arguments).fail.apply(i,arguments),this},pipe:function(a,b,c){return J.Deferred(function(d){J.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c,e=b[0],f=b[1];J.isFunction(e)?i[a](function(){c=e.apply(this,arguments),c&&J.isFunction(c.promise)?c.promise().then(d.resolve,d.reject,d.notify):d[f+"With"](this===i?d:this,[c])}):i[a](d[f])})}).promise()},promise:function(a){if(null==a)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({});for(b in g)i[b]=g[b].fire,i[b+"With"]=g[b].fireWith;return i.done(function(){f="resolved"},d.disable,e.lock).fail(function(){f="rejected"},c.disable,e.lock),a&&a.call(i,i),i},when:function(a){function b(a){return function(b){g[a]=arguments.length>1?L.call(arguments,0):b,i.notifyWith(j,g)}}function c(a){return function(b){d[a]=arguments.length>1?L.call(arguments,0):b,--h||i.resolveWith(i,d)}}var d=L.call(arguments,0),e=0,f=d.length,g=Array(f),h=f,i=f<=1&&a&&J.isFunction(a.promise)?a:J.Deferred(),j=i.promise();if(f>1){for(;e<f;e++)d[e]&&d[e].promise&&J.isFunction(d[e].promise)?d[e].promise().then(c(e),i.reject,b(e)):--h;h||i.resolveWith(i,d)}else i!==a&&i.resolveWith(i,f?[a]:[]);return j}}),J.support=function(){var b,c,d,e,f,g,h,i,j,k,l,m=G.createElement("div");G.documentElement;if(m.setAttribute("className","t"),m.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",c=m.getElementsByTagName("*"),d=m.getElementsByTagName("a")[0],!c||!c.length||!d)return{};e=G.createElement("select"),f=e.appendChild(G.createElement("option")),g=m.getElementsByTagName("input")[0],b={leadingWhitespace:3===m.firstChild.nodeType,tbody:!m.getElementsByTagName("tbody").length,htmlSerialize:!!m.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:"/a"===d.getAttribute("href"),opacity:/^0.55/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:"on"===g.value,optSelected:f.selected,getSetAttribute:"t"!==m.className,enctype:!!G.createElement("form").enctype,html5Clone:"<:nav></:nav>"!==G.createElement("nav").cloneNode(!0).outerHTML,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,pixelMargin:!0},J.boxModel=b.boxModel="CSS1Compat"===G.compatMode,g.checked=!0,b.noCloneChecked=g.cloneNode(!0).checked,e.disabled=!0,b.optDisabled=!f.disabled;try{delete m.test}catch(n){b.deleteExpando=!1}if(!m.addEventListener&&m.attachEvent&&m.fireEvent&&(m.attachEvent("onclick",function(){b.noCloneEvent=!1}),m.cloneNode(!0).fireEvent("onclick")),g=G.createElement("input"),g.value="t",g.setAttribute("type","radio"),b.radioValue="t"===g.value,g.setAttribute("checked","checked"),g.setAttribute("name","t"),m.appendChild(g),h=G.createDocumentFragment(),h.appendChild(m.lastChild),b.checkClone=h.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=g.checked,h.removeChild(g),h.appendChild(m),m.attachEvent)for(k in{submit:1,change:1,focusin:1})j="on"+k,l=j in m,l||(m.setAttribute(j,"return;"),l="function"==typeof m[j]),b[k+"Bubbles"]=l;return h.removeChild(m),h=e=f=m=g=null,J(function(){var c,d,e,f,g,h,j,k,n,o,p,q,r=G.getElementsByTagName("body")[0];!r||(j=1,q="padding:0;margin:0;border:",o="position:absolute;top:0;left:0;width:1px;height:1px;",p=q+"0;visibility:hidden;",k="style='"+o+q+"5px solid #000;",n="<div "+k+"display:block;'><div style='"+q+"0;display:block;overflow:hidden;'></div></div><table "+k+"' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",c=G.createElement("div"),c.style.cssText=p+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(c,r.firstChild),m=G.createElement("div"),c.appendChild(m),m.innerHTML="<table><tr><td style='"+q+"0;display:none'></td><td>t</td></tr></table>",i=m.getElementsByTagName("td"),l=0===i[0].offsetHeight,i[0].style.display="",i[1].style.display="none",b.reliableHiddenOffsets=l&&0===i[0].offsetHeight,a.getComputedStyle&&(m.innerHTML="",h=G.createElement("div"),h.style.width="0",h.style.marginRight="0",m.style.width="2px",m.appendChild(h),b.reliableMarginRight=0===(parseInt((a.getComputedStyle(h,null)||{marginRight:0}).marginRight,10)||0)),"undefined"!=typeof m.style.zoom&&(m.innerHTML="",m.style.width=m.style.padding="1px",m.style.border=0,m.style.overflow="hidden",m.style.display="inline",m.style.zoom=1,b.inlineBlockNeedsLayout=3===m.offsetWidth,m.style.display="block",m.style.overflow="visible",m.innerHTML="<div style='width:5px;'></div>",b.shrinkWrapBlocks=3!==m.offsetWidth),m.style.cssText=o+p,m.innerHTML=n,d=m.firstChild,e=d.firstChild,f=d.nextSibling.firstChild.firstChild,g={doesNotAddBorder:5!==e.offsetTop,doesAddBorderForTableAndCells:5===f.offsetTop},e.style.position="fixed",e.style.top="20px",g.fixedPosition=20===e.offsetTop||15===e.offsetTop,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",g.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,g.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,a.getComputedStyle&&(m.style.marginTop="1%",b.pixelMargin="1%"!==(a.getComputedStyle(m,null)||{marginTop:0}).marginTop),"undefined"!=typeof c.style.zoom&&(c.style.zoom=1),r.removeChild(c),h=m=c=null,J.extend(b,g))}),b}();var M=/^(?:\{.*\}|\[.*\])$/,N=/([A-Z])/g;J.extend({cache:{},uuid:0,expando:"jQuery"+(J.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?J.cache[a[J.expando]]:a[J.expando],!!a&&!D(a)},data:function(a,c,d,e){if(J.acceptData(a)){var f,g,h,i=J.expando,j="string"==typeof c,k=a.nodeType,l=k?J.cache:a,m=k?a[i]:a[i]&&i,n="events"===c;if((!m||!l[m]||!n&&!e&&!l[m].data)&&j&&d===b)return;return m||(k?a[i]=m=++J.uuid:m=i),l[m]||(l[m]={},k||(l[m].toJSON=J.noop)),"object"!=typeof c&&"function"!=typeof c||(e?l[m]=J.extend(l[m],c):l[m].data=J.extend(l[m].data,c)),f=g=l[m],e||(g.data||(g.data={}),g=g.data),d!==b&&(g[J.camelCase(c)]=d),n&&!g[c]?f.events:(j?(h=g[c],null==h&&(h=g[J.camelCase(c)])):h=g,h)}},removeData:function(a,b,c){if(J.acceptData(a)){var d,e,f,g=J.expando,h=a.nodeType,i=h?J.cache:a,j=h?a[g]:g;if(!i[j])return;if(b&&(d=c?i[j]:i[j].data)){J.isArray(b)||(b in d?b=[b]:(b=J.camelCase(b),b=b in d?[b]:b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?D:J.isEmptyObject)(d))return}if(!c&&(delete i[j].data,!D(i[j])))return;J.support.deleteExpando||!i.setInterval?delete i[j]:i[j]=null,h&&(J.support.deleteExpando?delete a[g]:a.removeAttribute?a.removeAttribute(g):a[g]=null)}},_data:function(a,b,c){return J.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=J.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),J.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length&&(k=J.data(i),1===i.nodeType&&!J._data(i,"parsedAttrs"))){for(f=i.attributes,h=f.length;j<h;j++)g=f[j].name,0===g.indexOf("data-")&&(g=J.camelCase(g.substring(5)),E(i,g,k[g]));J._data(i,"parsedAttrs",!0)}return k}return"object"==typeof a?this.each(function(){J.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",J.access(this,function(c){return c===b?(k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=J.data(i,a),k=E(i,a,k)),k===b&&d[1]?this.data(d[0]):k):(d[1]=c,void this.each(function(){var b=J(this);b.triggerHandler("setData"+e,d),J.data(this,a,c),b.triggerHandler("changeData"+e,d)}))},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){J.removeData(this,a)})}}),J.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",J._data(a,b,(J._data(a,b)||0)+1))},_unmark:function(a,b,c){if(a!==!0&&(c=b,b=a,a=!1),b){c=c||"fx";var d=c+"mark",e=a?0:(J._data(b,d)||1)-1;e?J._data(b,d,e):(J.removeData(b,d,!0),C(b,c,"mark"))}},queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=J._data(a,b),c&&(!d||J.isArray(c)?d=J._data(a,b,J.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=J.queue(a,b),d=c.shift(),e={};"inprogress"===d&&(d=c.shift()),d&&("fx"===b&&c.unshift("inprogress"),J._data(a,b+".run",e),d.call(a,function(){J.dequeue(a,b)},e)),c.length||(J.removeData(a,b+"queue "+b+".run",!0),C(a,b,"queue"))}}),J.fn.extend({queue:function(a,c){var d=2;return"string"!=typeof a&&(c=a,a="fx",d--),arguments.length<d?J.queue(this[0],a):c===b?this:this.each(function(){var b=J.queue(this,a,c);"fx"===a&&"inprogress"!==b[0]&&J.dequeue(this,a)})},dequeue:function(a){return this.each(function(){J.dequeue(this,a)})},delay:function(a,b){return a=J.fx?J.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){
clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function d(){--i||f.resolveWith(g,[g])}"string"!=typeof a&&(c=a,a=b),a=a||"fx";for(var e,f=J.Deferred(),g=this,h=g.length,i=1,j=a+"defer",k=a+"queue",l=a+"mark";h--;)(e=J.data(g[h],j,b,!0)||(J.data(g[h],k,b,!0)||J.data(g[h],l,b,!0))&&J.data(g[h],j,J.Callbacks("once memory"),!0))&&(i++,e.add(d));return d(),f.promise(c)}});var O,P,Q,R=/[\n\t\r]/g,S=/\s+/,T=/\r/g,U=/^(?:button|input)$/i,V=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea)?$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,Y=J.support.getSetAttribute;J.fn.extend({attr:function(a,b){return J.access(this,J.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){J.removeAttr(this,a)})},prop:function(a,b){return J.access(this,J.prop,a,b,arguments.length>1)},removeProp:function(a){return a=J.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(J.isFunction(a))return this.each(function(b){J(this).addClass(a.call(this,b,this.className))});if(a&&"string"==typeof a)for(b=a.split(S),c=0,d=this.length;c<d;c++)if(e=this[c],1===e.nodeType)if(e.className||1!==b.length){for(f=" "+e.className+" ",g=0,h=b.length;g<h;g++)~f.indexOf(" "+b[g]+" ")||(f+=b[g]+" ");e.className=J.trim(f)}else e.className=a;return this},removeClass:function(a){var c,d,e,f,g,h,i;if(J.isFunction(a))return this.each(function(b){J(this).removeClass(a.call(this,b,this.className))});if(a&&"string"==typeof a||a===b)for(c=(a||"").split(S),d=0,e=this.length;d<e;d++)if(f=this[d],1===f.nodeType&&f.className)if(a){for(g=(" "+f.className+" ").replace(R," "),h=0,i=c.length;h<i;h++)g=g.replace(" "+c[h]+" "," ");f.className=J.trim(g)}else f.className="";return this},toggleClass:function(a,b){var c=typeof a,d="boolean"==typeof b;return J.isFunction(a)?this.each(function(c){J(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if("string"===c)for(var e,f=0,g=J(this),h=b,i=a.split(S);e=i[f++];)h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e);else"undefined"!==c&&"boolean"!==c||(this.className&&J._data(this,"__className__",this.className),this.className=this.className||a===!1?"":J._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;c<d;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(R," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,f=this[0];return arguments.length?(e=J.isFunction(a),this.each(function(d){var f,g=J(this);1===this.nodeType&&(f=e?a.call(this,d,g.val()):a,null==f?f="":"number"==typeof f?f+="":J.isArray(f)&&(f=J.map(f,function(a){return null==a?"":a+""})),c=J.valHooks[this.type]||J.valHooks[this.nodeName.toLowerCase()],c&&"set"in c&&c.set(this,f,"value")!==b||(this.value=f))})):f?(c=J.valHooks[f.type]||J.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,"string"==typeof d?d.replace(T,""):null==d?"":d)):void 0}}),J.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i="select-one"===a.type;if(f<0)return null;for(c=i?f:0,d=i?f+1:h.length;c<d;c++)if(e=h[c],e.selected&&(J.support.optDisabled?!e.disabled:null===e.getAttribute("disabled"))&&(!e.parentNode.disabled||!J.nodeName(e.parentNode,"optgroup"))){if(b=J(e).val(),i)return b;g.push(b)}return i&&!g.length&&h.length?J(h[f]).val():g},set:function(a,b){var c=J.makeArray(b);return J(a).find("option").each(function(){this.selected=J.inArray(J(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(a&&3!==i&&8!==i&&2!==i)return e&&c in J.attrFn?J(a)[c](d):"undefined"==typeof a.getAttribute?J.prop(a,c,d):(h=1!==i||!J.isXMLDoc(a),h&&(c=c.toLowerCase(),g=J.attrHooks[c]||(X.test(c)?P:O)),d!==b?null===d?void J.removeAttr(a,c):g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,""+d),d):g&&"get"in g&&h&&null!==(f=g.get(a,c))?f:(f=a.getAttribute(c),null===f?b:f))},removeAttr:function(a,b){var c,d,e,f,g,h=0;if(b&&1===a.nodeType)for(d=b.toLowerCase().split(S),f=d.length;h<f;h++)e=d[h],e&&(c=J.propFix[e]||e,g=X.test(e),g||J.attr(a,e,""),a.removeAttribute(Y?e:c),g&&c in a&&(a[c]=!1))},attrHooks:{type:{set:function(a,b){if(U.test(a.nodeName)&&a.parentNode)J.error("type property can't be changed");else if(!J.support.radioValue&&"radio"===b&&J.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return O&&J.nodeName(a,"button")?O.get(a,b):b in a?a.value:null},set:function(a,b,c){return O&&J.nodeName(a,"button")?O.set(a,b,c):void(a.value=b)}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(a&&3!==h&&8!==h&&2!==h)return g=1!==h||!J.isXMLDoc(a),g&&(c=J.propFix[c]||c,f=J.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&null!==(e=f.get(a,c))?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):V.test(a.nodeName)||W.test(a.nodeName)&&a.href?0:b}}}}),J.attrHooks.tabindex=J.propHooks.tabIndex,P={get:function(a,c){var d,e=J.prop(a,c);return e===!0||"boolean"!=typeof e&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?J.removeAttr(a,c):(d=J.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},Y||(Q={name:!0,id:!0,coords:!0},O=J.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(Q[c]?""!==d.nodeValue:d.specified)?d.nodeValue:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=G.createAttribute(c),a.setAttributeNode(d)),d.nodeValue=b+""}},J.attrHooks.tabindex.set=O.set,J.each(["width","height"],function(a,b){J.attrHooks[b]=J.extend(J.attrHooks[b],{set:function(a,c){if(""===c)return a.setAttribute(b,"auto"),c}})}),J.attrHooks.contenteditable={get:O.get,set:function(a,b,c){""===b&&(b="false"),O.set(a,b,c)}}),J.support.hrefNormalized||J.each(["href","src","width","height"],function(a,c){J.attrHooks[c]=J.extend(J.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return null===d?b:d}})}),J.support.style||(J.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),J.support.optSelected||(J.propHooks.selected=J.extend(J.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),J.support.enctype||(J.propFix.enctype="encoding"),J.support.checkOn||J.each(["radio","checkbox"],function(){J.valHooks[this]={get:function(a){return null===a.getAttribute("value")?"on":a.value}}}),J.each(["radio","checkbox"],function(){J.valHooks[this]=J.extend(J.valHooks[this],{set:function(a,b){if(J.isArray(b))return a.checked=J.inArray(J(a).val(),b)>=0}})});var Z=/^(?:textarea|input|select)$/i,$=/^([^\.]*)?(?:\.(.+))?$/,_=/(?:^|\s)hover(\.\S+)?\b/,aa=/^key/,ba=/^(?:mouse|contextmenu)|click/,ca=/^(?:focusinfocus|focusoutblur)$/,da=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,ea=function(a){var b=da.exec(a);return b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)")),b},fa=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},ga=function(a){return J.event.special.hover?a:a.replace(_,"mouseenter$1 mouseleave$1")};J.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,p,q;if(3!==a.nodeType&&8!==a.nodeType&&c&&d&&(g=J._data(a))){for(d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=J.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return"undefined"==typeof J||a&&J.event.triggered===a.type?b:J.event.dispatch.apply(h.elem,arguments)},h.elem=a),c=J.trim(ga(c)).split(" "),j=0;j<c.length;j++)k=$.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),q=J.event.special[l]||{},l=(f?q.delegateType:q.bindType)||l,q=J.event.special[l]||{},n=J.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,quick:f&&ea(f),namespace:m.join(".")},o),p=i[l],p||(p=i[l]=[],p.delegateCount=0,q.setup&&q.setup.call(a,e,m,h)!==!1||(a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h))),q.add&&(q.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?p.splice(p.delegateCount++,0,n):p.push(n),J.event.global[l]=!0;a=null}},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q,r=J.hasData(a)&&J._data(a);if(r&&(m=r.events)){for(b=J.trim(ga(b||"")).split(" "),f=0;f<b.length;f++)if(g=$.exec(b[f])||[],h=i=g[1],j=g[2],h){for(n=J.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,p=m[h]||[],k=p.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null,l=0;l<p.length;l++)q=p[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||"**"===d&&q.selector)&&(p.splice(l--,1),q.selector&&p.delegateCount--,n.remove&&n.remove.call(a,q));0===p.length&&k!==p.length&&((!n.teardown||n.teardown.call(a,j)===!1)&&J.removeEvent(a,h,r.handle),delete m[h])}else for(h in m)J.event.remove(a,h+b[f],c,d,!0);J.isEmptyObject(m)&&(o=r.handle,o&&(o.elem=null),J.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,f){if(!e||3!==e.nodeType&&8!==e.nodeType){var g,h,i,j,k,l,m,n,o,p,q=c.type||c,r=[];if(ca.test(q+J.event.triggered))return;if(q.indexOf("!")>=0&&(q=q.slice(0,-1),h=!0),q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),(!e||J.event.customEvent[q])&&!J.event.global[q])return;if(c="object"==typeof c?c[J.expando]?c:new J.Event(q,c):new J.Event(q),c.type=q,c.isTrigger=!0,c.exclusive=h,c.namespace=r.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,l=q.indexOf(":")<0?"on"+q:"",!e){g=J.cache;for(i in g)g[i].events&&g[i].events[q]&&J.event.trigger(c,d,g[i].handle.elem,!0);return}if(c.result=b,c.target||(c.target=e),d=null!=d?J.makeArray(d):[],d.unshift(c),m=J.event.special[q]||{},m.trigger&&m.trigger.apply(e,d)===!1)return;if(o=[[e,m.bindType||q]],!f&&!m.noBubble&&!J.isWindow(e)){for(p=m.delegateType||q,j=ca.test(p+q)?e:e.parentNode,k=null;j;j=j.parentNode)o.push([j,p]),k=j;k&&k===e.ownerDocument&&o.push([k.defaultView||k.parentWindow||a,p])}for(i=0;i<o.length&&!c.isPropagationStopped();i++)j=o[i][0],c.type=o[i][1],n=(J._data(j,"events")||{})[c.type]&&J._data(j,"handle"),n&&n.apply(j,d),n=l&&j[l],n&&J.acceptData(j)&&n.apply(j,d)===!1&&c.preventDefault();return c.type=q,!f&&!c.isDefaultPrevented()&&(!m._default||m._default.apply(e.ownerDocument,d)===!1)&&("click"!==q||!J.nodeName(e,"a"))&&J.acceptData(e)&&l&&e[q]&&("focus"!==q&&"blur"!==q||0!==c.target.offsetWidth)&&!J.isWindow(e)&&(k=e[l],k&&(e[l]=null),J.event.triggered=q,e[q](),J.event.triggered=b,k&&(e[l]=k)),c.result}},dispatch:function(c){c=J.event.fix(c||a.event);var d,e,f,g,h,i,j,k,l,m,n=(J._data(this,"events")||{})[c.type]||[],o=n.delegateCount,p=[].slice.call(arguments,0),q=!c.exclusive&&!c.namespace,r=J.event.special[c.type]||{},s=[];if(p[0]=c,c.delegateTarget=this,!r.preDispatch||r.preDispatch.call(this,c)!==!1){if(o&&(!c.button||"click"!==c.type))for(g=J(this),g.context=this.ownerDocument||this,f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0){for(i={},k=[],g[0]=f,d=0;d<o;d++)l=n[d],m=l.selector,i[m]===b&&(i[m]=l.quick?fa(f,l.quick):g.is(m)),i[m]&&k.push(l);k.length&&s.push({elem:f,matches:k})}for(n.length>o&&s.push({elem:this,matches:n.slice(o)}),d=0;d<s.length&&!c.isPropagationStopped();d++)for(j=s[d],c.currentTarget=j.elem,e=0;e<j.matches.length&&!c.isImmediatePropagationStopped();e++)l=j.matches[e],(q||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))&&(c.data=l.data,c.handleObj=l,h=((J.event.special[l.origType]||{}).handle||l.handler).apply(j.elem,p),h!==b&&(c.result=h,h===!1&&(c.preventDefault(),c.stopPropagation())));return r.postDispatch&&r.postDispatch.call(this,c),c.result}},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,e,f,g=c.button,h=c.fromElement;return null==a.pageX&&null!=c.clientX&&(d=a.target.ownerDocument||G,e=d.documentElement,f=d.body,a.pageX=c.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=c.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?c.toElement:h),!a.which&&g!==b&&(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[J.expando])return a;var c,d,e=a,f=J.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;for(a=J.Event(e),c=g.length;c;)d=g[--c],a[d]=e[d];return a.target||(a.target=e.srcElement||G),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey),f.filter?f.filter(a,e):a},special:{ready:{setup:J.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){J.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=J.extend(new J.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?J.event.trigger(e,null,b):J.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},J.event.handle=J.event.dispatch,J.removeEvent=G.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},J.Event=function(a,b){return this instanceof J.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?A:B):this.type=a,b&&J.extend(this,b),this.timeStamp=a&&a.timeStamp||J.now(),this[J.expando]=!0,void 0):new J.Event(a,b)},J.Event.prototype={preventDefault:function(){this.isDefaultPrevented=A;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=A;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=A,this.stopPropagation()},isDefaultPrevented:B,isPropagationStopped:B,isImmediatePropagationStopped:B},J.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){J.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;f.selector;return e&&(e===d||J.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),J.support.submitBubbles||(J.event.special.submit={setup:function(){return!J.nodeName(this,"form")&&void J.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=J.nodeName(c,"input")||J.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(J.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),d._submit_attached=!0)})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&J.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return!J.nodeName(this,"form")&&void J.event.remove(this,"._submit")}}),J.support.changeBubbles||(J.event.special.change={setup:function(){return Z.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(J.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),J.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,J.event.simulate("change",this,a,!0))})),!1):void J.event.add(this,"beforeactivate._change",function(a){var b=a.target;Z.test(b.nodeName)&&!b._change_attached&&(J.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&J.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type)return a.handleObj.handler.apply(this,arguments)},teardown:function(){return J.event.remove(this,"._change"),Z.test(this.nodeName)}}),J.support.focusinBubbles||J.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){J.event.simulate(b,a.target,J.event.fix(a),!0)};J.event.special[b]={setup:function(){0===c++&&G.addEventListener(a,d,!0)},teardown:function(){0===--c&&G.removeEventListener(a,d,!0)}}}),J.fn.extend({on:function(a,c,d,e,f){var g,h;if("object"==typeof a){"string"!=typeof c&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}if(null==d&&null==e?(e=c,d=c=b):null==e&&("string"==typeof c?(e=d,d=b):(e=d,d=c,c=b)),e===!1)e=B;else if(!e)return this;return 1===f&&(g=e,e=function(a){return J().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=J.guid++)),this.each(function(){J.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;return J(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this}if("object"==typeof a){for(var f in a)this.off(f,c,a[f]);return this}return c!==!1&&"function"!=typeof c||(d=c,c=b),d===!1&&(d=B),this.each(function(){J.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return J(this.context).on(a,this.selector,b,c),this},die:function(a,b){return J(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1==arguments.length?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){J.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return J.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||J.guid++,d=0,e=function(c){var e=(J._data(this,"lastToggle"+a.guid)||0)%d;return J._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};for(e.guid=c;d<b.length;)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){J.fn[b]=function(a,c){return null==c&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},J.attrFn&&(J.attrFn[b]=!0),aa.test(b)&&(J.event.fixHooks[b]=J.event.keyHooks),ba.test(b)&&(J.event.fixHooks[b]=J.event.mouseHooks)}),function(){function a(a,b,c,d,f,g){for(var h=0,i=d.length;h<i;h++){var j=d[h];if(j){var k=!1;for(j=j[a];j;){if(j[e]===c){k=d[j.sizset];break}if(1===j.nodeType)if(g||(j[e]=c,j.sizset=h),"string"!=typeof b){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}j=j[a]}d[h]=k}}}function c(a,b,c,d,f,g){for(var h=0,i=d.length;h<i;h++){var j=d[h];if(j){var k=!1;for(j=j[a];j;){if(j[e]===c){k=d[j.sizset];break}if(1===j.nodeType&&!g&&(j[e]=c,j.sizset=h),j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}d[h]=k}}}var d=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e="sizcache"+(Math.random()+"").replace(".",""),f=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){return i=!1,0});var m=function(a,b,c,e){c=c||[],b=b||G;var f=b;if(1!==b.nodeType&&9!==b.nodeType)return[];if(!a||"string"!=typeof a)return c;var h,i,j,k,l,n,q,r,t=!0,u=m.isXML(b),v=[],x=a;do if(d.exec(""),h=d.exec(x),h&&(x=h[3],v.push(h[1]),h[2])){k=h[3];break}while(h);if(v.length>1&&p.exec(a))if(2===v.length&&o.relative[v[0]])i=w(v[0]+v[1],b,e);else for(i=o.relative[v[0]]?[b]:m(v.shift(),b);v.length;)a=v.shift(),o.relative[a]&&(a+=v.shift()),i=w(a,i,e);else if(!e&&v.length>1&&9===b.nodeType&&!u&&o.match.ID.test(v[0])&&!o.match.ID.test(v[v.length-1])&&(l=m.find(v.shift(),b,u),b=l.expr?m.filter(l.expr,l.set)[0]:l.set[0]),b)for(l=e?{expr:v.pop(),set:s(e)}:m.find(v.pop(),1!==v.length||"~"!==v[0]&&"+"!==v[0]||!b.parentNode?b:b.parentNode,u),i=l.expr?m.filter(l.expr,l.set):l.set,v.length>0?j=s(i):t=!1;v.length;)n=v.pop(),q=n,o.relative[n]?q=v.pop():n="",null==q&&(q=b),o.relative[n](j,q,u);else j=v=[];if(j||(j=i),j||m.error(n||a),"[object Array]"===g.call(j))if(t)if(b&&1===b.nodeType)for(r=0;null!=j[r];r++)j[r]&&(j[r]===!0||1===j[r].nodeType&&m.contains(b,j[r]))&&c.push(i[r]);else for(r=0;null!=j[r];r++)j[r]&&1===j[r].nodeType&&c.push(i[r]);else c.push.apply(c,j);else s(j,c);return k&&(m(k,f,c,e),m.uniqueSort(c)),c};m.uniqueSort=function(a){if(u&&(h=i,a.sort(u),h))for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1);return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++)if(h=o.order[e],(g=o.leftMatch[h].exec(a))&&(i=g[1],g.splice(1,1),"\\"!==i.substr(i.length-1)&&(g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c),null!=d))){a=a.replace(o.match[h],"");break}return d||(d="undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName("*"):[]),{set:d,expr:a}},m.filter=function(a,c,d,e){for(var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);a&&c.length;){for(h in o.filter)if(null!=(f=o.leftMatch[h].exec(a))&&f[2]){if(k=o.filter[h],l=f[1],g=!1,f.splice(1,1),"\\"===l.substr(l.length-1))continue;if(s===r&&(r=[]),o.preFilter[h])if(f=o.preFilter[h](f,s,d,r,e,t)){if(f===!0)continue}else g=i=!0;if(f)for(n=0;null!=(j=s[n]);n++)j&&(i=k(j,f,n,s),p=e^i,d&&null!=i?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){if(d||(s=r),a=a.replace(o.match[h],""),!g)return[];break}}if(a===q){if(null!=g)break;m.error(a)}q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(1===d||9===d||11===d){if("string"==typeof a.textContent)return a.textContent;if("string"==typeof a.innerText)return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(3===d||4===d)return a.nodeValue}else for(b=0;c=a[b];b++)8!==c.nodeType&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c="string"==typeof b,d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f,g=0,h=a.length;g<h;g++)if(f=a[g]){for(;(f=f.previousSibling)&&1!==f.nodeType;);a[g]=e||f&&f.nodeName.toLowerCase()===b?f||!1:f===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d="string"==typeof b,e=0,f=a.length;if(d&&!l.test(b)){for(b=b.toLowerCase();e<f;e++)if(c=a[e]){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b&&g}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(b,d,e){var g,h=f++,i=a;"string"==typeof d&&!l.test(d)&&(d=d.toLowerCase(),g=d,i=c),i("parentNode",d,h,b,g,e)},"~":function(b,d,e){var g,h=f++,i=a;"string"==typeof d&&!l.test(d)&&(d=d.toLowerCase(),g=d,i=c),i("previousSibling",d,h,b,g,e)}},find:{ID:function(a,b,c){if("undefined"!=typeof b.getElementById&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if("undefined"!=typeof b.getElementsByName){for(var c=[],d=b.getElementsByName(a[1]),e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return 0===c.length?null:c}},TAG:function(a,b){if("undefined"!=typeof b.getElementsByTagName)return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){if(a=" "+a[1].replace(j,"")+" ",f)return a;for(var g,h=0;null!=(g=b[h]);h++)g&&(e^(g.className&&(" "+g.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(g):c&&(b[h]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if("nth"===a[1]){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec("even"===a[2]&&"2n"||"odd"===a[2]&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);return a[0]=f++,a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");return!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),"~="===a[2]&&(a[4]=" "+a[4]+" "),a},PSEUDO:function(a,b,c,e,f){if("not"===a[1]){if(!((d.exec(a[3])||"").length>1||/^\w/.test(a[3]))){var g=m.filter(a[3],b,c,!0^f);return c||e.push.apply(e,g),!1}a[3]=m(a[3],null,null,b)}else if(o.match.POS.test(a[0])||o.match.CHILD.test(a[0]))return!0;return a},POS:function(a){return a.unshift(!0),a}},filters:{enabled:function(a){return a.disabled===!1&&"hidden"!==a.type},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return"input"===a.nodeName.toLowerCase()&&"text"===c&&(b===c||null===b)},radio:function(a){return"input"===a.nodeName.toLowerCase()&&"radio"===a.type},checkbox:function(a){return"input"===a.nodeName.toLowerCase()&&"checkbox"===a.type},file:function(a){return"input"===a.nodeName.toLowerCase()&&"file"===a.type},password:function(a){return"input"===a.nodeName.toLowerCase()&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return("input"===b||"button"===b)&&"submit"===a.type},image:function(a){return"input"===a.nodeName.toLowerCase()&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return("input"===b||"button"===b)&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return 0===b},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if("contains"===e)return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if("not"===e){for(var g=b[3],h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,d,f,g,h,i,j=b[1],k=a;switch(j){case"only":case"first":for(;k=k.previousSibling;)if(1===k.nodeType)return!1;if("first"===j)return!0;k=a;case"last":for(;k=k.nextSibling;)if(1===k.nodeType)return!1;return!0;case"nth":if(c=b[2],d=b[3],1===c&&0===d)return!0;if(f=b[0],g=a.parentNode,g&&(g[e]!==f||!a.nodeIndex)){for(h=0,k=g.firstChild;k;k=k.nextSibling)1===k.nodeType&&(k.nodeIndex=++h);g[e]=f}return i=a.nodeIndex-d,0===c?0===i:i%c===0&&i/c>=0}},ID:function(a,b){return 1===a.nodeType&&a.getAttribute("id")===b},TAG:function(a,b){return"*"===b&&1===a.nodeType||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):null!=a[c]?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return null==d?"!="===f:!f&&m.attr?null!=d:"="===f?e===g:"*="===f?e.indexOf(g)>=0:"~="===f?(" "+e+" ").indexOf(g)>=0:g?"!="===f?e!==g:"^="===f?0===e.indexOf(g):"$="===f?e.substr(e.length-g.length)===g:"|="===f&&(e===g||e.substr(0,g.length+1)===g+"-"):e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));o.match.globalPOS=p;var s=function(a,b){return a=Array.prototype.slice.call(a,0),b?(b.push.apply(b,a),b):a};try{Array.prototype.slice.call(G.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if("[object Array]"===g.call(a))Array.prototype.push.apply(d,a);else if("number"==typeof a.length)for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;G.documentElement.compareDocumentPosition?u=function(a,b){return a===b?(h=!0,0):a.compareDocumentPosition&&b.compareDocumentPosition?4&a.compareDocumentPosition(b)?-1:1:a.compareDocumentPosition?-1:1}:(u=function(a,b){if(a===b)return h=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;for(;j;)e.unshift(j),j=j.parentNode;for(j=i;j;)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;for(var d=a.nextSibling;d;){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=G.createElement("div"),c="script"+(new Date).getTime(),d=G.documentElement;a.innerHTML="<a name='"+c+"'/>",d.insertBefore(a,d.firstChild),G.getElementById(c)&&(o.find.ID=function(a,c,d){if("undefined"!=typeof c.getElementById&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||"undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return 1===a.nodeType&&c&&c.nodeValue===b}),d.removeChild(a),d=a=null}(),function(){var a=G.createElement("div");a.appendChild(G.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if("*"===a[1]){for(var d=[],e=0;c[e];e++)1===c[e].nodeType&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&"undefined"!=typeof a.firstChild.getAttribute&&"#"!==a.firstChild.getAttribute("href")&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),G.querySelectorAll&&function(){var a=m,b=G.createElement("div"),c="__sizzle__";if(b.innerHTML="<p class='TEST'></p>",!b.querySelectorAll||0!==b.querySelectorAll(".TEST").length){
m=function(b,d,e,f){if(d=d||G,!f&&!m.isXML(d)){var g=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(g&&(1===d.nodeType||9===d.nodeType)){if(g[1])return s(d.getElementsByTagName(b),e);if(g[2]&&o.find.CLASS&&d.getElementsByClassName)return s(d.getElementsByClassName(g[2]),e)}if(9===d.nodeType){if("body"===b&&d.body)return s([d.body],e);if(g&&g[3]){var h=d.getElementById(g[3]);if(!h||!h.parentNode)return s([],e);if(h.id===g[3])return s([h],e)}try{return s(d.querySelectorAll(b),e)}catch(i){}}else if(1===d.nodeType&&"object"!==d.nodeName.toLowerCase()){var j=d,k=d.getAttribute("id"),l=k||c,n=d.parentNode,p=/^\s*[+~]/.test(b);k?l=l.replace(/'/g,"\\$&"):d.setAttribute("id",l),p&&n&&(d=d.parentNode);try{if(!p||n)return s(d.querySelectorAll("[id='"+l+"'] "+b),e)}catch(q){}finally{k||j.removeAttribute("id")}}}return a(b,d,e,f)};for(var d in a)m[d]=a[d];b=null}}(),function(){var a=G.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var c=!b.call(G.createElement("div"),"div"),d=!1;try{b.call(G.documentElement,"[test!='']:sizzle")}catch(e){d=!0}m.matchesSelector=function(a,e){if(e=e.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']"),!m.isXML(a))try{if(d||!o.match.PSEUDO.test(e)&&!/!=/.test(e)){var f=b.call(a,e);if(f||!c||a.document&&11!==a.document.nodeType)return f}}catch(g){}return m(e,null,null,[a]).length>0}}}(),function(){var a=G.createElement("div");if(a.innerHTML="<div class='test e'></div><div class='test'></div>",a.getElementsByClassName&&0!==a.getElementsByClassName("e").length){if(a.lastChild.className="e",1===a.getElementsByClassName("e").length)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if("undefined"!=typeof b.getElementsByClassName&&!c)return b.getElementsByClassName(a[1])},a=null}}(),G.documentElement.contains?m.contains=function(a,b){return a!==b&&(!a.contains||a.contains(b))}:G.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(16&a.compareDocumentPosition(b))}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return!!b&&"HTML"!==b.nodeName};var w=function(a,b,c){for(var d,e=[],f="",g=b.nodeType?[b]:b;d=o.match.PSEUDO.exec(a);)f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=J.attr,m.selectors.attrMap={},J.find=m,J.expr=m.selectors,J.expr[":"]=J.expr.filters,J.unique=m.uniqueSort,J.text=m.getText,J.isXMLDoc=m.isXML,J.contains=m.contains}();var ha=/Until$/,ia=/^(?:parents|prevUntil|prevAll)/,ja=/,/,ka=/^.[^:#\[\.,]*$/,la=Array.prototype.slice,ma=J.expr.match.globalPOS,na={children:!0,contents:!0,next:!0,prev:!0};J.fn.extend({find:function(a){var b,c,d=this;if("string"!=typeof a)return J(a).filter(function(){for(b=0,c=d.length;b<c;b++)if(J.contains(d[b],this))return!0});var e,f,g,h=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++)if(e=h.length,J.find(a,this[b],h),b>0)for(f=e;f<h.length;f++)for(g=0;g<e;g++)if(h[g]===h[f]){h.splice(f--,1);break}return h},has:function(a){var b=J(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(J.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(y(this,a,!1),"not",a)},filter:function(a){return this.pushStack(y(this,a,!0),"filter",a)},is:function(a){return!!a&&("string"==typeof a?ma.test(a)?J(a,this.context).index(this[0])>=0:J.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d,e=[],f=this[0];if(J.isArray(a)){for(var g=1;f&&f.ownerDocument&&f!==b;){for(c=0;c<a.length;c++)J(f).is(a[c])&&e.push({selector:a[c],elem:f,level:g});f=f.parentNode,g++}return e}var h=ma.test(a)||"string"!=typeof a?J(a,b||this.context):0;for(c=0,d=this.length;c<d;c++)for(f=this[c];f;){if(h?h.index(f)>-1:J.find.matchesSelector(f,a)){e.push(f);break}if(f=f.parentNode,!f||!f.ownerDocument||f===b||11===f.nodeType)break}return e=e.length>1?J.unique(e):e,this.pushStack(e,"closest",a)},index:function(a){return a?"string"==typeof a?J.inArray(this[0],J(a)):J.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c="string"==typeof a?J(a,b):J.makeArray(a&&a.nodeType?[a]:a),d=J.merge(this.get(),c);return this.pushStack(z(c[0])||z(d[0])?d:J.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),J.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return J.dir(a,"parentNode")},parentsUntil:function(a,b,c){return J.dir(a,"parentNode",c)},next:function(a){return J.nth(a,2,"nextSibling")},prev:function(a){return J.nth(a,2,"previousSibling")},nextAll:function(a){return J.dir(a,"nextSibling")},prevAll:function(a){return J.dir(a,"previousSibling")},nextUntil:function(a,b,c){return J.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return J.dir(a,"previousSibling",c)},siblings:function(a){return J.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return J.sibling(a.firstChild)},contents:function(a){return J.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:J.makeArray(a.childNodes)}},function(a,b){J.fn[a]=function(c,d){var e=J.map(this,b,c);return ha.test(a)||(d=c),d&&"string"==typeof d&&(e=J.filter(d,e)),e=this.length>1&&!na[a]?J.unique(e):e,(this.length>1||ja.test(d))&&ia.test(a)&&(e=e.reverse()),this.pushStack(e,a,la.call(arguments).join(","))}}),J.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),1===b.length?J.find.matchesSelector(b[0],a)?[b[0]]:[]:J.find.matches(a,b)},dir:function(a,c,d){for(var e=[],f=a[c];f&&9!==f.nodeType&&(d===b||1!==f.nodeType||!J(f).is(d));)1===f.nodeType&&e.push(f),f=f[c];return e},nth:function(a,b,c,d){b=b||1;for(var e=0;a&&(1!==a.nodeType||++e!==b);a=a[c]);return a},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}});var oa="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",pa=/ jQuery\d+="(?:\d+|null)"/g,qa=/^\s+/,ra=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,sa=/<([\w:]+)/,ta=/<tbody/i,ua=/<|&#?\w+;/,va=/<(?:script|style)/i,wa=/<(?:script|object|embed|option|style)/i,xa=new RegExp("<(?:"+oa+")[\\s/>]","i"),ya=/checked\s*(?:[^=]|=\s*.checked.)/i,za=/\/(java|ecma)script/i,Aa=/^\s*<!(?:\[CDATA\[|\-\-)/,Ba={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ca=x(G);Ba.optgroup=Ba.option,Ba.tbody=Ba.tfoot=Ba.colgroup=Ba.caption=Ba.thead,Ba.th=Ba.td,J.support.htmlSerialize||(Ba._default=[1,"div<div>","</div>"]),J.fn.extend({text:function(a){return J.access(this,function(a){return a===b?J.text(this):this.empty().append((this[0]&&this[0].ownerDocument||G).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(J.isFunction(a))return this.each(function(b){J(this).wrapAll(a.call(this,b))});if(this[0]){var b=J(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstChild&&1===a.firstChild.nodeType;)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return J.isFunction(a)?this.each(function(b){J(this).wrapInner(a.call(this,b))}):this.each(function(){var b=J(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=J.isFunction(a);return this.each(function(c){J(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){J.nodeName(this,"body")||J(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){1===this.nodeType&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){1===this.nodeType&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=J.clean(arguments);return a.push.apply(a,this.toArray()),this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);return a.push.apply(a,J.clean(arguments)),a}},remove:function(a,b){for(var c,d=0;null!=(c=this[d]);d++)a&&!J.filter(a,[c]).length||(!b&&1===c.nodeType&&(J.cleanData(c.getElementsByTagName("*")),J.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)for(1===a.nodeType&&J.cleanData(a.getElementsByTagName("*"));a.firstChild;)a.removeChild(a.firstChild);return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return J.clone(this,a,b)})},html:function(a){return J.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return 1===c.nodeType?c.innerHTML.replace(pa,""):null;if("string"==typeof a&&!va.test(a)&&(J.support.leadingWhitespace||!qa.test(a))&&!Ba[(sa.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ra,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},1===c.nodeType&&(J.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return this[0]&&this[0].parentNode?J.isFunction(a)?this.each(function(b){var c=J(this),d=c.html();c.replaceWith(a.call(this,b,d))}):("string"!=typeof a&&(a=J(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;J(this).remove(),b?J(b).before(a):J(c).append(a)})):this.length?this.pushStack(J(J.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,f,g,h,i=a[0],j=[];if(!J.support.checkClone&&3===arguments.length&&"string"==typeof i&&ya.test(i))return this.each(function(){J(this).domManip(a,c,d,!0)});if(J.isFunction(i))return this.each(function(e){var f=J(this);a[0]=i.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){if(h=i&&i.parentNode,e=J.support.parentNode&&h&&11===h.nodeType&&h.childNodes.length===this.length?{fragment:h}:J.buildFragment(a,this,j),g=e.fragment,f=1===g.childNodes.length?g=g.firstChild:g.firstChild,f){c=c&&J.nodeName(f,"tr");for(var k=0,l=this.length,m=l-1;k<l;k++)d.call(c?w(this[k],f):this[k],e.cacheable||l>1&&k<m?J.clone(g,!0,!0):g)}j.length&&J.each(j,function(a,b){b.src?J.ajax({type:"GET",global:!1,url:b.src,async:!1,dataType:"script"}):J.globalEval((b.text||b.textContent||b.innerHTML||"").replace(Aa,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),J.buildFragment=function(a,b,c){var d,e,f,g,h=a[0];return b&&b[0]&&(g=b[0].ownerDocument||b[0]),g.createDocumentFragment||(g=G),1===a.length&&"string"==typeof h&&h.length<512&&g===G&&"<"===h.charAt(0)&&!wa.test(h)&&(J.support.checkClone||!ya.test(h))&&(J.support.html5Clone||!xa.test(h))&&(e=!0,f=J.fragments[h],f&&1!==f&&(d=f)),d||(d=g.createDocumentFragment(),J.clean(a,g,d,c)),e&&(J.fragments[h]=f?d:1),{fragment:d,cacheable:e}},J.fragments={},J.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){J.fn[a]=function(c){var d=[],e=J(c),f=1===this.length&&this[0].parentNode;if(f&&11===f.nodeType&&1===f.childNodes.length&&1===e.length)return e[b](this[0]),this;for(var g=0,h=e.length;g<h;g++){var i=(g>0?this.clone(!0):this).get();J(e[g])[b](i),d=d.concat(i)}return this.pushStack(d,a,e.selector)}}),J.extend({clone:function(a,b,c){var d,e,f,g=J.support.html5Clone||J.isXMLDoc(a)||!xa.test("<"+a.nodeName+">")?a.cloneNode(!0):q(a);if(!(J.support.noCloneEvent&&J.support.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||J.isXMLDoc(a)))for(u(a,g),d=t(a),e=t(g),f=0;d[f];++f)e[f]&&u(d[f],e[f]);if(b&&(v(a,g),c))for(d=t(a),e=t(g),f=0;d[f];++f)v(d[f],e[f]);return d=e=null,g},clean:function(a,b,c,d){var e,f,g,h=[];b=b||G,"undefined"==typeof b.createElement&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||G);for(var i,j=0;null!=(i=a[j]);j++)if("number"==typeof i&&(i+=""),i){if("string"==typeof i)if(ua.test(i)){i=i.replace(ra,"<$1></$2>");var k,l=(sa.exec(i)||["",""])[1].toLowerCase(),m=Ba[l]||Ba._default,n=m[0],o=b.createElement("div"),p=Ca.childNodes;for(b===G?Ca.appendChild(o):x(b).appendChild(o),o.innerHTML=m[1]+i+m[2];n--;)o=o.lastChild;if(!J.support.tbody){var q=ta.test(i),s="table"!==l||q?"<table>"!==m[1]||q?[]:o.childNodes:o.firstChild&&o.firstChild.childNodes;for(g=s.length-1;g>=0;--g)J.nodeName(s[g],"tbody")&&!s[g].childNodes.length&&s[g].parentNode.removeChild(s[g])}!J.support.leadingWhitespace&&qa.test(i)&&o.insertBefore(b.createTextNode(qa.exec(i)[0]),o.firstChild),i=o.childNodes,o&&(o.parentNode.removeChild(o),p.length>0&&(k=p[p.length-1],k&&k.parentNode&&k.parentNode.removeChild(k)))}else i=b.createTextNode(i);var t;if(!J.support.appendChecked)if(i[0]&&"number"==typeof(t=i.length))for(g=0;g<t;g++)r(i[g]);else r(i);i.nodeType?h.push(i):h=J.merge(h,i)}if(c)for(e=function(a){return!a.type||za.test(a.type)},j=0;h[j];j++)if(f=h[j],d&&J.nodeName(f,"script")&&(!f.type||za.test(f.type)))d.push(f.parentNode?f.parentNode.removeChild(f):f);else{if(1===f.nodeType){var u=J.grep(f.getElementsByTagName("script"),e);h.splice.apply(h,[j+1,0].concat(u))}c.appendChild(f)}return h},cleanData:function(a){for(var b,c,d,e=J.cache,f=J.event.special,g=J.support.deleteExpando,h=0;null!=(d=a[h]);h++)if((!d.nodeName||!J.noData[d.nodeName.toLowerCase()])&&(c=d[J.expando])){if(b=e[c],b&&b.events){for(var i in b.events)f[i]?J.event.remove(d,i):J.removeEvent(d,i,b.handle);b.handle&&(b.handle.elem=null)}g?delete d[J.expando]:d.removeAttribute&&d.removeAttribute(J.expando),delete e[c]}}});var Da,Ea,Fa,Ga=/alpha\([^)]*\)/i,Ha=/opacity=([^)]*)/,Ia=/([A-Z]|^ms)/g,Ja=/^[\-+]?(?:\d*\.)?\d+$/i,Ka=/^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,La=/^([\-+])=([\-+.\de]+)/,Ma=/^margin/,Na={position:"absolute",visibility:"hidden",display:"block"},Oa=["Top","Right","Bottom","Left"];J.fn.css=function(a,c){return J.access(this,function(a,c,d){return d!==b?J.style(a,c,d):J.css(a,c)},a,c,arguments.length>1)},J.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Da(a,"opacity");return""===c?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":J.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var f,g,h=J.camelCase(c),i=a.style,j=J.cssHooks[h];if(c=J.cssProps[h]||h,d===b)return j&&"get"in j&&(f=j.get(a,!1,e))!==b?f:i[c];if(g=typeof d,"string"===g&&(f=La.exec(d))&&(d=+(f[1]+1)*+f[2]+parseFloat(J.css(a,c)),g="number"),null==d||"number"===g&&isNaN(d))return;if("number"===g&&!J.cssNumber[h]&&(d+="px"),!(j&&"set"in j&&(d=j.set(a,d))===b))try{i[c]=d}catch(k){}}},css:function(a,c,d){var e,f;return c=J.camelCase(c),f=J.cssHooks[c],c=J.cssProps[c]||c,"cssFloat"===c&&(c="float"),f&&"get"in f&&(e=f.get(a,!0,d))!==b?e:Da?Da(a,c):void 0},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),J.curCSS=J.css,G.defaultView&&G.defaultView.getComputedStyle&&(Ea=function(a,b){var c,d,e,f,g=a.style;return b=b.replace(Ia,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),""===c&&!J.contains(a.ownerDocument.documentElement,a)&&(c=J.style(a,b))),!J.support.pixelMargin&&e&&Ma.test(b)&&Ka.test(c)&&(f=g.width,g.width=c,c=e.width,g.width=f),c}),G.documentElement.currentStyle&&(Fa=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;return null==f&&g&&(e=g[b])&&(f=e),Ka.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left="fontSize"===b?"1em":f,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d)),""===f?"auto":f}),Da=Ea||Fa,J.each(["height","width"],function(a,b){J.cssHooks[b]={get:function(a,c,d){if(c)return 0!==a.offsetWidth?p(a,b,d):J.swap(a,Na,function(){return p(a,b,d)})},set:function(a,b){return Ja.test(b)?b+"px":b}}}),J.support.opacity||(J.cssHooks.opacity={get:function(a,b){return Ha.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=J.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,b>=1&&""===J.trim(f.replace(Ga,""))&&(c.removeAttribute("filter"),d&&!d.filter)||(c.filter=Ga.test(f)?f.replace(Ga,e):f+" "+e)}}),J(function(){J.support.reliableMarginRight||(J.cssHooks.marginRight={get:function(a,b){return J.swap(a,{display:"inline-block"},function(){return b?Da(a,"margin-right"):a.style.marginRight})}})}),J.expr&&J.expr.filters&&(J.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return 0===b&&0===c||!J.support.reliableHiddenOffsets&&"none"===(a.style&&a.style.display||J.css(a,"display"))},J.expr.filters.visible=function(a){return!J.expr.filters.hidden(a)}),J.each({margin:"",padding:"",border:"Width"},function(a,b){J.cssHooks[a+b]={expand:function(c){var d,e="string"==typeof c?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+Oa[d]+b]=e[d]||e[d-2]||e[0];return f}}});var Pa,Qa,Ra=/%20/g,Sa=/\[\]$/,Ta=/\r?\n/g,Ua=/#.*$/,Va=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Wa=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,Xa=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,Ya=/^(?:GET|HEAD)$/,Za=/^\/\//,$a=/\?/,_a=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,ab=/^(?:select|textarea)/i,bb=/\s+/,cb=/([?&])_=[^&]*/,db=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,eb=J.fn.load,fb={},gb={},hb=["*/"]+["*"];try{Pa=I.href}catch(ib){Pa=G.createElement("a"),Pa.href="",Pa=Pa.href}Qa=db.exec(Pa.toLowerCase())||[],J.fn.extend({load:function(a,c,d){if("string"!=typeof a&&eb)return eb.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var f=a.slice(e,a.length);a=a.slice(0,e)}var g="GET";c&&(J.isFunction(c)?(d=c,c=b):"object"==typeof c&&(c=J.param(c,J.ajaxSettings.traditional),g="POST"));var h=this;return J.ajax({url:a,type:g,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),h.html(f?J("<div>").append(c.replace(_a,"")).find(f):c)),d&&h.each(d,[c,b,a])}}),this},serialize:function(){return J.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?J.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ab.test(this.nodeName)||Wa.test(this.type))}).map(function(a,b){var c=J(this).val();return null==c?null:J.isArray(c)?J.map(c,function(a,c){return{name:b.name,value:a.replace(Ta,"\r\n")}}):{name:b.name,value:c.replace(Ta,"\r\n")}}).get()}}),J.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){J.fn[b]=function(a){return this.on(b,a)}}),J.each(["get","post"],function(a,c){J[c]=function(a,d,e,f){return J.isFunction(d)&&(f=f||e,e=d,d=b),J.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),J.extend({getScript:function(a,c){return J.get(a,b,c,"script")},getJSON:function(a,b,c){return J.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?m(a,J.ajaxSettings):(b=a,a=J.ajaxSettings),m(a,b),a},ajaxSettings:{url:Pa,isLocal:Xa.test(Qa[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":hb},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":J.parseJSON,"text xml":J.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:o(fb),ajaxTransport:o(gb),ajax:function(a,c){function d(a,c,d,g){if(2!==x){x=2,i&&clearTimeout(i),h=b,f=g||"",y.readyState=a>0?4:0;var l,n,o,v,w,z=c,A=d?k(p,y,d):b;if(a>=200&&a<300||304===a)if(p.ifModified&&((v=y.getResponseHeader("Last-Modified"))&&(J.lastModified[e]=v),(w=y.getResponseHeader("Etag"))&&(J.etag[e]=w)),304===a)z="notmodified",l=!0;else try{n=j(p,A),z="success",l=!0}catch(B){z="parsererror",o=B}else o=z,z&&!a||(z="error",a<0&&(a=0));y.status=a,y.statusText=""+(c||z),l?s.resolveWith(q,[n,z,y]):s.rejectWith(q,[y,z,o]),y.statusCode(u),u=b,m&&r.trigger("ajax"+(l?"Success":"Error"),[y,p,l?n:o]),t.fireWith(q,[y,z]),m&&(r.trigger("ajaxComplete",[y,p]),--J.active||J.event.trigger("ajaxStop"))}}"object"==typeof a&&(c=a,a=b),c=c||{};var e,f,g,h,i,l,m,o,p=J.ajaxSetup({},c),q=p.context||p,r=q!==p&&(q.nodeType||q instanceof J)?J(q):J.event,s=J.Deferred(),t=J.Callbacks("once memory"),u=p.statusCode||{},v={},w={},x=0,y={readyState:0,setRequestHeader:function(a,b){if(!x){var c=a.toLowerCase();a=w[c]=w[c]||a,v[a]=b}return this},getAllResponseHeaders:function(){return 2===x?f:null},getResponseHeader:function(a){var c;if(2===x){if(!g)for(g={};c=Va.exec(f);)g[c[1].toLowerCase()]=c[2];c=g[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return x||(p.mimeType=a),this},abort:function(a){return a=a||"abort",h&&h.abort(a),d(0,a),this}};if(s.promise(y),y.success=y.done,y.error=y.fail,y.complete=t.add,y.statusCode=function(a){if(a){var b;if(x<2)for(b in a)u[b]=[u[b],a[b]];else b=a[y.status],y.then(b,b)}return this},p.url=((a||p.url)+"").replace(Ua,"").replace(Za,Qa[1]+"//"),p.dataTypes=J.trim(p.dataType||"*").toLowerCase().split(bb),null==p.crossDomain&&(l=db.exec(p.url.toLowerCase()),p.crossDomain=!(!l||l[1]==Qa[1]&&l[2]==Qa[2]&&(l[3]||("http:"===l[1]?80:443))==(Qa[3]||("http:"===Qa[1]?80:443)))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=J.param(p.data,p.traditional)),n(fb,p,c,y),2===x)return!1;if(m=p.global,p.type=p.type.toUpperCase(),p.hasContent=!Ya.test(p.type),m&&0===J.active++&&J.event.trigger("ajaxStart"),!p.hasContent&&(p.data&&(p.url+=($a.test(p.url)?"&":"?")+p.data,delete p.data),e=p.url,p.cache===!1)){var z=J.now(),A=p.url.replace(cb,"$1_="+z);p.url=A+(A===p.url?($a.test(p.url)?"&":"?")+"_="+z:"")}(p.data&&p.hasContent&&p.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",p.contentType),p.ifModified&&(e=e||p.url,J.lastModified[e]&&y.setRequestHeader("If-Modified-Since",J.lastModified[e]),J.etag[e]&&y.setRequestHeader("If-None-Match",J.etag[e])),y.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+hb+"; q=0.01":""):p.accepts["*"]);for(o in p.headers)y.setRequestHeader(o,p.headers[o]);if(p.beforeSend&&(p.beforeSend.call(q,y,p)===!1||2===x))return y.abort(),!1;for(o in{success:1,error:1,complete:1})y[o](p[o]);if(h=n(gb,p,c,y)){y.readyState=1,m&&r.trigger("ajaxSend",[y,p]),p.async&&p.timeout>0&&(i=setTimeout(function(){y.abort("timeout")},p.timeout));try{x=1,h.send(v,d)}catch(B){if(!(x<2))throw B;d(-1,B)}}else d(-1,"No Transport");return y},param:function(a,c){var d=[],e=function(a,b){b=J.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(c===b&&(c=J.ajaxSettings.traditional),J.isArray(a)||a.jquery&&!J.isPlainObject(a))J.each(a,function(){e(this.name,this.value)});else for(var f in a)l(f,a[f],c,e);return d.join("&").replace(Ra,"+")}}),J.extend({active:0,lastModified:{},etag:{}});var jb=J.now(),kb=/(\=)\?(&|$)|\?\?/i;J.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return J.expando+"_"+jb++}}),J.ajaxPrefilter("json jsonp",function(b,c,d){var e="string"==typeof b.data&&/^application\/x\-www\-form\-urlencoded/.test(b.contentType);if("jsonp"===b.dataTypes[0]||b.jsonp!==!1&&(kb.test(b.url)||e&&kb.test(b.data))){var f,g=b.jsonpCallback=J.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h=a[g],i=b.url,j=b.data,k="$1"+g+"$2";return b.jsonp!==!1&&(i=i.replace(kb,k),b.url===i&&(e&&(j=j.replace(kb,k)),b.data===j&&(i+=(/\?/.test(i)?"&":"?")+b.jsonp+"="+g))),b.url=i,b.data=j,a[g]=function(a){f=[a]},d.always(function(){a[g]=h,f&&J.isFunction(h)&&a[g](f[0])}),b.converters["script json"]=function(){return f||J.error(g+" was not called"),f[0]},b.dataTypes[0]="json","script"}}),J.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return J.globalEval(a),a}}}),J.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),J.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=G.head||G.getElementsByTagName("head")[0]||G.documentElement;return{send:function(e,f){c=G.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){(e||!c.readyState||/loaded|complete/.test(c.readyState))&&(c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||f(200,"success"))},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var lb,mb=!!a.ActiveXObject&&function(){for(var a in lb)lb[a](0,1)},nb=0;J.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&i()||h()}:i,function(a){J.extend(J.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(J.ajaxSettings.xhr()),J.support.ajax&&J.ajaxTransport(function(c){if(!c.crossDomain||J.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();if(c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async),c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||4===i.readyState))if(d=b,g&&(i.onreadystatechange=J.noop,mb&&delete lb[g]),e)4!==i.readyState&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}h||!c.isLocal||c.crossDomain?1223===h&&(h=204):h=l.text?200:404}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async&&4!==i.readyState?(g=++nb,mb&&(lb||(lb={},J(a).unload(mb)),lb[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var ob,pb,qb,rb,sb={},tb=/^(?:toggle|show|hide)$/,ub=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,vb=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];J.fn.extend({show:function(a,b,c){var f,g;if(a||0===a)return this.animate(e("show",3),a,b,c);for(var h=0,i=this.length;h<i;h++)f=this[h],f.style&&(g=f.style.display,!J._data(f,"olddisplay")&&"none"===g&&(g=f.style.display=""),(""===g&&"none"===J.css(f,"display")||!J.contains(f.ownerDocument.documentElement,f))&&J._data(f,"olddisplay",d(f.nodeName)));for(h=0;h<i;h++)f=this[h],f.style&&(g=f.style.display,""!==g&&"none"!==g||(f.style.display=J._data(f,"olddisplay")||""));return this},hide:function(a,b,c){if(a||0===a)return this.animate(e("hide",3),a,b,c);for(var d,f,g=0,h=this.length;g<h;g++)d=this[g],d.style&&(f=J.css(d,"display"),"none"!==f&&!J._data(d,"olddisplay")&&J._data(d,"olddisplay",f));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:J.fn.toggle,toggle:function(a,b,c){var d="boolean"==typeof a;return J.isFunction(a)&&J.isFunction(b)?this._toggle.apply(this,arguments):null==a||d?this.each(function(){var b=d?a:J(this).is(":hidden");J(this)[b?"show":"hide"]()}):this.animate(e("toggle",3),a,b,c),this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,e){function f(){g.queue===!1&&J._mark(this);var b,c,e,f,h,i,j,k,l,m,n,o=J.extend({},g),p=1===this.nodeType,q=p&&J(this).is(":hidden");o.animatedProperties={};for(e in a)if(b=J.camelCase(e),e!==b&&(a[b]=a[e],delete a[e]),(h=J.cssHooks[b])&&"expand"in h){i=h.expand(a[b]),delete a[b];for(e in i)e in a||(a[e]=i[e])}for(b in a){if(c=a[b],J.isArray(c)?(o.animatedProperties[b]=c[1],c=a[b]=c[0]):o.animatedProperties[b]=o.specialEasing&&o.specialEasing[b]||o.easing||"swing","hide"===c&&q||"show"===c&&!q)return o.complete.call(this);p&&("height"===b||"width"===b)&&(o.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],"inline"===J.css(this,"display")&&"none"===J.css(this,"float")&&(J.support.inlineBlockNeedsLayout&&"inline"!==d(this.nodeName)?this.style.zoom=1:this.style.display="inline-block"))}null!=o.overflow&&(this.style.overflow="hidden");for(e in a)f=new J.fx(this,o,e),c=a[e],tb.test(c)?(n=J._data(this,"toggle"+e)||("toggle"===c?q?"show":"hide":0),n?(J._data(this,"toggle"+e,"show"===n?"hide":"show"),f[n]()):f[c]()):(j=ub.exec(c),k=f.cur(),j?(l=parseFloat(j[2]),m=j[3]||(J.cssNumber[e]?"":"px"),"px"!==m&&(J.style(this,e,(l||1)+m),k=(l||1)/f.cur()*k,J.style(this,e,k+m)),j[1]&&(l=("-="===j[1]?-1:1)*l+k),f.custom(k,l,m)):f.custom(k,c,""));return!0}var g=J.speed(b,c,e);return J.isEmptyObject(a)?this.each(g.complete,[!1]):(a=J.extend({},a),g.queue===!1?this.each(f):this.queue(g.queue,f))},stop:function(a,c,d){return"string"!=typeof a&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){function b(a,b,c){var e=b[c];J.removeData(a,c,!0),e.stop(d)}var c,e=!1,f=J.timers,g=J._data(this);if(d||J._unmark(!0,this),null==a)for(c in g)g[c]&&g[c].stop&&c.indexOf(".run")===c.length-4&&b(this,g,c);else g[c=a+".run"]&&g[c].stop&&b(this,g,c);for(c=f.length;c--;)f[c].elem===this&&(null==a||f[c].queue===a)&&(d?f[c](!0):f[c].saveState(),e=!0,f.splice(c,1));(!d||!e)&&J.dequeue(this,a)})}}),J.each({slideDown:e("show",1),slideUp:e("hide",1),slideToggle:e("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){J.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),J.extend({speed:function(a,b,c){var d=a&&"object"==typeof a?J.extend({},a):{complete:c||!c&&b||J.isFunction(a)&&a,duration:a,easing:c&&b||b&&!J.isFunction(b)&&b};return d.duration=J.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in J.fx.speeds?J.fx.speeds[d.duration]:J.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(a){J.isFunction(d.old)&&d.old.call(this),d.queue?J.dequeue(this,d.queue):a!==!1&&J._unmark(this)},d},easing:{linear:function(a){return a},swing:function(a){return-Math.cos(a*Math.PI)/2+.5}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),J.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(J.fx.step[this.prop]||J.fx.step._default)(this)},cur:function(){if(null!=this.elem[this.prop]&&(!this.elem.style||null==this.elem.style[this.prop]))return this.elem[this.prop];var a,b=J.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?b&&"auto"!==b?b:0:a},custom:function(a,c,d){function e(a){return f.step(a)}var f=this,h=J.fx;this.startTime=rb||g(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(J.cssNumber[this.prop]?"":"px"),e.queue=this.options.queue,e.elem=this.elem,e.saveState=function(){J._data(f.elem,"fxshow"+f.prop)===b&&(f.options.hide?J._data(f.elem,"fxshow"+f.prop,f.start):f.options.show&&J._data(f.elem,"fxshow"+f.prop,f.end))},e()&&J.timers.push(e)&&!qb&&(qb=setInterval(h.tick,h.interval))},show:function(){var a=J._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||J.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom("width"===this.prop||"height"===this.prop?1:0,this.cur()),J(this.elem).show()},hide:function(){this.options.orig[this.prop]=J._data(this.elem,"fxshow"+this.prop)||J.style(this.elem,this.prop),
this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=rb||g(),f=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(f=!1);if(f){if(null!=i.overflow&&!J.support.shrinkWrapBlocks&&J.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&J(h).hide(),i.hide||i.show)for(b in i.animatedProperties)J.style(h,b,i.orig[b]),J.removeData(h,"fxshow"+b,!0),J.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}return i.duration==1/0?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=J.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update(),!0}},J.extend(J.fx,{tick:function(){for(var a,b=J.timers,c=0;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||J.fx.stop()},interval:13,stop:function(){clearInterval(qb),qb=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){J.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&null!=a.elem.style[a.prop]?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),J.each(vb.concat.apply([],vb),function(a,b){b.indexOf("margin")&&(J.fx.step[b]=function(a){J.style(a.elem,b,Math.max(0,a.now)+a.unit)})}),J.expr&&J.expr.filters&&(J.expr.filters.animated=function(a){return J.grep(J.timers,function(b){return a===b.elem}).length});var wb,xb=/^t(?:able|d|h)$/i,yb=/^(?:body|html)$/i;wb="getBoundingClientRect"in G.documentElement?function(a,b,d,e){try{e=a.getBoundingClientRect()}catch(f){}if(!e||!J.contains(d,a))return e?{top:e.top,left:e.left}:{top:0,left:0};var g=b.body,h=c(b),i=d.clientTop||g.clientTop||0,j=d.clientLeft||g.clientLeft||0,k=h.pageYOffset||J.support.boxModel&&d.scrollTop||g.scrollTop,l=h.pageXOffset||J.support.boxModel&&d.scrollLeft||g.scrollLeft,m=e.top+k-i,n=e.left+l-j;return{top:m,left:n}}:function(a,b,c){for(var d,e=a.offsetParent,f=a,g=b.body,h=b.defaultView,i=h?h.getComputedStyle(a,null):a.currentStyle,j=a.offsetTop,k=a.offsetLeft;(a=a.parentNode)&&a!==g&&a!==c&&(!J.support.fixedPosition||"fixed"!==i.position);)d=h?h.getComputedStyle(a,null):a.currentStyle,j-=a.scrollTop,k-=a.scrollLeft,a===e&&(j+=a.offsetTop,k+=a.offsetLeft,J.support.doesNotAddBorder&&(!J.support.doesAddBorderForTableAndCells||!xb.test(a.nodeName))&&(j+=parseFloat(d.borderTopWidth)||0,k+=parseFloat(d.borderLeftWidth)||0),f=e,e=a.offsetParent),J.support.subtractsBorderForOverflowNotVisible&&"visible"!==d.overflow&&(j+=parseFloat(d.borderTopWidth)||0,k+=parseFloat(d.borderLeftWidth)||0),i=d;return"relative"!==i.position&&"static"!==i.position||(j+=g.offsetTop,k+=g.offsetLeft),J.support.fixedPosition&&"fixed"===i.position&&(j+=Math.max(c.scrollTop,g.scrollTop),k+=Math.max(c.scrollLeft,g.scrollLeft)),{top:j,left:k}},J.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){J.offset.setOffset(this,a,b)});var c=this[0],d=c&&c.ownerDocument;return d?c===d.body?J.offset.bodyOffset(c):wb(c,d,d.documentElement):null},J.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return J.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(J.css(a,"marginTop"))||0,c+=parseFloat(J.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=J.css(a,"position");"static"===d&&(a.style.position="relative");var e,f,g=J(a),h=g.offset(),i=J.css(a,"top"),j=J.css(a,"left"),k=("absolute"===d||"fixed"===d)&&J.inArray("auto",[i,j])>-1,l={},m={};k?(m=g.position(),e=m.top,f=m.left):(e=parseFloat(i)||0,f=parseFloat(j)||0),J.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(l.top=b.top-h.top+e),null!=b.left&&(l.left=b.left-h.left+f),"using"in b?b.using.call(a,l):g.css(l)}},J.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=yb.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(J.css(a,"marginTop"))||0,c.left-=parseFloat(J.css(a,"marginLeft"))||0,d.top+=parseFloat(J.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(J.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||G.body;a&&!yb.test(a.nodeName)&&"static"===J.css(a,"position");)a=a.offsetParent;return a})}}),J.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,d){var e=/Y/.test(d);J.fn[a]=function(f){return J.access(this,function(a,f,g){var h=c(a);return g===b?h?d in h?h[d]:J.support.boxModel&&h.document.documentElement[f]||h.document.body[f]:a[f]:void(h?h.scrollTo(e?J(h).scrollLeft():g,e?g:J(h).scrollTop()):a[f]=g)},a,f,arguments.length,null)}}),J.each({Height:"height",Width:"width"},function(a,c){var d="client"+a,e="scroll"+a,f="offset"+a;J.fn["inner"+a]=function(){var a=this[0];return a?a.style?parseFloat(J.css(a,c,"padding")):this[c]():null},J.fn["outer"+a]=function(a){var b=this[0];return b?b.style?parseFloat(J.css(b,c,a?"margin":"border")):this[c]():null},J.fn[c]=function(a){return J.access(this,function(a,c,g){var h,i,j,k;return J.isWindow(a)?(h=a.document,i=h.documentElement[d],J.support.boxModel&&i||h.body&&h.body[d]||i):9===a.nodeType?(h=a.documentElement,h[d]>=h[e]?h[d]:Math.max(a.body[e],h[e],a.body[f],h[f])):g===b?(j=J.css(a,c),k=parseFloat(j),J.isNumeric(k)?k:j):void J(a).css(c,g)},c,a,arguments.length,null)}}),a.jQuery=a.$=J,"function"==typeof define&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return J})}(window),window.ajq=window.jQuery;var requirejs,require,define;!function(global){function isFunction(a){return"[object Function]"===ostring.call(a)}function isArray(a){return"[object Array]"===ostring.call(a)}function each(a,b){if(a){var c;for(c=0;c<a.length&&(!a[c]||!b(a[c],c,a));c+=1);}}function eachReverse(a,b){if(a){var c;for(c=a.length-1;c>-1&&(!a[c]||!b(a[c],c,a));c-=1);}}function hasProp(a,b){return hasOwn.call(a,b)}function getOwn(a,b){return hasProp(a,b)&&a[b]}function eachProp(a,b){var c;for(c in a)if(hasProp(a,c)&&b(a[c],c))break}function mixin(a,b,c,d){return b&&eachProp(b,function(b,e){!c&&hasProp(a,e)||(!d||"object"!=typeof b||!b||isArray(b)||isFunction(b)||b instanceof RegExp?a[e]=b:(a[e]||(a[e]={}),mixin(a[e],b,c,d)))}),a}function bind(a,b){return function(){return b.apply(a,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(a){throw a}function getGlobal(a){if(!a)return a;var b=global;return each(a.split("."),function(a){b=b[a]}),b}function makeError(a,b,c,d){var e=new Error(b+"\nhttp://requirejs.org/docs/errors.html#"+a);return e.requireType=a,e.requireModules=d,c&&(e.originalError=c),e}function newContext(a){function b(a){var b,c;for(b=0;b<a.length;b++)if(c=a[b],"."===c)a.splice(b,1),b-=1;else if(".."===c){if(0===b||1===b&&".."===a[2]||".."===a[b-1])continue;b>0&&(a.splice(b-1,2),b-=2)}}function c(a,c,d){var e,f,g,h,i,j,k,l,m,n,o,p,q=c&&c.split("/"),r=x.map,s=r&&r["*"];if(a&&(a=a.split("/"),k=a.length-1,x.nodeIdCompat&&jsSuffixRegExp.test(a[k])&&(a[k]=a[k].replace(jsSuffixRegExp,"")),"."===a[0].charAt(0)&&q&&(p=q.slice(0,q.length-1),a=p.concat(a)),b(a),a=a.join("/")),d&&r&&(q||s)){g=a.split("/");a:for(h=g.length;h>0;h-=1){if(j=g.slice(0,h).join("/"),q)for(i=q.length;i>0;i-=1)if(f=getOwn(r,q.slice(0,i).join("/")),f&&(f=getOwn(f,j))){l=f,m=h;break a}!n&&s&&getOwn(s,j)&&(n=getOwn(s,j),o=h)}!l&&n&&(l=n,m=o),l&&(g.splice(0,m,l),a=g.join("/"))}return e=getOwn(x.pkgs,a),e?e:a}function d(a){isBrowser&&each(scripts(),function(b){if(b.getAttribute("data-requiremodule")===a&&b.getAttribute("data-requirecontext")===u.contextName)return b.parentNode.removeChild(b),!0})}function e(a){var b=getOwn(x.paths,a);if(b&&isArray(b)&&b.length>1)return b.shift(),u.require.undef(a),u.makeRequire(null,{skipMap:!0})([a]),!0}function f(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function g(a,b,d,e){var g,h,i,j,k=null,l=b?b.name:null,m=a,n=!0,o="";return a||(n=!1,a="_@r"+(F+=1)),j=f(a),k=j[0],a=j[1],k&&(k=c(k,l,e),h=getOwn(C,k)),a&&(k?o=h&&h.normalize?h.normalize(a,function(a){return c(a,l,e)}):a.indexOf("!")===-1?c(a,l,e):a:(o=c(a,l,e),j=f(o),k=j[0],o=j[1],d=!0,g=u.nameToUrl(o))),i=!k||h||d?"":"_unnormalized"+(G+=1),{prefix:k,name:o,parentMap:b,unnormalized:!!i,url:g,originalName:m,isDefine:n,id:(k?k+"!"+o:o)+i}}function h(a){var b=a.id,c=getOwn(y,b);return c||(c=y[b]=new u.Module(a)),c}function i(a,b,c){var d=a.id,e=getOwn(y,d);!hasProp(C,d)||e&&!e.defineEmitComplete?(e=h(a),e.error&&"error"===b?c(e.error):e.on(b,c)):"defined"===b&&c(C[d])}function j(a,b){var c=a.requireModules,d=!1;b?b(a):(each(c,function(b){var c=getOwn(y,b);c&&(c.error=a,c.events.error&&(d=!0,c.emit("error",a)))}),d||req.onError(a))}function k(){globalDefQueue.length&&(each(globalDefQueue,function(a){var b=a[0];"string"==typeof b&&(u.defQueueMap[b]=!0),B.push(a)}),globalDefQueue=[])}function l(a){delete y[a],delete z[a]}function m(a,b,c){var d=a.map.id;a.error?a.emit("error",a.error):(b[d]=!0,each(a.depMaps,function(d,e){var f=d.id,g=getOwn(y,f);!g||a.depMatched[e]||c[f]||(getOwn(b,f)?(a.defineDep(e,C[f]),a.check()):m(g,b,c))}),c[d]=!0)}function n(){var a,b,c=1e3*x.waitSeconds,f=c&&u.startTime+c<(new Date).getTime(),g=[],h=[],i=!1,k=!0;if(!s){if(s=!0,eachProp(z,function(a){var c=a.map,j=c.id;if(a.enabled&&(c.isDefine||h.push(a),!a.error))if(!a.inited&&f)e(j)?(b=!0,i=!0):(g.push(j),d(j));else if(!a.inited&&a.fetched&&c.isDefine&&(i=!0,!c.prefix))return k=!1}),f&&g.length)return a=makeError("timeout","Load timeout for modules: "+g,null,g),a.contextName=u.contextName,j(a);k&&each(h,function(a){m(a,{},{})}),f&&!b||!i||!isBrowser&&!isWebWorker||w||(w=setTimeout(function(){w=0,n()},50)),s=!1}}function o(a){hasProp(C,a[0])||h(g(a[0],null,!0)).init(a[1],a[2])}function p(a,b,c,d){a.detachEvent&&!isOpera?d&&a.detachEvent(d,b):a.removeEventListener(c,b,!1)}function q(a){var b=a.currentTarget||a.srcElement;return p(b,u.onScriptLoad,"load","onreadystatechange"),p(b,u.onScriptError,"error"),{node:b,id:b&&b.getAttribute("data-requiremodule")}}function r(){var a;for(k();B.length;){if(a=B.shift(),null===a[0])return j(makeError("mismatch","Mismatched anonymous define() module: "+a[a.length-1]));o(a)}u.defQueueMap={}}var s,t,u,v,w,x={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},y={},z={},A={},B=[],C={},D={},E={},F=1,G=1;return v={require:function(a){return a.require?a.require:a.require=u.makeRequire(a.map)},exports:function(a){if(a.usingExports=!0,a.map.isDefine)return a.exports?C[a.map.id]=a.exports:a.exports=C[a.map.id]={}},module:function(a){return a.module?a.module:a.module={id:a.map.id,uri:a.map.url,config:function(){return getOwn(x.config,a.map.id)||{}},exports:a.exports||(a.exports={})}}},t=function(a){this.events=getOwn(A,a.id)||{},this.map=a,this.shim=getOwn(x.shim,a.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0},t.prototype={init:function(a,b,c,d){d=d||{},this.inited||(this.factory=b,c?this.on("error",c):this.events.error&&(c=bind(this,function(a){this.emit("error",a)})),this.depMaps=a&&a.slice(0),this.errback=c,this.inited=!0,this.ignore=d.ignore,d.enabled||this.enabled?this.enable():this.check())},defineDep:function(a,b){this.depMatched[a]||(this.depMatched[a]=!0,this.depCount-=1,this.depExports[a]=b)},fetch:function(){if(!this.fetched){this.fetched=!0,u.startTime=(new Date).getTime();var a=this.map;return this.shim?void u.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return a.prefix?this.callPlugin():this.load()})):a.prefix?this.callPlugin():this.load()}},load:function(){var a=this.map.url;D[a]||(D[a]=!0,u.load(this.map.id,a))},check:function(){if(this.enabled&&!this.enabling){var a,b,c=this.map.id,d=this.depExports,e=this.exports,f=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(f)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{e=u.execCb(c,f,d,e)}catch(g){a=g}else e=u.execCb(c,f,d,e);if(this.map.isDefine&&void 0===e&&(b=this.module,b?e=b.exports:this.usingExports&&(e=this.exports)),a)return a.requireMap=this.map,a.requireModules=this.map.isDefine?[this.map.id]:null,a.requireType=this.map.isDefine?"define":"require",j(this.error=a)}else e=f;this.exports=e,this.map.isDefine&&!this.ignore&&(C[c]=e,req.onResourceLoad&&req.onResourceLoad(u,this.map,this.depMaps)),l(c),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else hasProp(u.defQueueMap,c)||this.fetch()}},callPlugin:function(){var a=this.map,b=a.id,d=g(a.prefix);this.depMaps.push(d),i(d,"defined",bind(this,function(d){var e,f,k,m=getOwn(E,this.map.id),n=this.map.name,o=this.map.parentMap?this.map.parentMap.name:null,p=u.makeRequire(a.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(d.normalize&&(n=d.normalize(n,function(a){return c(a,o,!0)})||""),f=g(a.prefix+"!"+n,this.map.parentMap),i(f,"defined",bind(this,function(a){this.init([],function(){return a},null,{enabled:!0,ignore:!0})})),k=getOwn(y,f.id),void(k&&(this.depMaps.push(f),this.events.error&&k.on("error",bind(this,function(a){this.emit("error",a)})),k.enable()))):m?(this.map.url=u.nameToUrl(m),void this.load()):(e=bind(this,function(a){this.init([],function(){return a},null,{enabled:!0})}),e.error=bind(this,function(a){this.inited=!0,this.error=a,a.requireModules=[b],eachProp(y,function(a){0===a.map.id.indexOf(b+"_unnormalized")&&l(a.map.id)}),j(a)}),e.fromText=bind(this,function(c,d){var f=a.name,i=g(f),k=useInteractive;d&&(c=d),k&&(useInteractive=!1),h(i),hasProp(x.config,b)&&(x.config[f]=x.config[b]);try{req.exec(c)}catch(l){return j(makeError("fromtexteval","fromText eval for "+b+" failed: "+l,l,[b]))}k&&(useInteractive=!0),this.depMaps.push(i),u.completeLoad(f),p([f],e)}),void d.load(a.name,p,e,x))})),u.enable(d,this),this.pluginMaps[d.id]=d},enable:function(){z[this.map.id]=this,this.enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(a,b){var c,d,e;if("string"==typeof a){if(a=g(a,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[b]=a,e=getOwn(v,a.id))return void(this.depExports[b]=e(this));this.depCount+=1,i(a,"defined",bind(this,function(a){this.undefed||(this.defineDep(b,a),this.check())})),this.errback?i(a,"error",bind(this,this.errback)):this.events.error&&i(a,"error",bind(this,function(a){this.emit("error",a)}))}c=a.id,d=y[c],hasProp(v,c)||!d||d.enabled||u.enable(a,this)})),eachProp(this.pluginMaps,bind(this,function(a){var b=getOwn(y,a.id);b&&!b.enabled&&u.enable(a,this)})),this.enabling=!1,this.check()},on:function(a,b){var c=this.events[a];c||(c=this.events[a]=[]),c.push(b)},emit:function(a,b){each(this.events[a],function(a){a(b)}),"error"===a&&delete this.events[a]}},u={config:x,contextName:a,registry:y,defined:C,urlFetched:D,defQueue:B,defQueueMap:{},Module:t,makeModuleMap:g,nextTick:req.nextTick,onError:j,configure:function(a){a.baseUrl&&"/"!==a.baseUrl.charAt(a.baseUrl.length-1)&&(a.baseUrl+="/");var b=x.shim,c={paths:!0,bundles:!0,config:!0,map:!0};eachProp(a,function(a,b){c[b]?(x[b]||(x[b]={}),mixin(x[b],a,!0,!0)):x[b]=a}),a.bundles&&eachProp(a.bundles,function(a,b){each(a,function(a){a!==b&&(E[a]=b)})}),a.shim&&(eachProp(a.shim,function(a,c){isArray(a)&&(a={deps:a}),!a.exports&&!a.init||a.exportsFn||(a.exportsFn=u.makeShimExports(a)),b[c]=a}),x.shim=b),a.packages&&each(a.packages,function(a){var b,c;a="string"==typeof a?{name:a}:a,c=a.name,b=a.location,b&&(x.paths[c]=a.location),x.pkgs[c]=a.name+"/"+(a.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(y,function(a,b){a.inited||a.map.unnormalized||(a.map=g(b,null,!0))}),(a.deps||a.callback)&&u.require(a.deps||[],a.callback)},makeShimExports:function(a){function b(){var b;return a.init&&(b=a.init.apply(global,arguments)),b||a.exports&&getGlobal(a.exports)}return b},makeRequire:function(b,e){function f(c,d,i){var k,l,m;return e.enableBuildCallback&&d&&isFunction(d)&&(d.__requireJsBuild=!0),"string"==typeof c?isFunction(d)?j(makeError("requireargs","Invalid require call"),i):b&&hasProp(v,c)?v[c](y[b.id]):req.get?req.get(u,c,b,f):(l=g(c,b,!1,!0),k=l.id,hasProp(C,k)?C[k]:j(makeError("notloaded",'Module name "'+k+'" has not been loaded yet for context: '+a+(b?"":". Use require([])")))):(r(),u.nextTick(function(){r(),m=h(g(null,b)),m.skipMap=e.skipMap,m.init(c,d,i,{enabled:!0}),n()}),f)}return e=e||{},mixin(f,{isBrowser:isBrowser,toUrl:function(a){var d,e=a.lastIndexOf("."),f=a.split("/")[0],g="."===f||".."===f;return e!==-1&&(!g||e>1)&&(d=a.substring(e,a.length),a=a.substring(0,e)),u.nameToUrl(c(a,b&&b.id,!0),d,!0)},defined:function(a){return hasProp(C,g(a,b,!1,!0).id)},specified:function(a){return a=g(a,b,!1,!0).id,hasProp(C,a)||hasProp(y,a)}}),b||(f.undef=function(a){k();var c=g(a,b,!0),e=getOwn(y,a);e.undefed=!0,d(a),delete C[a],delete D[c.url],delete A[a],eachReverse(B,function(b,c){b[0]===a&&B.splice(c,1)}),delete u.defQueueMap[a],e&&(e.events.defined&&(A[a]=e.events),l(a))}),f},enable:function(a){var b=getOwn(y,a.id);b&&h(a).enable()},completeLoad:function(a){var b,c,d,f=getOwn(x.shim,a)||{},g=f.exports;for(k();B.length;){if(c=B.shift(),null===c[0]){if(c[0]=a,b)break;b=!0}else c[0]===a&&(b=!0);o(c)}if(u.defQueueMap={},d=getOwn(y,a),!b&&!hasProp(C,a)&&d&&!d.inited){if(!(!x.enforceDefine||g&&getGlobal(g)))return e(a)?void 0:j(makeError("nodefine","No define call for "+a,null,[a]));o([a,f.deps||[],f.exportsFn])}n()},nameToUrl:function(a,b,c){var d,e,f,g,h,i,j,k=getOwn(x.pkgs,a);if(k&&(a=k),j=getOwn(E,a))return u.nameToUrl(j,b,c);if(req.jsExtRegExp.test(a))h=a+(b||"");else{for(d=x.paths,e=a.split("/"),f=e.length;f>0;f-=1)if(g=e.slice(0,f).join("/"),i=getOwn(d,g)){isArray(i)&&(i=i[0]),e.splice(0,f,i);break}h=e.join("/"),h+=b||(/^data\:|\?/.test(h)||c?"":".js"),h=("/"===h.charAt(0)||h.match(/^[\w\+\.\-]+:/)?"":x.baseUrl)+h}return x.urlArgs?h+((h.indexOf("?")===-1?"?":"&")+x.urlArgs):h},load:function(a,b){req.load(u,a,b)},execCb:function(a,b,c,d){return b.apply(d,c)},onScriptLoad:function(a){if("load"===a.type||readyRegExp.test((a.currentTarget||a.srcElement).readyState)){interactiveScript=null;var b=q(a);u.completeLoad(b.id)}},onScriptError:function(a){var b=q(a);if(!e(b.id))return j(makeError("scripterror","Script error for: "+b.id,a,[b.id]))}},u.require=u.makeRequire(),u}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState?interactiveScript:(eachReverse(scripts(),function(a){if("interactive"===a.readyState)return interactiveScript=a}),interactiveScript)}var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.1.20",commentRegExp=/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,ap=Array.prototype,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;if("undefined"==typeof define){if("undefined"!=typeof requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}"undefined"==typeof require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(a,b,c,d){var e,f,g=defContextName;return isArray(a)||"string"==typeof a||(f=a,isArray(b)?(a=b,b=c,c=d):a=[]),f&&f.context&&(g=f.context),e=getOwn(contexts,g),e||(e=contexts[g]=req.s.newContext(g)),f&&e.configure(f),e.require(a,b,c)},req.config=function(a){return req(a)},req.nextTick="undefined"!=typeof setTimeout?function(a){setTimeout(a,4)}:function(a){a()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(a){req[a]=function(){var b=contexts[defContextName];return b.require[a].apply(b,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(a,b,c){var d=a.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return d.type=a.scriptType||"text/javascript",d.charset="utf-8",d.async=!0,d},req.load=function(a,b,c){var d,e=a&&a.config||{};if(isBrowser)return d=req.createNode(e,b,c),e.onNodeCreated&&e.onNodeCreated(d,e,b,c),d.setAttribute("data-requirecontext",a.contextName),d.setAttribute("data-requiremodule",b),!d.attachEvent||d.attachEvent.toString&&d.attachEvent.toString().indexOf("[native code")<0||isOpera?(d.addEventListener("load",a.onScriptLoad,!1),d.addEventListener("error",a.onScriptError,!1)):(useInteractive=!0,d.attachEvent("onreadystatechange",a.onScriptLoad)),d.src=c,currentlyAddingScript=d,baseElement?head.insertBefore(d,baseElement):head.appendChild(d),currentlyAddingScript=null,d;if(isWebWorker)try{importScripts(c),a.completeLoad(b)}catch(f){a.onError(makeError("importscripts","importScripts failed for "+b+" at "+c,f,[b]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(a){if(head||(head=a.parentNode),dataMain=a.getAttribute("data-main"))return mainScript=dataMain,cfg.baseUrl||(src=mainScript.split("/"),mainScript=src.pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(a,b,c){var d,e;"string"!=typeof a&&(c=b,b=a,a=null),isArray(b)||(c=b,b=null),!b&&isFunction(c)&&(b=[],c.length&&(c.toString().replace(commentRegExp,"").replace(cjsRequireRegExp,function(a,c){b.push(c)}),b=(1===c.length?["require"]:["require","exports","module"]).concat(b))),useInteractive&&(d=currentlyAddingScript||getInteractiveScript(),d&&(a||(a=d.getAttribute("data-requiremodule")),e=contexts[d.getAttribute("data-requirecontext")])),e?(e.defQueue.push([a,b,c]),e.defQueueMap[a]=!0):globalDefQueue.push([a,b,c])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}}(this),function(a){"use strict";function b(){is_chrome_two()?chrometwo_ready(e):e()}function c(a){var b=/foo.redhat.com/.test(location.host);switch(b&&(a="foo.redhat.com"),a){case"access.redhat.com":return"https://da27a1925aa04ca3b0604ecfada186a1@access.redhat.com/labs/clientlogproxy/6";case"access.stage.redhat.com":return"https://659d808b6cf1413081bba5bf25b97e07@access.redhat.com/labs/clientlogproxy/5";case"access.qa.redhat.com":return"https://41d231cdaef34483b80a145829177200@access.redhat.com/labs/clientlogproxy/4";case"access.devgssci.devlab.phx1.redhat.com":return"https://da822989aa8a44e59c3fc65fbbc7022c@access.redhat.com/labs/clientlogproxy/2";default:return"https://a34da4db6ea74b179adab882094b8d8f@access.redhat.com/labs/clientlogproxy/3"}}function d(){return portal.host.replace(/^https?:\/\//,"")}function e(){var b=c(d());b&&a.config(b).install()}b()}(window.Raven),require.config({urlArgs:"v=1246f69",waitSeconds:1/0,catchError:!0,paths:{jquery:"webassets/avalon/j/includes/jquery-amd-shim","jquery-ui":"webassets/avalon/j/lib/jquery-ui-1.8.20.custom.min",underscore:"webassets/avalon/j/bower_components/underscore/underscore","idle-timer":"webassets/avalon/j/lib/idle-timer-1.0","jquery-blockUI":"webassets/avalon/j/lib/jquery.blockUI","jquery-autoresize":"webassets/avalon/j/lib/autoresize.jquery",user_info:"webassets/avalon/j/includes/chrometwo/user_info",portal_outage:"webassets/avalon/j/outage/outageJson_en",menu_aim:"webassets/avalon/j/lib/jquery.menu-aim",base:"chrome_themes/nimbus/js/base",analytics:"webassets/avalon/j/includes/chrometwo/analytics",inject:"webassets/avalon/j/includes/chrometwo/inject",decorate:"webassets/avalon/j/includes/chrometwo/decorate",google_remarketing:"webassets/avalon/j/includes/google_remarketing",modernizr:"webassets/avalon/j/lib/modernizr.min",nimbus:"chrome_themes/nimbus/js",s_code:"webassets/avalon/j/lib/s_code","eloqua-cfg":"webassets/avalon/j/lib/eloqua/elqCfg","eloqua-img":"webassets/avalon/j/lib/eloqua/elqImg",more_like_this:"webassets/avalon/j/includes/chrometwo/more_like_this",chrome_lib:"webassets/avalon/j/includes/chrometwo/chrome_lib",load_html:"webassets/avalon/j/includes/chrometwo/load_html",ajax_error_handler:"webassets/avalon/j/includes/chrometwo/ajax_error_handler","error-handler":"webassets/avalon/j/includes/error-handler",moment:"webassets/avalon/j/lib/moment.min",base_ng:"webassets/avalon/j/includes/chrometwo/base",submit_check:"webassets/avalon/j/includes/chrometwo/scrub/submit_check",text:"webassets/avalon/j/lib/text",survey:"webassets/avalon/j/includes/survey",drupal_commenter:"webassets/avalon/j/lib/drupal_commenter/drupal_commenter",labs_global:"webassets/avalon/j/includes/chrometwo/labs/labs_global","action-menu":"webassets/avalon/j/lib/action-menu/js/action-menu",notices:"webassets/avalon/j/notices",angular128:"webassets/avalon/j/lib/angular/1.2.8/angular.min",mustang:"chrome_themes/mustang/js",chosen:"webassets/avalon/j/lib/chosen.jquery",tourSniff:"webassets/avalon/j/includes/tourSniff",cachebust:"webassets/avalon/j/includes/cachebust",dismiss:"webassets/avalon/j/includes/dismiss","drupal-admin-drawer":"webassets/avalon/j/includes/drupal-admin-drawer/drupal-admin-drawer","drupal-admin-drawer-templates":"webassets/avalon/j/includes/drupal-admin-drawer/templates",scroll_to_fixed:"webassets/avalon/j/lib/jquery-scrolltofixed-min",waypoints:"webassets/avalon/j/lib/jquery.waypoints.min",textarea:"webassets/avalon/j/lib/jquery.textarea",equalHeights:"webassets/avalon/j/lib/jquery.equalheights",fitvids:"webassets/avalon/j/lib/jquery.fitvids",prism:"webassets/avalon/j/lib/prism",common:"webassets/avalon/j/common.min",windowpain:"webassets/avalon/j/includes/windowpain",backbone:"webassets/avalon/j/lib/backbone-min",browse:"webassets/avalon/j/includes/browse",introjs:"webassets/avalon/j/lib/introjs.min",home:"chrome_themes/nimbus/js/home",css:"webassets/avalon/j/lib/require-css/require.css.min","data-eh":"webassets/avalon/j/includes/data-eh","data-anchors":"webassets/avalon/j/includes/data-anchors","data-annex":"webassets/avalon/j/includes/data-annex","data-action":"webassets/avalon/j/includes/data-action",datatables:"webassets/avalon/j/lib/datatables/jquery.dataTables.min",follow:"webassets/avalon/j/includes/follow","card-tabs":"webassets/avalon/j/includes/card-tabs","handlebars.runtime":"webassets/avalon/j/bower_components/handlebars/handlebars.runtime.min",locale:"webassets/avalon/j/includes/locale","fastclick-init":"webassets/avalon/j/includes/fastclick","service-worker-register":"webassets/avalon/j/includes/service-worker-register","cp-clipboard":"webassets/avalon/j/includes/cp-clipboard",tablesaw:"webassets/avalon/j/bower_components/filament-tablesaw/dist/stackonly/tablesaw.stackonly",bootstrap:"webassets/avalon/j/bower_components/bootstrap/dist/js/bootstrap",clipboard:"webassets/avalon/j/bower_components/clipboard/dist/clipboard",fastclick:"webassets/avalon/j/bower_components/fastclick/lib/fastclick","filament-tablesaw":"webassets/avalon/j/bower_components/filament-tablesaw/dist/tablesaw",handlebars:"webassets/avalon/j/bower_components/handlebars/handlebars",imagesloaded:"webassets/avalon/j/bower_components/imagesloaded/imagesloaded","jquery-masonry":"webassets/avalon/j/bower_components/jquery-masonry/dist/masonry.pkgd",jsUri:"webassets/avalon/j/bower_components/jsUri/Uri",masonry:"webassets/avalon/j/bower_components/masonry/dist/masonry.pkgd","responsive-tables":"webassets/avalon/j/bower_components/responsive-tables/responsive-tables",stratajs:"webassets/avalon/j/bower_components/stratajs/strata",xdomain:"webassets/avalon/j/bower_components/xdomain/dist/xdomain"},map:{"*":{css:"webassets/avalon/j/lib/require-css/require.css.min.js"}},shim:{jquery:{exports:"jQuery"},underscore:{exports:"_"},datatables:{deps:["jquery","css!webassets/avalon/j/lib/datatables/jquery.dataTables.min"],exports:"jQuery.fn.dataTable"},textarea:{deps:["jquery"]},decorate:{deps:["jquery"]},"idle-timer":{deps:["jquery"]},equalHeights:{deps:["jquery"],exports:"jQuery.fn.equalHeights"},"jquery-autoresize":{deps:["jquery"]},"jquery-blockUI":{deps:["jquery"]},"jquery-ui":{deps:["jquery","css!webassets/avalon/s/jquery-ui/cp/jquery-ui-1.8.7.custom"]},bootstrap:{deps:["jquery"]},chosen:{deps:["jquery"],exports:"jQuery.fn.chosen"},menu_aim:{deps:["jquery","load_html"],exports:"jQuery.fn.menuAim"},inject:{deps:["jquery","jsUri"]},scroll_to_fixed:{deps:["jquery"],exports:"jQuery.fn.scrollToFixed"},waypoints:{deps:["jquery"],exports:"jQuery.fn.waypoint"},fitvids:{deps:["jquery"],exports:"jQuery.fn.fitVids"},angular128:{exports:"angular"},jsUri:{exports:"Uri"},s_code:{deps:["analytics/adapters/omniture/old_fns"],exports:"s"},base:{deps:["jquery","bootstrap","jsUri","user_info","menu_aim","modernizr","windowpain","css","tourSniff","data-eh"],exports:"__base_loaded"},prism:{exports:"Prism"},backbone:{deps:["underscore"],exports:"Backbone"},tablesaw:{deps:["jquery","css!webassets/avalon/j/bower_components/filament-tablesaw/dist/stackonly/tablesaw.stackonly"]}},packages:[]}),requirejs.onError=function(a){try{var b=document.querySelector(".primary-nav");b&&b.setAttribute("style","display:block !important")}catch(c){}Raven.captureException(a),"undefined"!=typeof console&&("function"==typeof console.error?console.error(a):"function"==typeof console.log&&console.log(a))},function(){function a(a,b,c){a.addEventListener?a.addEventListener(b,c):a.attachEvent("on"+b,function(){c.call(a)})}function b(a){requirejs.onError=function(){}}a(window,"beforeunload",b)}(),window.__prechrome={},window.__prechrome.prepend_requirejs_paths=function(a){"use strict";function b(a,b){var e,f,g=a,h=["/webassets/","webassets/","/chrome_themes/","chrome_themes/"];if(d(a,b))return g;for(f=0;f<h.length;f+=1)if(e=h[f],c(a,e)){g=a.replace(e,b+e);break}return g}function c(a,b){return a.indexOf(b)!==-1}function d(a,b){return 0===a.indexOf(b)}var e,f,g,h=requirejs.s.contexts._.config.paths,i=requirejs.s.contexts._.config.map,j=requirejs.s.contexts._.config.shim,k=window.portal&&window.portal.host,l="undefined"==typeof a?"/":a;g=k?k+l:l;for(e in h)h.hasOwnProperty(e)&&(h[e]=b(h[e],g));for(e in i)if(i.hasOwnProperty(e))for(f in i[e])i[e].hasOwnProperty(f)&&(i[e][f]=b(i[e][f],g));for(e in j)if(j.hasOwnProperty(e)&&j[e].deps)for(f=0;f<j[e].deps.length;f+=1)j[e].deps[f]=b(j[e].deps[f],g)},window.__prechrome.prepend_requirejs_paths(),window.__prechrome.rjs_set_lang_filepaths=function(a){"use strict";var b=requirejs.s.contexts._.config.paths;return b.portal_outage=b.portal_outage.replace(/outageJson_.*/,"outageJson_")+a,b.portal_outage},define("jquery",[],function(){return window.jQuery}),function(a){define("bootstrap",["jquery"],function(){return function(){if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b();
})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=!(null!=this.unpin&&d+this.unpin<=e.top)&&(null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d&&"top");if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery)}.apply(a,arguments)})}(this),function(){function a(a){function b(b,c,d,e,f,g){for(;f>=0&&g>f;f+=a){var h=e?e[f]:f;d=c(d,b[h],h,b)}return d}return function(c,d,e,f){d=t(d,f,4);var g=!A(c)&&s.keys(c),h=(g||c).length,i=a>0?0:h-1;return arguments.length<3&&(e=c[g?g[i]:i],i+=a),b(c,d,e,g,i,h)}}function b(a){return function(b,c,d){c=u(c,d);for(var e=z(b),f=a>0?0:e-1;f>=0&&e>f;f+=a)if(c(b[f],f,b))return f;return-1}}function c(a,b,c){return function(d,e,f){var g=0,h=z(d);if("number"==typeof f)a>0?g=f>=0?f:Math.max(f+h,g):h=f>=0?Math.min(f+1,h):f+h+1;else if(c&&f&&h)return f=c(d,e),d[f]===e?f:-1;if(e!==e)return f=b(k.call(d,g,h),s.isNaN),f>=0?f+g:-1;for(f=a>0?g:h-1;f>=0&&h>f;f+=a)if(d[f]===e)return f;return-1}}function d(a,b){var c=F.length,d=a.constructor,e=s.isFunction(d)&&d.prototype||h,f="constructor";for(s.has(a,f)&&!s.contains(b,f)&&b.push(f);c--;)f=F[c],f in a&&a[f]!==e[f]&&!s.contains(b,f)&&b.push(f)}var e=this,f=e._,g=Array.prototype,h=Object.prototype,i=Function.prototype,j=g.push,k=g.slice,l=h.toString,m=h.hasOwnProperty,n=Array.isArray,o=Object.keys,p=i.bind,q=Object.create,r=function(){},s=function(a){return a instanceof s?a:this instanceof s?void(this._wrapped=a):new s(a)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=s),exports._=s):e._=s,s.VERSION="1.8.3";var t=function(a,b,c){if(void 0===b)return a;switch(null==c?3:c){case 1:return function(c){return a.call(b,c)};case 2:return function(c,d){return a.call(b,c,d)};case 3:return function(c,d,e){return a.call(b,c,d,e)};case 4:return function(c,d,e,f){return a.call(b,c,d,e,f)}}return function(){return a.apply(b,arguments)}},u=function(a,b,c){return null==a?s.identity:s.isFunction(a)?t(a,b,c):s.isObject(a)?s.matcher(a):s.property(a)};s.iteratee=function(a,b){return u(a,b,1/0)};var v=function(a,b){return function(c){var d=arguments.length;if(2>d||null==c)return c;for(var e=1;d>e;e++)for(var f=arguments[e],g=a(f),h=g.length,i=0;h>i;i++){var j=g[i];b&&void 0!==c[j]||(c[j]=f[j])}return c}},w=function(a){if(!s.isObject(a))return{};if(q)return q(a);r.prototype=a;var b=new r;return r.prototype=null,b},x=function(a){return function(b){return null==b?void 0:b[a]}},y=Math.pow(2,53)-1,z=x("length"),A=function(a){var b=z(a);return"number"==typeof b&&b>=0&&y>=b};s.each=s.forEach=function(a,b,c){b=t(b,c);var d,e;if(A(a))for(d=0,e=a.length;e>d;d++)b(a[d],d,a);else{var f=s.keys(a);for(d=0,e=f.length;e>d;d++)b(a[f[d]],f[d],a)}return a},s.map=s.collect=function(a,b,c){b=u(b,c);for(var d=!A(a)&&s.keys(a),e=(d||a).length,f=Array(e),g=0;e>g;g++){var h=d?d[g]:g;f[g]=b(a[h],h,a)}return f},s.reduce=s.foldl=s.inject=a(1),s.reduceRight=s.foldr=a(-1),s.find=s.detect=function(a,b,c){var d;return d=A(a)?s.findIndex(a,b,c):s.findKey(a,b,c),void 0!==d&&-1!==d?a[d]:void 0},s.filter=s.select=function(a,b,c){var d=[];return b=u(b,c),s.each(a,function(a,c,e){b(a,c,e)&&d.push(a)}),d},s.reject=function(a,b,c){return s.filter(a,s.negate(u(b)),c)},s.every=s.all=function(a,b,c){b=u(b,c);for(var d=!A(a)&&s.keys(a),e=(d||a).length,f=0;e>f;f++){var g=d?d[f]:f;if(!b(a[g],g,a))return!1}return!0},s.some=s.any=function(a,b,c){b=u(b,c);for(var d=!A(a)&&s.keys(a),e=(d||a).length,f=0;e>f;f++){var g=d?d[f]:f;if(b(a[g],g,a))return!0}return!1},s.contains=s.includes=s.include=function(a,b,c,d){return A(a)||(a=s.values(a)),("number"!=typeof c||d)&&(c=0),s.indexOf(a,b,c)>=0},s.invoke=function(a,b){var c=k.call(arguments,2),d=s.isFunction(b);return s.map(a,function(a){var e=d?b:a[b];return null==e?e:e.apply(a,c)})},s.pluck=function(a,b){return s.map(a,s.property(b))},s.where=function(a,b){return s.filter(a,s.matcher(b))},s.findWhere=function(a,b){return s.find(a,s.matcher(b));
},s.max=function(a,b,c){var d,e,f=-(1/0),g=-(1/0);if(null==b&&null!=a){a=A(a)?a:s.values(a);for(var h=0,i=a.length;i>h;h++)d=a[h],d>f&&(f=d)}else b=u(b,c),s.each(a,function(a,c,d){e=b(a,c,d),(e>g||e===-(1/0)&&f===-(1/0))&&(f=a,g=e)});return f},s.min=function(a,b,c){var d,e,f=1/0,g=1/0;if(null==b&&null!=a){a=A(a)?a:s.values(a);for(var h=0,i=a.length;i>h;h++)d=a[h],f>d&&(f=d)}else b=u(b,c),s.each(a,function(a,c,d){e=b(a,c,d),(g>e||e===1/0&&f===1/0)&&(f=a,g=e)});return f},s.shuffle=function(a){for(var b,c=A(a)?a:s.values(a),d=c.length,e=Array(d),f=0;d>f;f++)b=s.random(0,f),b!==f&&(e[f]=e[b]),e[b]=c[f];return e},s.sample=function(a,b,c){return null==b||c?(A(a)||(a=s.values(a)),a[s.random(a.length-1)]):s.shuffle(a).slice(0,Math.max(0,b))},s.sortBy=function(a,b,c){return b=u(b,c),s.pluck(s.map(a,function(a,c,d){return{value:a,index:c,criteria:b(a,c,d)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;if(c!==d){if(c>d||void 0===c)return 1;if(d>c||void 0===d)return-1}return a.index-b.index}),"value")};var B=function(a){return function(b,c,d){var e={};return c=u(c,d),s.each(b,function(d,f){var g=c(d,f,b);a(e,d,g)}),e}};s.groupBy=B(function(a,b,c){s.has(a,c)?a[c].push(b):a[c]=[b]}),s.indexBy=B(function(a,b,c){a[c]=b}),s.countBy=B(function(a,b,c){s.has(a,c)?a[c]++:a[c]=1}),s.toArray=function(a){return a?s.isArray(a)?k.call(a):A(a)?s.map(a,s.identity):s.values(a):[]},s.size=function(a){return null==a?0:A(a)?a.length:s.keys(a).length},s.partition=function(a,b,c){b=u(b,c);var d=[],e=[];return s.each(a,function(a,c,f){(b(a,c,f)?d:e).push(a)}),[d,e]},s.first=s.head=s.take=function(a,b,c){return null!=a?null==b||c?a[0]:s.initial(a,a.length-b):void 0},s.initial=function(a,b,c){return k.call(a,0,Math.max(0,a.length-(null==b||c?1:b)))},s.last=function(a,b,c){return null!=a?null==b||c?a[a.length-1]:s.rest(a,Math.max(0,a.length-b)):void 0},s.rest=s.tail=s.drop=function(a,b,c){return k.call(a,null==b||c?1:b)},s.compact=function(a){return s.filter(a,s.identity)};var C=function(a,b,c,d){for(var e=[],f=0,g=d||0,h=z(a);h>g;g++){var i=a[g];if(A(i)&&(s.isArray(i)||s.isArguments(i))){b||(i=C(i,b,c));var j=0,k=i.length;for(e.length+=k;k>j;)e[f++]=i[j++]}else c||(e[f++]=i)}return e};s.flatten=function(a,b){return C(a,b,!1)},s.without=function(a){return s.difference(a,k.call(arguments,1))},s.uniq=s.unique=function(a,b,c,d){s.isBoolean(b)||(d=c,c=b,b=!1),null!=c&&(c=u(c,d));for(var e=[],f=[],g=0,h=z(a);h>g;g++){var i=a[g],j=c?c(i,g,a):i;b?(g&&f===j||e.push(i),f=j):c?s.contains(f,j)||(f.push(j),e.push(i)):s.contains(e,i)||e.push(i)}return e},s.union=function(){return s.uniq(C(arguments,!0,!0))},s.intersection=function(a){for(var b=[],c=arguments.length,d=0,e=z(a);e>d;d++){var f=a[d];if(!s.contains(b,f)){for(var g=1;c>g&&s.contains(arguments[g],f);g++);g===c&&b.push(f)}}return b},s.difference=function(a){var b=C(arguments,!0,!0,1);return s.filter(a,function(a){return!s.contains(b,a)})},s.zip=function(){return s.unzip(arguments)},s.unzip=function(a){for(var b=a&&s.max(a,z).length||0,c=Array(b),d=0;b>d;d++)c[d]=s.pluck(a,d);return c},s.object=function(a,b){for(var c={},d=0,e=z(a);e>d;d++)b?c[a[d]]=b[d]:c[a[d][0]]=a[d][1];return c},s.findIndex=b(1),s.findLastIndex=b(-1),s.sortedIndex=function(a,b,c,d){c=u(c,d,1);for(var e=c(b),f=0,g=z(a);g>f;){var h=Math.floor((f+g)/2);c(a[h])<e?f=h+1:g=h}return f},s.indexOf=c(1,s.findIndex,s.sortedIndex),s.lastIndexOf=c(-1,s.findLastIndex),s.range=function(a,b,c){null==b&&(b=a||0,a=0),c=c||1;for(var d=Math.max(Math.ceil((b-a)/c),0),e=Array(d),f=0;d>f;f++,a+=c)e[f]=a;return e};var D=function(a,b,c,d,e){if(!(d instanceof b))return a.apply(c,e);var f=w(a.prototype),g=a.apply(f,e);return s.isObject(g)?g:f};s.bind=function(a,b){if(p&&a.bind===p)return p.apply(a,k.call(arguments,1));if(!s.isFunction(a))throw new TypeError("Bind must be called on a function");var c=k.call(arguments,2),d=function(){return D(a,d,b,this,c.concat(k.call(arguments)))};return d},s.partial=function(a){var b=k.call(arguments,1),c=function(){for(var d=0,e=b.length,f=Array(e),g=0;e>g;g++)f[g]=b[g]===s?arguments[d++]:b[g];for(;d<arguments.length;)f.push(arguments[d++]);return D(a,c,this,this,f)};return c},s.bindAll=function(a){var b,c,d=arguments.length;if(1>=d)throw new Error("bindAll must be passed function names");for(b=1;d>b;b++)c=arguments[b],a[c]=s.bind(a[c],a);return a},s.memoize=function(a,b){var c=function(d){var e=c.cache,f=""+(b?b.apply(this,arguments):d);return s.has(e,f)||(e[f]=a.apply(this,arguments)),e[f]};return c.cache={},c},s.delay=function(a,b){var c=k.call(arguments,2);return setTimeout(function(){return a.apply(null,c)},b)},s.defer=s.partial(s.delay,s,1),s.throttle=function(a,b,c){var d,e,f,g=null,h=0;c||(c={});var i=function(){h=c.leading===!1?0:s.now(),g=null,f=a.apply(d,e),g||(d=e=null)};return function(){var j=s.now();h||c.leading!==!1||(h=j);var k=b-(j-h);return d=this,e=arguments,0>=k||k>b?(g&&(clearTimeout(g),g=null),h=j,f=a.apply(d,e),g||(d=e=null)):g||c.trailing===!1||(g=setTimeout(i,k)),f}},s.debounce=function(a,b,c){var d,e,f,g,h,i=function(){var j=s.now()-g;b>j&&j>=0?d=setTimeout(i,b-j):(d=null,c||(h=a.apply(f,e),d||(f=e=null)))};return function(){f=this,e=arguments,g=s.now();var j=c&&!d;return d||(d=setTimeout(i,b)),j&&(h=a.apply(f,e),f=e=null),h}},s.wrap=function(a,b){return s.partial(b,a)},s.negate=function(a){return function(){return!a.apply(this,arguments)}},s.compose=function(){var a=arguments,b=a.length-1;return function(){for(var c=b,d=a[b].apply(this,arguments);c--;)d=a[c].call(this,d);return d}},s.after=function(a,b){return function(){return--a<1?b.apply(this,arguments):void 0}},s.before=function(a,b){var c;return function(){return--a>0&&(c=b.apply(this,arguments)),1>=a&&(b=null),c}},s.once=s.partial(s.before,2);var E=!{toString:null}.propertyIsEnumerable("toString"),F=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];s.keys=function(a){if(!s.isObject(a))return[];if(o)return o(a);var b=[];for(var c in a)s.has(a,c)&&b.push(c);return E&&d(a,b),b},s.allKeys=function(a){if(!s.isObject(a))return[];var b=[];for(var c in a)b.push(c);return E&&d(a,b),b},s.values=function(a){for(var b=s.keys(a),c=b.length,d=Array(c),e=0;c>e;e++)d[e]=a[b[e]];return d},s.mapObject=function(a,b,c){b=u(b,c);for(var d,e=s.keys(a),f=e.length,g={},h=0;f>h;h++)d=e[h],g[d]=b(a[d],d,a);return g},s.pairs=function(a){for(var b=s.keys(a),c=b.length,d=Array(c),e=0;c>e;e++)d[e]=[b[e],a[b[e]]];return d},s.invert=function(a){for(var b={},c=s.keys(a),d=0,e=c.length;e>d;d++)b[a[c[d]]]=c[d];return b},s.functions=s.methods=function(a){var b=[];for(var c in a)s.isFunction(a[c])&&b.push(c);return b.sort()},s.extend=v(s.allKeys),s.extendOwn=s.assign=v(s.keys),s.findKey=function(a,b,c){b=u(b,c);for(var d,e=s.keys(a),f=0,g=e.length;g>f;f++)if(d=e[f],b(a[d],d,a))return d},s.pick=function(a,b,c){var d,e,f={},g=a;if(null==g)return f;s.isFunction(b)?(e=s.allKeys(g),d=t(b,c)):(e=C(arguments,!1,!1,1),d=function(a,b,c){return b in c},g=Object(g));for(var h=0,i=e.length;i>h;h++){var j=e[h],k=g[j];d(k,j,g)&&(f[j]=k)}return f},s.omit=function(a,b,c){if(s.isFunction(b))b=s.negate(b);else{var d=s.map(C(arguments,!1,!1,1),String);b=function(a,b){return!s.contains(d,b)}}return s.pick(a,b,c)},s.defaults=v(s.allKeys,!0),s.create=function(a,b){var c=w(a);return b&&s.extendOwn(c,b),c},s.clone=function(a){return s.isObject(a)?s.isArray(a)?a.slice():s.extend({},a):a},s.tap=function(a,b){return b(a),a},s.isMatch=function(a,b){var c=s.keys(b),d=c.length;if(null==a)return!d;for(var e=Object(a),f=0;d>f;f++){var g=c[f];if(b[g]!==e[g]||!(g in e))return!1}return!0};var G=function(a,b,c,d){if(a===b)return 0!==a||1/a===1/b;if(null==a||null==b)return a===b;a instanceof s&&(a=a._wrapped),b instanceof s&&(b=b._wrapped);var e=l.call(a);if(e!==l.call(b))return!1;switch(e){case"[object RegExp]":case"[object String]":return""+a==""+b;case"[object Number]":return+a!==+a?+b!==+b:0===+a?1/+a===1/b:+a===+b;case"[object Date]":case"[object Boolean]":return+a===+b}var f="[object Array]"===e;if(!f){if("object"!=typeof a||"object"!=typeof b)return!1;var g=a.constructor,h=b.constructor;if(g!==h&&!(s.isFunction(g)&&g instanceof g&&s.isFunction(h)&&h instanceof h)&&"constructor"in a&&"constructor"in b)return!1}c=c||[],d=d||[];for(var i=c.length;i--;)if(c[i]===a)return d[i]===b;if(c.push(a),d.push(b),f){if(i=a.length,i!==b.length)return!1;for(;i--;)if(!G(a[i],b[i],c,d))return!1}else{var j,k=s.keys(a);if(i=k.length,s.keys(b).length!==i)return!1;for(;i--;)if(j=k[i],!s.has(b,j)||!G(a[j],b[j],c,d))return!1}return c.pop(),d.pop(),!0};s.isEqual=function(a,b){return G(a,b)},s.isEmpty=function(a){return null==a||(A(a)&&(s.isArray(a)||s.isString(a)||s.isArguments(a))?0===a.length:0===s.keys(a).length)},s.isElement=function(a){return!(!a||1!==a.nodeType)},s.isArray=n||function(a){return"[object Array]"===l.call(a)},s.isObject=function(a){var b=typeof a;return"function"===b||"object"===b&&!!a},s.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(a){s["is"+a]=function(b){return l.call(b)==="[object "+a+"]"}}),s.isArguments(arguments)||(s.isArguments=function(a){return s.has(a,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(s.isFunction=function(a){return"function"==typeof a||!1}),s.isFinite=function(a){return isFinite(a)&&!isNaN(parseFloat(a))},s.isNaN=function(a){return s.isNumber(a)&&a!==+a},s.isBoolean=function(a){return a===!0||a===!1||"[object Boolean]"===l.call(a)},s.isNull=function(a){return null===a},s.isUndefined=function(a){return void 0===a},s.has=function(a,b){return null!=a&&m.call(a,b)},s.noConflict=function(){return e._=f,this},s.identity=function(a){return a},s.constant=function(a){return function(){return a}},s.noop=function(){},s.property=x,s.propertyOf=function(a){return null==a?function(){}:function(b){return a[b]}},s.matcher=s.matches=function(a){return a=s.extendOwn({},a),function(b){return s.isMatch(b,a)}},s.times=function(a,b,c){var d=Array(Math.max(0,a));b=t(b,c,1);for(var e=0;a>e;e++)d[e]=b(e);return d},s.random=function(a,b){return null==b&&(b=a,a=0),a+Math.floor(Math.random()*(b-a+1))},s.now=Date.now||function(){return(new Date).getTime()};var H={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},I=s.invert(H),J=function(a){var b=function(b){return a[b]},c="(?:"+s.keys(a).join("|")+")",d=RegExp(c),e=RegExp(c,"g");return function(a){return a=null==a?"":""+a,d.test(a)?a.replace(e,b):a}};s.escape=J(H),s.unescape=J(I),s.result=function(a,b,c){var d=null==a?void 0:a[b];return void 0===d&&(d=c),s.isFunction(d)?d.call(a):d};var K=0;s.uniqueId=function(a){var b=++K+"";return a?a+b:b},s.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var L=/(.)^/,M={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},N=/\\|'|\r|\n|\u2028|\u2029/g,O=function(a){return"\\"+M[a]};s.template=function(a,b,c){!b&&c&&(b=c),b=s.defaults({},b,s.templateSettings);var d=RegExp([(b.escape||L).source,(b.interpolate||L).source,(b.evaluate||L).source].join("|")+"|$","g"),e=0,f="__p+='";a.replace(d,function(b,c,d,g,h){return f+=a.slice(e,h).replace(N,O),e=h+b.length,c?f+="'+\n((__t=("+c+"))==null?'':_.escape(__t))+\n'":d?f+="'+\n((__t=("+d+"))==null?'':__t)+\n'":g&&(f+="';\n"+g+"\n__p+='"),b}),f+="';\n",b.variable||(f="with(obj||{}){\n"+f+"}\n"),f="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+f+"return __p;\n";try{var g=new Function(b.variable||"obj","_",f)}catch(h){throw h.source=f,h}var i=function(a){return g.call(this,a,s)},j=b.variable||"obj";return i.source="function("+j+"){\n"+f+"}",i},s.chain=function(a){var b=s(a);return b._chain=!0,b};var P=function(a,b){return a._chain?s(b).chain():b};s.mixin=function(a){s.each(s.functions(a),function(b){var c=s[b]=a[b];s.prototype[b]=function(){var a=[this._wrapped];return j.apply(a,arguments),P(this,c.apply(s,a))}})},s.mixin(s),s.each(["pop","push","reverse","shift","sort","splice","unshift"],function(a){var b=g[a];s.prototype[a]=function(){var c=this._wrapped;return b.apply(c,arguments),"shift"!==a&&"splice"!==a||0!==c.length||delete c[0],P(this,c)}}),s.each(["concat","join","slice"],function(a){var b=g[a];s.prototype[a]=function(){return P(this,b.apply(this._wrapped,arguments))}}),s.prototype.value=function(){return this._wrapped},s.prototype.valueOf=s.prototype.toJSON=s.prototype.value,s.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return s})}.call(this),function(a){define("jsUri",[],function(){return function(){return function(a){function b(a){return a=decodeURIComponent(a),a=a.replace("+"," ")}function c(a){var b=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,c=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],d=b.exec(a||""),e={};return c.forEach(function(a,b){e[a]=d[b]||""}),e}function d(a){var b,c,d,e,f,g,h=[];if("undefined"==typeof a||null===a||""===a)return h;for(0===a.indexOf("?")&&(a=a.substring(1)),c=a.toString().split(/[&;]/),b=0;b<c.length;b++)d=c[b],e=d.split("="),f=e[0],g=-1===d.indexOf("=")?null:null===e[1]?"":e[1],h.push([f,g]);return h}function e(a){this.uriParts=c(a),this.queryPairs=d(this.uriParts.query),this.hasAuthorityPrefixUserPref=null}Array.prototype.forEach||(Array.prototype.forEach=function(a,b){for(var c=0,d=this.length;d>c;++c)a.call(b||this,this[c],c,this)}),["protocol","userInfo","host","port","path","anchor"].forEach(function(a){e.prototype[a]=function(b){return"undefined"!=typeof b&&(this.uriParts[a]=b),this.uriParts[a]}}),e.prototype.hasAuthorityPrefix=function(a){return"undefined"!=typeof a&&(this.hasAuthorityPrefixUserPref=a),null===this.hasAuthorityPrefixUserPref?-1!==this.uriParts.source.indexOf("//"):this.hasAuthorityPrefixUserPref},e.prototype.query=function(a){var b,c,e="";for("undefined"!=typeof a&&(this.queryPairs=d(a)),b=0;b<this.queryPairs.length;b++)c=this.queryPairs[b],e.length>0&&(e+="&"),e+=null===c[1]?c[0]:c.join("=");return e.length>0?"?"+e:e},e.prototype.getQueryParamValue=function(a){var c,d;for(d=0;d<this.queryPairs.length;d++)if(c=this.queryPairs[d],b(a)===b(c[0]))return c[1]},e.prototype.getQueryParamValues=function(a){var c,d,e=[];for(c=0;c<this.queryPairs.length;c++)d=this.queryPairs[c],b(a)===b(d[0])&&e.push(d[1]);return e},e.prototype.deleteQueryParam=function(a,c){var d,e,f,g,h=[];for(d=0;d<this.queryPairs.length;d++)e=this.queryPairs[d],f=b(e[0])===b(a),g=b(e[1])===b(c),(1===arguments.length&&!f||2===arguments.length&&!f&&!g)&&h.push(e);return this.queryPairs=h,this},e.prototype.addQueryParam=function(a,b,c){return 3===arguments.length&&-1!==c?(c=Math.min(c,this.queryPairs.length),this.queryPairs.splice(c,0,[a,b])):arguments.length>0&&this.queryPairs.push([a,b]),this},e.prototype.replaceQueryParam=function(a,c,d){var e,f,g=-1;if(3===arguments.length){for(e=0;e<this.queryPairs.length;e++)if(f=this.queryPairs[e],b(f[0])===b(a)&&decodeURIComponent(f[1])===b(d)){g=e;break}this.deleteQueryParam(a,d).addQueryParam(a,c,g)}else{for(e=0;e<this.queryPairs.length;e++)if(f=this.queryPairs[e],b(f[0])===b(a)){g=e;break}this.deleteQueryParam(a),this.addQueryParam(a,c,g)}return this},["protocol","hasAuthorityPrefix","userInfo","host","port","path","query","anchor"].forEach(function(a){var b="set"+a.charAt(0).toUpperCase()+a.slice(1);e.prototype[b]=function(b){return this[a](b),this}}),e.prototype.scheme=function(){var a="";return this.protocol()?(a+=this.protocol(),this.protocol().indexOf(":")!==this.protocol().length-1&&(a+=":"),a+="//"):this.hasAuthorityPrefix()&&this.host()&&(a+="//"),a},e.prototype.origin=function(){var a=this.scheme();return this.userInfo()&&this.host()&&(a+=this.userInfo(),this.userInfo().indexOf("@")!==this.userInfo().length-1&&(a+="@")),this.host()&&(a+=this.host(),this.port()&&(a+=":"+this.port())),a},e.prototype.toString=function(){var a=this.origin();return this.path()?a+=this.path():this.host()&&(this.query().toString()||this.anchor())&&(a+="/"),this.query().toString()&&(0!==this.query().toString().indexOf("?")&&(a+="?"),a+=this.query().toString()),this.anchor()&&(0!==this.anchor().indexOf("#")&&(a+="#"),a+=this.anchor()),a},e.prototype.clone=function(){return new e(this.toString())},"undefined"==typeof module?a.Uri=e:module.exports=e}(this),a.Uri=Uri}.apply(a,arguments)})}(this),define("chrome_lib",["jquery","jsUri"],function(a,b){"use strict";var c,d;return c={make_store:function(a){var b;try{if(b=window[a+"Storage"],!b)throw new Error("DOM Storage is disabled")}catch(c){b={getItem:function(a){return b[a]},setItem:function(a,c){return b[a]=c},removeItem:function(a){return delete b[a]}}}return{get:function(a){var c=b.getItem(a);return c&&JSON.parse(c)},set:function(a,c){return b.setItem(a,JSON.stringify(c))},remove:function(a){return b.removeItem(a)}}}},d={getCookieValue:function(a){var b,c;return document.cookie.length>0&&(b=document.cookie.indexOf(a+"="),-1!==b&&(0===b||" "===document.cookie.charAt(b-1)))?(b+=a.length+1,c=document.cookie.indexOf(";",b),-1===c&&(c=document.cookie.length),window.unescape(document.cookie.substring(b,c))):""},setCookie:function(a,b,c,d,e,f){var g=new Date;g.setTime(g.getTime()),c&&(c=1e3*c*60*60);var h=new Date(g.getTime()+c);document.cookie=a+"="+escape(b)+(c?";expires="+h.toGMTString():"")+(d?";path="+d:"")+(e?";domain="+e:"")+(f?";secure":"")},getAuthorizationValue:function(){return""!==d.getCookieValue("rh_user")},log:function(a){"undefined"!=typeof console&&console.log(a)},objectEach:function(a,b){var c;for(c in a)a.hasOwnProperty(c)&&b(c,a[c])},arrayEach:function(a,b){var c,d;for(c=0,d=a.length;d>c;c+=1)b(a[c],c)},whenBreadcrumbsReady:function(b){1===a("#breadcrumbs").length?b(a):a(document).bind("portal_breadcrumbs_ready",function(){b(a)})},whenUserStatusReady:function(b){chrometwo_require(["user_info"],function(){"undefined"==typeof window.portal||"undefined"==typeof window.portal.user_info?a(document).bind("user_info_ready",function(a,c){b(c)}):b(window.portal.user_info)})},getEventTarget:function(a){var b=a.target||a.srcElement||{};return 3==b.nodeType&&(b=b.parentNode),b},regenerateBreadcrumbs:function(b){window.breadcrumbs=b,a("#breadcrumbs").remove(),window.createBreadCrumb(),window.placeBreadcrumbs()},getTextNodes:function(a,b){function c(a){var f,g;if(3===a.nodeType)(b||!e.test(a.nodeValue))&&d.push(a.data);else for(f=0,g=a.childNodes.length;g>f;f+=1)c(a.childNodes[f])}var d=[],e=/^\s*$/;return"undefined"!=typeof a&&c(a),d},store:{local:c.make_store("local"),session:c.make_store("session")},getHashParam:function(a){var c=new b(location.href);return c.setQuery(c.anchor()).getQueryParamValue(a)}}}),define("dismiss",["underscore","jquery","chrome_lib"],function(a,b,c){function d(a,b){var c=new Date(a.valueOf());return c.setDate(c.getDate()+b),c}function e(a){return{text:b(a).text(),expire_on:f()}}function f(){return d(new Date,y).toUTCString()}function g(c){var d=a.partial(a.isEqual,c.text),e=a.compose(d,b.text);return b(a.find(b(w).find("[data-dismissable]"),e))}function h(){return c.store.local.get(v)||[]}function i(b){var d=h(),e=a.clone(b);return e.expire_on=f(),d.push(e),c.store.local.set(v,d),l(b),e}function j(b){return c.store.local.set(v,a.reject(h(),k(b,"text"))),m(b),b}function k(b,c){return function(d){return a.isEqual(b[c],d[c])}}function l(a){g(a).fadeOut(336)}function m(a){g(a).fadeIn(336)}function n(b){return a.contains(a.pluck(h(),"text"),b)}function o(){return b.prototype.parent.call(b(this))}function p(){b(this).find(x).show()}function q(){b(this).find(x).hide()}function r(a){var b=g(a);0===b.find(x).length&&b.append('<button class="dismiss-button"></button>').find(x).click(z)}function s(){var a=e(b(this));r(a),p.call(this)}function t(a){return new Date(a.expire_on).getTime()<(new Date).getTime()}function u(){var c=h(),d=a.filter(c,t);a.map(d,j),b(w).on("mouseenter","[data-dismissable]",s),b(w).on("mouseleave","[data-dismissable]",q)}var v="dismissed",w="body",x=".dismiss-button",y=7,z=a.compose(i,e,o);return{init:u,is_dismissed:n}}),define("load_html",["jquery"],function($){"use strict";function getLang(){var a,b,c;return a="en",b=document.cookie.match(/chrome_locale=([a-zA-Z_]*)/),null!==b&&2===b.length?a=b[1]:(c=document.cookie.match(/rh_locale=([a-zA-Z_]*)/),null!==c&&2===c.length&&(a=c[1])),a}function hasTitle(a){return/<\s*title\s*>/i.test(a)}function getSnippet(a,b){var c,d;return d=b.split(SPLIT_TOKEN),"WRAPPER"===a?c=d[1]+d[2]:(c=d[SPLIT_INDEX_MAP[a]],"HEAD"===a&&hasTitle(c)&&(c=c.replace(/<!-- title -->.*<!-- \/title -->/i,"")),c)}function editPage(html,d){var body,original,jsTextFunction,legacy=!$("html").hasClass("legacyfalse"),bare=$("html").hasClass("chromebare");$("html head").prepend(getSnippet("HEAD",html)),$(document).ready(function(){if(!bare){body=document.getElementsByTagName("body")[0];try{original=document.getElementById("chromed-app-content").cloneNode(!0)}catch(e){original=document.getElementById("main").cloneNode(!0)}$.browser.msie&&8===+$.browser.version?(body.innerHTML=getSnippet("WRAPPER",html).replace("<script","<form><script").replace("</script>","</script></form>")+'<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js" type="text/javascript"></script>',jsTextFunction=function(a){return a.html()}):(body.innerHTML=getSnippet("WRAPPER",html)+'<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js" type="text/javascript"></script>',jsTextFunction=function(a){return a.text()}),$("header.masthead").after('<div class="breadcrumbs"><div id="breadcrumbs" class="container tmp"><a href="#"></a></div></div>'),$.ajaxSetup({async:!1}),$("body").find("script").each(function(){var jqthis=$(this);jqthis.attr("src")?$.getScript(jqthis.attr("src")):eval(jsTextFunction(jqthis))}),$.ajaxSetup({async:!0}),legacy?(original.id="chromed-app-content",$("#cp-content").prepend('<div id="legacy-portal"><div class="content-area"><div id="legacy-container" class="legacy-container"><div id="content"><div id="main"></div></div></div></div></div>'),document.getElementById("main").appendChild(original)):document.getElementById("cp-content").appendChild(original),window.__prechrome.prepend_requirejs_paths("")}$("html").addClass("chrometwoComplete"),window.PORTAL_CHROME_READY=!0,$(document).trigger("portal_chrome_ready")})}var SPLIT_TOKEN="<!-- CHROME_TOKEN -->",SPLIT_INDEX_MAP={HEAD:0,HEADER:1,FOOTER:2};"undefined"!=typeof document.getElementsByTagName("html")[0]&&-1!==document.getElementsByTagName("html")[0].className.indexOf("chrometwo")&&!function(){var a,b,c,d,e,f;a=new Date,b=new Date,c=!1,e=null,d=getLang(),f="/services/chrome/all/"+d+"?",$("html").hasClass("bootstrap3")&&(f+="&bootstrap3=true"),$("html").hasClass("legacyfalse")&&(f+="&legacy=false"),null===e&&$.ajax({timeout:3e4,url:f,success:function(b){editPage(b,a)},async:!1})}()}),define("user_info",["jquery","chrome_lib","load_html"],function(a,b){"use strict";function c(a){return"undefined"!=typeof a&&a.login&&""!==a.login}var d,e={pushToGlobalScope:function(b){portal.user_info=b,a.event.trigger("user_info_ready",b),window.Raven&&Raven.setUserContext({account_id:b.account_id,account_number:b.account_number,email:b.email,internal:b.internal,lang:b.lang,login:b.login,name:b.name,id:b.user_id})},fetchUserInfoOldURL:function(){var b=portal.idp_url+"/idp/userStatus";a.ajax({dataType:"json",url:b,success:function(a){c(a)?e.pushToGlobalScope(a):"undefined"!=typeof d&&e.pushToGlobalScope(d)},error:function(a,b,c){"undefined"!=typeof d&&e.pushToGlobalScope(d),e.errorHandler(a,b,c)},xhrFields:{withCredentials:!0}})},fetchUserInfo:function(){var b=portal.idp_url.replace(/idp/,"sso")+"/legacy/idp/userStatus";a.ajax({dataType:"json",url:b,success:function(a){c(a)?e.pushToGlobalScope(a):(d=a,e.fetchUserInfoOldURL())},error:e.fetchUserInfoOldURL,xhrFields:{withCredentials:!0}})},getLangFromCookie:function(){var a="";return a=b.getCookieValue("chrome_locale"),""!==a?a:(a=b.getCookieValue("rh_locale"),""!==a?a:"en")},getAuthStateFromCookie:function(){return""!==b.getCookieValue("rh_user")},getUserIdFromCookie:function(){var a;return a=b.getCookieValue("rh_user"),""!==a&&(a=a.split("|"),""!==a[0])?a[0]:""},clearChromeSessionId:function(){b.setCookie("chrome_session_id","")},doChromeSessionId:function(){var a,c;a=b.getCookieValue("chrome_session_id"),""===a&&(c=Math.floor(1e6*Math.random()).toString(),c+="|"+(new Date).getTime().toString(),document.cookie="chrome_session_id="+c+";path=/")},errorHandler:function(b,c,d){portal.user_info_error={error:!0,status:c},"undefined"!=typeof window.Raven&&Raven.captureException(d),a.event.trigger("user_info_error")},init:function(){e.doChromeSessionId(),e.fetchUserInfo()}};return e.init(),{handle_logout:function(){e.clearChromeSessionId(),e.doChromeSessionId()}}}),function(a){define("menu_aim",["jquery","load_html"],function(){return function(){return function(a){function b(b){var c=a(this),d=null,e=[],f=null,g=null,h=a.extend({rowSelector:"> li",submenuSelector:"*",submenuDirection:"right",tolerance:75,enter:a.noop,exit:a.noop,activate:a.noop,deactivate:a.noop,exitMenu:a.noop},b),i=3,j=300,k=function(a){e.push({x:a.pageX,y:a.pageY}),e.length>i&&e.shift()},l=function(){g&&clearTimeout(g),h.exitMenu(this)&&(d&&h.deactivate(d),d=null)},m=function(){g&&clearTimeout(g),h.enter(this),q(this)},n=function(){h.exit(this)},o=function(){p(this)},p=function(a){a!=d&&(d&&h.deactivate(d),h.activate(a),d=a)},q=function(a){var b=r();b?g=setTimeout(function(){q(a)},b):p(a)},r=function(){function b(a,b){return(b.y-a.y)/(b.x-a.x)}if(!d||!a(d).is(h.submenuSelector))return 0;var g=c.offset(),i={x:g.left,y:g.top-h.tolerance},k={x:g.left+c.outerWidth(),y:i.y},l={x:g.left,y:g.top+c.outerHeight()+h.tolerance},m={x:g.left+c.outerWidth(),y:l.y},n=e[e.length-1],o=e[0];if(!n)return 0;if(o||(o=n),o.x<g.left||o.x>m.x||o.y<g.top||o.y>m.y)return 0;if(f&&n.x==f.x&&n.y==f.y)return 0;var p=k,q=m;"left"==h.submenuDirection?(p=l,q=i):"below"==h.submenuDirection?(p=m,q=l):"above"==h.submenuDirection&&(p=i,q=k);var r=b(n,p),s=b(n,q),t=b(o,p),u=b(o,q);return t>r&&s>u?(f=n,j):(f=null,0)};c.mouseleave(l).find(h.rowSelector).mouseenter(m).mouseleave(n).click(o),a(document).mousemove(k)}a.fn.menuAim=function(a){return this.each(function(){b.call(this,a)}),this}}(jQuery),jQuery.fn.menuAim}.apply(a,arguments)})}(this),!function(a,b,c){function d(a,b){return typeof a===b}function e(){var a,b,c,e,f,g,h;for(var i in t)if(t.hasOwnProperty(i)){if(a=[],b=t[i],b.name&&(a.push(b.name.toLowerCase()),b.options&&b.options.aliases&&b.options.aliases.length))for(c=0;c<b.options.aliases.length;c++)a.push(b.options.aliases[c].toLowerCase());for(e=d(b.fn,"function")?b.fn():b.fn,f=0;f<a.length;f++)g=a[f],h=g.split("."),1===h.length?v[h[0]]=e:(!v[h[0]]||v[h[0]]instanceof Boolean||(v[h[0]]=new Boolean(v[h[0]])),v[h[0]][h[1]]=e),s.push((e?"":"no-")+h.join("-"))}}function f(a){var b=x.className,c=v._config.classPrefix||"";if(y&&(b=b.baseVal),v._config.enableJSClass){var d=new RegExp("(^|\\s)"+c+"no-js(\\s|$)");b=b.replace(d,"$1"+c+"js$2")}v._config.enableClasses&&(b+=" "+c+a.join(" "+c),y?x.className.baseVal=b:x.className=b)}function g(a){return a.replace(/([a-z])-([a-z])/g,function(a,b,c){return b+c.toUpperCase()}).replace(/^-/,"")}function h(a,b){return!!~(""+a).indexOf(b)}function i(){return"function"!=typeof b.createElement?b.createElement(arguments[0]):y?b.createElementNS.call(b,"http://www.w3.org/2000/svg",arguments[0]):b.createElement.apply(b,arguments)}function j(){var a=b.body;return a||(a=i(y?"svg":"body"),a.fake=!0),a}function k(a,c,d,e){var f,g,h,k,l="modernizr",m=i("div"),n=j();if(parseInt(d,10))for(;d--;)h=i("div"),h.id=e?e[d]:l+(d+1),m.appendChild(h);return f=i("style"),f.type="text/css",f.id="s"+l,(n.fake?n:m).appendChild(f),n.appendChild(m),f.styleSheet?f.styleSheet.cssText=a:f.appendChild(b.createTextNode(a)),m.id=l,n.fake&&(n.style.background="",n.style.overflow="hidden",k=x.style.overflow,x.style.overflow="hidden",x.appendChild(n)),g=c(m,a),n.fake?(n.parentNode.removeChild(n),x.style.overflow=k,x.offsetHeight):m.parentNode.removeChild(m),!!g}function l(a){return a.replace(/([A-Z])/g,function(a,b){return"-"+b.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(b,d){var e=b.length;if("CSS"in a&&"supports"in a.CSS){for(;e--;)if(a.CSS.supports(l(b[e]),d))return!0;return!1}if("CSSSupportsRule"in a){for(var f=[];e--;)f.push("("+l(b[e])+":"+d+")");return f=f.join(" or "),k("@supports ("+f+") { #modernizr { position: absolute; } }",function(a){return"absolute"==getComputedStyle(a,null).position})}return c}function n(a,b,e,f){function j(){l&&(delete H.style,delete H.modElem)}if(f=!d(f,"undefined")&&f,!d(e,"undefined")){var k=m(a,e);if(!d(k,"undefined"))return k}for(var l,n,o,p,q,r=["modernizr","tspan"];!H.style;)l=!0,H.modElem=i(r.shift()),H.style=H.modElem.style;for(o=a.length,n=0;o>n;n++)if(p=a[n],q=H.style[p],h(p,"-")&&(p=g(p)),H.style[p]!==c){if(f||d(e,"undefined"))return j(),"pfx"!=b||p;try{H.style[p]=e}catch(s){}if(H.style[p]!=q)return j(),"pfx"!=b||p}return j(),!1}function o(a,b){return function(){return a.apply(b,arguments)}}function p(a,b,c){var e;for(var f in a)if(a[f]in b)return c===!1?a[f]:(e=b[a[f]],d(e,"function")?o(e,c||b):e);return!1}function q(a,b,c,e,f){var g=a.charAt(0).toUpperCase()+a.slice(1),h=(a+" "+D.join(g+" ")+g).split(" ");return d(b,"string")||d(b,"undefined")?n(h,b,e,f):(h=(a+" "+A.join(g+" ")+g).split(" "),p(h,b,c))}function r(a,b,d){return q(a,c,c,b,d)}var s=[],t=[],u={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(a,b){var c=this;setTimeout(function(){b(c[a])},0)},addTest:function(a,b,c){t.push({name:a,fn:b,options:c})},addAsyncTest:function(a){t.push({name:null,fn:a})}},v=function(){};v.prototype=u,v=new v;var w=u._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];u._prefixes=w;var x=b.documentElement,y="svg"===x.nodeName.toLowerCase(),z="Moz O ms Webkit",A=u._config.usePrefixes?z.toLowerCase().split(" "):[];u._domPrefixes=A;var B="CSS"in a&&"supports"in a.CSS,C="supportsCSS"in a;v.addTest("supports",B||C);var D=u._config.usePrefixes?z.split(" "):[];u._cssomPrefixes=D;var E=function(b){var d,e=w.length,f=a.CSSRule;if("undefined"==typeof f)return c;if(!b)return!1;if(b=b.replace(/^@/,""),d=b.replace(/-/g,"_").toUpperCase()+"_RULE",d in f)return"@"+b;for(var g=0;e>g;g++){var h=w[g],i=h.toUpperCase()+"_"+d;if(i in f)return"@-"+h.toLowerCase()+"-"+b}return!1};u.atRule=E;var F=u.testStyles=k,G={elem:i("modernizr")};v._q.push(function(){delete G.elem});var H={style:G.elem.style};v._q.unshift(function(){delete H.style}),u.testProp=function(a,b,d){return n([a],c,b,d)},u.testAllProps=q,u.testAllProps=r,v.addTest("flexbox",r("flexBasis","1px",!0)),v.addTest("cssanimations",r("animationName","a",!0)),v.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&r("transform","scale(1)",!0)}),v.addTest("csstransforms3d",function(){var a=!!r("perspective","1px",!0),b=v._config.usePrefixes;if(a&&(!b||"webkitPerspective"in x.style)){var c,d="#modernizr{width:0;height:0}";v.supports?c="@supports (perspective: 1px)":(c="@media (transform-3d)",b&&(c+=",(-webkit-transform-3d)")),c+="{#modernizr{width:7px;height:18px;margin:0;padding:0;border:0}}",F(d+c,function(b){a=7===b.offsetWidth&&18===b.offsetHeight})}return a}),u.prefixed=function(a,b,c){return 0===a.indexOf("@")?E(a):(-1!=a.indexOf("-")&&(a=g(a)),b?q(a,b,c):q(a,"pfx"))},e(),f(s),delete u.addTest,delete u.addAsyncTest;for(var I=0;I<v._q.length;I++)v._q[I]();a.Modernizr=v}(window,document),define("modernizr",function(){}),function(a){define("windowpain",["jquery"],function(b){function c(b,c){function d(){return f[b]}function e(a){c(b,a),f[b]=a}var g=Object.getOwnPropertyDescriptor(a,b),h=g&&g.configurable;h&&(f[b]=a[b],Object.defineProperty(a,b,{get:d,set:e,writeable:!1,
enumerable:!1,configurable:!0}),"undefined"!=typeof f[b]&&(a[b]=f[b]))}function d(a){c(a,e)}function e(b,c){c.call(a)()}var f={};return{watch:c,execute_when_available:d}})}(window),define("j/lib/require-css/require.css.min.js",[],function(){if("undefined"==typeof window)return{load:function(a,b,c){c()}};var a=document.getElementsByTagName("head")[0],b=window.navigator.userAgent.match(/Trident\/([^ ;]*)|AppleWebKit\/([^ ;]*)|Opera\/([^ ;]*)|rv\:([^ ;]*)(.*?)Gecko\/([^ ;]*)|MSIE\s([^ ;]*)|AndroidWebKit\/([^ ;]*)/)||0,c=!1,d=!0;b[1]||b[7]?c=parseInt(b[1])<6||parseInt(b[7])<=9:b[2]||b[8]?d=!1:b[4]&&(c=parseInt(b[4])<18);var e={};e.pluginBuilder="./css-builder";var f,g,h,i=function(){f=document.createElement("style"),a.appendChild(f),g=f.styleSheet||f.sheet},j=0,k=[],l=function(a){j++,32==j&&(i(),j=0),g.addImport(a),f.onload=function(){m()}},m=function(){h();var a=k.shift();return a?(h=a[1],void l(a[0])):void(h=null)},n=function(a,b){if(g&&g.addImport||i(),g&&g.addImport)h?k.push([a,b]):(l(a),h=b);else{f.textContent='@import "'+a+'";';var c=setInterval(function(){try{f.sheet.cssRules,clearInterval(c),b()}catch(a){}},10)}},o=function(b,c){var e=document.createElement("link");if(e.type="text/css",e.rel="stylesheet",d)e.onload=function(){e.onload=function(){},setTimeout(c,7)};else var f=setInterval(function(){for(var a=0;a<document.styleSheets.length;a++){var b=document.styleSheets[a];if(b.href==e.href)return clearInterval(f),c()}},10);e.href=b,a.appendChild(e)};return e.normalize=function(a,b){return".css"==a.substr(a.length-4,4)&&(a=a.substr(0,a.length-4)),b(a)},e.load=function(a,b,d){(c?n:o)(b.toUrl(a+".css"),d)},e}),define("tourSniff",[],function(){/tour=true|tour=\d{1,3}/.test(location.search)&&(window.Drupal&&window.Drupal.settings&&!window.Drupal.settings.kcs&&(window.Drupal.settings.kcs={}),chrometwo_require(["nimbus/tour"],function(a){new a}))}),function(a){define("equalHeights",["jquery"],function(){return function(){return function(a){a.fn.equalHeights=function(b,c){var d=b?b:0,e=0;return this.each(function(){e=a(this).outerHeight(),e>d&&(d=e)}),c&&d>c&&(d=c),this.each(function(){a(this).height(d)})}}(jQuery),jQuery.fn.equalHeights}.apply(a,arguments)})}(this),function(a){define("data-eh",["jquery","underscore","equalHeights","bootstrap"],function(a,b){function c(c){var g=a(c||"body"),h=b.uniq(a.map(g.find("[data-eh]"),d)),i=b.map(h,e);b.each(i,f)}function d(b){return a(b).attr("data-eh")}function e(a){return"[data-eh="+a+"]"}function f(b){a(b).css("height","auto").equalHeights()}function g(){var d=b.throttle(b.partial(c,"body"),200,{leading:!1});a(b.defer(c)),a(window).resize(d),a(document).on("shown.bs.tab",".nav-tabs a",function(b){c(a(this).attr("href"))})}return g(),{apply:c}})}(window),function(root){define("base",["jquery","bootstrap","jsUri","user_info","menu_aim","modernizr","windowpain","css","tourSniff","data-eh"],function(){return function(){function portal_hack_fix_plugins(a,b){function c(a){var b,c={};for(b in a.fn)a.fn.hasOwnProperty(b)&&(c[b]=b);return c}var d,e,f=window.jQuery;d=c(f),e=c(a);for(var g in d)d.hasOwnProperty(g)&&(e.hasOwnProperty(g)||(a.fn[g]=f.fn[g]))}function doArticleSteps(){!function(){ajq(".cp-article-steps .article-steps-box").height(ajq(".cp-article-steps .nav-tabs-sub-vertical").height()),ajq('.cp-article-steps a[data-toggle="tab"]').on("shown.bs.tab",function(a){ajq(".cp-article-steps .article-steps-box").height(ajq(".cp-article-steps .nav-tabs-sub-vertical").height())})}()}function do_labs_mods(){!function(){var a=window.location.pathname;(0===a.indexOf("/labs/")&&"/labs/"!==a||0===a.indexOf("/labsinfo")||a.match(/\/[a-zA-Z_]{2,5}\/labsinfo/))&&chrometwo_require(["labs_global"],function(a){a.init()})}()}function padZeroes(a){"use strict";return a=ajq.trim(a),a=new Array(8-a.length+1).join("0")+a}function createAnnouncements(){"use strict";var a,b,c,d="";ajq.ajax({url:"/announcements_feed.xml"}).done(function(e){ajq(e).find("node").length>0&&(d+='<ul class="list-news">',ajq("node",e).each(function(e){e>2||(a=ajq(this).find("title").text(),b=ajq(this).find("link").text(),c=ajq(this).find("published_date").text(),d+='<li><a href="'+b+'">'+a+'</a><date class="list-news-date">'+c+"</date></li>")}),d+="</ul>",ajq("#home-announcements").html(d))}).fail(function(){})}function createBreadCrumb(){"use strict";var a,b,c,d='<div class="breadcrumbs"><div id="breadcrumbs" class="container">';try{if(ajq("#breadcrumbs.tmp",".breadcrumbs").length?ajq("#breadcrumbs.tmp").parent().remove():ajq("#breadcrumbs.tmp").length&&ajq("#breadcrumbs.tmp").remove(),0!==ajq("#breadcrumbs").length||0===breadcrumbs.length){var e=ajq("#breadcrumbs");a=e.html().replace(/\s+&gt;\s+/g,""),e.html(a),0===e.parent(".breadcrumbs").length&&e.wrap('<div class="breadcrumbs"></div>')}else{for(b=0,c=breadcrumbs.length,b=0;c-1>b;b+=1)d=d+'<a href="'+breadcrumbs[b][1]+'">'+breadcrumbs[b][0]+"</a>";d=d+breadcrumbs[b][0]+"</div></div>",ajq("header.masthead").after(d)}}catch(f){}}function updateBreadCrumb(){ajq(".breadcrumbs").remove(),createBreadCrumb(),placeBreadcrumbs()}function placeBreadcrumbs(){"use strict";var a,b,c;a=ajq("#breadcrumbs"),0===a.parent(".breadcrumbs").length&&a.wrap('<div class="breadcrumbs"></div>'),a.addClass("container"),a.find("a").each(function(a){b=ajq(this),b.attr("href")&&(c=b.attr("href").trim(),c=c.replace(/(%20)*$/,""),b.attr("href",c))}),ajq("#breadcrumbs").parent(".breadcrumbs").remove().appendTo("header.masthead"),ajq.event.trigger("portal_breadcrumbs_ready")}function createSiteSectionBanner(){"use strict";var a="";portal.siteSection&&(a+='<div class="site-section-banner"><div class="container">',portal.siteSection.section&&portal.siteSection.section.length>0&&(a+='<div class="lead-in lead-in-white">'+portal.siteSection.section+"</div>"),portal.siteSection.headline&&portal.siteSection.headline.length>0&&(a+='<div class="headline headline-white">'+portal.siteSection.headline+"</div>",portal.siteSection.strapline&&portal.siteSection.strapline.length>0&&(a+='<div class="strapline strapline-white">'+portal.siteSection.strapline+"</div>")),a+="</div></div>",ajq("#site-section").html(a),portal.siteSection.style&&portal.siteSection.style.length>0&&ajq("body").addClass("site-section-"+portal.siteSection.style))}function tempSqiIssue(){"use strict";var a,b,c;0===window.location.pathname.indexOf("/knowledge/solutions")&&(a=ajq(".sqiEvaluationForm"),a.removeClass("sqiEvaluationForm"),a.addClass("sqiEvaluationFormHack"),ajq(".sqiEvaluationFormHack").click(function(){b=0,ajq(".sqiEvaluationFormHack > div > div").each(function(){c=ajq(this).find("input"),b+=c.filter(":checked").length}),6===b&&ajq(".sqiEvaluationFormHack input:submit").removeAttr("disabled")}))}function deleteCookies(){"use strict";var a=0,b=["SpryMedia_DataTables_caseListForm:supportCasesList_closed","SpryMedia_DataTables_caseListForm:supportCasesList_open","SpryMedia_DataTables_caseListForm:supportCasesList_list","SpryMedia_DataTables_caseListForm:supportCasesList_all"];for(a=0;4>a;a+=1)delete_cookie(b[a])}function delete_cookie(a){"use strict";var b=new Date;b.setTime(b.getTime()-1),document.cookie=a+="=; expires="+b.toGMTString()}function setupSearchBox(){"use strict";"kbase"===getApplication()&&(ajq("select[name=col] option[value=avalon_portal]").attr("selected",!1),ajq("#searchDropRedhat").removeClass("selected"),ajq("select[name=col] option[value=redhat_kbase]").attr("selected",!0),ajq("#searchDropRedhat_kbase").addClass("selected"),ajq(".portal-label").html(jQuery("select[name=col] option[value=redhat_kbase]").text()))}function setupAccountDropdown(){"use strict";ajq(document).click(function(a){"accountUserNameMenu"!==a.target.id&&1!==ajq(a.target).parents("#accountUserNameMenu").length&&(ajq("#accountUserNameMenu").hide(),ajq("#accountUser").parent().removeClass("open"))})}function setupLocalesDropdown(){}function getApplication(){"use strict";var a=window.location.pathname.split("/"),b="/"+a[1],c="/"+a[2],d="/"+a[3],e="",f="";return"/issue-tracker"===b?f="issue-tracker":b===portal.cspContext?f=-1!==d.toLowerCase().indexOf("software")?"jbossnetwork_downloads":-1!==d.toLowerCase().indexOf("case")?"jbossnetwork_support":"jbossnetwork":b===portal.kbaseContext?f="kbase":"subscriptions"===b?f="ccActive":b===portal.customerCenterContext&&"/support"===c&&(e=a[4],f="subscriptions.html"===e?"ccActive":"renewals.html"===e?"ccRenewals":"ccOverview"),f}function docsLanguageChange(){"use strict";var a=ajq("#docsLanguage").val(),b=window.location.href,c="";b=b.match(/locale=.*$/)?b.replace(/locale=.*$/,"locale="+a):b+"?locale="+a,c="/redirect?redirectTo="+b,window.location.href=c}function removeMultipleRedirectParams(a){"use strict";var b,c;return b=new RegExp("&redirectTo=([^&#]*)","g"),c=a.replace(b,"")}function updateLanguagePicker(){"use strict";var a;ajq('#localesMenu a, #mobile-localesMenu a[href*="language="], #accessibility-localesMenu a[href*="language="]').each(function(){a=removeMultipleRedirectParams(this.href),this.href=a+"&redirectTo="+escape(window.location);var b=this.href.match(/language(=|%3D)/g).length;b>1&&(this.href=this.href.replace(/language(=|%3D)\w*?(,|%2C|%252C)\w*?(&|%26)/g,""))})}function rebuildLanguagePicker(){"use strict";var a,b;ajq('#localesMenu a, #mobile-localesMenu a[href*="language="], #accessibility-localesMenu a[href*="language="]').each(function(){b=new RegExp("&redirectTo=([^&#]*)","g"),a=this.href.replace(b,"&redirectTo="+escape(window.location)),this.href=a})}function updateLoginLink(){"use strict";var a;ajq("#accountLogin, #mobile-accountLogin, #accessibility-accountLogin, #caseSearchLogin").each(function(){a=removeMultipleRedirectParams(this.href),this.href=a+"?redirectTo="+escape(window.location)})}function setUsername(a){"use strict";ajq("#accountUserName, #mobile-accountUserName, #accessibility-accountUserName").html(a).addClass("filled"),ajq("#userFullName, #mobile-userFullName, #accessibility-userFullName").html(a),ajq("#userFirstName").html(a)}function setAccountNumber(a){"use strict";""!==a&&"undefined"!=typeof a?ajq("#accountUser .accountNumber .value, #mobile-accountUser .mobile-accountNumber .value, #accessibility-accountUser .mobile-accountNumber .value").html(a):ajq("#accountUser .accountNumber, #mobile-accountUser .mobile-accountNumber, #accessibility-accountUser .mobile-accountNumber").hide()}function handleLoginDiv(a,b,c){"use strict";a?(ajq("#accountLinksLoggedIn, #mobile-accountLinksLoggedIn, .mobile-accountLinksLoggedIn, #accessibility-accountLinksLoggedIn").css("display","block"),setUsername(b),setAccountNumber(c),ajq("body").addClass("loggedIn").removeClass("loggedOut")):(ajq("#accountLinksLoggedOut, #mobile-accountLinksLoggedOut, .mobile-accountLinksLoggedOut, #accessibility-accountLinksLoggedOut").css("display","block"),ajq("body").addClass("loggedOut").removeClass("loggedIn"))}function checkUserStatus(){"use strict";chrometwo_require(["user_info"],function(){"undefined"==typeof portal||"undefined"==typeof portal.user_info?ajq(document).bind("user_info_ready",function(a,b){doUserStatus(b),doUserHomePage(b)}):(doUserStatus(portal.user_info),doUserHomePage(portal.user_info))})}function doUserStatus(a){"use strict";handleLoginDiv(!!a.login,a.name,a.account_number),checkUserLanguage(a.lang,a.lang_err_msg),handleLocaleDiv(a.lang)}function doUserHomePage(a){"use strict";a.login?(ajq("#hp-loginbox-name").html(a.name),ajq("#hp-loginbox-acct .value").html(a.account_number),ajq("#hp-loginbox-auth").css("display","block")):ajq("#hp-loginbox-unauth").css("display","block")}function getLanguageName(a){"use strict";switch(a){case"en":return"English";case"es":return"espa&ntilde;ol";case"de":return"Deutsch";case"it":return"italiano";case"ko":return"&#54620;&#44397;&#50612;";case"fr":return"fran&ccedil;ais";case"ja":return"&#26085;&#26412;&#35486;";case"pt":return"portugu&ecirc;s";case"zh_CN":return"&#20013;&#25991; (&#20013;&#22269;)";case"ru":return"&#1088;&#1091;&#1089;&#1089;&#1082;&#1080;&#1081;"}}function setLanguageMenu(a){"use strict";ajq("#locales #localesLink").html(a),ajq("#"+portal.lang).addClass("selected"),ajq("#mobile-"+portal.lang).addClass("selected"),ajq("#acessibility-"+portal.lang).addClass("selected"),ajq("html").attr("lang",portal.lang)}function handleLocaleDiv(a){"use strict";ajq("#editions").css("display","block"),setLanguageMenu(getLanguageName(a))}function changePrimaryNavigationState(a){"use strict";"#navsite"===a||ajq("#nav-"+a).addClass("on")}function changeNavigationState(){"use strict";var a;window.siteMapState=window.siteMapState||"start",a=window.siteMapState.split("/"),-1!==a[0].indexOf("support")&&(a[0]="support"),(-1!==a[0].indexOf("knowledge")||-1!==a[0].indexOf("products"))&&(a[0]="products"),changePrimaryNavigationState(a[0])}function displayUnknownLangMsg(a){"use strict";ajq("#cp-content").prepend('<div id="unknown_lang" class="alertNotice">'+a+"</div>")}function checkUserLanguage(a,b){"use strict";var c,d=["en"],e=["en","ja","zh_CN"],f=["en","ja","zh_CN"],g=["en","ja","zh_CN","zh","ko","es","fr","it","de"],h=a?a.split("_")[0]:"en",i=a?a.split("_")[1]:"US",j=h;"zh"===h&&(j=h+"_"+i.toUpperCase()),void 0!==j&&void 0!==b&&(c=getApplication(),"issue-tracker"===c&&-1===d.indexOf(j)?displayUnknownLangMsg(b):"jbossnetwork_downloads"!==c&&"jbossnetwork_support"!==c&&"jbossnetwork"!==c||-1!==f.indexOf(j)?"kbase"===c&&-1===e.indexOf(j)?displayUnknownLangMsg(b):"customercenter"===c&&-1===g.indexOf(j)&&displayUnknownLangMsg(b):displayUnknownLangMsg(b))}function hideLoadingDialog(targetDiv){(void 0===targetDiv||""===targetDiv)&&(targetDiv="searchResults"),document.getElementById?null!==document.getElementById(targetDiv)&&(document.getElementById("prepage").style.visibility="hidden",document.getElementById(targetDiv).className=""):document.layers?(document.prepage.visibility="hidden",eval("document."+targetDiv+".className = ''")):(document.all.prepage.style.visibility="hidden",document.all.item(targetDiv).className="")}function showLoadingDialog(targetDiv){(void 0===targetDiv||""===targetDiv)&&(targetDiv="searchResults"),document.getElementById?null!==document.getElementById(targetDiv)&&(document.getElementById("prepage").style.visibility="visible",document.getElementById(targetDiv).className="opacityOn"):document.layers?(document.prepage.visibility="visible",eval("document."+targetDiv+".className = 'opacityOn'")):(document.all.prepage.style.visibility="visible",document.all.item(targetDiv).className="opacityOn")}function balanceCols(a){"use strict";a.find(".col").equalHeights()}function megaMenu(){"use strict";ajq("#navPrimary > ul > li").hover(function(){var a,b,c,d=0;ajq(this).find(".col").each(function(){d+=parseInt(ajq(this).outerWidth(!0),10)}),c=parseInt(ajq(this).find(".body").css("padding-left"),10),b=parseInt(ajq(this).find(".cap").css("padding-right"),10),a=d+c+b+8,ajq(this).find(".mega").css("width",a),balanceCols(ajq(this))})}function toggleInput(a,b){"use strict";ajq("body").hasClass("sfdc_readonly")||(ajq(".toggleInput").css("display","none"),ajq(".toggleOutput").css("display","inline"),ajq("#"+a).fadeOut("fast",function(){ajq("#"+b).fadeIn("fast")}))}function doOutageMessage(){"use strict";var a=portal.host||"",b=a+"/api/banners",c=new XMLHttpRequest;c.open("GET",b,!0),c.onreadystatechange=function(){if(4===this.readyState&&this.status>=200&&this.status<400)try{var a=JSON.parse(this.responseText);chrometwo_require(["jquery","dismiss","chrome_lib"],function(b,c,d){function e(){var d,e,f,g,h;if("undefined"!=typeof a){0===b("#portal-messages").length?b("#site-section").before('<div id="portal-messages" class="portal-messages"></div>'):0!==b("#portal-messages").length&&(b("#portal-messages").remove(),b("#site-section").before('<div id="portal-messages" class="portal-messages"></div>'));for(f in a)a.hasOwnProperty(f)&&(d=a[f],e=(new Date).getTime(),h=b("<p>"+d.message+"</p>").text(),g=e<d.end&&e>d.start&&!c.is_dismissed(h),g&&b("#portal-messages").prepend('<div data-dismissable class="alert alert-warning alert-portal alert-w-icon"><span class="icon-warning alert-icon" aria-hidden="true"></span>'+d.message+"</div>"))}b.event.trigger("portal_outage_message_ready")}d.whenUserStatusReady(e)})}catch(b){}},c.send(),c=null}function onPage(a){var b,c=function(a){return window.location.pathname.indexOf(a)>-1},d=!1;if("string"==typeof a)d=c(a);else if(a instanceof Array)for(b=0;b<a.length;b+=1)if(c(a[b])){d=!0;break}return d}function getCookie(a){"use strict";var b,c=document.cookie,d=a+"=",e=c.indexOf("; "+d);if(-1===e){if(e=c.indexOf(d),0!==e)return null}else e+=2;return b=document.cookie.indexOf(";",e),-1===b&&(b=c.length),unescape(c.substring(e+d.length,b))}function tableSelectAll(a){"use strict";var b=a,c=a.find("th input").first();ajq(c).change(function(){b.find("td input").each(function(a){var b=ajq(this);b.is(":disabled")!==!0&&(c.attr("checked")?b.attr("checked","checked"):b.removeAttr("checked"))})})}function getCookieValue(a){"use strict";var b,c;return document.cookie.length>0&&(b=document.cookie.indexOf(a+"="),-1!==b&&(0===b||" "===document.cookie.charAt(b-1)))?(b+=a.length+1,c=document.cookie.indexOf(";",b),-1===c&&(c=document.cookie.length),unescape(document.cookie.substring(b,c))):""}function initModals(){ajq(".modal").on("shown.bs.modal",function(a){ajq(".modal.in").on("click",function(a){ajq(a.target).hasClass("modal")&&ajq(".modal").modal("hide")})})}function doLegacyClass(){ajq("#legacy-portal").length>0&&ajq("html").addClass("legacy-portal")}var onInputField=!1,shiftStatus=!1,ctrlStatus=!1,altStatus=!1,gStatus=!1,filenameLimit=80,filenameAlertPart1="The file name that you provided is too long. Please use a file name with less than ",filenameAlertPart2=" characters.",original_values=[];return window.ajq=window.jQuery,"undefined"==typeof String.prototype.trim&&(String.prototype.trim=function(){"use strict";return this.replace(/^\s+|\s+$/g,"")}),"undefined"==typeof Array.prototype.indexOf&&(Array.prototype.indexOf=function(a){"use strict";return ajq.inArray(a,this)}),"undefined"==typeof Array.prototype.map&&(Array.prototype.map=function(a){var b,c=[],d=this.length;for(b=0;d>b;b++)c.push(a(this[b]));return c}),Object.keys||(Object.keys=function(){"use strict";var a=Object.prototype.hasOwnProperty,b=!{toString:null}.propertyIsEnumerable("toString"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],d=c.length;return function(e){if("object"!=typeof e&&("function"!=typeof e||null===e))throw new TypeError("Object.keys called on non-object");var f,g,h=[];for(f in e)a.call(e,f)&&h.push(f);if(b)for(g=0;d>g;g++)a.call(e,c[g])&&h.push(c[g]);return h}}()),window.portal_hack_fix_plugins=portal_hack_fix_plugins,"function"==typeof window.require&&window.require(["jquery"],function(a){portal_hack_fix_plugins(a,"require")}),window.ajq&&portal_hack_fix_plugins(window.ajq,"base"),window.chrometwo_ready(function(){"use strict";do_labs_mods(),doLegacyClass(),setupAccountDropdown(),setupLocalesDropdown(),updateLanguagePicker(),updateLoginLink(),changeNavigationState(),checkUserStatus(),megaMenu(),chrometwo_require(["dismiss"],function(a){a.init(),doOutageMessage()}),tempSqiIssue(),chrometwo_require(["windowpain"],function(a){a.watch("breadcrumbs",function(){createBreadCrumb(),placeBreadcrumbs()})}),chrometwo_require(["data-annex"],function(a){a.init()}),createBreadCrumb(),placeBreadcrumbs(),createSiteSectionBanner(),doArticleSteps(),ajq(":input").focus(function(){onInputField=!0}).blur(function(){onInputField=!1}),ajq("body").addClass(portal.lang),ajq("#accountLogout").click(function(){deleteCookies()}),ajq('[rel="tooltip"]').tooltip(),ajq("#navPrimary .dropdown-menu a").click(function(a){var b=ajq(this).attr("href"),c=b.indexOf("#");if(-1!=c&&window.location.href.split("#")[0]==b.split("#")[0]){a.preventDefault();var d=b.split("#")[1];window.location.hash="#"+d,window.location.reload()}}),ajq("#browse-tabs  .browse-page a").on("click",function(){var a=window.location.toString(),b="",c=ajq(this).attr("href");-1!==a.indexOf("search/case/")&&-1!==c.indexOf("/search/browse/")&&(b=ajq("#quickSearchform\\:quickSearchInput").val(),ajq(this).attr("href",c+"#?&keyword="+b))}),ajq("#browse-tabs #browse-case").on("click","a",function(a){a.preventDefault();var b=window.location.toString(),c=ajq(this).attr("href"),d=ajq(this).attr("data-value");-1===b.indexOf(c)&&(window.location="/search/"+d+"/?quickSearch="+ajq("#quickSearchform\\:quickSearchInput").val())}),ajq("#home-search input:text").each(function(){var a=ajq(this);a.data("placeholder",a.attr("placeholder")).focus(function(){a.removeAttr("placeholder")}).blur(function(){a.attr("placeholder",a.data("placeholder"))})}),initModals(),"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations&&navigator.serviceWorker.getRegistrations().then(function(a){a.forEach(function(a){-1===a.scope.indexOf("web-push-notification")&&a.unregister()})})}),window.doArticleSteps=doArticleSteps,window.do_labs_mods=do_labs_mods,window.padZeroes=padZeroes,window.createAnnouncements=createAnnouncements,window.createBreadCrumb=createBreadCrumb,window.updateBreadCrumb=updateBreadCrumb,window.placeBreadcrumbs=placeBreadcrumbs,window.createSiteSectionBanner=createSiteSectionBanner,window.tempSqiIssue=tempSqiIssue,window.deleteCookies=deleteCookies,window.delete_cookie=delete_cookie,window.setupSearchBox=setupSearchBox,window.setupAccountDropdown=setupAccountDropdown,window.setupLocalesDropdown=setupLocalesDropdown,window.getApplication=getApplication,window.docsLanguageChange=docsLanguageChange,window.removeMultipleRedirectParams=removeMultipleRedirectParams,window.updateLanguagePicker=updateLanguagePicker,window.rebuildLanguagePicker=rebuildLanguagePicker,window.updateLoginLink=updateLoginLink,window.setUsername=setUsername,window.setAccountNumber=setAccountNumber,window.handleLoginDiv=handleLoginDiv,window.checkUserStatus=checkUserStatus,window.doUserStatus=doUserStatus,window.doUserHomePage=doUserHomePage,window.getLanguageName=getLanguageName,window.setLanguageMenu=setLanguageMenu,window.handleLocaleDiv=handleLocaleDiv,window.changePrimaryNavigationState=changePrimaryNavigationState,window.changeNavigationState=changeNavigationState,window.displayUnknownLangMsg=displayUnknownLangMsg,window.checkUserLanguage=checkUserLanguage,window.hideLoadingDialog=hideLoadingDialog,window.showLoadingDialog=showLoadingDialog,window.balanceCols=balanceCols,window.megaMenu=megaMenu,function(a){"use strict";a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).outerHeight();c>b&&(b=c)}),c.css("height",b)}}(ajq),window.toggleInput=toggleInput,window.doOutageMessage=doOutageMessage,window.onPage=onPage,window.getCookie=getCookie,window.tableSelectAll=tableSelectAll,window.getCookieValue=getCookieValue,window.initModals=initModals,window.doLegacyClass=doLegacyClass,window.__base_loaded=!0,root.__base_loaded=__base_loaded}.apply(root,arguments)})}(this),define("nimbus/searchbar",["jquery"],function(a){"use strict";function b(b){return b=a.trim(b),b=new Array(8-b.length+1).join("0")+b}function c(){h=a("#topSearchForm"),i=a("#topSearchInput"),h.submit(f)}function d(){j=a("#homePageSearchForm"),k=a("#search-query"),j.submit(e)}function e(a){var b=k.val();a.preventDefault(),g(a,b)}function f(a){var b=i.val();g(a,b)}function g(a,c){var d,e=window.portal&&window.portal.host||"";switch(a.preventDefault(),!0){case/^case:\s*(\d{1,})$/.test(c):d=c.split(":")[1],d=d.length<8?b(d):d,window.location=e+"/support/cases/"+d;break;case/^doc-(\d*)/.test(c):d=c.split("-")[1],window.location=e+"/node/"+d;break;case/^it-(.*)/.test(c):window.location=e+"/support/cases/list/";break;default:window.location=e+"/search/#/?q="+encodeURIComponent(c)}}var h,i,j,k;return{init:c,init_homepage:d}}),define("locale",["jquery"],function(a){"use strict";function b(a){var b=e,d=c(),f=d.indexOf(a)>=0,g=a.split("_")[0],h=d.indexOf(g)>=0;return f?b=a:h&&(b=g),b}function c(){var b=a(g).map(d).get();return b}function d(b,c){return a(c).attr(f)}var e="en",f="data-lang",g="#localesMenu a["+f+"]";return{"default":e,closest:b,supported:c}}),define("nimbus/utility_tray",["jquery","nimbus/searchbar","locale","chrome_lib"],function(a,b,c,d){"use strict";var e,f={},g={},h=200;return g.close=function(){e.slideUp().removeClass("open")},f.init_expand=function(){var f=".utility-nav li a, .btn-utility",i=".btn",j=".mobile-utility a",k="#mobile-nav",l="#mobile-nav-btn",m=".utility-link";b.init(),a(".mobile-bar-wrap, nav.mobile-nav-bar").on("click",i,function(b){b.preventDefault();var c=a(this),d=a(c.attr("data-target"));a(i).removeClass("clicked"),d.hasClass("open")?(d.parent().hide(),d.hide().css({opacity:0}).removeClass("open")):(c.hasClass("btn-search")?(a(k).removeClass("in").removeClass("open").hide().css({opacity:0,height:0}),a(l).addClass("collapsed")):(a(m).hide().css({opacity:0}).removeClass("open"),a(m).parent().hide()),c.addClass("clicked"),d.siblings().hide().css({opacity:0}).removeClass("open"),d.parent().show(),d.css({opacity:1}).show().addClass("open"))}),a("#localesMenu a[data-lang]").on("click",function(b){b.preventDefault();var e=a(this),f=e.attr("data-lang"),g=c.closest(f);d.setCookie("rh_locale",g,void 0,"/",".redhat.com"),window.location.reload()}),a(".mobile-nav").on("click",j,function(b){b.preventDefault();var c=a(this),d=a(c.attr("data-target"));a(j).removeClass("clicked"),d.hasClass("open")?(c.removeClass("clicked"),d.slideUp().removeClass("open")):(c.addClass("clicked"),d.siblings(".open").slideUp().removeClass("open"),d.slideDown().addClass("open"))}),e=a(".utility-tray"),a(".utility-container").on("click",f,function(b){b.preventDefault();var c=a(this);if(a(f).not(this).removeClass("clicked"),c.hasClass("clicked"))c.removeClass("clicked"),g.close();else{var d=c.attr("data-target"),i=a(m).not(d);i.stop().hide().animate({opacity:0},h),a(d).stop().show().animate({opacity:1},h),c.addClass("clicked"),e.slideDown().addClass("open"),c.hasClass("btn-search")&&a("#site-search").find('input[type="text"]').focus()}}),a("body").on("click.hideTray",function(b){var c;e.hasClass("open")&&(c=!(a(b.target).hasClass("clicked")||a(b.target).parent().hasClass("clicked")||a(b.target).parent().parent().hasClass("clicked")||a(b.target).parent().parent().hasClass("other-active")||a(b.target).parentsUntil(".utility-tray").parent().hasClass("utility-tray")||a(b.target).parent().hasClass("utility-tray")),c&&(b.preventDefault(),a(f).removeClass("clicked"),e.slideUp().removeClass("open").find(m).stop().animate({opacity:0},h)))})},g.init=function(){f.init_expand()},g}),define("analytics/separators",["underscore"],function(a){"use strict";function b(a){return a.replace(g,"")}function c(c){return a.map(c,b)}var d=" | ",e="-",f=", ",g=",",h=";";return{pipe:d,dash:e,comma:f,comma_nsp:g,semicolon:h,join:function(a){return function(b){return b.join(a)}},strip_comma:b,strip_comma_from_array:c}}),define("analytics/url",["chrome_lib","jsUri","analytics/separators"],function(a,b,c){"use strict";function d(a){return this instanceof d?(this.regex=a.regex,this.Platform=a.platform,this.UseType=a.persona,this.Collection=a.collection,this.ResourceType=a.resource_type,this.get_product=a.get_product||function(){},this.get_resource_id=a.get_resource_id||function(){},this.get_page_name=a.get_page_name||function(){},this.ResourceID="",this.pageName="",this.params=[],void(this.match=function(a){return this.params=this.regex.exec(a)||[],this.params.length>0&&(this.ResourceID=this.get_resource_id.apply(this),this.pageName=this.get_page_name.apply(this),this.Platform=e(this.Platform),this.UseType=e(this.UseType),this.Collection=e(this.Collection),this.ResourceType=e(this.ResourceType),this.hasOwnProperty("get_product")&&(this.Product=this.get_product.apply(this))),this})):new d(a)}function e(a){var b;return b="function"==typeof a?a():a}function f(a,b){return i[a]||(h=h||new g(b.url_definitions),i[a]=h.parse(a)[0]),i[a]}function g(e){return this instanceof g?(this.URLs=[],this.add=function(a){var b;if(a instanceof d)this.URLs.push(a);else if(a instanceof Array)for(b=0;b<a.length;b+=1)this.add(a[b]);else a instanceof Object&&this.add(new d(a))},this.parse=function(a){var c,d,e,f,g,h=[],i=[];for(g=new b(a),e=g.path()+g.query(),""!==(f=g.anchor())&&(e+="#"+f),c=0;c<this.URLs.length;c+=1)if(d=this.URLs[c],i=d.match(e),i.params.length>0){h.push(d);break}return h},this.test_url=function f(b){if(!b)return void a.log("Hi!  This function can be used to test analytics for URLs that may not be live yet.  Just type portal.analytics.parser.test_url(URL) to see the results.  Please note that many page's pageNames use the *current* title tag, so there may be a value in the pageName that reflects the page you're currently on.");var d=this.parse(b)[0];d.pageName.length>1?(f.first_run&&a.log("Please note that many page's pageNames use the *current* title tag, so there may be a value in the pageName below that reflects the page you're currently on rather than the title of the URL you just requested."),a.log("URL pattern matched.\n"),a.log("  Platform:        "+d.Platform),a.log("  Collection:      "+d.Collection),a.log("  ResourcePersona: "+d.UseType),a.log("  ResourceType:    "+d.ResourceType),a.log("  pageName:        cp | "+d.pageName.join(c.pipe))):a.log("No URL pattern matches "+b),f.first_run=!1},this.test_url.first_run=!0,void this.add(e)):new g}var h,i={};return{URLParser:g,parse:f}}),define("analytics/adapters/omniture/old_fns",[],function(){window.getAuthorizationValue=function(a){var b,c,d=!1;return document.cookie.length>0&&(b=document.cookie.indexOf(a+"="),-1===b||0!==b&&" "!==document.cookie.charAt(b-1)||(b+=a.length+1,c=document.cookie.indexOf(";",b),-1===c&&(c=document.cookie.length),d=!!JSON.parse(window.unescape(document.cookie.substring(b,c))).login||d)),d},window.getCookie=function(a){var b=document.cookie,c=a+"=",d=b.indexOf("; "+c);if(-1===d){if(d=b.indexOf(c),0!==d)return null}else d+=2;var e=document.cookie.indexOf(";",d);return-1===e&&(e=b.length),unescape(b.substring(d+c.length,e))},window.deleteCookie=function(a,b,c){window.getCookie(a)&&(document.cookie=a+"="+(b?";path="+b:"")+(c?";domain="+c:"")+";expires=Thu, 01-Jan-1970 00:00:01 GMT")},window.checkLoginEvent=function(){var a=window.getCookie("omni_login");return a?(window.deleteCookie("omni_login","/","redhat.com"),1):0},window.checkRegEvent=function(){var a;return a=window.getCookie("omni_reg"),1===a?(window.deleteCookie("omni_reg","/","redhat.com"),window.deleteCookie("omni_login","/","redhat.com"),1):0},window.getLoginStatus=function(){var a,b,c,d;return b="Browser",a=window.getCookie("rh_auth_token"),window.authorization_status=window.getAuthorizationValue(),window.rh_sso_value=window.getAuthorizationValue()===!0?"true":"",window.rh_user_value=window.getCookie("rh_user"),window.authorization_status===!1?"Browser":(window.rh_user_value&&(d=window.rh_user_value.split("|"),c=d[2]),"member"===c?"Logged in":"customer"===c?"Customer":b)},window.setCookie=function(a,b,c,d,e,f){var g=new Date;g.setTime(g.getTime()),c&&(c=1e3*c*60*60);var h=new Date(g.getTime()+c);document.cookie=a+"="+escape(b)+(c?";expires="+h.toGMTString():"")+(d?";path="+d:"")+(e?";domain="+e:"")+(f?";secure":"")}}),function(a){define("s_code",["analytics/adapters/omniture/old_fns"],function(){return function(){function b(a){if(!a.campaign&&a.getQueryParamNC("sc_cid")&&(a.campaign=a.getQueryParamNC("sc_cid")),!a.eVar1&&a.getQueryParamNC("intcmp")&&(a.eVar1=a.getQueryParamNC("intcmp"),a.events?a.events+=", event31":a.events="event31"),a.setCookieParam("rh_omni_tc",a.getQueryParamNC("sc_cid"),1,30),a.setCookieParam("rh_omni_itc",a.getQueryParamNC("intcmp"),1),!a.c_r("rh_omni_tc")&&!a.campaign){var b=document.referrer;a.campaign=b?"70160000000dJVLAA2":"70160000000dJVaAAM",a.setCookieParam("rh_omni_tc",a.campaign,1,30)}if("70160000000dJVa"==a.c_r("rh_omni_tc")&&!a.campaign){var b=document.referrer;a.campaign="70160000000dJVaAAM",a.setCookieParam("rh_omni_tc",a.campaign,1,30)}if("70160000000dJVL"==a.c_r("rh_omni_tc")&&!a.campaign){
var b=document.referrer;a.campaign="70160000000dJVLAA2",a.setCookieParam("rh_omni_tc",a.campaign,1,30)}a.eVar41=a.getNewRepeat(),a.eVar42=a.getVisitNum(),!a.eVar34&&a.getQueryParam("cr")&&(a.eVar34=a.prop34=a.getQueryParam("cr"))}function c(a,b,c){var d,e,f,g,h,i='s.version=\'H.25.4\';s.an=s_an;s.logDebug=function(m){var s=this,tcf=new Function(\'var e;try{console.log("\'+s.rep(s.rep(s.rep(m,"\\\\","\\\\\\\\"),"\\n","\\\\n"),"\\"","\\\\\\"")+\'");}catch(e){}\');tcf()};s.cls=function(x,c){var i,y=\'\';if(!c)c=this.an;for(i=0;i<x.length;i++){n=x.substring(i,i+1);if(c.indexOf(n)>=0)y+=n}retur'+"n y};s.fl=function(x,l){return x?(''+x).substring(0,l):x};s.co=function(o){return o};s.num=function(x){x=''+x;for(var p=0;p<x.length;p++)if(('0123456789').indexOf(x.substring(p,p+1))<0)return 0;return 1};s.rep=s_rep;s.sp=s_sp;s.jn=s_jn;s.ape=function(x){var s=this,h='0123456789ABCDEF',f=\"+~!*()'\",i,c=s.charSet,n,l,e,y='';c=c?c.toUpperCase():'';if(x){x=''+x;if(s.em==3){x=encodeURIComponent(x);for(i=0;i<f.length;i++) {n=f.substring(i,i+1);if(x.indexOf(n)>=0)x=s.rep(x,n,\"%\"+n.charCodeAt(0).toString(16).toUpperCase())}}else if(c=='AUTO'&&('').charCodeAt){for(i=0;i<x.length;i++){c=x.substring(i,i+1);n=x.charCodeAt(i);if(n>127){l=0;e='';while(n||l<4){e=h.substring(n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+='%u'+e}else if(c=='+')y+='%2B';else y+=escape(c)}x=y}else x=s.rep(escape(''+x),'+','%2B');if(c&&c!='AUTO'&&s.em==1&&x.indexOf('%u')<0&&x.indexOf('%U')<0){i=x.indexOf('%');while(i>=0){i++;if(h.substring(8).indexOf(x.substring(i,i+1).toUpperCase())>=0)return x.substring(0,i)+'u00'+x.substring(i);i=x.indexOf('%',i)}}}return x};s.epa=function(x){var s=this,y,tcf;if(x){x=s.rep(''+x,'+',' ');if(s.em==3){tcf=new Function('x','var y,e;try{y=decodeURIComponent(x)}catch(e){y=unescape(x)}return y');return tcf(x)}else return unescape(x)}return y};s.pt=function(x,d,f,a){var s=this,t=x,z=0,y,r;while(t){y=t.indexOf(d);y=y<0?t.length:y;t=t.substring(0,y);r=s[f](t,a);if(r)return r;z+=y+d.length;t=x.substring(z,x.length);t=z<x.length?t:''}return ''};s.isf=function(t,a){var c=a.indexOf(':');if(c>=0)a=a.substring(0,c);c=a.indexOf('=');if(c>=0)a=a.substring(0,c);if(t.substring(0,2)=='s_')t=t.substring(2);return (t!=''&&t==a)};s.fsf=function(t,a){var s=this;if(s.pt(a,',','isf',t))s.fsg+=(s.fsg!=''?',':'')+t;return 0};s.fs=function(x,f){var s=this;s.fsg='';s.pt(x,',','fsf',f);return s.fsg};s.mpc=function(m,a){var s=this,c,l,n,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(v&&v=='prerender'){if(!s.mpq){s.mpq=new Array;l=s.sp('webkitvisibilitychange,visibilitychange',',');for(n=0;n<l.length;n++){s.d.addEventListener(l[n],new Function('var s=s_c_il['+s._in+'],c,v;v=s.d.visibilityState;if(!v)v=s.d.webkitVisibilityState;if(s.mpq&&v==\"visible\"){while(s.mpq.length>0){c=s.mpq.shift();s[c.m].apply(s,c.a)}s.mpq=0}'),false)}}c=new Object;c.m=m;c.a=a;s.mpq.push(c);return 1}return 0};s.si=function(){var s=this,i,k,v,c=s_gi+'var s=s_gi(\"'+s.oun+'\");s.sa(\"'+s.un+'\");';for(i=0;i<s.va_g.length;i++){k=s.va_g[i];v=s[k];if(v!=undefined){if(typeof(v)!='number')c+='s.'+k+'=\"'+s_fe(v)+'\";';else c+='s.'+k+'='+v+';'}}c+=\"s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';\";return c};s.c_d='';s.c_gdf=function(t,a){var s=this;if(!s.num(t))return 1;return 0};s.c_gd=function(){var s=this,d=s.wd.location.hostname,n=s.fpCookieDomainPeriods,p;if(!n)n=s.cookieDomainPeriods;if(d&&!s.c_d){n=n?parseInt(n):2;n=n>2?n:2;p=d.lastIndexOf('.');if(p>=0){while(p>=0&&n>1){p=d.lastIndexOf('.',p-1);n--}s.c_d=p>0&&s.pt(d,'.','c_gdf',0)?d.substring(p):d}}return s.c_d};s.c_r=function(k){var s=this;k=s.ape(k);var c=' '+s.d.cookie,i=c.indexOf(' '+k+'='),e=i<0?i:c.indexOf(';',i),v=i<0?'':s.epa(c.substring(i+2+k.length,e<0?c.length:e));return v!='[[B]]'?v:''};s.c_w=function(k,v,e){var s=this,d=s.c_gd(),l=s.cookieLifetime,t;v=''+v;l=l?(''+l).toUpperCase():'';if(e&&l!='SESSION'&&l!='NONE'){t=(v!=''?parseInt(l?l:0):-60);if(t){e=new Date;e.setTime(e.getTime()+(t*1000))}}if(k&&l!='NONE'){s.d.cookie=k+'='+s.ape(v!=''?v:'[[B]]')+'; path=/;'+(e&&l!='SESSION'?' expires='+e.toGMTString()+';':'')+(d?' domain='+d+';':'');return s.c_r(k)==v}return 0};s.eh=function(o,e,r,f){var s=this,b='s_'+e+'_'+s._in,n=-1,l,i,x;if(!s.ehl)s.ehl=new Array;l=s.ehl;for(i=0;i<l.length&&n<0;i++){if(l[i].o==o&&l[i].e==e)n=i}if(n<0){n=i;l[n]=new Object}x=l[n];x.o=o;x.e=e;f=r?x.b:f;if(r||f){x.b=r?0:o[e];x.o[e]=f}if(x.b){x.o[b]=x.b;return b}return 0};s.cet=function(f,a,t,o,b){var s=this,r,tcf;if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','f','a','t','var e,r;try{r=s[f](a)}catch(e){r=s[t](e)}return r');r=tcf(s,f,a,t)}else{if(s.ismac&&s.u.indexOf('MSIE 4')>=0)r=s[b](a);else{s.eh(s.wd,'onerror',0,o);r=s[f](a);s.eh(s.wd,'onerror',1)}}return r};s.gtfset=function(e){var s=this;return s.tfs};s.gtfsoe=new Function('e','var s=s_c_il['+s._in+'],c;s.eh(window,\"onerror\",1);s.etfs=1;c=s.t();if(c)s.d.write(c);s.etfs=0;return true');s.gtfsfb=function(a){return window};s.gtfsf=function(w){var s=this,p=w.parent,l=w.location;s.tfs=w;if(p&&p.location!=l&&p.location.host==l.host){s.tfs=p;return s.gtfsf(s.tfs)}return s.tfs};s.gtfs=function(){var s=this;if(!s.tfs){s.tfs=s.wd;if(!s.etfs)s.tfs=s.cet('gtfsf',s.tfs,'gtfset',s.gtfsoe,'gtfsfb')}return s.tfs};s.mrq=function(u){var s=this,l=s.rl[u],n,r;s.rl[u]=0;if(l)for(n=0;n<l.length;n++){r=l[n];s.mr(0,0,r.r,r.t,r.u)}};s.flushBufferedRequests=function(){};s.mr=function(sess,q,rs,ta,u){var s=this,dc=s.dc,t1=s.trackingServer,t2=s.trackingServerSecure,tb=s.trackingServerBase,p='.sc',ns=s.visitorNamespace,un=s.cls(u?u:(ns?ns:s.fun)),r=new Object,l,imn='s_i_'+(un),im,b,e;if(!rs){if(t1){if(t2&&s.ssl)t1=t2}else{if(!tb)tb='2o7.net';if(dc)dc=(''+dc).toLowerCase();else dc='d1';if(tb=='2o7.net'){if(dc=='d1')dc='112';else if(dc=='d2')dc='122';p=''}t1=un+'.'+dc+'.'+p+tb}rs='http'+(s.ssl?'s':'')+'://'+t1+'/b/ss/'+s.un+'/'+(s.mobile?'5.1':'1')+'/'+s.version+(s.tcn?'T':'')+'/'+sess+'?AQB=1&ndh=1'+(q?q:'')+'&AQE=1';if(s.isie&&!s.ismac)rs=s.fl(rs,2047)}if(s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){if(!s.rc)s.rc=new Object;if(!s.rc[un]){s.rc[un]=1;if(!s.rl)s.rl=new Object;s.rl[un]=new Array;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].mrq(\"'+un+'\")',750)}else{l=s.rl[un];if(l){r.t=ta;r.u=un;r.r=rs;l[l.length]=r;return ''}imn+='_'+s.rc[un];s.rc[un]++}if(s.debugTracking){var d='AppMeasurement Debug: '+rs,dl=s.sp(rs,'&'),dln;for(dln=0;dln<dl.length;dln++)d+=\"\\n\\t\"+s.epa(dl[dln]);s.logDebug(d)}im=s.wd[imn];if(!im)im=s.wd[imn]=new Image;im.s_l=0;im.onload=new Function('e','this.s_l=1;var wd=window,s;if(wd.s_c_il){s=wd.s_c_il['+s._in+'];s.bcr();s.mrq(\"'+un+'\");s.nrs--;if(!s.nrs)s.m_m(\"rr\")}');if(!s.nrs){s.nrs=1;s.m_m('rs')}else s.nrs++;im.src=rs;if(s.useForcedLinkTracking||s.bcf){if(!s.forcedLinkTrackingTimeout)s.forcedLinkTrackingTimeout=250;setTimeout('if(window.s_c_il)window.s_c_il['+s._in+'].bcr()',s.forcedLinkTrackingTimeout);}else if((s.lnk||s.eo)&&(!ta||ta=='_self'||ta=='_top'||(s.wd.name&&ta==s.wd.name))){b=e=new Date;while(!im.s_l&&e.getTime()-b.getTime()<500)e=new Date}return ''}return '<im'+'g sr'+'c=\"'+rs+'\" width=1 height=1 border=0 alt=\"\">'};s.gg=function(v){var s=this;if(!s.wd['s_'+v])s.wd['s_'+v]='';return s.wd['s_'+v]};s.glf=function(t,a){if(t.substring(0,2)=='s_')t=t.substring(2);var s=this,v=s.gg(t);if(v)s[t]=v};s.gl=function(v){var s=this;if(s.pg)s.pt(v,',','glf',0)};s.rf=function(x){var s=this,y,i,j,h,p,l=0,q,a,b='',c='',t;if(x&&x.length>255){y=''+x;i=y.indexOf('?');if(i>0){q=y.substring(i+1);y=y.substring(0,i);h=y.toLowerCase();j=0;if(h.substring(0,7)=='http://')j+=7;else if(h.substring(0,8)=='https://')j+=8;i=h.indexOf(\"/\",j);if(i>0){h=h.substring(j,i);p=y.substring(i);y=y.substring(0,i);if(h.indexOf('google')>=0)l=',q,ie,start,search_key,word,kw,cd,';else if(h.indexOf('yahoo.co')>=0)l=',p,ei,';if(l&&q){a=s.sp(q,'&');if(a&&a.length>1){for(j=0;j<a.length;j++){t=a[j];i=t.indexOf('=');if(i>0&&l.indexOf(','+t.substring(0,i)+',')>=0)b+=(b?'&':'')+t;else c+=(c?'&':'')+t}if(b&&c)q=b+'&'+c;else c=''}i=253-(q.length-c.length)-y.length;x=y+(i>0?p.substring(0,i):'')+'?'+q}}}}return x};s.s2q=function(k,v,vf,vfp,f){var s=this,qs='',sk,sv,sp,ss,nke,nk,nf,nfl=0,nfn,nfm;if(k==\"contextData\")k=\"c\";if(v){for(sk in v)if((!f||sk.substring(0,f.length)==f)&&v[sk]&&(!vf||vf.indexOf(','+(vfp?vfp+'.':'')+sk+',')>=0)&&(!Object||!Object.prototype||!Object.prototype[sk])){nfm=0;if(nfl)for(nfn=0;nfn<nfl.length;nfn++)if(sk.substring(0,nfl[nfn].length)==nfl[nfn])nfm=1;if(!nfm){if(qs=='')qs+='&'+k+'.';sv=v[sk];if(f)sk=sk.substring(f.length);if(sk.length>0){nke=sk.indexOf('.');if(nke>0){nk=sk.substring(0,nke);nf=(f?f:'')+nk+'.';if(!nfl)nfl=new Array;nfl[nfl.length]=nf;qs+=s.s2q(nk,v,vf,vfp,nf)}else{if(typeof(sv)=='boolean'){if(sv)sv='true';else sv='false'}if(sv){if(vfp=='retrieveLightData'&&f.indexOf('.contextData.')<0){sp=sk.substring(0,4);ss=sk.substring(4);if(sk=='transactionID')sk='xact';else if(sk=='channel')sk='ch';else if(sk=='campaign')sk='v0';else if(s.num(ss)){if(sp=='prop')sk='c'+ss;else if(sp=='eVar')sk='v'+ss;else if(sp=='list')sk='l'+ss;else if(sp=='hier'){sk='h'+ss;sv=sv.substring(0,255)}}}qs+='&'+s.ape(sk)+'='+s.ape(sv)}}}}}if(qs!='')qs+='&.'+k}return qs};s.hav=function(){var s=this,qs='',l,fv='',fe='',mn,i,e;if(s.lightProfileID){l=s.va_m;fv=s.lightTrackVars;if(fv)fv=','+fv+','+s.vl_mr+','}else{l=s.va_t;if(s.pe||s.linkType){fv=s.linkTrackVars;fe=s.linkTrackEvents;if(s.pe){mn=s.pe.substring(0,1).toUpperCase()+s.pe.substring(1);if(s[mn]){fv=s[mn].trackVars;fe=s[mn].trackEvents}}}if(fv)fv=','+fv+','+s.vl_l+','+s.vl_l2;if(fe){fe=','+fe+',';if(fv)fv+=',events,'}if (s.events2)e=(e?',':'')+s.events2}for(i=0;i<l.length;i++){var k=l[i],v=s[k],b=k.substring(0,4),x=k.substring(4),n=parseInt(x),q=k;if(!v)if(k=='events'&&e){v=e;e=''}if(v&&(!fv||fv.indexOf(','+k+',')>=0)&&k!='linkName'&&k!='linkType'){if(k=='timestamp')q='ts';else if(k=='dynamicVariablePrefix')q='D';else if(k=='visitorID')q='vid';else if(k=='pageURL'){q='g';if(v.length>255){s.pageURLRest=v.substring(255);v=v.substring(0,255);}}else if(k=='pageURLRest')q='-g';else if(k=='referrer'){q='r';v=s.fl(s.rf(v),255)}else if(k=='vmk'||k=='visitorMigrationKey')q='vmt';else if(k=='visitorMigrationServer'){q='vmf';if(s.ssl&&s.visitorMigrationServerSecure)v=''}else if(k=='visitorMigrationServerSecure'){q='vmf';if(!s.ssl&&s.visitorMigrationServer)v=''}else if(k=='charSet'){q='ce';if(v.toUpperCase()=='AUTO')v='ISO8859-1';else if(s.em==2||s.em==3)v='UTF-8'}else if(k=='visitorNamespace')q='ns';else if(k=='cookieDomainPeriods')q='cdp';else if(k=='cookieLifetime')q='cl';else if(k=='variableProvider')q='vvp';else if(k=='currencyCode')q='cc';else if(k=='channel')q='ch';else if(k=='transactionID')q='xact';else if(k=='campaign')q='v0';else if(k=='resolution')q='s';else if(k=='colorDepth')q='c';else if(k=='javascriptVersion')q='j';else if(k=='javaEnabled')q='v';else if(k=='cookiesEnabled')q='k';else if(k=='browserWidth')q='bw';else if(k=='browserHeight')q='bh';else if(k=='connectionType')q='ct';else if(k=='homepage')q='hp';else if(k=='plugins')q='p';else if(k=='events'){if(e)v+=(v?',':'')+e;if(fe)v=s.fs(v,fe)}else if(k=='events2')v='';else if(k=='contextData'){qs+=s.s2q('c',s[k],fv,k,0);v=''}else if(k=='lightProfileID')q='mtp';else if(k=='lightStoreForSeconds'){q='mtss';if(!s.lightProfileID)v=''}else if(k=='lightIncrementBy'){q='mti';if(!s.lightProfileID)v=''}else if(k=='retrieveLightProfiles')q='mtsr';else if(k=='deleteLightProfiles')q='mtsd';else if(k=='retrieveLightData'){if(s.retrieveLightProfiles)qs+=s.s2q('mts',s[k],fv,k,0);v=''}else if(s.num(x)){if(b=='prop')q='c'+n;else if(b=='eVar')q='v'+n;else if(b=='list')q='l'+n;else if(b=='hier'){q='h'+n;v=s.fl(v,255)}}if(v)qs+='&'+s.ape(q)+'='+(k.substring(0,3)!='pev'?s.ape(v):v)}}return qs};s.ltdf=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';var qi=h.indexOf('?');h=qi>=0?h.substring(0,qi):h;if(t&&h.substring(h.length-(t.length+1))=='.'+t)return 1;return 0};s.ltef=function(t,h){t=t?t.toLowerCase():'';h=h?h.toLowerCase():'';if(t&&h.indexOf(t)>=0)return 1;return 0};s.lt=function(h){var s=this,lft=s.linkDownloadFileTypes,lef=s.linkExternalFilters,lif=s.linkInternalFilters;lif=lif?lif:s.wd.location.hostname;h=h.toLowerCase();if(s.trackDownloadLinks&&lft&&s.pt(lft,',','ltdf',h))return 'd';if(s.trackExternalLinks&&h.indexOf('#')!=0&&h.indexOf('about:')!=0&&h.indexOf('javascript:')!=0&&(lef||lif)&&(!lef||s.pt(lef,',','ltef',h))&&(!lif||!s.pt(lif,',','ltef',h)))return 'e';return ''};s.lc=new Function('e','var s=s_c_il['+s._in+'],b=s.eh(this,\"onclick\");s.lnk=this;s.t();s.lnk=0;if(b)return this[b](e);return true');s.bcr=function(){var s=this;if(s.bct&&s.bce)s.bct.dispatchEvent(s.bce);if(s.bcf){if(typeof(s.bcf)=='function')s.bcf();else if(s.bct&&s.bct.href)s.d.location=s.bct.href}s.bct=s.bce=s.bcf=0};s.bc=new Function('e','if(e&&e.s_fe)return;var s=s_c_il['+s._in+'],f,tcf,t,n,nrs,a,h;if(s.d&&s.d.all&&s.d.all.cppXYctnr)return;if(!s.bbc)s.useForcedLinkTracking=0;else if(!s.useForcedLinkTracking){s.b.removeEventListener(\"click\",s.bc,true);s.bbc=s.useForcedLinkTracking=0;return}else s.b.removeEventListener(\"click\",s.bc,false);s.eo=e.srcElement?e.srcElement:e.target;nrs=s.nrs;s.t();s.eo=0;if(s.nrs>nrs&&s.useForcedLinkTracking&&e.target){a=e.target;while(a&&a!=s.b&&a.tagName.toUpperCase()!=\"A\"&&a.tagName.toUpperCase()!=\"AREA\")a=a.parentNode;if(a){h=a.href;if(h.indexOf(\"#\")==0||h.indexOf(\"about:\")==0||h.indexOf(\"javascript:\")==0)h=0;t=a.target;if(e.target.dispatchEvent&&h&&(!t||t==\"_self\"||t==\"_top\"||(s.wd.name&&t==s.wd.name))){e.stopPropagation();e.stopImmediatePropagation();e.preventDefault();n=s.d.createEvent(\"MouseEvents\");n.initMouseEvent(\"click\",e.bubbles,e.cancelable,e.view,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget);n.s_fe=1;s.bct=e.target;s.bce=n}}}');s.oh=function(o){var s=this,l=s.wd.location,h=o.href?o.href:'',i,j,k,p;i=h.indexOf(':');j=h.indexOf('?');k=h.indexOf('/');if(h&&(i<0||(j>=0&&i>j)||(k>=0&&i>k))){p=o.protocol&&o.protocol.length>1?o.protocol:(l.protocol?l.protocol:'');i=l.pathname.lastIndexOf('/');h=(p?p+'//':'')+(o.host?o.host:(l.host?l.host:''))+(h.substring(0,1)!='/'?l.pathname.substring(0,i<0?0:i)+'/':'')+h}return h};s.ot=function(o){var t=o.tagName;if(o.tagUrn||(o.scopeName&&o.scopeName.toUpperCase()!='HTML'))return '';t=t&&t.toUpperCase?t.toUpperCase():'';if(t=='SHAPE')t='';if(t){if((t=='INPUT'||t=='BUTTON')&&o.type&&o.type.toUpperCase)t=o.type.toUpperCase();else if(!t&&o.href)t='A';}return t};s.oid=function(o){var s=this,t=s.ot(o),p,c,n='',x=0;if(t&&!o.s_oid){p=o.protocol;c=o.onclick;if(o.href&&(t=='A'||t=='AREA')&&(!c||!p||p.toLowerCase().indexOf('javascript')<0))n=s.oh(o);else if(c){n=s.rep(s.rep(s.rep(s.rep(''+c,\"\\r\",''),\"\\n\",''),\"\\t\",''),' ','');x=2}else if(t=='INPUT'||t=='SUBMIT'){if(o.value)n=o.value;else if(o.innerText)n=o.innerText;else if(o.textContent)n=o.textContent;x=3}else if(o.src&&t=='IMAGE')n=o.src;if(n){o.s_oid=s.fl(n,100);o.s_oidt=x}}return o.s_oid};s.rqf=function(t,un){var s=this,e=t.indexOf('='),u=e>=0?t.substring(0,e):'',q=e>=0?s.epa(t.substring(e+1)):'';if(u&&q&&(','+u+',').indexOf(','+un+',')>=0){if(u!=s.un&&s.un.indexOf(',')>=0)q='&u='+u+q+'&u=0';return q}return ''};s.rq=function(un){if(!un)un=this.un;var s=this,c=un.indexOf(','),v=s.c_r('s_sq'),q='';if(c<0)return s.pt(v,'&','rqf',un);return s.pt(un,',','rq',0)};s.sqp=function(t,a){var s=this,e=t.indexOf('='),q=e<0?'':s.epa(t.substring(e+1));s.sqq[q]='';if(e>=0)s.pt(t.substring(0,e),',','sqs',q);return 0};s.sqs=function(un,q){var s=this;s.squ[un]=q;return 0};s.sq=function(q){var s=this,k='s_sq',v=s.c_r(k),x,c=0;s.sqq=new Object;s.squ=new Object;s.sqq[q]='';s.pt(v,'&','sqp',0);s.pt(s.un,',','sqs',q);v='';for(x in s.squ)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))s.sqq[s.squ[x]]+=(s.sqq[s.squ[x]]?',':'')+x;for(x in s.sqq)if(x&&(!Object||!Object.prototype||!Object.prototype[x])&&s.sqq[x]&&(x==q||c<2)){v+=(v?'&':'')+s.sqq[x]+'='+s.ape(x);c++}return s.c_w(k,v,0)};s.wdl=new Function('e','var s=s_c_il['+s._in+'],r=true,b=s.eh(s.wd,\"onload\"),i,o,oc;if(b)r=this[b](e);for(i=0;i<s.d.links.length;i++){o=s.d.links[i];oc=o.onclick?\"\"+o.onclick:\"\";if((oc.indexOf(\"s_gs(\")<0||oc.indexOf(\".s_oc(\")>=0)&&oc.indexOf(\".tl(\")<0)s.eh(o,\"onclick\",0,s.lc);}return r');s.wds=function(){var s=this;if(s.apv>3&&(!s.isie||!s.ismac||s.apv>=5)){if(s.b&&s.b.attachEvent)s.b.attachEvent('onclick',s.bc);else if(s.b&&s.b.addEventListener){if(s.n&&s.n.userAgent.indexOf('WebKit')>=0&&s.d.createEvent){s.bbc=1;s.useForcedLinkTracking=1;s.b.addEventListener('click',s.bc,true)}s.b.addEventListener('click',s.bc,false)}else s.eh(s.wd,'onload',0,s.wdl)}};s.vs=function(x){var s=this,v=s.visitorSampling,g=s.visitorSamplingGroup,k='s_vsn_'+s.un+(g?'_'+g:''),n=s.c_r(k),e=new Date,y=e.getYear();e.setYear(y+10+(y<1900?1900:0));if(v){v*=100;if(!n){if(!s.c_w(k,x,e))return 0;n=x}if(n%10000>v)return 0}return 1};s.dyasmf=function(t,m){if(t&&m&&m.indexOf(t)>=0)return 1;return 0};s.dyasf=function(t,m){var s=this,i=t?t.indexOf('='):-1,n,x;if(i>=0&&m){var n=t.substring(0,i),x=t.substring(i+1);if(s.pt(x,',','dyasmf',m))return n}return 0};s.uns=function(){var s=this,x=s.dynamicAccountSelection,l=s.dynamicAccountList,m=s.dynamicAccountMatch,n,i;s.un=s.un.toLowerCase();if(x&&l){if(!m)m=s.wd.location.host;if(!m.toLowerCase)m=''+m;l=l.toLowerCase();m=m.toLowerCase();n=s.pt(l,';','dyasf',m);if(n)s.un=n}i=s.un.indexOf(',');s.fun=i<0?s.un:s.un.substring(0,i)};s.sa=function(un){var s=this;if(s.un&&s.mpc('sa',arguments))return;s.un=un;if(!s.oun)s.oun=un;else if((','+s.oun+',').indexOf(','+un+',')<0)s.oun+=','+un;s.uns()};s.m_i=function(n,a){var s=this,m,f=n.substring(0,1),r,l,i;if(!s.m_l)s.m_l=new Object;if(!s.m_nl)s.m_nl=new Array;m=s.m_l[n];if(!a&&m&&m._e&&!m._i)s.m_a(n);if(!m){m=new Object,m._c='s_m';m._in=s.wd.s_c_in;m._il=s._il;m._il[m._in]=m;s.wd.s_c_in++;m.s=s;m._n=n;m._l=new Array('_c','_in','_il','_i','_e','_d','_dl','s','n','_r','_g','_g1','_t','_t1','_x','_x1','_rs','_rr','_l');s.m_l[n]=m;s.m_nl[s.m_nl.length]=n}else if(m._r&&!m._m){r=m._r;r._m=m;l=m._l;for(i=0;i<l.length;i++)if(m[l[i]])r[l[i]]=m[l[i]];r._il[r._in]=r;m=s.m_l[n]=r}if(f==f.toUpperCase())s[n]=m;return m};s.m_a=new Function('n','g','e','if(!g)g=\"m_\"+n;var s=s_c_il['+s._in+'],c=s[g+\"_c\"],m,x,f=0;if(s.mpc(\"m_a\",arguments))return;if(!c)c=s.wd[\"s_\"+g+\"_c\"];if(c&&s_d)s[g]=new Function(\"s\",s_ft(s_d(c)));x=s[g];if(!x)x=s.wd[\\'s_\\'+g];if(!x)x=s.wd[g];m=s.m_i(n,1);if(x&&(!m._i||g!=\"m_\"+n)){m._i=f=1;if((\"\"+x).indexOf(\"function\")>=0)x(s);else s.m_m(\"x\",n,x,e)}m=s.m_i(n,1);if(m._dl)m._dl=m._d=0;s.dlt();return f');s.m_m=function(t,n,d,e){t='_'+t;var s=this,i,x,m,f='_'+t,r=0,u;if(s.m_l&&s.m_nl)for(i=0;i<s.m_nl.length;i++){x=s.m_nl[i];if(!n||x==n){m=s.m_i(x);u=m[t];if(u){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t](d,e);else if(d)u=m[t](d);else u=m[t]()}}if(u)r=1;u=m[t+1];if(u&&!m[f]){if((''+u).indexOf('function')>=0){if(d&&e)u=m[t+1](d,e);else if(d)u=m[t+1](d);else u=m[t+1]()}}m[f]=1;if(u)r=1}}return r};s.m_ll=function(){var s=this,g=s.m_dl,i,o;if(g)for(i=0;i<g.length;i++){o=g[i];if(o)s.loadModule(o.n,o.u,o.d,o.l,o.e,1);g[i]=0}};s.loadModule=function(n,u,d,l,e,ln){var s=this,m=0,i,g,o=0,f1,f2,c=s.h?s.h:s.b,b,tcf;if(n){i=n.indexOf(':');if(i>=0){g=n.substring(i+1);n=n.substring(0,i)}else g=\"m_\"+n;m=s.m_i(n)}if((l||(n&&!s.m_a(n,g)))&&u&&s.d&&c&&s.d.createElement){if(d){m._d=1;m._dl=1}if(ln){if(s.ssl)u=s.rep(u,'http:','https:');i='s_s:'+s._in+':'+n+':'+g;b='var s=s_c_il['+s._in+'],o=s.d.getElementById(\"'+i+'\");if(s&&o){if(!o.l&&s.wd.'+g+'){o.l=1;if(o.i)clearTimeout(o.i);o.i=0;s.m_a(\"'+n+'\",\"'+g+'\"'+(e?',\"'+e+'\"':'')+')}';f2=b+'o.c++;if(!s.maxDelay)s.maxDelay=250;if(!o.l&&o.c<(s.maxDelay*2)/100)o.i=setTimeout(o.f2,100)}';f1=new Function('e',b+'}');tcf=new Function('s','c','i','u','f1','f2','var e,o=0;try{o=s.d.createElement(\"script\");if(o){o.type=\"text/javascript\";'+(n?'o.id=i;o.defer=true;o.onload=o.onreadystatechange=f1;o.f2=f2;o.l=0;':'')+'o.src=u;c.appendChild(o);'+(n?'o.c=0;o.i=setTimeout(f2,100)':'')+'}}catch(e){o=0}return o');o=tcf(s,c,i,u,f1,f2)}else{o=new Object;o.n=n+':'+g;o.u=u;o.d=d;o.l=l;o.e=e;g=s.m_dl;if(!g)g=s.m_dl=new Array;i=0;while(i<g.length&&g[i])i++;g[i]=o}}else if(n){m=s.m_i(n);m._e=1}return m};s.voa=function(vo,r){var s=this,l=s.va_g,i,k,v,x;for(i=0;i<l.length;i++){k=l[i];v=vo[k];if(v||vo['!'+k]){if(!r&&(k==\"contextData\"||k==\"retrieveLightData\")&&s[k])for(x in s[k])if(!v[x])v[x]=s[k][x];s[k]=v}}};s.vob=function(vo){var s=this,l=s.va_g,i,k;for(i=0;i<l.length;i++){k=l[i];vo[k]=s[k];if(!vo[k])vo['!'+k]=1}};s.dlt=new Function('var s=s_c_il['+s._in+'],d=new Date,i,vo,f=0;if(s.dll)for(i=0;i<s.dll.length;i++){vo=s.dll[i];if(vo){if(!s.m_m(\"d\")||d.getTime()-vo._t>=s.maxDelay){s.dll[i]=0;s.t(vo)}else f=1}}if(s.dli)clearTimeout(s.dli);s.dli=0;if(f){if(!s.dli)s.dli=setTimeout(s.dlt,s.maxDelay)}else s.dll=0');s.dl=function(vo){var s=this,d=new Date;if(!vo)vo=new Object;s.vob(vo);vo._t=d.getTime();if(!s.dll)s.dll=new Array;s.dll[s.dll.length]=vo;if(!s.maxDelay)s.maxDelay=250;s.dlt()};s.gfid=function(){var s=this,d='0123456789ABCDEF',k='s_fid',fid=s.c_r(k),h='',l='',i,j,m=8,n=4,e=new Date,y;if(!fid||fid.indexOf('-')<0){for(i=0;i<16;i++){j=Math.floor(Math.random()*m);h+=d.substring(j,j+1);j=Math.floor(Math.random()*n);l+=d.substring(j,j+1);m=n=16}fid=h+'-'+l;}y=e.getYear();e.setYear(y+2+(y<1900?1900:0));if(!s.c_w(k,fid,e))fid=0;return fid};s.applyADMS=function(){var s=this,vb=new Object;if(s.wd.ADMS&&!s.visitorID&&!s.admsc){if(!s.adms)s.adms=ADMS.getDefault();if(!s.admsq){s.visitorID=s.adms.getVisitorID(new Function('v','var s=s_c_il['+s._in+'],l=s.admsq,i;if(v==-1)v=0;if(v)s.visitorID=v;s.admsq=0;if(l){s.admsc=1;for(i=0;i<l.length;i++)s.t(l[i]);s.admsc=0;}'));if(!s.visitorID)s.admsq=new Array}if(s.admsq){s.vob(vb);vb['!visitorID']=0;s.admsq.push(vb);return 1}else{if(s.visitorID==-1)s.visitorID=0}}return 0};s.track=s.t=function(vo){var s=this,trk=1,tm=new Date,sed=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime(),sess='s'+Math.floor(tm.getTime()/10800000)%10+sed,y=tm.getYear(),vt=tm.getDate()+'/'+tm.getMonth()+'/'+(y<1900?y+1900:y)+' '+tm.getHours()+':'+tm.getMinutes()+':'+tm.getSeconds()+' '+tm.getDay()+' '+tm.getTimezoneOffset(),tcf,tfs=s.gtfs(),ta=-1,q='',qs='',code='',vb=new Object;if(s.mpc('t',arguments))return;s.gl(s.vl_g);s.uns();s.m_ll();if(!s.td){var tl=tfs.location,a,o,i,x='',c='',v='',p='',bw='',bh='',j='1.0',k=s.c_w('s_cc','true',0)?'Y':'N',hp='',ct='',pn=0,ps;if(String&&String.prototype){j='1.1';if(j.match){j='1.2';if(tm.setUTCDate){j='1.3';if(s.isie&&s.ismac&&s.apv>=5)j='1.4';if(pn.toPrecision){j='1.5';a=new Array;if(a.forEach){j='1.6';i=0;o=new Object;tcf=new Function('o','var e,i=0;try{i=new Iterator(o)}catch(e){}return i');i=tcf(o);if(i&&i.next){j='1.7';if(a.reduce){j='1.8';if(j.trim){j='1.8.1';if(Date.parse){j='1.8.2';if(Object.create)j='1.8.5'}}}}}}}}}if(s.apv>=4)x=screen.width+'x'+screen.height;if(s.isns||s.isopera){if(s.apv>=3){v=s.n.javaEnabled()?'Y':'N';if(s.apv>=4){c=screen.pixelDepth;bw=s.wd.innerWidth;bh=s.wd.innerHeight}}s.pl=s.n.plugins}else if(s.isie){if(s.apv>=4){v=s.n.javaEnabled()?'Y':'N';c=screen.colorDepth;if(s.apv>=5){bw=s.d.documentElement.offsetWidth;bh=s.d.documentElement.offsetHeight;if(!s.ismac&&s.b){tcf=new Function('s','tl','var e,hp=0;try{s.b.addBehavior(\"#default#homePage\");hp=s.b.isHomePage(tl)?\"Y\":\"N\"}catch(e){}return hp');hp=tcf(s,tl);tcf=new Function('s','var e,ct=0;try{s.b.addBehavior(\"#default#clientCaps\");ct=s.b.connectionType}catch(e){}return ct');ct=tcf(s)}}}else r=''}if(s.pl)while(pn<s.pl.length&&pn<30){ps=s.fl(s.pl[pn].name,100)+';';if(p.indexOf(ps)<0)p+=ps;pn++}s.resolution=x;s.colorDepth=c;s.javascriptVersion=j;s.javaEnabled=v;s.cookiesEnabled=k;s.browserWidth=bw;s.browserHeight=bh;s.connectionType=ct;s.homepage=hp;s.plugins=p;s.td=1}if(vo){s.vob(vb);s.voa(vo)}s.fid=s.gfid();if(s.applyADMS())return '';if((vo&&vo._t)||!s.m_m('d')){if(s.usePlugins)s.doPlugins(s);if(!s.abort){var l=s.wd.location,r=tfs.document.referrer;if(!s.pageURL)s.pageURL=l.href?l.href:l;if(!s.referrer&&!s._1_referrer){s.referrer=r;s._1_referrer=1}s.m_m('g');if(s.lnk||s.eo){var o=s.eo?s.eo:s.lnk,p=s.pageName,w=1,t=s.ot(o),n=s.oid(o),x=o.s_oidt,h,l,i,oc;if(s.eo&&o==s.eo){while(o&&!n&&t!='BODY'){o=o.parentElement?o.parentElement:o.parentNode;if(o){t=s.ot(o);n=s.oid(o);x=o.s_oidt}}if(!n||t=='BODY')o='';if(o){oc=o.onclick?''+o.onclick:'';if((oc.indexOf('s_gs(')>=0&&oc.indexOf('.s_oc(')<0)||oc.indexOf('.tl(')>=0)o=0}}if(o){if(n)ta=o.target;h=s.oh(o);i=h.indexOf('?');h=s.linkLeaveQueryString||i<0?h:h.substring(0,i);l=s.linkName;t=s.linkType?s.linkType.toLowerCase():s.lt(h);if(t&&(h||l)){s.pe='lnk_'+(t=='d'||t=='e'?t:'o');s.pev1=(h?s.ape(h):'');s.pev2=(l?s.ape(l):'')}else trk=0;if(s.trackInlineStats){if(!p){p=s.pageURL;w=0}t=s.ot(o);i=o.sourceIndex;if(o.dataset&&o.dataset.sObjectId){s.wd.s_objectID=o.dataset.sObjectId;}else if(o.getAttribute&&o.getAttribute('data-s-object-id')){s.wd.s_objectID=o.getAttribute('data-s-object-id');}else if(s.useForcedLinkTracking){s.wd.s_objectID='';oc=o.onclick?''+o.onclick:'';if(oc){var ocb=oc.indexOf('s_objectID'),oce,ocq,ocx;if(ocb>=0){ocb+=10;while(ocb<oc.length&&(\"= \\t\\r\\n\").indexOf(oc.charAt(ocb))>=0)ocb++;if(ocb<oc.length){oce=ocb;ocq=ocx=0;while(oce<oc.length&&(oc.charAt(oce)!=';'||ocq)){if(ocq){if(oc.charAt(oce)==ocq&&!ocx)ocq=0;else if(oc.charAt(oce)==\"\\\\\")ocx=!ocx;else ocx=0;}else{ocq=oc.charAt(oce);if(ocq!='\"'&&ocq!=\"'\")ocq=0}oce++;}oc=oc.substring(ocb,oce);if(oc){o.s_soid=new Function('s','var e;try{s.wd.s_objectID='+oc+'}catch(e){}');o.s_soid(s)}}}}}if(s.gg('objectID')){n=s.gg('objectID');x=1;i=1}if(p&&n&&t)qs='&pid='+s.ape(s.fl(p,255))+(w?'&pidt='+w:'')+'&oid='+s.ape(s.fl(n,100))+(x?'&oidt='+x:'')+'&ot='+s.ape(t)+(i?'&oi='+i:'')}}else trk=0}if(trk||qs){s.sampled=s.vs(sed);if(trk){if(s.sampled)code=s.mr(sess,(vt?'&t='+s.ape(vt):'')+s.hav()+q+(qs?qs:s.rq()),0,ta);qs='';s.m_m('t');if(s.p_r)s.p_r();s.referrer=s.lightProfileID=s.retrieveLightProfiles=s.deleteLightProfiles=''}s.sq(qs)}}}else s.dl(vo);if(vo)s.voa(vb,1);s.abort=0;s.pageURLRest=s.lnk=s.eo=s.linkName=s.linkType=s.wd.s_objectID=s.ppu=s.pe=s.pev1=s.pev2=s.pev3='';if(s.pg)s.wd.s_lnk=s.wd.s_eo=s.wd.s_linkName=s.wd.s_linkType='';return code};s.trackLink=s.tl=function(o,t,n,vo,f){var s=this;s.lnk=o;s.linkType=t;s.linkName=n;if(f){s.bct=o;s.bcf=f}s.t(vo)};s.trackLight=function(p,ss,i,vo){var s=this;s.lightProfileID=p;s.lightStoreForSeconds=ss;s.lightIncrementBy=i;s.t(vo)};s.setTagContainer=function(n){var s=this,l=s.wd.s_c_il,i,t,x,y;s.tcn=n;if(l)for(i=0;i<l.length;i++){t=l[i];if(t&&t._c=='s_l'&&t.tagContainerName==n){s.voa(t);if(t.lmq)for(i=0;i<t.lmq.length;i++){x=t.lmq[i];y='m_'+x.n;if(!s[y]&&!s[y+'_c']){s[y]=t[y];s[y+'_c']=t[y+'_c']}s.loadModule(x.n,x.u,x.d)}if(t.ml)for(x in t.ml)if(s[x]){y=s[x];x=t.ml[x];for(i in x)if(!Object.prototype[i]){if(typeof(x[i])!='function'||(''+x[i]).indexOf('s_c_il')<0)y[i]=x[i]}}if(t.mmq)for(i=0;i<t.mmq.length;i++){x=t.mmq[i];if(s[x.m]){y=s[x.m];if(y[x.f]&&typeof(y[x.f])=='function'){if(x.a)y[x.f].apply(y,x.a);else y[x.f].apply(y)}}}if(t.tq)for(i=0;i<t.tq.length;i++)s.t(t.tq[i]);t.s=s;return}}};s.wd=window;s.ssl=(s.wd.location.protocol.toLowerCase().indexOf('https')>=0);s.d=document;s.b=s.d.body;if(s.d.getElementsByTagName){s.h=s.d.getElementsByTagName('HEAD');if(s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;s.ns6=s.u.indexOf('Netscape6/');var apn=s.n.appName,v=s.n.appVersion,ie=v.indexOf('MSIE '),o=s.u.indexOf('Opera '),i;if(v.indexOf('Opera')>=0||o>0)apn='Opera';s.isie=(apn=='Microsoft Internet Explorer');s.isns=(apn=='Netscape');s.isopera=(apn=='Opera');s.ismac=(s.u.indexOf('Mac')>=0);if(o>0)s.apv=parseFloat(s.u.substring(o+6));else if(ie>0){s.apv=parseInt(i=v.substring(ie+5));if(s.apv>3)s.apv=parseFloat(i)}else if(s.ns6>0)s.apv=parseFloat(s.u.substring(s.ns6+10));else s.apv=parseFloat(v);s.em=0;if(s.em.toPrecision)s.em=3;else if(String.fromCharCode){i=escape(String.fromCharCode(256)).toUpperCase();s.em=(i=='%C4%80'?2:(i=='%U0100'?1:0))}if(s.oun)s.sa(s.oun);s.sa(un);s.vl_l='timestamp,dynamicVariablePrefix,visitorID,fid,vmk,visitorMigrationKey,visitorMigrationServer,visitorMigrationServerSecure,ppu,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,pageName,pageURL,referrer,contextData,currencyCode,lightProfileID,lightStoreForSeconds,lightIncrementBy,retrieveLightProfiles,deleteLightProfiles,retrieveLightData';s.va_l=s.sp(s.vl_l,',');s.vl_mr=s.vl_m='timestamp,charSet,visitorNamespace,cookieDomainPeriods,cookieLifetime,contextData,lightProfileID,lightStoreForSeconds,lightIncrementBy';s.vl_t=s.vl_l+',variableProvider,channel,server,pageType,transactionID,purchaseID,campaign,state,zip,events,events2,products,linkName,linkType';var n;for(n=1;n<=75;n++){s.vl_t+=',prop'+n+',eVar'+n;s.vl_m+=',prop'+n+',eVar'+n}for(n=1;n<=5;n++)s.vl_t+=',hier'+n;for(n=1;n<=3;n++)s.vl_t+=',list'+n;s.va_m=s.sp(s.vl_m,',');s.vl_l2=',tnt,pe,pev1,pev2,pev3,resolution,colorDepth,javascriptVersion,javaEnabled,cookiesEnabled,browserWidth,browserHeight,connectionType,homepage,pageURLRest,plugins';s.vl_t+=s.vl_l2;s.va_t=s.sp(s.vl_t,',');s.vl_g=s.vl_t+',trackingServer,trackingServerSecure,trackingServerBase,fpCookieDomainPeriods,disableBufferedRequests,mobile,visitorSampling,visitorSamplingGroup,dynamicAccountSelection,dynamicAccountList,dynamicAccountMatch,trackDownloadLinks,trackExternalLinks,trackInlineStats,linkLeaveQueryString,linkDownloadFileTypes,linkExternalFilters,linkInternalFilters,linkTrackVars,linkTrackEvents,linkNames,lnk,eo,lightTrackVars,_1_referrer,un';s.va_g=s.sp(s.vl_g,',');s.pg=pg;s.gl(s.vl_g);s.contextData=new Object;s.retrieveLightData=new Object;if(!ss)s.wds();if(pg){s.wd.s_co=function(o){return o};s.wd.s_gs=function(un){s_gi(un,1,1).t()};s.wd.s_dc=function(un){s_gi(un,1).t()}}",j=window,k=j.s_c_il,l=navigator,m=l.userAgent,n=l.appVersion,o=n.indexOf("MSIE "),p=m.indexOf("Netscape6/");if(a&&(a=a.toLowerCase(),k))for(f=0;2>f;f++)for(e=0;e<k.length;e++)if(h=k[e],g=h._c,(!g||"s_c"==g||f>0&&"s_l"==g)&&(h.oun==a||h.fs&&h.sa&&h.fs(h.oun,a))){if(h.sa&&h.sa(a),"s_c"==g)return h}else h=0;return j.s_an="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",j.s_sp=new Function("x","d","var a=new Array,i=0,j;if(x){if(x.split)a=x.split(d);else if(!d)for(i=0;i<x.length;i++)a[a.length]=x.substring(i,i+1);else while(i>=0){j=x.indexOf(d,i);a[a.length]=x.substring(i,j<0?x.length:j);i=j;if(i>=0)i+=d.length}}return a"),j.s_jn=new Function("a","d","var x='',i,j=a.length;if(a&&j>0){x=a[0];if(j>1){if(a.join)x=a.join(d);else for(i=1;i<j;i++)x+=d+a[i]}}return x"),j.s_rep=new Function("x","o","n","return s_jn(s_sp(x,o),n)"),j.s_d=new Function("x","var t='`^@$#',l=s_an,l2=new Object,x2,d,b=0,k,i=x.lastIndexOf('~~'),j,v,w;if(i>0){d=x.substring(0,i);x=x.substring(i+2);l=s_sp(l,'');for(i=0;i<62;i++)l2[l[i]]=i;t=s_sp(t,'');d=s_sp(d,'~');i=0;while(i<5){v=0;if(x.indexOf(t[i])>=0) {x2=s_sp(x,t[i]);for(j=1;j<x2.length;j++){k=x2[j].substring(0,1);w=t[i]+k;if(k!=' '){v=1;w=d[b+l2[k]]}x2[j]=w+x2[j].substring(1)}}if(v)x=s_jn(x2,'');else{w=t[i]+' ';if(x.indexOf(w)>=0)x=s_rep(x,w,t[i]);i++;b+=62}}}return x"),j.s_fe=new Function("c","return s_rep(s_rep(s_rep(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")"),j.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':a"),j.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){if(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")'+c.substring(e+1);s=c.indexOf('=function(')}return c;"),i=s_d(i),o>0?(d=parseInt(e=n.substring(o+5)),
d>3&&(d=parseFloat(e))):d=p>0?parseFloat(m.substring(p+10)):parseFloat(n),(5>d||n.indexOf("Opera")>=0||m.indexOf("Opera")>=0)&&(i=s_ft(i)),h||(h=new Object,j.s_c_in||(j.s_c_il=new Array,j.s_c_in=0),h._il=j.s_c_il,h._in=j.s_c_in,h._il[h._in]=h,j.s_c_in++),h._c="s_c",new Function("s","un","pg","ss",i)(h,a,b,c),h}function e(){var a,b,d,e=window,f=e.s_giq;if(f)for(a=0;a<f.length;a++)b=f[a],d=c(b.oun),d.sa(b.un),d.setTagContainer(b.tagContainerName);e.s_giq=0}var f="redhatcustomerportaldev",g=c(f);g.dynamicAccountSelection=!0,g.dynamicAccountList="redhatglobaltest=usersys.redhat.com,access.devgssci.devlab.phx1.redhat.com,qa.redhat.com;redhatglobal,redhatcustomerportal=access.redhat.com,rhn.redhat.com,remotesupport.redhat.com,hardware.redhat.com;redhatglobal=redhat.com;",g.dynamicAccountMatch=window.location.host+window.location.pathname,g.charSet="UTF-8",g.currencyCode="USD",g.trackDownloadLinks=!0,g.trackExternalLinks=!0,g.trackInlineStats=!0,g.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx,ogg,rm,ram,swf,flv,jar,iso,dmg,msi,pkg,rpm,vfd,z01,z02,tar,gz,ova,ovf,qcow2,img,bz2,epub",g.linkInternalFilters="javascript:,redhat.com,redhatmagazine.com,redhat.de,redhat.es,redhat.fr,redhat.it,redhat.com.cn,redhat.com.br,redhat.com.au,redhat.in,jboss.org,jboss.com,mobicents.org,hibernate.org,wildfly.org,careers-redhat.icims.com,redhat.sc.stg.hodesdigital.com,redhat.sc.hodesdigital.com",g.linkLeaveQueryString=!1,g.linkTrackVars="None",g.linkTrackEvents="None",g.server="customer portal",g.visitorNamespace="redhat",g.trackingServer="mtrcs.redhat.com",g.trackingServerSecure="smtrcs.redhat.com",g.loadModule("Media"),g.Media.autoTrack=!1,g.Media.trackMilestones="25,50,75",g.Media.segmentByMilestones=!0,g.Media.playerName="cpMediaelement",g.Media.trackWhilePlaying=!0,g.Media.trackUsingContextData=!0,g.Media.trackVars="events,prop38,eVar38,eVar39,eVar40",g.Media.trackEvents="event35,event36,event37,event38,event39,event40,event41",g.Media.contextDataMapping={"a.media.name":"eVar38,prop38","a.media.segment":"eVar39","a.contentType":"eVar40","a.media.timePlayed":"event41","a.media.view":"event38","a.media.segmentView":"event39","a.media.complete":"event40","a.media.milestones":{25:"event35",50:"event36",75:"event37"}},g.usePlugins=!0,g.doPlugins=b,g.setCookieParam=new Function("c","v","x","t","var s=this,cr,d;cr=s.c_r(c);if(cr&&!x){s.c_w(c,cr);return cr};if(!t){d='';}else{d=new Date;d.setTime(d.getTime()+(t*24*60*60*1000));};if(v){s.c_w(c,v,d)};return v;"),g.getQueryParam=new Function("qp","d","var s=this,v='',i,t;d=d?d:'';while(qp){i=qp.indexOf(',');i=i<0?qp.length:i;t=s.gcgi(qp.substring(0,i));if(t)v+=v?d+t:t;qp=qp.substring(i==qp.length?i:i+1)}return v"),g.gcgi=new Function("k","var v='',s=this;if(k&&s.wd.location.search){var q=s.wd.location.search.toLowerCase(),qq=q.indexOf('?');q=qq<0?q:q.substring(qq+1);v=s.pt(q,'&','cgif',k.toLowerCase())}return v"),g.cgif=new Function("t","k","if(t){var s=this,i=t.indexOf('='),sk=i<0?t:t.substring(0,i),sv=i<0?'True':t.substring(i+1);if(sk.toLowerCase()==k)return s.epa(sv)}return ''"),g.getQueryParamNC=new Function("p","d","u","var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:''+s.wd.location);u=u=='f'?''+s.gtfs().location:u;while(p){i=p.indexOf(',');i=i<0?p.length:i;t=s.p_gpv_nc(p.substring(0,i),u);if(t)v+=v?d+t:t;p=p.substring(i==p.length?i:i+1)}return v"),g.p_gpv_nc=new Function("k","u","var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v=s.pt(q,'&','p_gvf_nc',k)}return v"),g.p_gvf_nc=new Function("t","k","if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'True':t.substring(i+1);if(p==k)return s.epa(v)}return ''"),g.getValOnce=new Function("v","c","e","var s=this,a=new Date,v=v?v:v='',c=c?c:c='s_gvo',e=e?e:0,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*86400000);s.c_w(c,v,e?a:0);}return v==k?'':v"),g.getNewRepeat=new Function("var s=this,e=new Date(),cval,ct=e.getTime(),y=e.getYear();e.setTime(ct+30*24*60*60*1000);cval=s.c_r('s_nr');if(cval.length==0){s.c_w('s_nr',ct,e);return 'New';}if(cval.length!=0&&ct-cval<30*60*1000){s.c_w('s_nr',ct,e);return 'New';}if(cval<1123916400001){e.setTime(cval+30*24*60*60*1000);s.c_w('s_nr',ct,e);return 'Repeat';}else return 'Repeat';"),g.getVisitNum=new Function("var s=this,e=new Date(),cval,cvisit,ct=e.getTime(),c='s_vnum',c2='s_invisit';e.setTime(ct+30*24*60*60*1000);cval=s.c_r(c);if(cval){var i=cval.indexOf('&vn='),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else return 'unknown visit number';}else{if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+'&vn='+str,e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return str;}else{s.c_w(c,ct+30*24*60*60*1000+'&vn=1',e);e.setTime(ct+30*60*1000);s.c_w(c2,'true',e);return 1;}}");var h=getCookie("rh_elqCustomerGUID");if(h)g.prop35=g.eVar35=h;else{var i=70,j=new Date,k=j.getMilliseconds();if("undefined"!=typeof elqCurE&&"undefined"!=typeof i){var l=document.createElement("script");l.src=[elqCurE,"?pps=",i,"&siteid=",elqSiteID,"&ref=",elqReplace(elqReplace(elqReplace(elqReplace(elqReplace(elqReplace(location.href,"&","%26"),"#","%23"),'"',"%22"),"'","%27"),"<","%3C"),">","%3E"),"&ms=",k].join(""),document.getElementsByTagName("head")[0].appendChild(l)}var m=function(){var a="rh_elqCustomerGUID",b=".redhat.com",c=2592e6;if("function"==typeof GetElqCustomerGUID){var d=GetElqCustomerGUID(),e=new Date,f=new Date(e.getTime()+c);document.cookie=a+"="+escape(d)+";expires="+f.toGMTString()+";path=/;domain="+b,g.prop35=g.eVar35=d}};window.addEventListener?window.addEventListener("load",m,!1):window.attachEvent&&window.attachEvent("onload",function(){return m.apply(window,new Array(window.event))})}return g.maxDelay=500,g.loadModule("Integrate"),g.Integrate.onLoad=function(a,b){a.Integrate.add("Demandbase");var c=a.Integrate.Demandbase;c._key="b6b603b47ded9a3eff17c78423bbc773b9817cf6",c._apiURL="//api.demandbase.com/api/v2/ip.js?key=[_key]&var=[VAR]&rnd=[RAND]"+(c._testIP?"&query="+c._testIP:""),c._delim=":",c._setTnT=!1,c._tntVarPrefix="db_",c._dimensionArray=[{id:"demandbase_sid",max_size:10},{id:"company_name",max_size:40},{id:"industry",max_size:40},{id:"sub_industry",max_size:40},{id:"employee_range",max_size:30},{id:"revenue_range",max_size:10},{id:"audience",max_size:30},{id:"audience_segment",max_size:30}],c._dimensionArrayCustom=[{id:"",max_size:30},{id:"",max_size:30},{id:"",max_size:30},{id:"",max_size:30},{id:"",max_size:30},{id:"",max_size:30},{id:"",max_size:30},{id:"",max_size:30}],c._cName="s_dmdbase",c._contextName="s_dmdbase",c._contextNameCustom="s_dmdbase_custom",c._setVarsCalled=!1,c._gpv=new Function("s","n","var cval,c=this._cName,o;cval=this.c_r(s,c);if(!cval){cval='';}o=this._q2o(cval);return o[n];"),c._q2o=new Function("q","var nv,i,o={},a=q.split('&');for(i=0;i<a.length;i++){nv=a[i].split('=');if(nv.length==2){o[nv[0]]=unescape(nv[1]);}}return o;"),c._o2q=new Function("o","var q='',c=0;for(var n in o){q+=(c?'&':'')+n+('='+escape(o[n]));c++;}return q;"),c._spv=new Function("s","n","v","var cval,c=this._cName,o;cval=this.c_r(s,c);if(!cval){cval='';}o=this._q2o(cval);o[n]=v;cval=this._o2q(o);this.c_w(s,c,cval,0);if(!this.c_r(s,c)){return '';}else {return cval;}"),c.c_r=function(a,b){return a.Util&&a.Util.cookieRead?a.Util.cookieRead(b):a.c_r(b)},c.c_w=function(a,b,c){return a.Util&&a.Util.cookieWrite?a.Util.cookieWrite(b,c):a.c_w(b,c)},c.compact=function(a,b){for(var c=[],d=0;d<b.length;d++){var e=b[d].id,f=b[d].max_size;if(f||(f=20),e&&a[e]){var g=""+a[e];g=g.replace(this._delim," "),c.push(g.substring(0,f))}else c.push("")}return c.join(this._delim)},c.flatten=function(a){if(null==a||"object"!=typeof a)return a;for(d in a)if("_"!=d.charAt(0)&&"object"==typeof a[d]&&null!==a[d]){for(nd in a[d])a[d+"_"+nd]=a[d][nd];delete a[d]}return a},c._setTnTParams=function(a){var b,c,d,e,f,g=(this._cName,window),h={};if(e=this._gpv(a,"sentAT"),("undefined"==typeof e||"T"!=e)&&(f=this._gpv(a,"rsp"),"undefined"!=f&&"nomatch"!=f&&"undefined"!=typeof g.mboxDefine&&"undefined"!=typeof g.mboxUpdate)){var i=document.createElement("div");b=this._cName+"_div",i.setAttribute("id",b),i.style.display="none",document.body.appendChild(i),c="mbox_Genesis_Demandbase_hidden",g.mboxDefine(b,c);var j=[],k=this._gpv(a,"cData"),l=this._gpv(a,"cDataCustom"),m=[],n=this._dimensionArray,o=this._dimensionArrayCustom;if(j.push(c),k&&(m=k.split(this._delim),8==m.length)){for(d=0;16>d;d++)h["p"+d]="";for(d=0;8>d;d++)n[d].id&&j.push("profile."+this._tntVarPrefix+n[d].id+"="+m[d]);if(l&&o&&(m=l.split(this._delim),8==m.length))for(d=8;16>d;d++)o[d-8].id&&j.push("profile."+this._tntVarPrefix+o[d-8].id+"="+m[d-8]);g.mboxUpdate.apply(g,j),this._spv(a,"sentAT","T")}}},c.setVars=function(a,b){if(this.saveResponse(b),!this._setVarsCalled){if("undefined"==typeof d)var d=this._gpv(a,"cData");if("undefined"!=typeof d){var e=this._gpv(a,"sentAA");if("undefined"==typeof e&&(this._spv(a,"sentAA","T"),a.contextData[this._contextName]=d,c._dimensionArrayCustom)){var f=this._gpv(a,"cDataCustom");a.contextData[this._contextNameCustom]=f}this._setTnT&&this._setTnTParams(a)}else if(this.VAR){window.s_1_Integrate_Demandbase=this;var g=this.VAR+"";window.setTimeout(function(){s_1_Integrate_Demandbase.saveResponse(window[g])},1500)}}this._setVarsCalled=!0},c.saveResponse=function(b){var c=this.flatten(b);if(c&&"object"==typeof c&&c.hasOwnProperty("ip")){if("undefined"!=typeof c.demandbase_sid){this._spv(a,"rsp","match");var d=this.compact(c,this._dimensionArray);if(this._spv(a,"cData",d),this._dimensionArrayCustom){var e=this.compact(c,this._dimensionArrayCustom);this._spv(a,"cDataCustom",e)}return"match"}return this._spv(a,"rsp","nomatch"),"nomatch"}};var e=c._gpv(a,"rsp");"undefined"==typeof e&&c.get(window.location.protocol+c._apiURL)},g.m_Media_c="var m=s.m_i('Media');if(m.completeByCloseOffset==undefined)m.completeByCloseOffset=1;if(m.completeCloseOffsetThreshold==undefined)m.completeCloseOffsetThreshold=1;m.cn=function(n){var m=this;return m.s.rep(m.s.rep(m.s.rep(n,\"\\n\",''),\"\\r\",''),'--**--','')};m.open=function(n,l,p,b){var m=this,i=new Object,tm=new Date,a='',x;n=m.cn(n);if(!l)l=-1;if(n&&p){if(!m.l)m.l=new Object;if(m.l[n])m.close(n);if(b&&b.id)a=b.id;if(a)for (x in m.l)if(m.l[x]&&m.l[x].a==a)m.close(m.l[x].n);i.n=n;i.l=l;i.o=0;i.x=0;i.p=m.cn(m.playerName?m.playerName:p);i.a=a;i.t=0;i.ts=0;i.s=Math.floor(tm.getTime()/1000);i.lx=0;i.lt=i.s;i.lo=0;i.e='';i.to=-1;i.tc=0;i.fel=new Object;i.vt=0;i.sn=0;i.sx=\"\";i.sl=0;i.sg=0;i.sc=0;i.us=0;i.ad=0;i.adpn;i.adpp;i.adppp;i.clk;i.CPM;i.co=0;i.cot=0;i.lm=0;i.lom=0;m.l[n]=i}};m.openAd=function(n,l,p,pn,pp,ppp,CPM,b){var m=this,i=new Object;n=m.cn(n);m.open(n,l,p,b);i=m.l[n];if(i){i.ad=1;i.adpn=m.cn(pn);i.adpp=pp;i.adppp=ppp;i.CPM=CPM}};m._delete=function(n){var m=this,i;n=m.cn(n);i=m.l[n];m.l[n]=0;if(i&&i.m)clearTimeout(i.m.i)};m.close=function(n){this.e(n,0,-1)};m.play=function(n,o,sn,sx,sl){var m=this,i;i=m.e(n,1,o,sn,sx,sl);if(i&&!i.m){i.m=new Object;i.m.m=new Function('var m=s_c_il['+m._in+'],i;if(m.l){i=m.l[\"'+m.s.rep(i.n,'\"','\\\\\"')+'\"];if(i){if(i.lx==1)m.e(i.n,3,-1);i.m.i=setTimeout(i.m.m,1000)}}');i.m.m()}};m.click=function(n,o){this.e(n,7,o)};m.complete=function(n,o){this.e(n,5,o)};m.stop=function(n,o){this.e(n,2,o)};m.track=function(n){this.e(n,4,-1)};m.bcd=function(vo,i){var m=this,ns='a.media.',v=vo.linkTrackVars,e=vo.linkTrackEvents,pe='m_i',pev3,c=vo.contextData,x;if(i.ad){ns+='ad.';if(i.adpn){c['a.media.name']=i.adpn;c[ns+'pod']=i.adpp;c[ns+'podPosition']=i.adppp;}if(!i.vt)c[ns+'CPM']=i.CPM;}if (i.clk) {c[ns+'clicked']=1;i.clk=0}c['a.contentType']='video'+(i.ad?'Ad':'');c['a.media.channel']=m.channel;c[ns+'name']=i.n;c[ns+'playerName']=i.p;if(i.l>0)c[ns+'length']=i.l;if(Math.floor(i.ts)>0)c[ns+'timePlayed']=Math.floor(i.ts);if(!i.vt){c[ns+'view']=true;pe='m_s';i.vt=1}if(i.sx){c[ns+'segmentNum']=i.sn;c[ns+'segment']=i.sx;if(i.sl>0)c[ns+'segmentLength']=i.sl;if(i.sc&&i.ts>0)c[ns+'segmentView']=true}if(!i.cot&&i.co){c[ns+\"complete\"]=true;i.cot=1}if(i.lm>0)c[ns+'milestone']=i.lm;if(i.lom>0)c[ns+'offsetMilestone']=i.lom;if(v)for(x in c)v+=',contextData.'+x;pev3=c['a.contentType'];vo.pe=pe;vo.pev3=pev3;var d=m.contextDataMapping,y,a,l,n;if(d){vo.events2='';if(v)v+=',events';for(x in d){if(x.substring(0,ns.length)==ns)y=x.substring(ns.length);else y=\"\";a=d[x];if(typeof(a)=='string'){l=m.s.sp(a,',');for(n=0;n<l.length;n++){a=l[n];if(x==\"a.contentType\"){if(v)v+=','+a;vo[a]=c[x]}else if(y=='view'||y=='segmentView'||y=='clicked'||y=='complete'||y=='timePlayed'||y=='CPM'){if(e)e+=','+a;if(y=='timePlayed'||y=='CPM'){if(c[x])vo.events2+=(vo.events2?',':'')+a+'='+c[x];}else if(c[x])vo.events2+=(vo.events2?',':'')+a}else if(y=='segment'&&c[x+'Num']){if(v)v+=','+a;vo[a]=c[x+'Num']+':'+c[x]}else{if(v)v+=','+a;vo[a]=c[x]}}}else if(y=='milestones'||y=='offsetMilestones'){x=x.substring(0,x.length-1);if(c[x]&&d[x+'s'][c[x]]){if(e)e+=','+d[x+'s'][c[x]];vo.events2+=(vo.events2?',':'')+d[x+'s'][c[x]]}}if(c[x])c[x]=undefined;if(y=='segment'&&c[x+'Num'])c[x+\"Num\"]=undefined}}vo.linkTrackVars=v;vo.linkTrackEvents=e};m.bpe=function(vo,i,x,o){var m=this,pe='m_o',pev3,d='--**--';pe='m_o';if(!i.vt){pe='m_s';i.vt=1}else if(x==4)pe='m_i';pev3=m.s.ape(i.n)+d+Math.floor(i.l>0?i.l:1)+d+m.s.ape(i.p)+d+Math.floor(i.t)+d+i.s+d+(i.to>=0?'L'+Math.floor(i.to):'')+i.e+(x!=0&&x!=2?'L'+Math.floor(o):'');vo.pe=pe;vo.pev3=pev3};m.e=function(n,x,o,sn,sx,sl,pd){var m=this,i,tm=new Date,ts=Math.floor(tm.getTime()/1000),c,l,v=m.trackVars,e=m.trackEvents,ti=m.trackSeconds,tp=m.trackMilestones,to=m.trackOffsetMilestones,sm=m.segmentByMilestones,so=m.segmentByOffsetMilestones,z=new Array,j,t=1,w=new Object,x,ek,tc,vo=new Object;if(!m.channel)m.channel=m.s.wd.location.hostname;n=m.cn(n);i=n&&m.l&&m.l[n]?m.l[n]:0;if(i){if(i.ad){ti=m.adTrackSeconds;tp=m.adTrackMilestones;to=m.adTrackOffsetMilestones;sm=m.adSegmentByMilestones;so=m.adSegmentByOffsetMilestones}if(o<0){if(i.lx==1&&i.lt>0)o=(ts-i.lt)+i.lo;else o=i.lo}if(i.l>0)o=o<i.l?o:i.l;if(o<0)o=0;i.o=o;if(i.l>0){i.x=(i.o/i.l)*100;i.x=i.x>100?100:i.x}if(i.lo<0)i.lo=o;tc=i.tc;w.name=n;w.ad=i.ad;w.length=i.l;w.openTime=new Date;w.openTime.setTime(i.s*1000);w.offset=i.o;w.percent=i.x;w.playerName=i.p;if(i.to<0)w.mediaEvent=w.event='OPEN';else w.mediaEvent=w.event=(x==1?'PLAY':(x==2?'STOP':(x==3?'MONITOR':(x==4?'TRACK':(x==5?'COMPLETE':(x==7?'CLICK':('CLOSE')))))));if(!pd){if(i.pd)pd=i.pd}else i.pd=pd;w.player=pd;if(x>2||(x!=i.lx&&(x!=2||i.lx==1))) {if(!sx){sn=i.sn;sx=i.sx;sl=i.sl}if(x){if(x==1)i.lo=o;if((x<=3||x>=5)&&i.to>=0){t=0;v=e=\"None\";if(i.to!=o){l=i.to;if(l>o){l=i.lo;if(l>o)l=o}z=tp?m.s.sp(tp,','):0;if(i.l>0&&z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&(l/i.l)*100<c&&i.x>=c){t=1;j=z.length;w.mediaEvent=w.event='MILESTONE';i.lm=w.milestone=c}}z=to?m.s.sp(to,','):0;if(z&&o>=l)for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c&&l<c&&o>=c){t=1;j=z.length;w.mediaEvent=w.event='OFFSET_MILESTONE';i.lom=w.offsetMilestone=c}}}}if(i.sg||!sx){if(sm&&tp&&i.l>0){z=m.s.sp(tp,',');if(z){z[z.length]='100';l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c){if(i.x<c){sn=j+1;sx='M:'+l+'-'+c;j=z.length}l=c}}}}else if(so&&to){z=m.s.sp(to,',');if(z){z[z.length]=''+(i.l>0?i.l:'E');l=0;for(j=0;j<z.length;j++){c=z[j]?parseFloat(''+z[j]):0;if(c||z[j]=='E'){if(o<c||z[j]=='E'){sn=j+1;sx='O:'+l+'-'+c;j=z.length}l=c}}}}if(sx)i.sg=1}if((sx||i.sx)&&sx!=i.sx){i.us=1;if(!i.sx){i.sn=sn;i.sx=sx}if(i.to>=0)t=1}if((x>=2||i.x>=100)&&i.lo<o){i.t+=o-i.lo;i.ts+=o-i.lo}if(x<=2||(x==3&&!i.lx)){i.e+=(x==1||x==3?'S':'E')+Math.floor(o);i.lx=(x==3?1:x)}if(!t&&i.to>=0&&x<=3){ti=ti?ti:0;if(ti&&i.ts>=ti){t=1;w.mediaEvent=w.event='SECONDS'}}i.lt=ts;i.lo=o}if(!x||(x<=3&&i.x>=100)){if(i.lx!=2)i.e+='E'+Math.floor(o);x=0;v=e=\"None\";w.mediaEvent=w.event=\"CLOSE\"}if(x==7){w.clicked=i.clk=1;t=1}if(x==5||(m.completeByCloseOffset&&(!x||i.x>=100)&&i.l>0&&o>=i.l-m.completeCloseOffsetThreshold)){w.complete=i.co=1;t=1}ek=w.mediaEvent;if(ek=='MILESTONE')ek+='_'+w.milestone;else if(ek=='OFFSET_MILESTONE')ek+='_'+w.offsetMilestone;if(!i.fel[ek]) {w.eventFirstTime=true;i.fel[ek]=1}else w.eventFirstTime=false;w.timePlayed=i.t;w.segmentNum=i.sn;w.segment=i.sx;w.segmentLength=i.sl;if(m.monitor&&x!=4)m.monitor(m.s,w);if(x==0)m._delete(n);if(t&&i.tc==tc){vo=new Object;vo.contextData=new Object;vo.linkTrackVars=v;vo.linkTrackEvents=e;if(!vo.linkTrackVars)vo.linkTrackVars='';if(!vo.linkTrackEvents)vo.linkTrackEvents='';if(m.trackUsingContextData)m.bcd(vo,i);else m.bpe(vo,i,x,o);m.s.t(vo);if(i.us){i.sn=sn;i.sx=sx;i.sc=1;i.us=0}else if(i.ts>0)i.sc=0;i.e=\"\";i.lm=i.lom=0;i.ts-=Math.floor(i.ts);i.to=o;i.tc++}}}return i};m.ae=function(n,l,p,x,o,sn,sx,sl,pd,b){var m=this,r=0;if(n&&(!m.autoTrackMediaLengthRequired||(length&&length>0)) &&p){if(!m.l||!m.l[n]){if(x==1||x==3){m.open(n,l,p,b);r=1}}else r=1;if(r)m.e(n,x,o,sn,sx,sl,pd)}};m.a=function(o,t){var m=this,i=o.id?o.id:o.name,n=o.name,p=0,v,c,c1,c2,xc=m.s.h,x,e,f1,f2='s_media_'+m._in+'_oc',f3='s_media_'+m._in+'_t',f4='s_media_'+m._in+'_s',f5='s_media_'+m._in+'_l',f6='s_media_'+m._in+'_m',f7='s_media_'+m._in+'_c',tcf,w;if(!i){if(!m.c)m.c=0;i='s_media_'+m._in+'_'+m.c;m.c++}if(!o.id)o.id=i;if(!o.name)o.name=n=i;if(!m.ol)m.ol=new Object;if(m.ol[i])return;m.ol[i]=o;if(!xc)xc=m.s.b;tcf=new Function('o','var e,p=0;try{if(o.versionInfo&&o.currentMedia&&o.controls)p=1}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetQuickTimeVersion();if(t)p=2}catch(e){p=0}return p');p=tcf(o);if(!p){tcf=new Function('o','var e,p=0,t;try{t=o.GetVersionInfo();if(t)p=3}catch(e){p=0}return p');p=tcf(o)}}v=\"var m=s_c_il[\"+m._in+\"],o=m.ol['\"+i+\"']\";if(p==1){p='Windows Media Player '+o.versionInfo;c1=v+',n,p,l,x=-1,cm,c,mn;if(o){cm=o.currentMedia;c=o.controls;if(cm&&c){mn=cm.name?cm.name:c.URL;l=cm.duration;p=c.currentPosition;n=o.playState;if(n){if(n==8)x=0;if(n==3)x=1;if(n==1||n==2||n==4||n==5||n==6)x=2;}';c2='if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}}';c=c1+c2;if(m.s.isie&&xc){x=m.s.d.createElement('script');x.language='jscript';x.type='text/javascript';x.htmlFor=i;x.event='PlayStateChange(NewState)';x.defer=true;x.text=c;xc.appendChild(x);o[f6]=new Function(c1+'if(n==3){x=3;'+c2+'}setTimeout(o.'+f6+',5000)');o[f6]()}}if(p==2){p='QuickTime Player '+(o.GetIsQuickTimeRegistered()?'Pro ':'')+o.GetQuickTimeVersion();f1=f2;c=v+',n,x,t,l,p,p2,mn;if(o){mn=o.GetMovieName()?o.GetMovieName():o.GetURL();n=o.GetRate();t=o.GetTimeScale();l=o.GetDuration()/t;p=o.GetTime()/t;p2=o.'+f5+';if(n!=o.'+f4+'||p<p2||p-p2>5){x=2;if(n!=0)x=1;else if(p>=l)x=0;if(p<p2||p-p2>5)m.ae(mn,l,\"'+p+'\",2,p2,0,\"\",0,0,o);m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n>0&&o.'+f7+'>=10){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;o.'+f5+'=p;setTimeout(\"'+v+';o.'+f2+'(0,0)\",500)}';o[f1]=new Function('a','b',c);o[f4]=-1;o[f7]=0;o[f1](0,0)}if(p==3){p='RealPlayer '+o.GetVersionInfo();f1=n+'_OnPlayStateChange';c1=v+',n,x=-1,l,p,mn;if(o){mn=o.GetTitle()?o.GetTitle():o.GetSource();n=o.GetPlayState();l=o.GetLength()/1000;p=o.GetPosition()/1000;if(n!=o.'+f4+'){if(n==3)x=1;if(n==0||n==2||n==4||n==5)x=2;if(n==0&&(p>=l||p==0))x=0;if(x>=0)m.ae(mn,l,\"'+p+'\",x,x!=2?p:-1,0,\"\",0,0,o)}if(n==3&&(o.'+f7+'>=10||!o.'+f3+')){m.ae(mn,l,\"'+p+'\",3,p,0,\"\",0,0,o);o.'+f7+'=0}o.'+f7+'++;o.'+f4+'=n;';c2='if(o.'+f2+')o.'+f2+'(o,n)}';if(m.s.wd[f1])o[f2]=m.s.wd[f1];m.s.wd[f1]=new Function('a','b',c1+c2);o[f1]=new Function('a','b',c1+'setTimeout(\"'+v+';o.'+f1+'(0,0)\",o.'+f3+'?500:5000);'+c2);o[f4]=-1;if(m.s.isie)o[f3]=1;o[f7]=0;o[f1](0,0)}};m.as=new Function('e','var m=s_c_il['+m._in+'],l,n;if(m.autoTrack&&m.s.d.getElementsByTagName){l=m.s.d.getElementsByTagName(m.s.isie?\"OBJECT\":\"EMBED\");if(l)for(n=0;n<l.length;n++)m.a(l[n]);}');if(s.wd.attachEvent)s.wd.attachEvent('onload',m.as);else if(s.wd.addEventListener)s.wd.addEventListener('load',m.as,false);if(m.onLoad)m.onLoad(s,m)",g.m_i("Media"),g.m_Integrate_c="var m=s.m_i('Integrate');m.add=function(n,o){var m=this,p;if(!o)o='s_Integrate_'+n;if(!m.s.wd[o])m.s.wd[o]=new Object;m[n]=new Object;p=m[n];p._n=n;p._m=m;p._c=0;p._d=0;p.disable=0;p.get=m.get;p.delay=m.delay;p.ready=m.ready;p.beacon=m.beacon;p.script=m.script;m.l[m.l.length]=n};m._g=function(t){var m=this,s=m.s,i,p,f=(t?'use':'set')+'Vars',tcf;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&&p[f]){if(s.apv>=5&&(!s.isopera||s.apv>=7)){tcf=new Function('s','p','f','var e;try{p[f](s,p)}catch(e){}');tcf(s,p,f)}else p[f](s,p)}}};m._t=function(){this._g(1)};m._fu=function(p,u){var m=this,s=m.s,v,x,y,z,tm=new Date;if(u.toLowerCase().substring(0,4) != 'http')u='http://'+u;if(s.ssl)u=s.rep(u,'http:','https:');p.RAND=Math&&Math.random?Math.floor(Math.random()*10000000000000):tm.getTime();p.RAND+=Math.floor(tm.getTime()/10800000)%10;x=0;while(x>=0){x=u.indexOf('[',x);if(x>=0){y=u.indexOf(']',x);if(y>x){z=u.substring(x+1,y);if(z.length>2&&z.substring(0,2)=='s.'){v=s[z.substring(2)];if(!v)v=''}else{v=''+p[z];if(!(v==p[z]||parseFloat(v)==p[z]))z=0}if(z) {u=u.substring(0,x)+s.rep(escape(v),'+','%2B')+u.substring(y+1);x=y-(z.length-v.length+1)} else {x=y}}}}return u};m.get=function(u,v){var p=this,m=p._m;if(!p.disable){if(!v)v='s_'+m._in+'_Integrate_'+p._n+'_get_'+p._c;p._c++;p.VAR=v;p._d++;m.s.loadModule('Integrate:'+v,m._fu(p,u),0,1,p._n)}};m.delay=function(){var p=this;if(p._d<=0)p._d=1};m.ready=function(){var p=this,m=p._m;p._d=0;if(!p.disable)m.s.dlt()};m._d=function(){var m=this,i,p;for(i=0;i<m.l.length;i++){p=m[m.l[i]];if(p&&!p.disable&&p._d>0)return 1}return 0};m._x=function(d,n){var p=this[n],x;if(!p.disable){for(x in d)if(x&&(!Object||!Object.prototype||!Object.prototype[x]))p[x]=d[x];p._d--}};m.beacon=function(u){var p=this,m=p._m,s=m.s,imn='s_i_'+m._in+'_Integrate_'+p._n+'_'+p._c,im;if(!p.disable&&s.d.images&&s.apv>=3&&(!s.isopera||s.apv>=7)&&(s.ns6<0||s.apv>=6.1)){p._c++;im=s.wd[imn]=new Image;im.src=m._fu(p,u)}};m.script=function(u){var p=this,m=p._m;if(!p.disable)m.s.loadModule(0,m._fu(p,u),0,1)};m.l=new Array;if(m.onLoad)m.onLoad(s,m)",g.m_i("Integrate"),e(),a.s=g}.apply(a,arguments)})}(this),define("analytics/sites/portal/urls",["analytics/separators"],function(a,b){"use strict";function c(){return require("analytics/attributes").get("ResourceTitle").toLowerCase()}function d(a){var b="";return"string"==typeof a?a.replace(/_/g," "):b}var e,f,g,h,i;return e={HOME:"home",PORTAL:"portal",PORTAL_SEARCH:"portal-search",KPLATFORM:"k-platform",PCM:"pcm",GROUPS:"groups",DOCS:"docs",RHN:"rhn",RHSM:"rhsm",CVE:"cve",CUSTOMER_CENTER:"customer-center",JBOSS_CSP:"jboss-csp",CSP:"csp",LABS:"labs",INSIGHTS:"insights",UNIFIED:"u-download",SUBSCRIPTIONS:"sub-center",CERTIFICATION:"certification"},f={BLOGS_GENERAL:"blogs-general",BLOGS_POSTS:"blogs-posts",CVE:"cve",ERRATA:"errata",GROUPS_ADMIN:"groups-admin",GROUPS_ANNOUNCEMENTS:"groups-announcements",GROUPS_DISCUSSIONS:"groups-discussions",GROUPS_DOCUMENTS:"groups-documents",GROUPS_ETC:"groups-etc",GROUPS_GENERAL:"groups-general",GROUPS_POLLS:"groups-polls",GROUPS_USERS:"groups-users",KP_ANNOUNCEMENTS:"kp-announcements",KP_ARTICLES:"kp-articles",KP_DISCUSSIONS:"kp-discussions",KP_DOWNLOADS:"kp-downloads",KP_GENERAL:"kp-general",KP_PAGES:"kp-pages",KP_SOLUTIONS:"kp-solutions",KP_TOOLS:"kp-tools",KP_VIDEOS:"kp-videos",PORTAL_DOWNLOADS:"portal-downloads",REGISTERED_SYSTEMS:"registered-systems",SEARCH_RESULTS:"search-results",SOFTWARE_CHANNELS:"software-channels",SOFTWARE_DOWNLOADS:"software-downloads",SOFTWARE_ERRATA:"software-errata",SOFTWARE_PACKAGES:"software-packages",SUPPORT_CASES:"support-cases",SYSTEM_ENTITLEMENTS:"system-entitlements",SYSTEM_GROUPS:"system-groups"},g={CONSUMER:"consumer",EDITOR:"editor",ADMIN:"admin"},i="kp-content",h=[{regex:/^\/+([?#].*)?$/,platform:e.HOME,persona:b,collection:b,resource_type:"home",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/logout\/*/,platform:e.HOME,persona:b,collection:b,resource_type:"logout",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+search\/*(#\/*([?#].*)?)?$/,platform:e.PORTAL_SEARCH,collection:f.SEARCH_RESULTS,persona:g.CONSUMER,resource_type:"browse-everything",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+search\/+#\/+knowledgebase([?#].*)?$/,platform:e.PORTAL_SEARCH,collection:f.SEARCH_RESULTS,persona:g.CONSUMER,resource_type:"browse-knowledgebase",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+search\/+#\/+videos([?#].*)?$/,platform:e.PORTAL_SEARCH,collection:f.SEARCH_RESULTS,persona:g.CONSUMER,resource_type:"browse-videos",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+search\/+#\/+documentation([?#].*)?$/,platform:e.PORTAL_SEARCH,collection:f.SEARCH_RESULTS,persona:g.CONSUMER,resource_type:"browse-docs",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+search\/+#\/+discussions([?#].*)?$/,platform:e.PORTAL_SEARCH,collection:f.SEARCH_RESULTS,persona:g.CONSUMER,resource_type:"browse-discussions",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^(\/+site)?\/+knowledgebase\/*([^\/+]+)*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_SOLUTIONS,persona:g.CONSUMER,resource_type:"kb-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^(\/+site)?\/+solutions\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_SOLUTIONS,persona:g.CONSUMER,resource_type:"solution-view",get_resource_id:function(){var a=this.params[2];return[i,a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+([^\/+]+)\/+solutions\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_SOLUTIONS,persona:g.CONSUMER,resource_type:"solution-view",get_resource_id:function(){var a=this.params[3];return[i,a]},get_page_name:function(){var a=this.params[3];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+articles\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_ARTICLES,persona:g.CONSUMER,resource_type:"article-view",get_resource_id:function(){var a=this.params[2];return[i,a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+([^\/+]+)\/+articles\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_ARTICLES,persona:g.CONSUMER,resource_type:"article-view",get_resource_id:function(){var a=this.params[3];return[i,a]},get_page_name:function(){var a=this.params[3];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+videos\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_VIDEOS,persona:g.CONSUMER,resource_type:"video-view",get_resource_id:function(){var a=this.params[2];return[i,a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+([^\/+]+)\/+videos\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_VIDEOS,persona:g.CONSUMER,resource_type:"video-view",get_resource_id:function(){var a=this.params[3];return[i,a]},get_page_name:function(){var a=this.params[3];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+announcements\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_ANNOUNCEMENTS,persona:g.CONSUMER,resource_type:"announcement-view",get_resource_id:function(){var a=this.params[2];return[i,a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+([^\/+]+)\/+announcements\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_ANNOUNCEMENTS,persona:g.CONSUMER,resource_type:"announcement-view",get_resource_id:function(){var a=this.params[3];return[i,a]},get_page_name:function(){var a=this.params[3];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+discussions\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_DISCUSSIONS,persona:g.CONSUMER,resource_type:"discussion-view",get_resource_id:function(){var a=this.params[2];return[i,a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+([^\/+]+)\/+discussions\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_DISCUSSIONS,persona:g.CONSUMER,resource_type:"discussion-view",get_resource_id:function(){var a=this.params[3];return[i,a]},get_page_name:function(){var a=this.params[3];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+tools\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_TOOLS,persona:g.CONSUMER,resource_type:"tool-view",get_resource_id:function(){var a=this.params[2];return[i,a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+([^\/+]+)\/+tools\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_TOOLS,persona:g.CONSUMER,resource_type:"tool-view",get_resource_id:function(){var a=this.params[3];return[i,a]},get_page_name:function(){var a=this.params[3];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+pages\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.KP_PAGES,resource_type:"page-view",get_resource_id:function(){var a=this.params[2];return[i,a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+products\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.KP_PAGES,resource_type:"product-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^(\/+site)?\/+products\/+([^\/+]+)\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.KP_PAGES,resource_type:"product-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,c()]},get_product:function(){var a=this.params[2];return d(a)}},{regex:/^(\/+site)?\/+products\/+([^\/+]+)\/+([^?#\/+]+)\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.KP_PAGES,resource_type:"product-view",get_resource_id:b,get_page_name:function(){var a=this.params[3];return["documentation","knowledgebase","resources"].indexOf(a)>=0&&require("analytics/attributes").set("ToolName","Product Search"),[this.Platform,this.ResourceType,c(),a]},get_product:function(){var a=this.params[2];return d(a)}},{regex:/^(\/+site)?\/+([^\/+]+)\/+pages\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_PAGES,persona:g.CONSUMER,resource_type:"page-view",get_resource_id:function(){var a=this.params[3];return[i,a]},get_page_name:function(){var a=this.params[3];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+node\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_GENERAL,persona:g.CONSUMER,resource_type:"node-view",get_resource_id:function(){var a=this.params[2];return[i,a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+([^\/+]+)\/+node\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_GENERAL,persona:g.CONSUMER,resource_type:"node-view",get_resource_id:function(){var a=this.params[3];return[i,a]},get_page_name:function(){var a=this.params[3];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+nodes\/+(\d+)\/+edit\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_GENERAL,persona:g.EDITOR,resource_type:"node-edit",get_resource_id:function(){var a=this.params[2];return[i,a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+([^\/+]+)\/+node\/+(\d+)\/+edit\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_GENERAL,persona:g.EDITOR,resource_type:"node-edit",get_resource_id:function(){var a=this.params[3];return[i,a]},get_page_name:function(){var a=this.params[3];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+node\/+(\d+)\/+moderation\/*([?#].*)?$/,
platform:e.KPLATFORM,collection:f.KP_GENERAL,persona:g.EDITOR,resource_type:"node-moderate",get_resource_id:function(){var a=this.params[2];return[i,a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+node\/+(\d+)\/+translate\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_GENERAL,persona:g.EDITOR,resource_type:"node-translation-list",get_resource_id:function(){var a=this.params[2];return[i,a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+node\/+(\d+)\/+devel\/*([?#].*)?$/,platform:e.KPLATFORM,collection:f.KP_GENERAL,persona:g.EDITOR,resource_type:"node-devel-view",get_resource_id:function(){var a=this.params[2];return[i,a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+admin\/+config\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.ADMIN,collection:f.KP_GENERAL,resource_type:b,get_resource_id:b,get_page_name:function(){return["{SUB_URL}"]}},{regex:/^(\/+site)?\/+([^\/+]+)\/+admin\/+config\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.ADMIN,collection:f.KP_GENERAL,resource_type:b,get_resource_id:b,get_page_name:function(){return["{SUB_URL}"]}},{regex:/^(\/+site)?\/+users\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.KP_GENERAL,resource_type:"kp-user",get_resource_id:function(){var a=this.params[2];return["kp","user",a]},get_page_name:function(){return[this.Platform,this.ResourceType,this.params[2],c()]}},{regex:/^(\/+site)?\/+([^\/+]+)\/+users\/+(\d+)\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.KP_GENERAL,resource_type:"kp-user",get_resource_id:function(){var a=this.params[3];return["kp","users",a]},get_page_name:function(){return[this.Platform,this.ResourceType,this.params[2],c()]}},{regex:/^(\/+site)?\/+users\/+(\d+)\/+notifications\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:b,resource_type:b,get_resource_id:function(){var a=this.params[2];return["kp","user",a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+([^\/+]+)\/+users\/+(\d+)\/+notifications\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:b,resource_type:b,get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,this.params[1],c()]}},{regex:/^(\/+site)?\/+downloads\/+evals\/([^/?#]+)\/*([?#].*)?$/,platform:e.PORTAL,persona:g.CONSUMER,collection:b,resource_type:"eval-conf",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,c()]}},{regex:/^(\/+site)?\/+downloads\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.KP_DOWNLOADS,resource_type:"download-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,c()]}},{regex:/^\/+search\/+browse\/+docker-images\/*([?#].*)?$/,platform:e.PORTAL,persona:g.CONSUMER,collection:f.PORTAL_DOWNLOADS,resource_type:"download-docker-images",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^(\/+site)?\/+([^\/+]+)\/+downloads\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.KP_DOWNLOADS,resource_type:"download-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,c()]}},{regex:/^(\/+site)?\/+([^\/+]+)\/+downloads\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.KP_DOWNLOADS,resource_type:"download-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,c()]}},{regex:/^(\/+site)?\/+blogs\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.BLOGS_GENERAL,resource_type:"blogs-dashboard",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,c()]}},{regex:/^(\/+site)?\/+blogs\/+([^\/+]+)\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.BLOGS_GENERAL,resource_type:"blog-dashboard",get_resource_id:function(){var a=this.params[2];return["kp","blog",a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+blogs\/+([^\/+]+)\/+posts\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.BLOGS_POSTS,resource_type:"blog-post-list",get_resource_id:b,get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+blogs\/+([^\/+]+)\/+posts\/+([^\/+]+)\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.BLOGS_POSTS,resource_type:"blog-post-view",get_resource_id:function(){var a=this.params[3];return["kp","content",a]},get_page_name:function(){var a=this.params[3];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+node\/+([^\/+]+)\/+members\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.BLOGS_POSTS,resource_type:"blog-member-list",get_resource_id:b,get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+groups\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.GROUPS_GENERAL,resource_type:"groups-dashboard",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,c()]}},{regex:/^(\/+site)?\/+groups\/+([^\/+]+)\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.GROUPS_GENERAL,resource_type:"group-dashboard",get_resource_id:function(){var a=this.params[2];return["kg","group",a]},get_page_name:function(){var a=this.params[2];return require("analytics/attributes").set("GroupID",a),[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+groups\/+([^\/+]+)\/+announcements\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.GROUPS_ANNOUNCEMENTS,resource_type:"group-announcement-list",get_resource_id:b,get_page_name:function(){var a=this.params[2];return require("analytics/attributes").set("GroupID",a),[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+groups\/+([^\/+]+)\/+announcements\/+([^\/+]+)\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.GROUPS_ANNOUNCEMENTS,resource_type:"group-announcement-view",get_resource_id:function(){var a=this.params[3];return["kg","content",a]},get_page_name:function(){var a=this.params[2],b=this.params[3];return require("analytics/attributes").set("GroupID",a),[this.Platform,this.ResourceType,b,c()]}},{regex:/^(\/+site)?\/+groups\/+([^\/+]+)\/+discussions\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.GROUPS_DISCUSSIONS,resource_type:"group-discussion-list",get_resource_id:b,get_page_name:function(){var a=this.params[2];return require("analytics/attributes").set("GroupID",a),[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+groups\/+([^\/+]+)\/+discussions\/+([^\/+]+)\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.GROUPS_DISCUSSIONS,resource_type:"group-discussion-view",get_resource_id:function(){var a=this.params[3];return["kg","content",a]},get_page_name:function(){var a=this.params[2],b=this.params[3];return require("analytics/attributes").set("GroupID",a),[this.Platform,this.ResourceType,b,c()]}},{regex:/^(\/+site)?\/+groups\/+([^\/+]+)\/+browse\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.GROUPS_GENERAL,resource_type:"group-content-list",get_resource_id:b,get_page_name:function(){var a=this.params[2];return require("analytics/attributes").set("GroupID",a),[this.Platform,this.ResourceType,a,c()]}},{regex:/^(\/+site)?\/+node\/+([^\/+]+)\/+members\/*([?#].*)?$/,platform:e.KPLATFORM,persona:g.CONSUMER,collection:f.GROUPS_GENERAL,resource_type:"group-member-list",get_resource_id:b,get_page_name:function(){var a=this.params[2];return require("analytics/attributes").set("GroupID",a),[this.Platform,this.ResourceType,a,c()]}},{regex:/^\/+groups\/*([?#].*)?$/,platform:e.GROUPS,persona:g.CONSUMER,collection:"groups-etc",resource_type:"groups-dashboard",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+groups\/+([^\/+]+)\/*([?#].*)?$/,platform:e.GROUPS,persona:g.CONSUMER,collection:"groups-etc",resource_type:"groups-group-dashboard",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,"{GROUP_NAME}"]}},{regex:/^\/+node\/+([^\/+]+)\/+browse\/*([?#].*)?$/,platform:e.GROUPS,persona:g.CONSUMER,collection:"groups-discussions",resource_type:"groups-discussions-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,this.params[1]]}},{regex:/^\/+discussion\/+([^\/+]+)\/*([?#].*)?$/,platform:e.GROUPS,persona:g.CONSUMER,collection:"groups-discussions",resource_type:"groups-discussion-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,this.params[1]]}},{regex:/^\/+wiki\/+([^\/+]+)\/*([?#].*)?$/,platform:e.GROUPS,persona:g.CONSUMER,collection:"groups-documents",resource_type:"groups-document-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,this.params[1]]}},{regex:/^\/+notice\/+([^\/+]+)\/*([?#].*)?$/,platform:e.GROUPS,persona:g.CONSUMER,collection:"groups-announcements",resource_type:"groups-announcement-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,this.params[1]]}},{regex:/^\/+tag\/+([^\/+]+)\/*([?#].*)?$/,platform:e.GROUPS,persona:g.CONSUMER,collection:"groups-etc",resource_type:"groups-taxonomy-tags-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,this.params[1]]}},{regex:/^\/+users\/+([^\/+]+)\/*([?#].*)?$/,platform:e.GROUPS,persona:g.CONSUMER,collection:"groups-users",resource_type:"groups-user-profile-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,this.params[1]]}},{regex:/^(\/+site)?\/+documentation\/*(index\.html)?([?#].*)?$/,platform:e.PORTAL,persona:g.CONSUMER,collection:"docs",resource_type:"docs-index",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^(\/+site)?\/+documentation\/+([^\/+]+)\/*(index\.html)?([?#].*)?$/,platform:e.PORTAL,persona:g.CONSUMER,collection:"docs",resource_type:"docs-index",get_resource_id:b,get_page_name:function(){var a=d(this.params[2]);return require("analytics/attributes").set("Language",a),[this.Platform,this.ResourceType]}},{regex:/^(\/+site)?\/+documentation\/+([^\/+]+)\/+([^\/+]+)\/*([^\/+]*)([?#].*)?$/,platform:e.PORTAL,collection:"docsA",persona:g.CONSUMER,resource_type:"docs-index",get_resource_id:b,get_page_name:function(){var a=d(this.params[2]),b=d(this.params[3]);return require("analytics/attributes").set("Language",a),require("analytics/attributes").set("Products",b),[this.Platform,this.ResourceType,b]},get_product:function(){var a=this.params[3];return d(a)}},{regex:/^(\/+site)?\/+documentation\/+([^\/+]+)\/+([^\/+]+)\/+([^\/+]+)\/*([^\/+]*)([?#].*)?$/,platform:e.PORTAL,collection:"docsB",persona:g.CONSUMER,resource_type:"docs-index",get_resource_id:b,get_page_name:function(){var a=this.params[2],b=d(this.params[3]),c=d(this.params[4]);return require("analytics/attributes").set("Products",b+" "+c),require("analytics/attributes").set("Language",a),[this.Platform,this.ResourceType,b,c]},get_product:function(){var a=this.params[3],b=this.params[4];return d(a+" "+b)}},{regex:/^(\/+site)?\/+documentation\/+([^\/+]+)\/+([^\/+]+)\/+([^\/+]+)\/+([^\/+]+)\/+([^\/+]+)\/*([^\/+]*)([?#].*)?$/,platform:e.DOCS,collection:"docs",persona:g.CONSUMER,resource_type:"docs-view",get_resource_id:b,get_page_name:function(){var a,b=this.params[2],c=this.params[3],e=this.params[4],f=d(this.params[6]);return a=-1!==f.indexOf("Release Notes")?"Release Notes":-1!==f.indexOf("Technical Notes")?"Technical Notes":"General",require("analytics/attributes").set("Products",c+" "+e),require("analytics/attributes").set("ResourceTitle",f),require("analytics/attributes").set("ResourceType","docs-view"),require("analytics/attributes").set("ContentSubType",a),require("analytics/attributes").set("Language",b),require("analytics/attributes").set("PublicationState",["active","published"]),[this.Platform,this.ResourceType,d(c),d(e),d(f)]},get_product:function(){var a=this.params[3],b=this.params[4];return d(a+" "+b)}},{regex:/^\/+support\/+cases\/+#\/+case\/new([?].*)?$/,platform:e.PCM,collection:f.SUPPORT_CASES,persona:g.CONSUMER,resource_type:"case-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,"new"]}},{regex:/^\/+support\/+cases\/*([?#].*)?$/,platform:e.PCM,collection:f.SUPPORT_CASES,persona:g.CONSUMER,resource_type:"case-list-open",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+support\/+policy\/+updates\/+([^\/+]+)\/*([?#].*)?$/,platform:e.KPLATFORM,collection:b,persona:g.CONSUMER,resource_type:"support-policy",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,c()]}},{regex:/^\/+customer-success\/*([?#].*)?$/,platform:e.PORTAL,collection:b,persona:g.CONSUMER,resource_type:"customer-success",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+downloads\/+content\/+([^\/+]+)\/+([^\/+]+)\/+([^\/+]+)\/+([^\/+]+)\/+product-downloads\/*.*#erratatab.*?$/,platform:e.UNIFIED,collection:f.SOFTWARE_ERRATA,persona:g.CONSUMER,resource_type:"errata-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,c()]}},{regex:/^\/+downloads\/+content\/+([^\/+]+)\/+([^\/+]+)\/+([^\/+]+)\/+([^\/+]+)\/+product-downloads\/*[^\/+]*$/,platform:e.UNIFIED,collection:f.SOFTWARE_DOWNLOADS,persona:g.CONSUMER,resource_type:"software-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,c()]}},{regex:/^\/+downloads\/+content\/+([^\/+]+)\/+([^\/+]+)\/+([^\/+]+)\/+([^\/+]+)\/+packages.*$/,platform:e.UNIFIED,collection:f.SOFTWARE_DOWNLOADS,persona:g.CONSUMER,resource_type:"package-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,c()]}},{regex:/^\/+downloads\/+content\/+([^\/+]+).*?$/,platform:e.UNIFIED,collection:f.SOFTWARE_DOWNLOADS,persona:g.CONSUMER,resource_type:"product-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType,c()]}},{regex:/^\/+rhn\/+software\/+channels\/+All\.do.*?$/,platform:e.RHN,collection:f.SOFTWARE_CHANNELS,persona:g.CONSUMER,resource_type:"channel-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+software\/+channels\/+Beta\.do.*?$/,platform:e.RHN,collection:f.SOFTWARE_CHANNELS,persona:g.CONSUMER,resource_type:"channel-list-beta",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+software\/+channels\/+Retired\.do.*?$/,platform:e.RHN,collection:f.SOFTWARE_CHANNELS,persona:g.CONSUMER,resource_type:"channel-list-retired",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+network\/+software\/+channels\/+details\.pxt.*cid=([^&]+)?$/,platform:e.RHN,collection:f.SOFTWARE_CHANNELS,persona:g.CONSUMER,resource_type:"channel-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+software\/+downloads\/+AllISOs\.do.*?$/,platform:e.RHN,collection:f.SOFTWARE_DOWNLOADS,persona:g.CONSUMER,resource_type:"software-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+software\/+downloads\/+SupportedISOs\.do.*?$/,platform:e.RHN,collection:f.SOFTWARE_DOWNLOADS,persona:g.CONSUMER,resource_type:"software-list-supported",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+software\/+downloads\/+RetiredISOs\.do.*?$/,platform:e.RHN,collection:f.SOFTWARE_DOWNLOADS,persona:g.CONSUMER,resource_type:"software-list-retired",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+software\/+channel\/+downloads\/+Download\.do.*cid=([^&]+)?$/,platform:e.RHN,collection:f.SOFTWARE_DOWNLOADS,persona:g.CONSUMER,resource_type:"software-view",get_resource_id:function(){var a=this.params[1];return"rhn-software-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+isos\/+([^\/+]+)\/+([^\/+]+)\/+([^\/+]+).*?$/,platform:e.RHN,collection:f.SOFTWARE_DOWNLOADS,persona:g.CONSUMER,resource_type:"software-download-file",get_resource_id:b,get_page_name:b},{regex:/^\/+rhn\/+channels\/+software\/+Search\.do.*?$/,platform:e.RHN,collection:f.SOFTWARE_PACKAGES,persona:g.CONSUMER,resource_type:"package-search",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+network\/+software\/+packages\/+name_overview\.pxt.*?$/,platform:e.RHN,collection:f.SOFTWARE_PACKAGES,persona:g.CONSUMER,resource_type:"package-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+software\/+packages\/+details\/+Overview\.do.*pid=([^&]+)?$/,platform:e.RHN,collection:f.SOFTWARE_PACKAGES,persona:g.CONSUMER,resource_type:"package-view",get_resource_id:function(){var a=this.params[1];return"rhn-pkg-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+public\/+([^\/+]+)\/+([^\/+]+)\/+([^\/+]+)\/+([^\/+]+)\/+([^\/+]+)\/*([^\/]+)*$/,platform:e.RHN,collection:f.SOFTWARE_PACKAGES,persona:g.CONSUMER,resource_type:"package-download-file",get_resource_id:b,get_page_name:b},{regex:/^\/+security\/+updates\/+(active|eol)\/*([^\/]+)*$/,platform:e.RHN,collection:f.ERRATA,persona:g.CONSUMER,resource_type:"errata-product-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+errata\/*([^\/]+)-errata.html([?#].*)?$/,platform:e.RHN,collection:f.ERRATA,persona:g.CONSUMER,resource_type:"errata-list",get_resource_id:b,get_page_name:function(){var a=this.params[1];return[this.Platform,this.ResourceType,a]}},{regex:/^\/+errata\/+([^\/]+).html([?#].*)?$/,platform:e.RHN,collection:f.ERRATA,persona:g.CONSUMER,resource_type:"errata-view",get_resource_id:b,get_page_name:function(){var a=this.params[1];return[this.Platform,this.ResourceType,a]}},{regex:/^\/+rhn\/+systems\/+SystemEntitlements\.do([?#].*)?$/,platform:e.RHN,collection:f.SYSTEM_ENTITLEMENTS,persona:g.CONSUMER,resource_type:"system-entitlements-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+entitlements\/+GuestLimitedHosts\.do([?#].*)?$/,platform:e.RHN,collection:f.SYSTEM_ENTITLEMENTS,persona:g.CONSUMER,resource_type:"system-entitlements-virtual-guests-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+channels\/+software\/+Entitlements\.do([?#].*)?$/,platform:e.RHN,collection:f.SYSTEM_ENTITLEMENTS,persona:g.CONSUMER,resource_type:"system-entitlements-channels-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+Notifications\.do([?#].*)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"notifications-preferences",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+Search\.do([?#].*)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-systems-search",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+SystemList\.do([?#].*)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-systems-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+VirtualSystemsList\.do([?#].*)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-systems-list-virtual",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+OutOfDate\.do([?#].*)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-systems-list-outofdate",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+Unentitled\.do([?#].*)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-systems-list-unentitled",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+Ungrouped\.do([?#].*)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-systems-list-ungrouped",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+Inactive\.do([?#].*)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-systems-list-inactive",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+Registered\.do([?#].*)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-systems-list-registered",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+SatelliteList\.do([?#].*)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-systems-list-satellites",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+ProxyList\.do([?#].*)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-systems-list-proxies",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+details\/+Overview\.do([?#].*)sid=([^&]+)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-system-overview",get_resource_id:function(){var a=this.params[2];return"rhn-system-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+details\/+Edit\.do([?#].*)sid=([^&]+)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-system-properties-view",get_resource_id:function(){var a=this.params[2];return"rhn-system-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+network\/+systems\/+details\/+connection\.pxt([?#].*)sid=([^&]+)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-system-connection-view",get_resource_id:function(){var a=this.params[2];return"rhn-system-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+network\/+systems\/+details\/+proxy\.pxt([?#].*)sid=([^&]+)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-system-proxies-list",get_resource_id:function(){var a=this.params[2];return"rhn-system-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+details\/+Satellite\.do([?#].*)sid=([^&]+)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-system-satellites-list",get_resource_id:function(){var a=this.params[2];return"rhn-system-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+details\/+hardware\.pxt([?#].*)sid=([^&]+)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-system-hardware-profile",get_resource_id:function(){var a=this.params[2];return"rhn-system-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+network\/+systems\/+details\/+notes_list\.pxt([?#].*)sid=([^&]+)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-system-notes",get_resource_id:function(){var a=this.params[2];return"rhn-system-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+details\/+packages\/+Packages\.do([?#].*)sid=([^&]+)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-system-packages-list",get_resource_id:function(){var a=this.params[2];return"rhn-system-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+details\/+ErrataList\.do([?#].*)sid=([^&]+)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-system-errata-list",get_resource_id:function(){var a=this.params[2];return"rhn-system-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+details\/+SystemChannels\.do([?#].*)sid=([^&]+)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-system-channels-list",get_resource_id:function(){var a=this.params[2];return"rhn-system-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+details\/+virtualization\/+VirtualGuestsList\.do([?#].*)sid=([^&]+)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-system-virtual-guests-list",get_resource_id:function(){var a=this.params[2];return"rhn-system-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+network\/+systems\/+details\/+admin_group_list\.pxt([?#].*)sid=([^&]+)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-system-groups-lists",get_resource_id:function(){var a=this.params[2];return"rhn-system-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+network\/+systems\/+details\/+history\/+pending\.pxt([?#].*)sid=([^&]+)?$/,platform:e.RHN,collection:f.REGISTERED_SYSTEMS,persona:g.CONSUMER,resource_type:"registered-system-pending-events-list",get_resource_id:function(){var a=this.params[2];return"rhn-system-"+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+rhn\/+systems\/+SystemGroupList\.do([?#].*)?$/,platform:e.RHN,collection:f.SYSTEM_GROUPS,persona:g.CONSUMER,resource_type:"system-groups-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+network\/+systems\/+groups\/+details\.pxt([?#].*)sgid=([^&]+)?$/,platform:e.RHN,collection:f.SYSTEM_GROUPS,persona:g.CONSUMER,resource_type:"registered-system-pending-events-list",get_resource_id:function(){var a=this.params[2];return"rhn-system-group: "+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+network\/+systems\/+groups\/+system_list\.pxt([?#].*)sgid=([^&]+)?$/,platform:e.RHN,collection:f.SYSTEM_GROUPS,persona:g.CONSUMER,resource_type:"registered-system-systems-list",get_resource_id:function(){var a=this.params[2];return"rhn-system-group: "+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+network\/+systems\/+groups\/+target_system_list\.pxt([?#].*)sgid=([^&]+)?$/,platform:e.RHN,collection:f.SYSTEM_GROUPS,persona:g.CONSUMER,resource_type:"registered-system-target-systems-list",get_resource_id:function(){var a=this.params[2];return"rhn-system-group: "+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+network\/+systems\/+groups\/+errata_list\.pxt([?#].*)sgid=([^&]+)?$/,platform:e.RHN,collection:f.SYSTEM_GROUPS,persona:g.CONSUMER,resource_type:"registered-system-errata-list",get_resource_id:function(){var a=this.params[2];return"rhn-system-group: "+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+network\/+systems\/+groups\/+admin_list\.pxt([?#].*)sgid=([^&]+)?$/,platform:e.RHN,collection:f.SYSTEM_GROUPS,persona:g.CONSUMER,resource_type:"registered-system-admins-list",get_resource_id:function(){var a=this.params[2];return"rhn-system-group: "+a},get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+jbossnetwork\/+restricted\/+listSoftware.html([?#].*)?$/,platform:e.CSP,collection:f.SOFTWARE_DOWNLOADS,persona:g.CONSUMER,resource_type:"software-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+jbossnetwork\/+restricted\/+softwareDetail.html\?.*softwareId=([^&]+).*$/,platform:e.CSP,collection:f.SOFTWARE_DOWNLOADS,persona:g.CONSUMER,resource_type:"software-download",get_resource_id:function(){var a=this.params[1];return["csp","software",a]},get_page_name:function(){var a=this.params[1];return[this.Platform,this.ResourceType,a]}},{regex:/^\/+search\/+browse\/+certified-cloud-providers\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,resource_type:"browse-cloud-providers",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+search\/+browse\/+certified-hardware\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,resource_type:"browse-hardware",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+search\/+browse\/+certified-software\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,resource_type:"browse-software",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^(\/+site)?\/+ecosystem\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,resource_type:"cert-index",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^(\/+site)?\/+ecosystem\/+vendors\/+(\d+)\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,resource_type:"cert-vendor",get_resource_id:function(){var a=this.params[2];return["certification",a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a]}},{regex:/^(\/+site)?\/+ecosystem\/+hardware\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,resource_type:"cert-hw-landing",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^(\/+site)?\/+ecosystem\/+hardware\/browse\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,resource_type:"cert-hw-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^(\/+site)?\/+ecosystem\/+hardware\/+(\d+)\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,resource_type:"certified-hardware-view",get_resource_id:function(){var a=this.params[2];return["certification",a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a]}},{regex:/^(\/+site)?\/+ecosystem\/+software\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,resource_type:"cert-sw-landing",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^(\/+site)?\/+ecosystem\/+software\/browse\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,resource_type:"cert-sw-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^(\/+site)?\/+ecosystem\/+software\/+(\d+)\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,resource_type:"certified-software-view",get_resource_id:function(){var a=this.params[2];return["certification",a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a]}},{regex:/^(\/+site)?\/+ecosystem\/+cloud-provider\/+(\d+)\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,resource_type:"certified-cloud-provider-view",get_resource_id:function(){var a=this.params[2];return["certification",a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a]}},{regex:/^(\/+site)?\/+ecosystem\/+cloud\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,
resource_type:"cert-cloud-landing",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^(\/+site)?\/+ecosystem\/+cloud\/browse\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,resource_type:"cert-cloud-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^(\/+site)?\/+ecosystem\/+cloud\/+(\d+)\/*([?#].*)?$/,platform:e.CERTIFICATION,collection:b,persona:g.CONSUMER,resource_type:"cert-cloud",get_resource_id:function(){var a=this.params[2];return["certification",a]},get_page_name:function(){var a=this.params[2];return[this.Platform,this.ResourceType,a]}},{regex:/^\/+security\/+cve\/+(CVE-[^\/?#]*)\/*.*/,platform:e.CVE,collection:f.CVE,persona:g.CONSUMER,resource_type:"cve-view",get_resource_id:function(){var a=this.params[1];return a},get_page_name:function(){var a=this.params[1];return[this.Platform,this.ResourceType,a]}},{regex:/^\/+security\/+cve\/*.*/,platform:e.CVE,collection:f.CVE,persona:g.CONSUMER,resource_type:"cve-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+subscriptions\/+activate\/+protected\/+activate\.html([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:g.CONSUMER,resource_type:"sub-activation",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+subscriptions\/+rhntransition\/*([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:g.CONSUMER,resource_type:"rhn-transition",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+management\/+subscriptions\/+(\d+)\/*([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:b,resource_type:"sub-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+management\/+subscriptions\/*([^\/+]*)([?#](active|expiring|expired|all))?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:b,resource_type:"sub-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+management\/+subscription-management\/*([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:b,resource_type:"sub-mgmt",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+management\/+consumers\/+register\/*([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:b,resource_type:"unit-register",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+management\/+consumers\/+([A-Fa-f0-9-]+)\/*([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:b,resource_type:"unit-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+management\/+consumers\/*([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:b,resource_type:"unit-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+management\/+consumer\/+consumers\/+create\/+([^\/]+)\/*([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:b,resource_type:"unit-register",get_resource_id:b,get_page_name:function(){var a=this.params[1];return[this.Platform,this.ResourceType,a]}},{regex:/^\/+management\/+distributors\/+register\/*([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:b,resource_type:"app-register",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+management\/+distributors\/*([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:b,resource_type:"app-list",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+management\/+distributors\/+([A-Fa-f0-9-]+)\/*([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:b,resource_type:"app-view",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+management\/+distributor\/+distributors\/+create\/+([^\/]+)\/*([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:b,resource_type:"app-register",get_resource_id:b,get_page_name:function(){var a=this.params[1];return[this.Platform,this.ResourceType,a]}},{regex:/^\/+management\/+utilization\/*([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:b,resource_type:"sub-utilization",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+management\/+overconsumption\/*([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:b,resource_type:"sub-overconsumption",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/+management\/*([^\/+]*)([?#].*)?$/,platform:e.SUBSCRIPTIONS,collection:b,persona:b,resource_type:"sub-overview",get_resource_id:b,get_page_name:function(){return[this.Platform,this.ResourceType]}},{regex:/^\/labs\/.*/,platform:e.LABS,collection:b,persona:g.CONSUMER,resource_type:function(){var a=window.location.pathname.match(/\/labs\/(.*?)\//);return null!==a&&a.length>=2?a[1]:"labs-landing-page"},get_resource_id:b,get_page_name:function(){null!==window.location.pathname.match(/^\/labs\/[a-zA-Z0-9].*/)&&window.require("analytics/main").trigger("LabsBegin");var a="function"==typeof this.ResourceType?this.ResourceType():this.ResourceType;return[this.Platform,a,c()]}},{regex:/^\/insights\/.*/,platform:e.INSIGHTS,collection:b,persona:g.CONSUMER,resource_type:function(){var a=window.location.pathname.match(/\/insights\/(.*?)\//);return null!==a&&a.length>=2?"insights-"+a[1]:"insights-root"},get_resource_id:b,get_page_name:function(){null!==window.location.pathname.match(/^\/labs\/[a-zA-Z0-9].*/)&&window.require("analytics/main").trigger("LabsBegin");var a="function"==typeof this.ResourceType?this.ResourceType():this.ResourceType;return[this.Platform,a,c()]}},{regex:/.*/,platform:b,collection:b,persona:b,resource_type:b,get_resource_id:b,get_page_name:function(){return["undefined"]}}],{url_definitions:h}}),define("analytics/attributes",["jquery","underscore","s_code","jsUri","require","user_info","chrome_lib","analytics/url","analytics/sites/portal/urls","analytics/separators","analytics/adapters/omniture/old_fns","base"],function(a,b,c,d,e,f,g,h,i,j){"use strict";function k(a){return this instanceof k?(this.name=a.name,this.overwritable=a.overwritable,this.get=a.getter||k.prototype.default_getter,this.set=a.setter||k.prototype.default_setter,void(this.value=a.value)):new k(a)}function l(a){function c(a){return b.isArray(a)?a.join(f):b.isUndefined(a)?"undefined":a}var d,e,f=";";return d=a,d=b.map(d,o),d=b.map(d,c),e=b.every(d,b.isUndefined),e?void 0:d}function m(a){var b,c,d,e=a||"name";for(d=[],b=0,c=v.length;c>b;b+=1)d.push(v[b][e]);return d}function n(a){return"/"===a[a.length-1]?a.substring(0,a.length-1):a}function o(a){var b=u[a];return"undefined"!=typeof b?b.get():void 0}function p(a,b){var c=u[a];"undefined"==typeof c?(c=new k({name:a,value:b}),u[a]=c):c.set(b)}function q(a){var b,c,d="",e="";d+="NOTE: The text formatting of these values may be different than what is sent to analytics engines (like omniture).  It is the resposibility of each analytics engine adapter to format these values properly.\n";for(b in u)u.hasOwnProperty(b)&&(c=u[b].value,(a||c)&&(e=new window.Array(32-b.length).join("."),d+="\n",d+="ATTR : "+u[b].name,d+=e,d+="DATA : "+c));g.log(d)}function r(){a(function(){g.whenUserStatusReady(function(){var a,b;for(a in u)u.hasOwnProperty(a)&&(b=u[a],("undefined"==typeof b.value||b.overwritable)&&b.set(b.get()))})})}function t(){var a,b;for(a=v.length-1;a>=0;a-=1)b=new k(v[a]),u[b.name]=b}var u={},v=[];return k.prototype.default_getter=function(){return this.value},k.prototype.default_setter=function(a){this.value=a},v=[{name:"UserSessionID",getter:function(){var a=getCookie("chrome_session_id");return a&&(a=a.replace(/\|/,j.pipe)||""),a||void 0}},{name:"UserLogin",getter:function(){var a=getCookie("rh_user")||"";return a.split("|")[0].replace(/^"/,"")}},{name:"UserNumber",getter:function(){var a;return a="object"==typeof portal&&"object"==typeof portal.user_info?portal.user_info.user_id:"undefined"}},{name:"CustomerNumber",getter:function(){var a;return a="object"==typeof portal&&"object"==typeof portal.user_info?portal.user_info.account_number:"undefined"}},{name:"OmniturePersona",getter:function(){return"undefined"!=typeof window.getLoginStatus?window.getLoginStatus():void 0}},{name:"isAuthenticated",getter:function(){var a=getCookie("rh_user")||"";return"logged in"===a.split("|")[2]}},{name:"isEntitled",getter:function(){var a=getCookie("rh_user")||"";return"customer"===a.split("|")[2]}},{name:"isSupportEntitled"},{name:"OmnitureVisitor"},{name:"VisitNumber"},{name:"ScreenResolution",getter:function(){var a=screen.width,b=screen.height;return[a,b].join("x")}},{name:"ScreenColorDepth",getter:function(){return screen.colorDepth}},{name:"BrowserResolution",getter:function(){var a=document.documentElement.clientWidth,b=document.documentElement.clientHeight;return[a,b].join("x")}},{name:"isInternal",getter:function(){return"object"==typeof portal&&"object"==typeof portal.user_info?portal.user_info.internal:void 0}},{name:"ResourceID",getter:function(){return h.parse(location,i).ResourceID},overwritable:!0},{name:"PageName",getter:function(){var a;return a=u.ErrorPageName.value?u.ErrorPageName.value:h.parse(location,i).pageName},overwritable:!0},{name:"ResourceTitle",getter:function(){return document.title.replace(" - Red Hat Customer Portal","")},overwritable:!0},{name:"ResourceType",getter:function(){return h.parse(location,i).ResourceType},overwritable:!0},{name:"Platform",getter:function(){return h.parse(location,i).Platform}},{name:"UseType",getter:function(){return h.parse(location,i).UseType}},{name:"Collection",getter:function(){return h.parse(location,i).Collection}},{name:"URL",getter:function(){return n(location.href)},overwritable:!0},{name:"TrueURL",getter:function(){var a,b=new d(location.href);return a=b.protocol()+"://"+b.host()+(""===b.port()?"":":"+b.port())+b.path(),a=n(a)},overwritable:!0},{name:"Channel",getter:function(){var a;return a="undefined"!=typeof siteMapState&&siteMapState.length>0?siteMapState.split("/")[0].toLowerCase():"undefined"}},{name:"Language"},{name:"ContentSubType"},{name:"Products",getter:function(){return h.parse(location,i).Product},setter:function(a){"undefined"!=typeof a&&("undefined"==typeof window.s.events||""===window.s.events?window.s.events="prodView":"undefined"!=typeof window.s.events.indexOf&&-1===window.s.events.indexOf("prodView")&&(window.s.events=[window.s.events,"prodView"].join(","))),this.value=a}},{name:"Component"},{name:"Category"},{name:"Tags"},{name:"GroupID"},{name:"KCSState"},{name:"SBR"},{name:"PublicationState"},{name:"Rating"},{name:"UserSearchEvent"},{name:"FacetedSearchValues"},{name:"OnSiteSearch"},{name:"OnSiteSearchValue"},{name:"PageRank"},{name:"TargetURL"},{name:"ErrorPageName"},{name:"ErrorPageType"},{name:"ErrorReferringChannel"},{name:"ErrorChannel"},{name:"ErrorType"},{name:"VideoTitle"},{name:"VideoSegmentTitle"},{name:"VideoResolution"},{name:"CertifiedVendorProduct"},{name:"Architecture"},{name:"SeverityLevel"},{name:"ToolName"},{name:"CampaignExternal",getter:function(){return new d(location.href).getQueryParamValue("sc_cid")}},{name:"CampaignInternal",getter:function(){return new d(location.href).getQueryParamValue("intcmp")}},{name:"CodeVersion",getter:function(){return[s.version,e("analytics/main").get_version()]}},{name:"InfrastructureStr",getter:function(){var a;return a="undefined"==typeof this.value?this.value:this.value.join(j.pipe)},setter:function(a){"undefined"!=typeof a&&("undefined"==typeof this.value?this.value=[a]:this.value.push(a))}},{name:"ABTestCampaign"},{name:"Hierarchy",getter:function(){var a,b,c,d=[];if("undefined"!=typeof window.breadcrumbs&&window.breadcrumbs instanceof window.Array){for(c=0;c<window.breadcrumbs.length;c+=1)b=window.breadcrumbs[c][0],d.push(b);a=d}else if(document.getElementById("breadcrumbs")){for(d=g.getTextNodes(document.getElementById("breadcrumbs")),c=0;c<d.length;c+=1)d[c]=d[c].trim().replace(/\n/g," ").replace(/\t/g," ").replace(/\s+/g," ");a=d}if("undefined"!=typeof a&&a.indexOf(",")>=0)for(c=0;c<a.length;c+=1)a[c]=a[c].replace(",","");return a}},{name:"KnowledgeMeta",getter:function(){return l(["Component","Category","KCSState","SBR","PublicationState"])}}],t(),{all:u,get:o,harvest:r,list:m,print:q,set:p}}),define("analytics/main",["analytics/url","analytics/attributes","chrome_lib","jquery","underscore"],function(a,b,c,d,e){"use strict";function f(){return!d("html").hasClass("pafoff")}function g(){return y}function h(){var a,b=!1;for(a in E)if(E.hasOwnProperty(a)){b=!0;break}return b}function i(a,b){var c,d,e,f;if(e=[],"undefined"==typeof a)for(c=0;c<z.length;c+=1)e.push(z[c]+"/"+b);else for(d="undefined"==typeof a?y:a,c=0;c<d.length;c+=1)f=x+d[c],"undefined"!=typeof b&&b.length&&(f+="/"+b),e.push(f);return e}function j(a){h()?F=a||F:k.apply({},arguments)}function k(a){d(function(){c.whenUserStatusReady(function(){var b,c,d;b=["analytics/attributes","chrome_lib"],c=i(a,"attributes"),d=i(a,"events"),b=b.concat(c).concat(d),require(b,function(a,b){e.any(arguments,e.isUndefined)||b.whenUserStatusReady(function(){require(d,function(){if(!e.any(arguments,e.isUndefined)){var b,d,f;for(b=0;b<arguments.length;b+=1)for(d=0;d<D.length;d+=1)f=D.splice(d,1),arguments[b].call_event(f);require(c,function(){if(!e.any(arguments,e.isUndefined)){var b;for(b=0;b<arguments.length;b+=1)arguments[b].send(a)}})}})})})})})}function l(a,b,c){var d=i(c,"events");require(d,function(){var b;if(!e.any(arguments,e.isUndefined))for(b=0;b<arguments.length;b+=1)arguments[b].wipe(a)})}function m(a){var b=c.getEventTarget(a||{}),d=b.target,e="undefined"!=typeof b&&b instanceof window.HTMLAnchorElement,f=a.ctrlKey,g=2===a.which,h=3===a.which,i=window===window.top,j=window===window.parent,k="_self"===d,l=""===d||"undefined"==typeof d,m="_top"===d,n="_parent"===d,o="_blank"===d,p=!(l||k||m||n),q=m&&i||n&&j||k||l||!d,r=f||g||o||p,s=!h&&e&&q&&!r;return{nav:s,new_window:r}}function n(a,b,c,f,g,h,j){function k(a){"undefined"==typeof j&&(j=m(a).nav),j&&a.preventDefault(),o(f,a,g,h,j)}var l=i(g,"events"),n=d(a),p=b.slice().replace("click","mouseup");require(["s_code"],function(){window.s.trackDownloadLinks=!1}),require(l,function(){e.any(arguments,e.isUndefined)||n.on(p,c,k)})}function o(a,b,d,f,g){function h(){if("undefined"!=typeof b){var a,d,e,f=c.getEventTarget(b);"undefined"!=typeof g?d=g:(a=m(b),d=a.nav,e=a.new_window),d&&e?window.open(f.href):d&&(window.location.href=f.href)}}function j(b){return function(){0!==n.length&&n.pop(),0===n.length&&(clearTimeout(b),h()),l(a),D.splice(D.indexOf(a),1)}}var k,n=[];D.push(a),"undefined"!=typeof d&&(n=d.concat()),k=i(d,"events"),require(k,function(){var c,d;if(!e.any(arguments,e.isUndefined))for("undefined"!=typeof b&&(d=setTimeout(function(){h()},500)),c=0;c<arguments.length;c+=1)arguments[c].trigger(a,b,f,j(d))})}function p(){return A}function q(){return B+" "+C}function r(a){y="string"==typeof a?[a]:a,z=i(y),portal.analytics.attributes=b,portal.analytics.report=j}function s(a,c){b.set(a,c)}function t(a){return b.get(a)}function u(a){E[a]="I said I'd be done in a minute!"}function v(a){var b=h();delete E[a],!h()&&b&&j.apply({},F)}var w,x="analytics/adapters/",y=[],z=[],A="Portal Analytics Framework",B="PAF",C="1.2.3",D=[],E={},F=[];return{report:j,on:n,trigger:o,wipe:l,get_version:q,get_name:p,get_adapter_paths:i,get_adapters:g,parser:w,set:s,get:t,wait_for:u,wait_end:v,init:r,auto_report_on:f}}),define("nimbus/nav",["nimbus/utility_tray","jquery","underscore","data-eh","chrome_lib","analytics/main","bootstrap","modernizr","menu_aim"],function(a,b,c,d,e,f){"use strict";function g(){var a=b(".primary-nav");a.hide(),a.removeClass("hidden-sm"),a.fadeIn()}function h(){function e(){b("html, body").animate({scrollTop:"0px"},400)}function f(a){var c=b(a).attr("data-target"),d=b(".subnav-child[data-menu-local='"+c+"']"),e=b(".subnav-root li"),f=b(".subnav-child");f.not(d).stop().hide().removeClass("active"),e.not(a).removeClass("active"),d.stop().show().addClass("active"),b(a).addClass("active")}function h(){var a='<div class="col-sm-3 pull-right"><div class="row"><div class="col-xs-12"><div class="callout callout-grey support-cases"><h2>Support Cases</h2><ul class="support-case-options list-caret"><li><a href="#">View Open Cases</a></li><li><a href="#">View Closed Cases</a></li></ul><a class="btn btn-primary" href="#">Open a Support Case</a><h2>Contact Us</h2><p>Lorem ipsum dolor sit amet, consectetur.</p></div></div></div></div>';b(".contact-box").replaceWith(a)}function i(){b(this).siblings("ul").toggleClass("open")}function j(){b("footer").on("click",".collapsable-menus-enabled menu h3",i)}function k(a){return a.preventDefault(),e(),!1}function l(){s.click(k)}function m(){b(window).width()<768?r.addClass("collapsable-menus-enabled"):r.removeClass("collapsable-menus-enabled")}function n(){m(),d.apply(".mega-wrap"),b(".mega-wrap .mega").css("height",b(".mega-menu").outerHeight(!0))}a.init();var o=b('a[data-link="mega"]'),p=(b(".primary-nav"),b(".mega")),q=(b("#header-nav"),b("#mobile-nav-btn")),r=b(".footer-top"),s=b("#to-top a");s.affix({offset:{top:300}}),o.on("click",function(a){var c,e,f,g=b(this),h=b('[aria-labelledby="'+g.attr("data-target")+'"]'),i=h.find(".subnav-root li"),j=h.find(".subnav-child");a.preventDefault(),h.hasClass("active")?(g.parent().removeClass("active"),h.addClass("moving").removeClass("active"),h.siblings().removeClass("left right"),p.css("height","0px")):(f=g.parent().siblings("li"),f.hasClass("active")?(e=f.find(".active"),c=h.siblings(".active"),g.parent().addClass("active").siblings("li").removeClass("active"),h.siblings().removeClass("moving"),c.addClass("moving"),h.index()>c.index()?c.addClass("left"):c.addClass("right"),h.prevAll().removeClass("right").addClass("left"),h.nextAll().removeClass("left").addClass("right"),h.addClass("active moving").removeClass("left right").siblings(".active").removeClass("active")):(d.apply(".mega-wrap"),g.addClass("moving"),g.parent().addClass("active"),h.addClass("active").removeClass("left right"),p.css("height",h.outerHeight(!0)),h.prevAll().removeClass("right").addClass("left"),h.nextAll().removeClass("left").addClass("right")),i.removeClass("active"),j.hide(),0!==i.length&&(j.first().addClass("active").show(),i.first().addClass("active")))}),b("ul.subnav").menuAim({activate:f,deactivate:b.noop}),h(),q.collapse(),m(),j(),l(),b(window).resize(function(){c.throttle(n,320);var a,d,e=b(".mega-wrap > .mega");e.hasClass("active")&&(a=e.find(".mega-menu.active"),d=a.find(".subnav-child"),d.css("height","auto"))}),b(".nav-tabs li::first-child > a").tab("show"),b(".nav-tabs a").click(function(a){a.preventDefault(),b(this).tab("show")}),g(),function(){function a(a){m.style[u]="translate3d("+a+"px, 0, 0)"}function b(a){(a.target.classList.contains("nav-container")||a.target.classList.contains("nav-drawer-backdrop")||l.scrollHeight<=window.innerHeight)&&a.preventDefault()}function c(a){k.classList.toggle("x"),l.classList.toggle("open"),q.classList.toggle("open"),l.classList.contains("open")?document.body.addEventListener("touchmove",b):document.body.removeEventListener("touchmove",b)}try{var d,e,f,g,h,i,j,k=document.getElementById("menu-btn"),l=document.querySelector(".nav-drawer"),m=l.querySelector(".nav-container"),n=l.querySelectorAll("ul li a.has-subnav"),o=l.querySelectorAll(".back"),p=(document.querySelector("body"),document.querySelector("html"),l.parentNode),q=document.createElement("div"),r=!1,s=0,t=300,u=Modernizr.prefixed("transform");q.classList.add("nav-drawer-backdrop"),p.insertBefore(q,l),k.addEventListener("click",c),q.addEventListener("click",c),m.addEventListener("transitionend",function(){"back"===j&&e&&(e.classList.add("mm-hide"),e=null,g=i,h=g.parentElement,i=h.parentElement,g.classList.add("active"),h.classList.add("selected"),i.classList.add("parent")),"forward"===j&&(d&&i.classList.remove("parent"),f&&h.classList.remove("selected"),e&&g.classList.remove("active"),g.classList.add("active"),h.classList.add("selected"),i.classList.add("parent")),r=!1}),[].forEach.call(n,function(b){b.addEventListener("click",function(b){b.preventDefault(),r||(i&&i.classList.remove("parent"),h&&h.classList.remove("selected"),g&&g.classList.remove("active"),g=this.nextElementSibling,h=g.parentElement,i=h.parentElement,g.classList.remove("mm-hide"),j="forward",s-=t,a(s),r=!0)})}),[].forEach.call(o,function(b){b.addEventListener("click",function(b){b.preventDefault(),r||(i.classList.remove("parent"),h.classList.remove("selected"),g.classList.remove("active"),e=this.parentElement.parentElement,j="back",s+=t,a(s),r=!0)})})}catch(v){}}()}return b(document).ready(h),{show_nav:g}},function(a){window.chrometwo_ready(function(){var b=document.querySelector(".primary-nav");b&&b.setAttribute("style","display:block !important"),window.console&&(window.console.error?console.error(a):console.log(a))})}),define("home",["jquery","underscore","nimbus/searchbar","analytics/main","base","equalHeights"],function(a,b,c,d){function e(){a(document).ready(function(){if(createAnnouncements(),c.init_homepage(),!/iPhone|iPad|Android/i.test(navigator.userAgent)){var b,e="rh_searchautoactive",f=document.cookie.replace(/(?:(?:^|.*;\s*)rh_searchautoactive\s*\=\s*([^;]*).*$)|^.*$/,"$1"),g=Math.random();f?b="true"===f?"true":"false":(b=g>=.5?"true":"false",document.cookie=e+"="+b+"; expires=Thu, 04 Aug 2016 23:59:59 GMT; path=/");var h=document.cookie.replace(/(?:(?:^|.*;\s*)rh_searchautoactive\s*\=\s*([^;]*).*$)|^.*$/,"$1");"true"===h&&a("#search-query").focus(),d.set("ABTestCampaign",["SearchResultAutoActive",h]),d.trigger("ABTestImpressionAsync",void 0,void 0,void 0,!1),a("#homePageSearchForm").submit(function(){sessionStorage.setItem("fromHomePage","true")})}})}return{init:e}}),function(){"use strict";function a(b,d){function e(a,b){return function(){return a.apply(b,arguments)}}var f;if(d=d||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=d.touchBoundary||10,this.layer=b,this.tapDelay=d.tapDelay||200,this.tapTimeout=d.tapTimeout||700,!a.notNeeded(b)){for(var g=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],h=this,i=0,j=g.length;j>i;i++)h[g[i]]=e(h[g[i]],h);c&&(b.addEventListener("mouseover",this.onMouse,!0),b.addEventListener("mousedown",this.onMouse,!0),b.addEventListener("mouseup",this.onMouse,!0)),b.addEventListener("click",this.onClick,!0),b.addEventListener("touchstart",this.onTouchStart,!1),b.addEventListener("touchmove",this.onTouchMove,!1),b.addEventListener("touchend",this.onTouchEnd,!1),b.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(b.removeEventListener=function(a,c,d){var e=Node.prototype.removeEventListener;"click"===a?e.call(b,a,c.hijacked||c,d):e.call(b,a,c,d)},b.addEventListener=function(a,c,d){var e=Node.prototype.addEventListener;"click"===a?e.call(b,a,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(b,a,c,d)}),"function"==typeof b.onclick&&(f=b.onclick,b.addEventListener("click",function(a){f(a)},!1),b.onclick=null)}}var b=navigator.userAgent.indexOf("Windows Phone")>=0,c=navigator.userAgent.indexOf("Android")>0&&!b,d=/iP(ad|hone|od)/.test(navigator.userAgent)&&!b,e=d&&/OS 4_\d(_\d)?/.test(navigator.userAgent),f=d&&/OS [6-7]_\d/.test(navigator.userAgent),g=navigator.userAgent.indexOf("BB10")>0;a.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(d&&"file"===a.type||a.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(a.className)},a.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!c;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},a.prototype.sendClick=function(a,b){var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},a.prototype.determineEventType=function(a){return c&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},a.prototype.focus=function(a){var b;d&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type&&"month"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},a.prototype.updateScrollParent=function(a){var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},a.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a},a.prototype.onTouchStart=function(a){var b,c,f;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],d){if(f=window.getSelection(),f.rangeCount&&!f.isCollapsed)return!0;if(!e){if(c.identifier&&c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault(),!0},a.prototype.touchHasMoved=function(a){var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c},a.prototype.onTouchMove=function(a){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0)},a.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},a.prototype.onTouchEnd=function(a){var b,g,h,i,j,k=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(a.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,g=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,f&&(j=a.changedTouches[0],k=document.elementFromPoint(j.pageX-window.pageXOffset,j.pageY-window.pageYOffset)||k,k.fastClickScrollParent=this.targetElement.fastClickScrollParent),h=k.tagName.toLowerCase(),"label"===h){if(b=this.findControl(k)){if(this.focus(k),c)return!1;k=b}}else if(this.needsFocus(k))return a.timeStamp-g>100||d&&window.top!==window&&"input"===h?(this.targetElement=null,!1):(this.focus(k),this.sendClick(k,a),d&&"select"===h||(this.targetElement=null,a.preventDefault()),!1);return!(!d||e||(i=k.fastClickScrollParent,!i||i.fastClickLastScrollTop===i.scrollTop))||(this.needsClick(k)||(a.preventDefault(),this.sendClick(k,a)),!1)},a.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},a.prototype.onMouse=function(a){return!this.targetElement||(!!a.forwardedTouchEvent||(!(a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick))||(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1)))},a.prototype.onClick=function(a){var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail||(b=this.onMouse(a),b||(this.targetElement=null),b)},a.prototype.destroy=function(){var a=this.layer;c&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},a.notNeeded=function(a){var b,d,e,f;if("undefined"==typeof window.ontouchstart)return!0;if(d=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!c)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(d>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(g&&(e=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),e[1]>=10&&e[2]>=3&&(b=document.querySelector("meta[name=viewport]")))){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===a.style.msTouchAction||"manipulation"===a.style.touchAction||(f=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(f>=27&&(b=document.querySelector("meta[name=viewport]"),b&&(-1!==b.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===a.style.touchAction||"manipulation"===a.style.touchAction))},a.attach=function(b,c){return new a(b,c)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("fastclick",[],function(){return a}):"undefined"!=typeof module&&module.exports?(module.exports=a.attach,module.exports.FastClick=a):window.FastClick=a}(),require(["jquery","fastclick"],function(a,b){a(function(){b.attach(document.body)})}),define("fastclick-init",function(){}),define("analytics/events",[],function(){"use strict";function a(b){var c;if(!(this instanceof a))return new a(b);for(c in b)b.hasOwnProperty(c)&&(this[c]=b[c])}return{AnalyticsEvent:a}}),define("analytics/adapters/omniture/old_props",["s_code","analytics/adapters/omniture/old_fns"],function(){function a(){1===window.checkRegEvent()?c.events="event1":1===window.checkLoginEvent()&&(c.events="event2")}function b(){var a;for(a in window.s)window.s.hasOwnProperty(a)&&(c[a]=window.s[a])}var c={};return a(),b(),c.prop1="",c.prop2="",c.prop3="",c.prop4=window.location.href,c.prop5="","undefined"!=typeof window.pageLocale&&(window.s.eVar22=window.pageLocale,c.eVar22=c.eVar22.toLowerCase(),c.prop2=c.eVar22.toLowerCase()),document.question_form&&(c.eVar4=document.question_form.question_box.value,c.eVar4=c.eVar4.toLowerCase()),null!==document.getElementById("search_keyword")&&(c.eVar4=document.getElementById("search_keyword").value,c.eVar4=c.eVar4.toLowerCase()),c.eVar3&&""!==c.eVar3||(c.eVar3=window.getLoginStatus(),c.prop1=window.getLoginStatus()),1===window.checkRegEvent()?c.events="event1":1===window.checkLoginEvent()&&(c.events="event2"),window.s.events=c.events,c}),define("analytics/adapters/omniture/attributes",["analytics/separators","analytics/adapters/omniture/old_props","s_code"],function(a){"use strict";function b(b,c){var d,e=g[b],f=e.hasOwnProperty("prefix"),h=e.hasOwnProperty("separator"),i=f?j[e.prefix]:"",k=h?a[e.separator]:a.pipe,l=e.list===!0;return c instanceof Array?d=l?";"+i+a.strip_comma_from_array(c).join(",;"):i+c.join(k):(d=i+c,l&&(d=";"+a.strip_comma(d))),d.trim()}function c(a,c){if(g.hasOwnProperty(c.name)){var d=g[c.name],e=c.value,f=b(c.name,e),h="undefined"!=typeof e&&""!==e&&null!==e;h&&(d.hasOwnProperty("prop")&&(a["prop"+d.prop]=f),d.hasOwnProperty("evar")&&(a["eVar"+d.evar]=f),d.hasOwnProperty("name")&&("events"===d.name?e===!1?require("analytics/adapters/omniture/events").remove_event_value(a,f):require("analytics/adapters/omniture/events").add_event_value(a,f):a[d.name]=f))}}function d(a){var b;i={};for(b in a)a.hasOwnProperty(b)&&c(i,a[b]);return i.prop75=i.pageName,i}function e(a){var b;for(b in a)a.hasOwnProperty(b)&&("events"===b?require("analytics/adapters/omniture/events").add_event_value(window.s,a[b]):window.s[b]=a[b]);
}function f(a){var b,c,f;if("undefined"!=typeof a.all.Language&&"undefined"!=typeof a.all.Language.value&&(a.all.Language.value=a.all.Language.value.slice(0,2)),"undefined"!=typeof a.all.Hierarchy&&"undefined"!=typeof a.all.Hierarchy.value)for(f=0;f<a.all.Hierarchy.value.length;f+=1)a.all.Hierarchy.value[f]=a.all.Hierarchy.value[f].replace(/,/g,"");return"undefined"!=typeof a.all.NoSearchResults&&"undefined"!=typeof a.all.NoSearchResults.value&&a.all.NoSearchResults.value&&(a.all.NoSearchResults.value="event69"),c=d(a.all),"object"==typeof window.s?(e(d(a.all)),b=window.s.t()):require(["chrome_lib"],function(a){a.log("OmnitureNotFoundError: Couldn't find Omniture's window.s object.","error")}),c}var g,h="omniture",i={},j={cp:"cp | "};return g={ABTestCampaign:{evar:59},Architecture:{prop:73},CampaignExternal:{},CampaignInternal:{evar:1},Category:{separator:"semicolon"},Channel:{evar:32,name:"channel"},Collection:{},Component:{separator:"semicolon"},ContentSubType:{prop:15,evar:28},CustomerNumber:{evar:63},FacetedSearchValues:{prop:6,evar:13},GroupID:{evar:66},Hierarchy:{name:"hier1",separator:"comma"},InfrastructureStr:{prop:9},KCSState:{separator:"semicolon"},KnowledgeMeta:{prop:64,separator:"pipe"},Language:{prop:2,evar:22},ErrorPageName:{prop:60,name:"pageName",prefix:"cp"},ErrorPageType:{name:"pageType"},ErrorReferringChannel:{prop:58},ErrorChannel:{prop:59},ErrorType:{evar:60},OmniturePersona:{prop:1,evar:3},CertifiedVendorProduct:{prop:67,separator:"pipe"},OmnitureVisitor:{evar:41},OnSiteSearch:{},OnSiteSearchValue:{prop:17,evar:4},NoSearchResults:{name:"events"},PageName:{name:"pageName",prefix:"cp"},PageRank:{evar:65},Platform:{},Products:{name:"products",list:!0},PublicationState:{separator:"semicolon"},Rating:{prop:71},ResourceID:{prop:13,evar:26,separator:"pipe"},ResourceTitle:{prop:16,evar:29},ResourceType:{prop:14,evar:27},SBR:{separator:"semicolon"},CodeVersion:{prop:10,evar:20},SeverityLevel:{prop:74},Tags:{prop:66},TargetURL:{},ToolName:{evar:33,prop:33},TrueURL:{prop:21,evar:18},URL:{prop:4,evar:23},UseType:{},UserLogin:{evar:37},UserNumber:{evar:36},UserSearchEvent:{},UserSessionID:{prop:62,evar:62},VideoResolution:{prop:72},VideoSegmentTitle:{evar:39},VideoTitle:{prop:38,evar:38},VisitNumber:{evar:42},isAuthenticated:{},isEntitled:{},isInternal:{},isSupportEntitled:{}},{name:h,send:f,prep_value:b,attributes:g,build_s_object:d,update_s_object:e}}),define("analytics/adapters/omniture/events",["jquery","jsUri","analytics/events","analytics/attributes","analytics/adapters/omniture/attributes","chrome_lib","underscore","analytics/separators","s_code"],function(a,b,c,d,e,f,g,h){"use strict";function i(a,b){switch(typeof a[b]){case"string":return function(){return a[b]};case"object":return function(){return a[b]};case"function":return function(c){return a[b](c)};default:return function(){}}}function j(a){return"function"==typeof a?a():a}function k(a){var b="function"==typeof a?a():a;return"function"!=typeof b.should_call||b.should_call()}function l(a){var b;return b="object"!=typeof a||"function"!=typeof a.hasAttribute||!a.hasAttribute("href")||a}function m(a){p(a)}function n(a,b,g,h){var j,m,n,p,r,s,v,x,y;if(x=i(w,a)(g),k(x)!==!1){v=new c.AnalyticsEvent(x),v.call_tl&&q(v),"undefined"==typeof b?b={}:y=f.getEventTarget(b),n=window.s,o(x);for(j in v.values)v.values.hasOwnProperty(j)&&(m=i(v.values,j)(b),"undefined"!=typeof m&&("events"===j?u(n,m):n[j]=m));e.update_s_object(e.build_s_object(d.all)),r=i(v,"linkType")(b),s=i(v,"linkName")(b),n.prop75=s,t(n,"linkTrackVars","prop75"),v.call_tl&&(p=l(y),n.tl(p,r,s,null,h))}}function o(a){var b,c,d={};for(b in a.values)a.values.hasOwnProperty(b)&&(c=a.values[b],d[b]=window.s[b]);x[a.event_name]instanceof Array||(x[a.event_name]=[]),x[a.event_name].push(d)}function p(a){var b,c;if(x[a]instanceof Array){b=x[a].pop();for(c in b)b.hasOwnProperty(c)&&(window.s[c]=b[c])}}function q(a){var b,c=e.attributes.CustomerNumber,f=e.attributes.UserLogin,g=e.attributes.UserNumber,h="eVar"+c.evar,i="eVar"+f.evar,j="eVar"+g.evar;b="string"==typeof a.values.linkTrackVars?a.values.linkTrackVars.split(","):[],b.unshift(h),b.unshift(i),b.unshift(j),a.values[h]=d.get("CustomerNumber"),a.values[i]=d.get("UserLogin"),a.values[j]=d.get("UserNumber"),a.values.linkTrackVars=b.join(",")}function r(a,b,c,d){var e;w.hasOwnProperty(a)&&(e=i(w,a)(c),e.call_tl===!0&&n(a,b,c,d))}function t(a,b,c){"undefined"==typeof a[b]||""===a[b]?a[b]=c:"undefined"!=typeof a[b].indexOf&&-1===a[b].indexOf(c)&&(a[b]=[a[b],c].join(","))}function u(a,b){t(a,"events",b)}function v(a,b){var c,d;"undefined"!=typeof a.events&&""!==a.events&&"undefined"!=typeof a.events.indexOf&&(c=a.events.indexOf(b),d=a.events.split(","),-1!==c&&(d.splice(c,1),a.events=d.join(",")))}var w,x={};return w={RHNDownload:function(a){return{event_name:"RHNDownload",values:{linkTrackVars:"prop62,eVar36,eVar37,eVar62,eVar63,events,products",linkTrackEvents:"event65",events:"event65",products:function(){return e.prep_value("Products",a)},prop62:function(){return e.prep_value("UserSessionID",d.get("UserSessionID"))},eVar36:function(){return e.prep_value("UserNumber",d.get("UserNumber"))},eVar37:function(){return e.prep_value("UserLogin",d.get("UserLogin"))},eVar62:function(){return e.prep_value("UserSessionID",d.get("UserSessionID"))},eVar63:function(){return e.prep_value("CustomerNumber",d.get("CustomerNumber"))}},linkType:"d",linkName:"RHNDownload",call_tl:!0}},CSPDownload:function(a){var b=w.RHNDownload(a);return b.linkName="CSPDownload",b.event_name="CSPDownload",b},UnifiedDownload:function(a){var b=w.RHNDownload(a);return b.linkName="UnifiedDownload",b.event_name="UnifiedDownload",b},DockerImageDownload:function(a){var b=w.RHNDownload(a);return b.linkName="DockerImageDownload",b.event_name="DockerImageDownload",b.values.products=function(a){var b=f.getEventTarget(a).getAttribute("data-product-name")+" Docker Image";return e.prep_value("Products",b)},b},ProductPageDownload:function(a){var b=w.RHNDownload(a);return b.linkName="ProductPageDownload",b.event_name="ProductPageDownload",b.values.products=function(a){var b=f.getEventTarget(a).getAttribute("data-product-name");return e.prep_value("Products",b)},b},PortalProductDownload:{event_name:"PortalProductDownload",values:{linkTrackVars:"prop75",prop75:"Product Page File Download Link"},linkName:"Product Page File Download Link",linkType:"o",call_tl:!0},ABTestImpression:{event_name:"ABTestImpression",values:{events:"event58"},call_tl:!1},ABTestImpressionAsync:{event_name:"ABTestImpression",values:{events:"event58",linkTrackEvents:"event58",linkTrackVars:"events,eVar59"},linkType:"o",linkName:function(){var a="A/B Impression";return"undefined"!=typeof s.eVar59&&(a=s.eVar59+" | "+a),a},call_tl:!0},ABTestSuccess:{event_name:"ABTestSuccess",values:{events:"event59",linkTrackEvents:"event59",linkTrackVars:"events,eVar59"},linkType:"o",linkName:function(){var a="A/B Success";return"undefined"!=typeof s.eVar59&&(a=s.eVar59+" | "+a),a},call_tl:!0},PortalSearch:function(){function c(){var b=angular.element(a("#searchbrowseapp")).scope().$$childHead.filterQuery,c=[b.documentKind,b.product||b.documentation_product];return c=g.each(c,function(a,b,c){c[b]=g.map(c[b],function(a){return a.replace(h.comma_nsp,"")})}),c=g.map(c,h.join(h.comma_nsp)),c=g.map(c,function(a){return 0===a.length?"undefined":a}),c.join(h.pipe)}return{event_name:"PortalSearch",values:{prop6:c,eVar13:function(){return this.prop6()},prop17:function(){var a;if(location.href.indexOf("q")>=0)try{a=new b("?"+new b(location.href).anchor().slice(2)).getQueryParamValue("q").replace(/\+/g," ")}catch(c){a=void 0}return a},eVar4:function(){return this.prop17()},prop33:"Onsite Search",eVar33:function(){return this.prop33},events:function(){var a=[];return this.prop17()&&a.push("event14"),this.prop6()&&a.push("event16"),a.join(",")}},call_tl:!1}},CertificationSearch:function(){var b,c,d=w.PortalSearch(),e=angular.element(a("#catalogsearch")).scope().$$childTail.SearchService,f=e.currentQuery,i=e["primary"+e.searchMode],j=e.searchMode;return d.event_name="CertificationSearch",b=g.chain(e).pick("vendors","supportedLanguages","regions","portalCertifications").mapObject(g.partial(g.filter,g,g.property("selected"))).mapObject(g.partial(g.map,g,g.property("name"))).mapObject(h.strip_comma_from_array).mapObject(h.join(h.comma_nsp)).value(),c=[i||"undefined",j||"undefined",b.vendors||"undefined",b.portalCertifications||"undefined",b.regions||"undefined",b.supportedLanguages||"undefined"].join(h.pipe),d.values.prop6=function(){return c},d.values.prop17=function(){return String(f)},d.values.prop33="certification search",d},PortalSearchResultClick:function(){return{event_name:"PortalSearchResultClick",values:{linkTrackEvents:function(a){var b=["event22"],c=!1;try{c=f.getEventTarget(a).getAttribute("class").indexOf("keymatch")>=0}catch(d){}return c&&b.push("event68"),b.join(",")},linkTrackVars:"eVar65,events",eVar65:function(b){var c=~~a(f.getEventTarget(b)).attr("rank"),d=~~a(".pager-num.pager-current").text(),e=c+12*(d-1);return e},events:function(a){return this.linkTrackEvents(a)}},call_tl:!0,linkType:"o",linkName:"search result click-through"}},CertificationSearchResultClick:function(){var b=w.PortalSearchResultClick();return b.event_name="CertificationSearchResultClick",b.values.linkTrackEvents=function(){return"event22"},b.values.eVar65=function(b){var c=a(b.currentTarget).parents("tr, .list-result").index();return c},b.linkName="certification search result click-through",b},LabsBegin:function(){return{event_name:"LabsBegin",values:{events:"event33",prop33:function(){return d.get("ResourceType")},eVar33:function(){return this.prop33()}},call_tl:!1,should_call:function(){var a="labs_begin_"+j(this.values.prop33)+"_"+window.getCookieValue("chrome_session_id");if(f.store.session.get(a)===!0)return!1;var b=window.getCookie("rh_user");return!!(b&&b.length>2)&&(f.store.session.set(a,!0),!0)},linkType:"o",linkName:function(){return"labs | "+j(this.values.prop33)}}},LabsCompletion:function(){return{event_name:"LabsCompletion",values:{events:"event34",linkTrackEvents:"event34",prop33:function(){return d.get("ResourceType")},eVar33:function(){return this.prop33()}},call_tl:!0,should_call:function(){var a="labs_complete_"+j(this.values.prop33)+"_"+window.getCookieValue("chrome_session_id");if(f.store.session.get(a)===!0)return!1;var b=window.getCookie("rh_user");return!!(b&&b.length>2)&&(f.store.session.set(a,!0),!0)},linkType:"o",linkName:function(){return this.call_once=!1,"labs | "+j(this.values.prop33)}}},LabsCompletionPage:{event_name:"LabsCompletionPage",values:{events:"event34"},call_tl:!1},InsightsBegin:function(){var a=w.LabsBegin();return a.event_name="InsightsBegin",a.values.prop33="insights",a.values.eVar33="insights",a.linkName=function(){return this.call_once=!1,"insights | "+j(this.values.prop33)},a},InsightsCompletion:function(){var a=w.LabsCompletion();return a.event_name="InsightsCompletion",a.values.prop33="insights",a.values.eVar33="insights",a.should_call=function(){var a="labs_complete_insights_"+window.getCookieValue("chrome_session_id");if(f.store.session.get(a)===!0)return!1;var b=window.getCookie("rh_user");return!!(b&&b.length>2)&&(f.store.session.set(a,!0),!0)},a.linkName=function(){return this.call_once=!1,"insights | "+j(this.values.prop33)},a},InsightsRuleMoreInfo:{event_name:"InsightsRuleMoreInfo",values:{linkTrackVars:"prop14,prop15,prop16,prop75,eVar27,eVar28,eVar29,eVar36,eVar37,eVar63",prop75:"insights rule more info click"},linkName:"cp | insights rule more info click",linkType:"o",call_tl:!0},MoreLikeThisSolution:{event_name:"MoreLikeThisSolution",values:{prop33:"more_like_this",linkTrackVars:"prop33"},call_tl:!0,linkType:"o",linkName:"more_like_this | solution | solution"},MoreLikeThisArticle:{event_name:"MoreLikeThisArticle",values:{prop33:"more_like_this",linkTrackVars:"prop33"},call_tl:!0,linkType:"o",linkName:"more_like_this | article | article"},OpenSupportCase:{event_name:"OpenSupportCase",values:{events:"event61,event63",prop61:"CaseCreation",eVar61:"CaseManagement"},call_tl:!1},OpenSupportCaseRecommendationClick:{event_name:"OpenSupportCaseRecommendationClick",values:{events:"event34,event66",prop61:"CaseRecommendation",linkTrackVars:"prop61,events",linkTrackEvents:"event34,event66"},call_tl:!0,linkType:"o",linkName:function(a){var b,c=f.getEventTarget(a),d="Undefined";return b="undefined"!=typeof c&&"function"==typeof c.getAttribute,b&&(d=c.getAttribute("data-rec-type")),"RecommendationLink"+d}},OpenSupportCaseSubmit:{event_name:"OpenSupportCaseSubmit",values:{events:"event62,event64",prop61:"CaseSubmit",eVar61:"CaseManagement",linkTrackVars:"prop61,eVar61,events",linkTrackEvents:"event62,event64"},call_tl:!0,linkType:"o",linkName:"CaseSubmitButton"},CirrusOptInPresented:{event_name:"CirrusOptInPresented",values:{prop65:"cirrus theme | opt-in banner"},call_tl:!1},CirrusOptedIn:{event_name:"CirrusOptedIn",values:{prop65:"cirrus theme | opt-in",linkTrackVars:"prop65,eVar36,eVar37,eVar63,events"},call_tl:!0,linkType:"o",linkName:"cirrus theme | opt-in"},CirrusOptedOut:{event_name:"CirrusOptedOut",values:{prop65:"cirrus theme | opt-out",linkTrackVars:"prop65,eVar36,eVar37,eVar63,events"},call_tl:!0,linkType:"o",linkName:"cirrus theme | opt-out"},CirrusLeftFeedback:{event_name:"CirrusLeftFeedback",values:{prop65:"cirrus theme | feedback",linkTrackVars:"prop65,eVar36,eVar37,eVar63,events"},call_tl:!0,linkType:"o",linkName:"cirrus theme | feedback"},CaseViewRecommendationClick:{event_name:"CaseViewRecommendationClick",values:{},call_tl:!0,linkType:"o",linkName:"RecommendationLinkOnCaseViewPage"},SurveyProductDocumentationClick:{event_name:"SurveyProductDocumentationClick",values:{linkTrackVars:"eVar67,events",linkTrackEvents:"event71",events:"event71",eVar67:function(){return d.get("UserSessionID")}},call_tl:!0,linkType:"o",linkName:"Product Documentation Survey"},ContentFollow:{event_name:"ContentFollow",values:{linkTrackVars:"prop14,prop15,prop16,prop75,eVar27,eVar28,eVar29,eVar36,eVar37,eVar63,events",prop75:"content follow click",linkTrackEvents:"event701",events:"event701"},linkName:"cp | content follow",linkType:"o",call_tl:!0}},{trigger:r,wipe:m,event_definitions:w,call_event:n,add_event_value:u,remove_event_value:v}}),define("analytics/videos/main",["analytics/attributes","s_code"],function(a,b,c){"use strict";function d(){b.Media.open.apply(b.Media,arguments)}function e(){b.Media.close.apply(b.Media,arguments)}function f(){b.Media.play.apply(b.Media,arguments)}function g(){b.Media.stop.apply(b.Media,arguments)}return{open:d,close:e,play:f,stop:g}}),define("analytics/videos/mediaelement",["underscore","analytics/videos/main"],function(a,b){"use strict";function c(a){return!e(a)&&!f(a)}function d(a){return 0!==a.node.currentTime}function e(a){return!!a.node.ended}function f(a){return!!a.node.paused}function g(a){return a.node.duration}function h(a){return a.node.currentTime}function i(a,b){a.node.addEventListener("play",l.play(a,b)),a.node.addEventListener("pause",l.pause(a,b)),a.node.addEventListener("seeked",l.seeked(a,b)),a.node.addEventListener("seeking",l.seeking(a,b)),a.node.addEventListener("ended",l.end(a,b))}var j="cpMediaElement",k=1e3,l=[];return l.play=function(a,c){return function(){d(a)||b.open(c,g(a),j),b.play(c,h(a))}},l.pause=function(a,c){return function(){f(a)&&!e(a)&&b.stop(c,h(a))}},l.seeked=function(a,d){var e=-1;return function(){clearTimeout(e),e=setTimeout(function(){c(a)&&b.play(d,h(a))},k)}},l.seeking=function(a,c){var d=0;return function(){var e=Date.now(),f=e-d;d=e,f>k&&b.stop(c,h(a))}},l.end=function(a,c){return function(){b.stop(c,h(a)),b.close(c)}},{add_handlers:i}}),define("google_remarketing",[],function(){function a(){var a=document.createElement("img");a.src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/990030321/?value=0&label=rxV4CN_35QQQ8dOK2AM&guid=ON&script=0"}return{add_tag:a}}),define("analytics/pageview",["underscore","analytics/main","analytics/attributes","google_remarketing","chrome_lib"],function(a,b,c,d,e){"use strict";function f(){is_chrome_two()?e.whenUserStatusReady(a.partial(a.delay,g,h)):g()}function g(){try{b.init(["omniture"]),c.harvest(),b.auto_report_on()&&b.report(),d.add_tag()}catch(a){}}var h=350;return{run_once:f,send:g}}),define("analytics/sites/portal/events",function(){}),chrometwo_require(["nimbus/nav"]),chrometwo_require(["base"]),chrometwo_require(["jquery","analytics/pageview"],function(a,b){a(b.run_once)});

console.log('cp-chrome adding webcomponents polyfill');
/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
// @version 0.7.22
(function() {
  window.WebComponents = window.WebComponents || {
    flags: {}
  };
  var file = "webcomponents-lite.js";
  var script = document.querySelector('script[src*="' + file + '"]');
  var flags = {};
  if (!flags.noOpts) {
    location.search.slice(1).split("&").forEach(function(option) {
      var parts = option.split("=");
      var match;
      if (parts[0] && (match = parts[0].match(/wc-(.+)/))) {
        flags[match[1]] = parts[1] || true;
      }
    });
    if (script) {
      for (var i = 0, a; a = script.attributes[i]; i++) {
        if (a.name !== "src") {
          flags[a.name] = a.value || true;
        }
      }
    }
    if (flags.log && flags.log.split) {
      var parts = flags.log.split(",");
      flags.log = {};
      parts.forEach(function(f) {
        flags.log[f] = true;
      });
    } else {
      flags.log = {};
    }
  }
  if (flags.register) {
    window.CustomElements = window.CustomElements || {
      flags: {}
    };
    window.CustomElements.flags.register = flags.register;
  }
  WebComponents.flags = flags;
})();

(function(scope) {
  "use strict";
  var hasWorkingUrl = false;
  if (!scope.forceJURL) {
    try {
      var u = new URL("b", "http://a");
      u.pathname = "c%20d";
      hasWorkingUrl = u.href === "http://a/c%20d";
    } catch (e) {}
  }
  if (hasWorkingUrl) return;
  var relative = Object.create(null);
  relative["ftp"] = 21;
  relative["file"] = 0;
  relative["gopher"] = 70;
  relative["http"] = 80;
  relative["https"] = 443;
  relative["ws"] = 80;
  relative["wss"] = 443;
  var relativePathDotMapping = Object.create(null);
  relativePathDotMapping["%2e"] = ".";
  relativePathDotMapping[".%2e"] = "..";
  relativePathDotMapping["%2e."] = "..";
  relativePathDotMapping["%2e%2e"] = "..";
  function isRelativeScheme(scheme) {
    return relative[scheme] !== undefined;
  }
  function invalid() {
    clear.call(this);
    this._isInvalid = true;
  }
  function IDNAToASCII(h) {
    if ("" == h) {
      invalid.call(this);
    }
    return h.toLowerCase();
  }
  function percentEscape(c) {
    var unicode = c.charCodeAt(0);
    if (unicode > 32 && unicode < 127 && [ 34, 35, 60, 62, 63, 96 ].indexOf(unicode) == -1) {
      return c;
    }
    return encodeURIComponent(c);
  }
  function percentEscapeQuery(c) {
    var unicode = c.charCodeAt(0);
    if (unicode > 32 && unicode < 127 && [ 34, 35, 60, 62, 96 ].indexOf(unicode) == -1) {
      return c;
    }
    return encodeURIComponent(c);
  }
  var EOF = undefined, ALPHA = /[a-zA-Z]/, ALPHANUMERIC = /[a-zA-Z0-9\+\-\.]/;
  function parse(input, stateOverride, base) {
    function err(message) {
      errors.push(message);
    }
    var state = stateOverride || "scheme start", cursor = 0, buffer = "", seenAt = false, seenBracket = false, errors = [];
    loop: while ((input[cursor - 1] != EOF || cursor == 0) && !this._isInvalid) {
      var c = input[cursor];
      switch (state) {
       case "scheme start":
        if (c && ALPHA.test(c)) {
          buffer += c.toLowerCase();
          state = "scheme";
        } else if (!stateOverride) {
          buffer = "";
          state = "no scheme";
          continue;
        } else {
          err("Invalid scheme.");
          break loop;
        }
        break;

       case "scheme":
        if (c && ALPHANUMERIC.test(c)) {
          buffer += c.toLowerCase();
        } else if (":" == c) {
          this._scheme = buffer;
          buffer = "";
          if (stateOverride) {
            break loop;
          }
          if (isRelativeScheme(this._scheme)) {
            this._isRelative = true;
          }
          if ("file" == this._scheme) {
            state = "relative";
          } else if (this._isRelative && base && base._scheme == this._scheme) {
            state = "relative or authority";
          } else if (this._isRelative) {
            state = "authority first slash";
          } else {
            state = "scheme data";
          }
        } else if (!stateOverride) {
          buffer = "";
          cursor = 0;
          state = "no scheme";
          continue;
        } else if (EOF == c) {
          break loop;
        } else {
          err("Code point not allowed in scheme: " + c);
          break loop;
        }
        break;

       case "scheme data":
        if ("?" == c) {
          this._query = "?";
          state = "query";
        } else if ("#" == c) {
          this._fragment = "#";
          state = "fragment";
        } else {
          if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
            this._schemeData += percentEscape(c);
          }
        }
        break;

       case "no scheme":
        if (!base || !isRelativeScheme(base._scheme)) {
          err("Missing scheme.");
          invalid.call(this);
        } else {
          state = "relative";
          continue;
        }
        break;

       case "relative or authority":
        if ("/" == c && "/" == input[cursor + 1]) {
          state = "authority ignore slashes";
        } else {
          err("Expected /, got: " + c);
          state = "relative";
          continue;
        }
        break;

       case "relative":
        this._isRelative = true;
        if ("file" != this._scheme) this._scheme = base._scheme;
        if (EOF == c) {
          this._host = base._host;
          this._port = base._port;
          this._path = base._path.slice();
          this._query = base._query;
          this._username = base._username;
          this._password = base._password;
          break loop;
        } else if ("/" == c || "\\" == c) {
          if ("\\" == c) err("\\ is an invalid code point.");
          state = "relative slash";
        } else if ("?" == c) {
          this._host = base._host;
          this._port = base._port;
          this._path = base._path.slice();
          this._query = "?";
          this._username = base._username;
          this._password = base._password;
          state = "query";
        } else if ("#" == c) {
          this._host = base._host;
          this._port = base._port;
          this._path = base._path.slice();
          this._query = base._query;
          this._fragment = "#";
          this._username = base._username;
          this._password = base._password;
          state = "fragment";
        } else {
          var nextC = input[cursor + 1];
          var nextNextC = input[cursor + 2];
          if ("file" != this._scheme || !ALPHA.test(c) || nextC != ":" && nextC != "|" || EOF != nextNextC && "/" != nextNextC && "\\" != nextNextC && "?" != nextNextC && "#" != nextNextC) {
            this._host = base._host;
            this._port = base._port;
            this._username = base._username;
            this._password = base._password;
            this._path = base._path.slice();
            this._path.pop();
          }
          state = "relative path";
          continue;
        }
        break;

       case "relative slash":
        if ("/" == c || "\\" == c) {
          if ("\\" == c) {
            err("\\ is an invalid code point.");
          }
          if ("file" == this._scheme) {
            state = "file host";
          } else {
            state = "authority ignore slashes";
          }
        } else {
          if ("file" != this._scheme) {
            this._host = base._host;
            this._port = base._port;
            this._username = base._username;
            this._password = base._password;
          }
          state = "relative path";
          continue;
        }
        break;

       case "authority first slash":
        if ("/" == c) {
          state = "authority second slash";
        } else {
          err("Expected '/', got: " + c);
          state = "authority ignore slashes";
          continue;
        }
        break;

       case "authority second slash":
        state = "authority ignore slashes";
        if ("/" != c) {
          err("Expected '/', got: " + c);
          continue;
        }
        break;

       case "authority ignore slashes":
        if ("/" != c && "\\" != c) {
          state = "authority";
          continue;
        } else {
          err("Expected authority, got: " + c);
        }
        break;

       case "authority":
        if ("@" == c) {
          if (seenAt) {
            err("@ already seen.");
            buffer += "%40";
          }
          seenAt = true;
          for (var i = 0; i < buffer.length; i++) {
            var cp = buffer[i];
            if ("	" == cp || "\n" == cp || "\r" == cp) {
              err("Invalid whitespace in authority.");
              continue;
            }
            if (":" == cp && null === this._password) {
              this._password = "";
              continue;
            }
            var tempC = percentEscape(cp);
            null !== this._password ? this._password += tempC : this._username += tempC;
          }
          buffer = "";
        } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
          cursor -= buffer.length;
          buffer = "";
          state = "host";
          continue;
        } else {
          buffer += c;
        }
        break;

       case "file host":
        if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
          if (buffer.length == 2 && ALPHA.test(buffer[0]) && (buffer[1] == ":" || buffer[1] == "|")) {
            state = "relative path";
          } else if (buffer.length == 0) {
            state = "relative path start";
          } else {
            this._host = IDNAToASCII.call(this, buffer);
            buffer = "";
            state = "relative path start";
          }
          continue;
        } else if ("	" == c || "\n" == c || "\r" == c) {
          err("Invalid whitespace in file host.");
        } else {
          buffer += c;
        }
        break;

       case "host":
       case "hostname":
        if (":" == c && !seenBracket) {
          this._host = IDNAToASCII.call(this, buffer);
          buffer = "";
          state = "port";
          if ("hostname" == stateOverride) {
            break loop;
          }
        } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c) {
          this._host = IDNAToASCII.call(this, buffer);
          buffer = "";
          state = "relative path start";
          if (stateOverride) {
            break loop;
          }
          continue;
        } else if ("	" != c && "\n" != c && "\r" != c) {
          if ("[" == c) {
            seenBracket = true;
          } else if ("]" == c) {
            seenBracket = false;
          }
          buffer += c;
        } else {
          err("Invalid code point in host/hostname: " + c);
        }
        break;

       case "port":
        if (/[0-9]/.test(c)) {
          buffer += c;
        } else if (EOF == c || "/" == c || "\\" == c || "?" == c || "#" == c || stateOverride) {
          if ("" != buffer) {
            var temp = parseInt(buffer, 10);
            if (temp != relative[this._scheme]) {
              this._port = temp + "";
            }
            buffer = "";
          }
          if (stateOverride) {
            break loop;
          }
          state = "relative path start";
          continue;
        } else if ("	" == c || "\n" == c || "\r" == c) {
          err("Invalid code point in port: " + c);
        } else {
          invalid.call(this);
        }
        break;

       case "relative path start":
        if ("\\" == c) err("'\\' not allowed in path.");
        state = "relative path";
        if ("/" != c && "\\" != c) {
          continue;
        }
        break;

       case "relative path":
        if (EOF == c || "/" == c || "\\" == c || !stateOverride && ("?" == c || "#" == c)) {
          if ("\\" == c) {
            err("\\ not allowed in relative path.");
          }
          var tmp;
          if (tmp = relativePathDotMapping[buffer.toLowerCase()]) {
            buffer = tmp;
          }
          if (".." == buffer) {
            this._path.pop();
            if ("/" != c && "\\" != c) {
              this._path.push("");
            }
          } else if ("." == buffer && "/" != c && "\\" != c) {
            this._path.push("");
          } else if ("." != buffer) {
            if ("file" == this._scheme && this._path.length == 0 && buffer.length == 2 && ALPHA.test(buffer[0]) && buffer[1] == "|") {
              buffer = buffer[0] + ":";
            }
            this._path.push(buffer);
          }
          buffer = "";
          if ("?" == c) {
            this._query = "?";
            state = "query";
          } else if ("#" == c) {
            this._fragment = "#";
            state = "fragment";
          }
        } else if ("	" != c && "\n" != c && "\r" != c) {
          buffer += percentEscape(c);
        }
        break;

       case "query":
        if (!stateOverride && "#" == c) {
          this._fragment = "#";
          state = "fragment";
        } else if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
          this._query += percentEscapeQuery(c);
        }
        break;

       case "fragment":
        if (EOF != c && "	" != c && "\n" != c && "\r" != c) {
          this._fragment += c;
        }
        break;
      }
      cursor++;
    }
  }
  function clear() {
    this._scheme = "";
    this._schemeData = "";
    this._username = "";
    this._password = null;
    this._host = "";
    this._port = "";
    this._path = [];
    this._query = "";
    this._fragment = "";
    this._isInvalid = false;
    this._isRelative = false;
  }
  function jURL(url, base) {
    if (base !== undefined && !(base instanceof jURL)) base = new jURL(String(base));
    this._url = url;
    clear.call(this);
    var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, "");
    parse.call(this, input, null, base);
  }
  jURL.prototype = {
    toString: function() {
      return this.href;
    },
    get href() {
      if (this._isInvalid) return this._url;
      var authority = "";
      if ("" != this._username || null != this._password) {
        authority = this._username + (null != this._password ? ":" + this._password : "") + "@";
      }
      return this.protocol + (this._isRelative ? "//" + authority + this.host : "") + this.pathname + this._query + this._fragment;
    },
    set href(href) {
      clear.call(this);
      parse.call(this, href);
    },
    get protocol() {
      return this._scheme + ":";
    },
    set protocol(protocol) {
      if (this._isInvalid) return;
      parse.call(this, protocol + ":", "scheme start");
    },
    get host() {
      return this._isInvalid ? "" : this._port ? this._host + ":" + this._port : this._host;
    },
    set host(host) {
      if (this._isInvalid || !this._isRelative) return;
      parse.call(this, host, "host");
    },
    get hostname() {
      return this._host;
    },
    set hostname(hostname) {
      if (this._isInvalid || !this._isRelative) return;
      parse.call(this, hostname, "hostname");
    },
    get port() {
      return this._port;
    },
    set port(port) {
      if (this._isInvalid || !this._isRelative) return;
      parse.call(this, port, "port");
    },
    get pathname() {
      return this._isInvalid ? "" : this._isRelative ? "/" + this._path.join("/") : this._schemeData;
    },
    set pathname(pathname) {
      if (this._isInvalid || !this._isRelative) return;
      this._path = [];
      parse.call(this, pathname, "relative path start");
    },
    get search() {
      return this._isInvalid || !this._query || "?" == this._query ? "" : this._query;
    },
    set search(search) {
      if (this._isInvalid || !this._isRelative) return;
      this._query = "?";
      if ("?" == search[0]) search = search.slice(1);
      parse.call(this, search, "query");
    },
    get hash() {
      return this._isInvalid || !this._fragment || "#" == this._fragment ? "" : this._fragment;
    },
    set hash(hash) {
      if (this._isInvalid) return;
      this._fragment = "#";
      if ("#" == hash[0]) hash = hash.slice(1);
      parse.call(this, hash, "fragment");
    },
    get origin() {
      var host;
      if (this._isInvalid || !this._scheme) {
        return "";
      }
      switch (this._scheme) {
       case "data":
       case "file":
       case "javascript":
       case "mailto":
        return "null";
      }
      host = this.host;
      if (!host) {
        return "";
      }
      return this._scheme + "://" + host;
    }
  };
  var OriginalURL = scope.URL;
  if (OriginalURL) {
    jURL.createObjectURL = function(blob) {
      return OriginalURL.createObjectURL.apply(OriginalURL, arguments);
    };
    jURL.revokeObjectURL = function(url) {
      OriginalURL.revokeObjectURL(url);
    };
  }
  scope.URL = jURL;
})(self);

if (typeof WeakMap === "undefined") {
  (function() {
    var defineProperty = Object.defineProperty;
    var counter = Date.now() % 1e9;
    var WeakMap = function() {
      this.name = "__st" + (Math.random() * 1e9 >>> 0) + (counter++ + "__");
    };
    WeakMap.prototype = {
      set: function(key, value) {
        var entry = key[this.name];
        if (entry && entry[0] === key) entry[1] = value; else defineProperty(key, this.name, {
          value: [ key, value ],
          writable: true
        });
        return this;
      },
      get: function(key) {
        var entry;
        return (entry = key[this.name]) && entry[0] === key ? entry[1] : undefined;
      },
      "delete": function(key) {
        var entry = key[this.name];
        if (!entry || entry[0] !== key) return false;
        entry[0] = entry[1] = undefined;
        return true;
      },
      has: function(key) {
        var entry = key[this.name];
        if (!entry) return false;
        return entry[0] === key;
      }
    };
    window.WeakMap = WeakMap;
  })();
}

(function(global) {
  if (global.JsMutationObserver) {
    return;
  }
  var registrationsTable = new WeakMap();
  var setImmediate;
  if (/Trident|Edge/.test(navigator.userAgent)) {
    setImmediate = setTimeout;
  } else if (window.setImmediate) {
    setImmediate = window.setImmediate;
  } else {
    var setImmediateQueue = [];
    var sentinel = String(Math.random());
    window.addEventListener("message", function(e) {
      if (e.data === sentinel) {
        var queue = setImmediateQueue;
        setImmediateQueue = [];
        queue.forEach(function(func) {
          func();
        });
      }
    });
    setImmediate = function(func) {
      setImmediateQueue.push(func);
      window.postMessage(sentinel, "*");
    };
  }
  var isScheduled = false;
  var scheduledObservers = [];
  function scheduleCallback(observer) {
    scheduledObservers.push(observer);
    if (!isScheduled) {
      isScheduled = true;
      setImmediate(dispatchCallbacks);
    }
  }
  function wrapIfNeeded(node) {
    return window.ShadowDOMPolyfill && window.ShadowDOMPolyfill.wrapIfNeeded(node) || node;
  }
  function dispatchCallbacks() {
    isScheduled = false;
    var observers = scheduledObservers;
    scheduledObservers = [];
    observers.sort(function(o1, o2) {
      return o1.uid_ - o2.uid_;
    });
    var anyNonEmpty = false;
    observers.forEach(function(observer) {
      var queue = observer.takeRecords();
      removeTransientObserversFor(observer);
      if (queue.length) {
        observer.callback_(queue, observer);
        anyNonEmpty = true;
      }
    });
    if (anyNonEmpty) dispatchCallbacks();
  }
  function removeTransientObserversFor(observer) {
    observer.nodes_.forEach(function(node) {
      var registrations = registrationsTable.get(node);
      if (!registrations) return;
      registrations.forEach(function(registration) {
        if (registration.observer === observer) registration.removeTransientObservers();
      });
    });
  }
  function forEachAncestorAndObserverEnqueueRecord(target, callback) {
    for (var node = target; node; node = node.parentNode) {
      var registrations = registrationsTable.get(node);
      if (registrations) {
        for (var j = 0; j < registrations.length; j++) {
          var registration = registrations[j];
          var options = registration.options;
          if (node !== target && !options.subtree) continue;
          var record = callback(options);
          if (record) registration.enqueue(record);
        }
      }
    }
  }
  var uidCounter = 0;
  function JsMutationObserver(callback) {
    this.callback_ = callback;
    this.nodes_ = [];
    this.records_ = [];
    this.uid_ = ++uidCounter;
  }
  JsMutationObserver.prototype = {
    observe: function(target, options) {
      target = wrapIfNeeded(target);
      if (!options.childList && !options.attributes && !options.characterData || options.attributeOldValue && !options.attributes || options.attributeFilter && options.attributeFilter.length && !options.attributes || options.characterDataOldValue && !options.characterData) {
        throw new SyntaxError();
      }
      var registrations = registrationsTable.get(target);
      if (!registrations) registrationsTable.set(target, registrations = []);
      var registration;
      for (var i = 0; i < registrations.length; i++) {
        if (registrations[i].observer === this) {
          registration = registrations[i];
          registration.removeListeners();
          registration.options = options;
          break;
        }
      }
      if (!registration) {
        registration = new Registration(this, target, options);
        registrations.push(registration);
        this.nodes_.push(target);
      }
      registration.addListeners();
    },
    disconnect: function() {
      this.nodes_.forEach(function(node) {
        var registrations = registrationsTable.get(node);
        for (var i = 0; i < registrations.length; i++) {
          var registration = registrations[i];
          if (registration.observer === this) {
            registration.removeListeners();
            registrations.splice(i, 1);
            break;
          }
        }
      }, this);
      this.records_ = [];
    },
    takeRecords: function() {
      var copyOfRecords = this.records_;
      this.records_ = [];
      return copyOfRecords;
    }
  };
  function MutationRecord(type, target) {
    this.type = type;
    this.target = target;
    this.addedNodes = [];
    this.removedNodes = [];
    this.previousSibling = null;
    this.nextSibling = null;
    this.attributeName = null;
    this.attributeNamespace = null;
    this.oldValue = null;
  }
  function copyMutationRecord(original) {
    var record = new MutationRecord(original.type, original.target);
    record.addedNodes = original.addedNodes.slice();
    record.removedNodes = original.removedNodes.slice();
    record.previousSibling = original.previousSibling;
    record.nextSibling = original.nextSibling;
    record.attributeName = original.attributeName;
    record.attributeNamespace = original.attributeNamespace;
    record.oldValue = original.oldValue;
    return record;
  }
  var currentRecord, recordWithOldValue;
  function getRecord(type, target) {
    return currentRecord = new MutationRecord(type, target);
  }
  function getRecordWithOldValue(oldValue) {
    if (recordWithOldValue) return recordWithOldValue;
    recordWithOldValue = copyMutationRecord(currentRecord);
    recordWithOldValue.oldValue = oldValue;
    return recordWithOldValue;
  }
  function clearRecords() {
    currentRecord = recordWithOldValue = undefined;
  }
  function recordRepresentsCurrentMutation(record) {
    return record === recordWithOldValue || record === currentRecord;
  }
  function selectRecord(lastRecord, newRecord) {
    if (lastRecord === newRecord) return lastRecord;
    if (recordWithOldValue && recordRepresentsCurrentMutation(lastRecord)) return recordWithOldValue;
    return null;
  }
  function Registration(observer, target, options) {
    this.observer = observer;
    this.target = target;
    this.options = options;
    this.transientObservedNodes = [];
  }
  Registration.prototype = {
    enqueue: function(record) {
      var records = this.observer.records_;
      var length = records.length;
      if (records.length > 0) {
        var lastRecord = records[length - 1];
        var recordToReplaceLast = selectRecord(lastRecord, record);
        if (recordToReplaceLast) {
          records[length - 1] = recordToReplaceLast;
          return;
        }
      } else {
        scheduleCallback(this.observer);
      }
      records[length] = record;
    },
    addListeners: function() {
      this.addListeners_(this.target);
    },
    addListeners_: function(node) {
      var options = this.options;
      if (options.attributes) node.addEventListener("DOMAttrModified", this, true);
      if (options.characterData) node.addEventListener("DOMCharacterDataModified", this, true);
      if (options.childList) node.addEventListener("DOMNodeInserted", this, true);
      if (options.childList || options.subtree) node.addEventListener("DOMNodeRemoved", this, true);
    },
    removeListeners: function() {
      this.removeListeners_(this.target);
    },
    removeListeners_: function(node) {
      var options = this.options;
      if (options.attributes) node.removeEventListener("DOMAttrModified", this, true);
      if (options.characterData) node.removeEventListener("DOMCharacterDataModified", this, true);
      if (options.childList) node.removeEventListener("DOMNodeInserted", this, true);
      if (options.childList || options.subtree) node.removeEventListener("DOMNodeRemoved", this, true);
    },
    addTransientObserver: function(node) {
      if (node === this.target) return;
      this.addListeners_(node);
      this.transientObservedNodes.push(node);
      var registrations = registrationsTable.get(node);
      if (!registrations) registrationsTable.set(node, registrations = []);
      registrations.push(this);
    },
    removeTransientObservers: function() {
      var transientObservedNodes = this.transientObservedNodes;
      this.transientObservedNodes = [];
      transientObservedNodes.forEach(function(node) {
        this.removeListeners_(node);
        var registrations = registrationsTable.get(node);
        for (var i = 0; i < registrations.length; i++) {
          if (registrations[i] === this) {
            registrations.splice(i, 1);
            break;
          }
        }
      }, this);
    },
    handleEvent: function(e) {
      e.stopImmediatePropagation();
      switch (e.type) {
       case "DOMAttrModified":
        var name = e.attrName;
        var namespace = e.relatedNode.namespaceURI;
        var target = e.target;
        var record = new getRecord("attributes", target);
        record.attributeName = name;
        record.attributeNamespace = namespace;
        var oldValue = e.attrChange === MutationEvent.ADDITION ? null : e.prevValue;
        forEachAncestorAndObserverEnqueueRecord(target, function(options) {
          if (!options.attributes) return;
          if (options.attributeFilter && options.attributeFilter.length && options.attributeFilter.indexOf(name) === -1 && options.attributeFilter.indexOf(namespace) === -1) {
            return;
          }
          if (options.attributeOldValue) return getRecordWithOldValue(oldValue);
          return record;
        });
        break;

       case "DOMCharacterDataModified":
        var target = e.target;
        var record = getRecord("characterData", target);
        var oldValue = e.prevValue;
        forEachAncestorAndObserverEnqueueRecord(target, function(options) {
          if (!options.characterData) return;
          if (options.characterDataOldValue) return getRecordWithOldValue(oldValue);
          return record;
        });
        break;

       case "DOMNodeRemoved":
        this.addTransientObserver(e.target);

       case "DOMNodeInserted":
        var changedNode = e.target;
        var addedNodes, removedNodes;
        if (e.type === "DOMNodeInserted") {
          addedNodes = [ changedNode ];
          removedNodes = [];
        } else {
          addedNodes = [];
          removedNodes = [ changedNode ];
        }
        var previousSibling = changedNode.previousSibling;
        var nextSibling = changedNode.nextSibling;
        var record = getRecord("childList", e.target.parentNode);
        record.addedNodes = addedNodes;
        record.removedNodes = removedNodes;
        record.previousSibling = previousSibling;
        record.nextSibling = nextSibling;
        forEachAncestorAndObserverEnqueueRecord(e.relatedNode, function(options) {
          if (!options.childList) return;
          return record;
        });
      }
      clearRecords();
    }
  };
  global.JsMutationObserver = JsMutationObserver;
  if (!global.MutationObserver) {
    global.MutationObserver = JsMutationObserver;
    JsMutationObserver._isPolyfilled = true;
  }
})(self);

(function() {
  var needsTemplate = typeof HTMLTemplateElement === "undefined";
  if (/Trident/.test(navigator.userAgent)) {
    (function() {
      var importNode = document.importNode;
      document.importNode = function() {
        var n = importNode.apply(document, arguments);
        if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
          var f = document.createDocumentFragment();
          f.appendChild(n);
          return f;
        } else {
          return n;
        }
      };
    })();
  }
  var needsCloning = function() {
    if (!needsTemplate) {
      var t = document.createElement("template");
      var t2 = document.createElement("template");
      t2.content.appendChild(document.createElement("div"));
      t.content.appendChild(t2);
      var clone = t.cloneNode(true);
      return clone.content.childNodes.length === 0 || clone.content.firstChild.content.childNodes.length === 0;
    }
  }();
  var TEMPLATE_TAG = "template";
  var TemplateImpl = function() {};
  if (needsTemplate) {
    var contentDoc = document.implementation.createHTMLDocument("template");
    var canDecorate = true;
    var templateStyle = document.createElement("style");
    templateStyle.textContent = TEMPLATE_TAG + "{display:none;}";
    var head = document.head;
    head.insertBefore(templateStyle, head.firstElementChild);
    TemplateImpl.prototype = Object.create(HTMLElement.prototype);
    TemplateImpl.decorate = function(template) {
      if (template.content) {
        return;
      }
      template.content = contentDoc.createDocumentFragment();
      var child;
      while (child = template.firstChild) {
        template.content.appendChild(child);
      }
      template.cloneNode = function(deep) {
        return TemplateImpl.cloneNode(this, deep);
      };
      if (canDecorate) {
        try {
          Object.defineProperty(template, "innerHTML", {
            get: function() {
              var o = "";
              for (var e = this.content.firstChild; e; e = e.nextSibling) {
                o += e.outerHTML || escapeData(e.data);
              }
              return o;
            },
            set: function(text) {
              contentDoc.body.innerHTML = text;
              TemplateImpl.bootstrap(contentDoc);
              while (this.content.firstChild) {
                this.content.removeChild(this.content.firstChild);
              }
              while (contentDoc.body.firstChild) {
                this.content.appendChild(contentDoc.body.firstChild);
              }
            },
            configurable: true
          });
        } catch (err) {
          canDecorate = false;
        }
      }
      TemplateImpl.bootstrap(template.content);
    };
    TemplateImpl.bootstrap = function(doc) {
      var templates = doc.querySelectorAll(TEMPLATE_TAG);
      for (var i = 0, l = templates.length, t; i < l && (t = templates[i]); i++) {
        TemplateImpl.decorate(t);
      }
    };
    document.addEventListener("DOMContentLoaded", function() {
      TemplateImpl.bootstrap(document);
    });
    var createElement = document.createElement;
    document.createElement = function() {
      "use strict";
      var el = createElement.apply(document, arguments);
      if (el.localName === "template") {
        TemplateImpl.decorate(el);
      }
      return el;
    };
    var escapeDataRegExp = /[&\u00A0<>]/g;
    function escapeReplace(c) {
      switch (c) {
       case "&":
        return "&amp;";

       case "<":
        return "&lt;";

       case ">":
        return "&gt;";

       case " ":
        return "&nbsp;";
      }
    }
    function escapeData(s) {
      return s.replace(escapeDataRegExp, escapeReplace);
    }
  }
  if (needsTemplate || needsCloning) {
    var nativeCloneNode = Node.prototype.cloneNode;
    TemplateImpl.cloneNode = function(template, deep) {
      var clone = nativeCloneNode.call(template, false);
      if (this.decorate) {
        this.decorate(clone);
      }
      if (deep) {
        clone.content.appendChild(nativeCloneNode.call(template.content, true));
        this.fixClonedDom(clone.content, template.content);
      }
      return clone;
    };
    TemplateImpl.fixClonedDom = function(clone, source) {
      if (!source.querySelectorAll) return;
      var s$ = source.querySelectorAll(TEMPLATE_TAG);
      var t$ = clone.querySelectorAll(TEMPLATE_TAG);
      for (var i = 0, l = t$.length, t, s; i < l; i++) {
        s = s$[i];
        t = t$[i];
        if (this.decorate) {
          this.decorate(s);
        }
        t.parentNode.replaceChild(s.cloneNode(true), t);
      }
    };
    var originalImportNode = document.importNode;
    Node.prototype.cloneNode = function(deep) {
      var dom = nativeCloneNode.call(this, deep);
      if (deep) {
        TemplateImpl.fixClonedDom(dom, this);
      }
      return dom;
    };
    document.importNode = function(element, deep) {
      if (element.localName === TEMPLATE_TAG) {
        return TemplateImpl.cloneNode(element, deep);
      } else {
        var dom = originalImportNode.call(document, element, deep);
        if (deep) {
          TemplateImpl.fixClonedDom(dom, element);
        }
        return dom;
      }
    };
    if (needsCloning) {
      HTMLTemplateElement.prototype.cloneNode = function(deep) {
        return TemplateImpl.cloneNode(this, deep);
      };
    }
  }
  if (needsTemplate) {
    window.HTMLTemplateElement = TemplateImpl;
  }
})();

(function(scope) {
  "use strict";
  if (!window.performance) {
    var start = Date.now();
    window.performance = {
      now: function() {
        return Date.now() - start;
      }
    };
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function() {
      var nativeRaf = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;
      return nativeRaf ? function(callback) {
        return nativeRaf(function() {
          callback(performance.now());
        });
      } : function(callback) {
        return window.setTimeout(callback, 1e3 / 60);
      };
    }();
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function() {
      return window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || function(id) {
        clearTimeout(id);
      };
    }();
  }
  var workingDefaultPrevented = function() {
    var e = document.createEvent("Event");
    e.initEvent("foo", true, true);
    e.preventDefault();
    return e.defaultPrevented;
  }();
  if (!workingDefaultPrevented) {
    var origPreventDefault = Event.prototype.preventDefault;
    Event.prototype.preventDefault = function() {
      if (!this.cancelable) {
        return;
      }
      origPreventDefault.call(this);
      Object.defineProperty(this, "defaultPrevented", {
        get: function() {
          return true;
        },
        configurable: true
      });
    };
  }
  var isIE = /Trident/.test(navigator.userAgent);
  if (!window.CustomEvent || isIE && typeof window.CustomEvent !== "function") {
    window.CustomEvent = function(inType, params) {
      params = params || {};
      var e = document.createEvent("CustomEvent");
      e.initCustomEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable), params.detail);
      return e;
    };
    window.CustomEvent.prototype = window.Event.prototype;
  }
  if (!window.Event || isIE && typeof window.Event !== "function") {
    var origEvent = window.Event;
    window.Event = function(inType, params) {
      params = params || {};
      var e = document.createEvent("Event");
      e.initEvent(inType, Boolean(params.bubbles), Boolean(params.cancelable));
      return e;
    };
    window.Event.prototype = origEvent.prototype;
  }
})(window.WebComponents);

window.HTMLImports = window.HTMLImports || {
  flags: {}
};

(function(scope) {
  var IMPORT_LINK_TYPE = "import";
  var useNative = Boolean(IMPORT_LINK_TYPE in document.createElement("link"));
  var hasShadowDOMPolyfill = Boolean(window.ShadowDOMPolyfill);
  var wrap = function(node) {
    return hasShadowDOMPolyfill ? window.ShadowDOMPolyfill.wrapIfNeeded(node) : node;
  };
  var rootDocument = wrap(document);
  var currentScriptDescriptor = {
    get: function() {
      var script = window.HTMLImports.currentScript || document.currentScript || (document.readyState !== "complete" ? document.scripts[document.scripts.length - 1] : null);
      return wrap(script);
    },
    configurable: true
  };
  Object.defineProperty(document, "_currentScript", currentScriptDescriptor);
  Object.defineProperty(rootDocument, "_currentScript", currentScriptDescriptor);
  var isIE = /Trident/.test(navigator.userAgent);
  function whenReady(callback, doc) {
    doc = doc || rootDocument;
    whenDocumentReady(function() {
      watchImportsLoad(callback, doc);
    }, doc);
  }
  var requiredReadyState = isIE ? "complete" : "interactive";
  var READY_EVENT = "readystatechange";
  function isDocumentReady(doc) {
    return doc.readyState === "complete" || doc.readyState === requiredReadyState;
  }
  function whenDocumentReady(callback, doc) {
    if (!isDocumentReady(doc)) {
      var checkReady = function() {
        if (doc.readyState === "complete" || doc.readyState === requiredReadyState) {
          doc.removeEventListener(READY_EVENT, checkReady);
          whenDocumentReady(callback, doc);
        }
      };
      doc.addEventListener(READY_EVENT, checkReady);
    } else if (callback) {
      callback();
    }
  }
  function markTargetLoaded(event) {
    event.target.__loaded = true;
  }
  function watchImportsLoad(callback, doc) {
    var imports = doc.querySelectorAll("link[rel=import]");
    var parsedCount = 0, importCount = imports.length, newImports = [], errorImports = [];
    function checkDone() {
      if (parsedCount == importCount && callback) {
        callback({
          allImports: imports,
          loadedImports: newImports,
          errorImports: errorImports
        });
      }
    }
    function loadedImport(e) {
      markTargetLoaded(e);
      newImports.push(this);
      parsedCount++;
      checkDone();
    }
    function errorLoadingImport(e) {
      errorImports.push(this);
      parsedCount++;
      checkDone();
    }
    if (importCount) {
      for (var i = 0, imp; i < importCount && (imp = imports[i]); i++) {
        if (isImportLoaded(imp)) {
          newImports.push(this);
          parsedCount++;
          checkDone();
        } else {
          imp.addEventListener("load", loadedImport);
          imp.addEventListener("error", errorLoadingImport);
        }
      }
    } else {
      checkDone();
    }
  }
  function isImportLoaded(link) {
    return useNative ? link.__loaded || link.import && link.import.readyState !== "loading" : link.__importParsed;
  }
  if (useNative) {
    new MutationObserver(function(mxns) {
      for (var i = 0, l = mxns.length, m; i < l && (m = mxns[i]); i++) {
        if (m.addedNodes) {
          handleImports(m.addedNodes);
        }
      }
    }).observe(document.head, {
      childList: true
    });
    function handleImports(nodes) {
      for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
        if (isImport(n)) {
          handleImport(n);
        }
      }
    }
    function isImport(element) {
      return element.localName === "link" && element.rel === "import";
    }
    function handleImport(element) {
      var loaded = element.import;
      if (loaded) {
        markTargetLoaded({
          target: element
        });
      } else {
        element.addEventListener("load", markTargetLoaded);
        element.addEventListener("error", markTargetLoaded);
      }
    }
    (function() {
      if (document.readyState === "loading") {
        var imports = document.querySelectorAll("link[rel=import]");
        for (var i = 0, l = imports.length, imp; i < l && (imp = imports[i]); i++) {
          handleImport(imp);
        }
      }
    })();
  }
  whenReady(function(detail) {
    window.HTMLImports.ready = true;
    window.HTMLImports.readyTime = new Date().getTime();
    var evt = rootDocument.createEvent("CustomEvent");
    evt.initCustomEvent("HTMLImportsLoaded", true, true, detail);
    rootDocument.dispatchEvent(evt);
  });
  scope.IMPORT_LINK_TYPE = IMPORT_LINK_TYPE;
  scope.useNative = useNative;
  scope.rootDocument = rootDocument;
  scope.whenReady = whenReady;
  scope.isIE = isIE;
})(window.HTMLImports);

(function(scope) {
  var modules = [];
  var addModule = function(module) {
    modules.push(module);
  };
  var initializeModules = function() {
    modules.forEach(function(module) {
      module(scope);
    });
  };
  scope.addModule = addModule;
  scope.initializeModules = initializeModules;
})(window.HTMLImports);

window.HTMLImports.addModule(function(scope) {
  var CSS_URL_REGEXP = /(url\()([^)]*)(\))/g;
  var CSS_IMPORT_REGEXP = /(@import[\s]+(?!url\())([^;]*)(;)/g;
  var path = {
    resolveUrlsInStyle: function(style, linkUrl) {
      var doc = style.ownerDocument;
      var resolver = doc.createElement("a");
      style.textContent = this.resolveUrlsInCssText(style.textContent, linkUrl, resolver);
      return style;
    },
    resolveUrlsInCssText: function(cssText, linkUrl, urlObj) {
      var r = this.replaceUrls(cssText, urlObj, linkUrl, CSS_URL_REGEXP);
      r = this.replaceUrls(r, urlObj, linkUrl, CSS_IMPORT_REGEXP);
      return r;
    },
    replaceUrls: function(text, urlObj, linkUrl, regexp) {
      return text.replace(regexp, function(m, pre, url, post) {
        var urlPath = url.replace(/["']/g, "");
        if (linkUrl) {
          urlPath = new URL(urlPath, linkUrl).href;
        }
        urlObj.href = urlPath;
        urlPath = urlObj.href;
        return pre + "'" + urlPath + "'" + post;
      });
    }
  };
  scope.path = path;
});

window.HTMLImports.addModule(function(scope) {
  var xhr = {
    async: true,
    ok: function(request) {
      return request.status >= 200 && request.status < 300 || request.status === 304 || request.status === 0;
    },
    load: function(url, next, nextContext) {
      var request = new XMLHttpRequest();
      if (scope.flags.debug || scope.flags.bust) {
        url += "?" + Math.random();
      }
      request.open("GET", url, xhr.async);
      request.addEventListener("readystatechange", function(e) {
        if (request.readyState === 4) {
          var redirectedUrl = null;
          try {
            var locationHeader = request.getResponseHeader("Location");
            if (locationHeader) {
              redirectedUrl = locationHeader.substr(0, 1) === "/" ? location.origin + locationHeader : locationHeader;
            }
          } catch (e) {
            console.error(e.message);
          }
          next.call(nextContext, !xhr.ok(request) && request, request.response || request.responseText, redirectedUrl);
        }
      });
      request.send();
      return request;
    },
    loadDocument: function(url, next, nextContext) {
      this.load(url, next, nextContext).responseType = "document";
    }
  };
  scope.xhr = xhr;
});

window.HTMLImports.addModule(function(scope) {
  var xhr = scope.xhr;
  var flags = scope.flags;
  var Loader = function(onLoad, onComplete) {
    this.cache = {};
    this.onload = onLoad;
    this.oncomplete = onComplete;
    this.inflight = 0;
    this.pending = {};
  };
  Loader.prototype = {
    addNodes: function(nodes) {
      this.inflight += nodes.length;
      for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
        this.require(n);
      }
      this.checkDone();
    },
    addNode: function(node) {
      this.inflight++;
      this.require(node);
      this.checkDone();
    },
    require: function(elt) {
      var url = elt.src || elt.href;
      elt.__nodeUrl = url;
      if (!this.dedupe(url, elt)) {
        this.fetch(url, elt);
      }
    },
    dedupe: function(url, elt) {
      if (this.pending[url]) {
        this.pending[url].push(elt);
        return true;
      }
      var resource;
      if (this.cache[url]) {
        this.onload(url, elt, this.cache[url]);
        this.tail();
        return true;
      }
      this.pending[url] = [ elt ];
      return false;
    },
    fetch: function(url, elt) {
      flags.load && console.log("fetch", url, elt);
      if (!url) {
        setTimeout(function() {
          this.receive(url, elt, {
            error: "href must be specified"
          }, null);
        }.bind(this), 0);
      } else if (url.match(/^data:/)) {
        var pieces = url.split(",");
        var header = pieces[0];
        var body = pieces[1];
        if (header.indexOf(";base64") > -1) {
          body = atob(body);
        } else {
          body = decodeURIComponent(body);
        }
        setTimeout(function() {
          this.receive(url, elt, null, body);
        }.bind(this), 0);
      } else {
        var receiveXhr = function(err, resource, redirectedUrl) {
          this.receive(url, elt, err, resource, redirectedUrl);
        }.bind(this);
        xhr.load(url, receiveXhr);
      }
    },
    receive: function(url, elt, err, resource, redirectedUrl) {
      this.cache[url] = resource;
      var $p = this.pending[url];
      for (var i = 0, l = $p.length, p; i < l && (p = $p[i]); i++) {
        this.onload(url, p, resource, err, redirectedUrl);
        this.tail();
      }
      this.pending[url] = null;
    },
    tail: function() {
      --this.inflight;
      this.checkDone();
    },
    checkDone: function() {
      if (!this.inflight) {
        this.oncomplete();
      }
    }
  };
  scope.Loader = Loader;
});

window.HTMLImports.addModule(function(scope) {
  var Observer = function(addCallback) {
    this.addCallback = addCallback;
    this.mo = new MutationObserver(this.handler.bind(this));
  };
  Observer.prototype = {
    handler: function(mutations) {
      for (var i = 0, l = mutations.length, m; i < l && (m = mutations[i]); i++) {
        if (m.type === "childList" && m.addedNodes.length) {
          this.addedNodes(m.addedNodes);
        }
      }
    },
    addedNodes: function(nodes) {
      if (this.addCallback) {
        this.addCallback(nodes);
      }
      for (var i = 0, l = nodes.length, n, loading; i < l && (n = nodes[i]); i++) {
        if (n.children && n.children.length) {
          this.addedNodes(n.children);
        }
      }
    },
    observe: function(root) {
      this.mo.observe(root, {
        childList: true,
        subtree: true
      });
    }
  };
  scope.Observer = Observer;
});

window.HTMLImports.addModule(function(scope) {
  var path = scope.path;
  var rootDocument = scope.rootDocument;
  var flags = scope.flags;
  var isIE = scope.isIE;
  var IMPORT_LINK_TYPE = scope.IMPORT_LINK_TYPE;
  var IMPORT_SELECTOR = "link[rel=" + IMPORT_LINK_TYPE + "]";
  var importParser = {
    documentSelectors: IMPORT_SELECTOR,
    importsSelectors: [ IMPORT_SELECTOR, "link[rel=stylesheet]:not([type])", "style:not([type])", "script:not([type])", 'script[type="application/javascript"]', 'script[type="text/javascript"]' ].join(","),
    map: {
      link: "parseLink",
      script: "parseScript",
      style: "parseStyle"
    },
    dynamicElements: [],
    parseNext: function() {
      var next = this.nextToParse();
      if (next) {
        this.parse(next);
      }
    },
    parse: function(elt) {
      if (this.isParsed(elt)) {
        flags.parse && console.log("[%s] is already parsed", elt.localName);
        return;
      }
      var fn = this[this.map[elt.localName]];
      if (fn) {
        this.markParsing(elt);
        fn.call(this, elt);
      }
    },
    parseDynamic: function(elt, quiet) {
      this.dynamicElements.push(elt);
      if (!quiet) {
        this.parseNext();
      }
    },
    markParsing: function(elt) {
      flags.parse && console.log("parsing", elt);
      this.parsingElement = elt;
    },
    markParsingComplete: function(elt) {
      elt.__importParsed = true;
      this.markDynamicParsingComplete(elt);
      if (elt.__importElement) {
        elt.__importElement.__importParsed = true;
        this.markDynamicParsingComplete(elt.__importElement);
      }
      this.parsingElement = null;
      flags.parse && console.log("completed", elt);
    },
    markDynamicParsingComplete: function(elt) {
      var i = this.dynamicElements.indexOf(elt);
      if (i >= 0) {
        this.dynamicElements.splice(i, 1);
      }
    },
    parseImport: function(elt) {
      elt.import = elt.__doc;
      if (window.HTMLImports.__importsParsingHook) {
        window.HTMLImports.__importsParsingHook(elt);
      }
      if (elt.import) {
        elt.import.__importParsed = true;
      }
      this.markParsingComplete(elt);
      if (elt.__resource && !elt.__error) {
        elt.dispatchEvent(new CustomEvent("load", {
          bubbles: false
        }));
      } else {
        elt.dispatchEvent(new CustomEvent("error", {
          bubbles: false
        }));
      }
      if (elt.__pending) {
        var fn;
        while (elt.__pending.length) {
          fn = elt.__pending.shift();
          if (fn) {
            fn({
              target: elt
            });
          }
        }
      }
      this.parseNext();
    },
    parseLink: function(linkElt) {
      if (nodeIsImport(linkElt)) {
        this.parseImport(linkElt);
      } else {
        linkElt.href = linkElt.href;
        this.parseGeneric(linkElt);
      }
    },
    parseStyle: function(elt) {
      var src = elt;
      elt = cloneStyle(elt);
      src.__appliedElement = elt;
      elt.__importElement = src;
      this.parseGeneric(elt);
    },
    parseGeneric: function(elt) {
      this.trackElement(elt);
      this.addElementToDocument(elt);
    },
    rootImportForElement: function(elt) {
      var n = elt;
      while (n.ownerDocument.__importLink) {
        n = n.ownerDocument.__importLink;
      }
      return n;
    },
    addElementToDocument: function(elt) {
      var port = this.rootImportForElement(elt.__importElement || elt);
      port.parentNode.insertBefore(elt, port);
    },
    trackElement: function(elt, callback) {
      var self = this;
      var done = function(e) {
        elt.removeEventListener("load", done);
        elt.removeEventListener("error", done);
        if (callback) {
          callback(e);
        }
        self.markParsingComplete(elt);
        self.parseNext();
      };
      elt.addEventListener("load", done);
      elt.addEventListener("error", done);
      if (isIE && elt.localName === "style") {
        var fakeLoad = false;
        if (elt.textContent.indexOf("@import") == -1) {
          fakeLoad = true;
        } else if (elt.sheet) {
          fakeLoad = true;
          var csr = elt.sheet.cssRules;
          var len = csr ? csr.length : 0;
          for (var i = 0, r; i < len && (r = csr[i]); i++) {
            if (r.type === CSSRule.IMPORT_RULE) {
              fakeLoad = fakeLoad && Boolean(r.styleSheet);
            }
          }
        }
        if (fakeLoad) {
          setTimeout(function() {
            elt.dispatchEvent(new CustomEvent("load", {
              bubbles: false
            }));
          });
        }
      }
    },
    parseScript: function(scriptElt) {
      var script = document.createElement("script");
      script.__importElement = scriptElt;
      script.src = scriptElt.src ? scriptElt.src : generateScriptDataUrl(scriptElt);
      scope.currentScript = scriptElt;
      this.trackElement(script, function(e) {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
        scope.currentScript = null;
      });
      this.addElementToDocument(script);
    },
    nextToParse: function() {
      this._mayParse = [];
      return !this.parsingElement && (this.nextToParseInDoc(rootDocument) || this.nextToParseDynamic());
    },
    nextToParseInDoc: function(doc, link) {
      if (doc && this._mayParse.indexOf(doc) < 0) {
        this._mayParse.push(doc);
        var nodes = doc.querySelectorAll(this.parseSelectorsForNode(doc));
        for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
          if (!this.isParsed(n)) {
            if (this.hasResource(n)) {
              return nodeIsImport(n) ? this.nextToParseInDoc(n.__doc, n) : n;
            } else {
              return;
            }
          }
        }
      }
      return link;
    },
    nextToParseDynamic: function() {
      return this.dynamicElements[0];
    },
    parseSelectorsForNode: function(node) {
      var doc = node.ownerDocument || node;
      return doc === rootDocument ? this.documentSelectors : this.importsSelectors;
    },
    isParsed: function(node) {
      return node.__importParsed;
    },
    needsDynamicParsing: function(elt) {
      return this.dynamicElements.indexOf(elt) >= 0;
    },
    hasResource: function(node) {
      if (nodeIsImport(node) && node.__doc === undefined) {
        return false;
      }
      return true;
    }
  };
  function nodeIsImport(elt) {
    return elt.localName === "link" && elt.rel === IMPORT_LINK_TYPE;
  }
  function generateScriptDataUrl(script) {
    var scriptContent = generateScriptContent(script);
    return "data:text/javascript;charset=utf-8," + encodeURIComponent(scriptContent);
  }
  function generateScriptContent(script) {
    return script.textContent + generateSourceMapHint(script);
  }
  function generateSourceMapHint(script) {
    var owner = script.ownerDocument;
    owner.__importedScripts = owner.__importedScripts || 0;
    var moniker = script.ownerDocument.baseURI;
    var num = owner.__importedScripts ? "-" + owner.__importedScripts : "";
    owner.__importedScripts++;
    return "\n//# sourceURL=" + moniker + num + ".js\n";
  }
  function cloneStyle(style) {
    var clone = style.ownerDocument.createElement("style");
    clone.textContent = style.textContent;
    path.resolveUrlsInStyle(clone);
    return clone;
  }
  scope.parser = importParser;
  scope.IMPORT_SELECTOR = IMPORT_SELECTOR;
});

window.HTMLImports.addModule(function(scope) {
  var flags = scope.flags;
  var IMPORT_LINK_TYPE = scope.IMPORT_LINK_TYPE;
  var IMPORT_SELECTOR = scope.IMPORT_SELECTOR;
  var rootDocument = scope.rootDocument;
  var Loader = scope.Loader;
  var Observer = scope.Observer;
  var parser = scope.parser;
  var importer = {
    documents: {},
    documentPreloadSelectors: IMPORT_SELECTOR,
    importsPreloadSelectors: [ IMPORT_SELECTOR ].join(","),
    loadNode: function(node) {
      importLoader.addNode(node);
    },
    loadSubtree: function(parent) {
      var nodes = this.marshalNodes(parent);
      importLoader.addNodes(nodes);
    },
    marshalNodes: function(parent) {
      return parent.querySelectorAll(this.loadSelectorsForNode(parent));
    },
    loadSelectorsForNode: function(node) {
      var doc = node.ownerDocument || node;
      return doc === rootDocument ? this.documentPreloadSelectors : this.importsPreloadSelectors;
    },
    loaded: function(url, elt, resource, err, redirectedUrl) {
      flags.load && console.log("loaded", url, elt);
      elt.__resource = resource;
      elt.__error = err;
      if (isImportLink(elt)) {
        var doc = this.documents[url];
        if (doc === undefined) {
          doc = err ? null : makeDocument(resource, redirectedUrl || url);
          if (doc) {
            doc.__importLink = elt;
            this.bootDocument(doc);
          }
          this.documents[url] = doc;
        }
        elt.__doc = doc;
      }
      parser.parseNext();
    },
    bootDocument: function(doc) {
      this.loadSubtree(doc);
      this.observer.observe(doc);
      parser.parseNext();
    },
    loadedAll: function() {
      parser.parseNext();
    }
  };
  var importLoader = new Loader(importer.loaded.bind(importer), importer.loadedAll.bind(importer));
  importer.observer = new Observer();
  function isImportLink(elt) {
    return isLinkRel(elt, IMPORT_LINK_TYPE);
  }
  function isLinkRel(elt, rel) {
    return elt.localName === "link" && elt.getAttribute("rel") === rel;
  }
  function hasBaseURIAccessor(doc) {
    return !!Object.getOwnPropertyDescriptor(doc, "baseURI");
  }
  function makeDocument(resource, url) {
    var doc = document.implementation.createHTMLDocument(IMPORT_LINK_TYPE);
    doc._URL = url;
    var base = doc.createElement("base");
    base.setAttribute("href", url);
    if (!doc.baseURI && !hasBaseURIAccessor(doc)) {
      Object.defineProperty(doc, "baseURI", {
        value: url
      });
    }
    var meta = doc.createElement("meta");
    meta.setAttribute("charset", "utf-8");
    doc.head.appendChild(meta);
    doc.head.appendChild(base);
    doc.body.innerHTML = resource;
    if (window.HTMLTemplateElement && HTMLTemplateElement.bootstrap) {
      HTMLTemplateElement.bootstrap(doc);
    }
    return doc;
  }
  if (!document.baseURI) {
    var baseURIDescriptor = {
      get: function() {
        var base = document.querySelector("base");
        return base ? base.href : window.location.href;
      },
      configurable: true
    };
    Object.defineProperty(document, "baseURI", baseURIDescriptor);
    Object.defineProperty(rootDocument, "baseURI", baseURIDescriptor);
  }
  scope.importer = importer;
  scope.importLoader = importLoader;
});

window.HTMLImports.addModule(function(scope) {
  var parser = scope.parser;
  var importer = scope.importer;
  var dynamic = {
    added: function(nodes) {
      var owner, parsed, loading;
      for (var i = 0, l = nodes.length, n; i < l && (n = nodes[i]); i++) {
        if (!owner) {
          owner = n.ownerDocument;
          parsed = parser.isParsed(owner);
        }
        loading = this.shouldLoadNode(n);
        if (loading) {
          importer.loadNode(n);
        }
        if (this.shouldParseNode(n) && parsed) {
          parser.parseDynamic(n, loading);
        }
      }
    },
    shouldLoadNode: function(node) {
      return node.nodeType === 1 && matches.call(node, importer.loadSelectorsForNode(node));
    },
    shouldParseNode: function(node) {
      return node.nodeType === 1 && matches.call(node, parser.parseSelectorsForNode(node));
    }
  };
  importer.observer.addCallback = dynamic.added.bind(dynamic);
  var matches = HTMLElement.prototype.matches || HTMLElement.prototype.matchesSelector || HTMLElement.prototype.webkitMatchesSelector || HTMLElement.prototype.mozMatchesSelector || HTMLElement.prototype.msMatchesSelector;
});

(function(scope) {
  var initializeModules = scope.initializeModules;
  var isIE = scope.isIE;
  if (scope.useNative) {
    return;
  }
  initializeModules();
  var rootDocument = scope.rootDocument;
  function bootstrap() {
    window.HTMLImports.importer.bootDocument(rootDocument);
  }
  if (document.readyState === "complete" || document.readyState === "interactive" && !window.attachEvent) {
    bootstrap();
  } else {
    document.addEventListener("DOMContentLoaded", bootstrap);
  }
})(window.HTMLImports);

window.CustomElements = window.CustomElements || {
  flags: {}
};

(function(scope) {
  var flags = scope.flags;
  var modules = [];
  var addModule = function(module) {
    modules.push(module);
  };
  var initializeModules = function() {
    modules.forEach(function(module) {
      module(scope);
    });
  };
  scope.addModule = addModule;
  scope.initializeModules = initializeModules;
  scope.hasNative = Boolean(document.registerElement);
  scope.isIE = /Trident/.test(navigator.userAgent);
  scope.useNative = !flags.register && scope.hasNative && !window.ShadowDOMPolyfill && (!window.HTMLImports || window.HTMLImports.useNative);
})(window.CustomElements);

window.CustomElements.addModule(function(scope) {
  var IMPORT_LINK_TYPE = window.HTMLImports ? window.HTMLImports.IMPORT_LINK_TYPE : "none";
  function forSubtree(node, cb) {
    findAllElements(node, function(e) {
      if (cb(e)) {
        return true;
      }
      forRoots(e, cb);
    });
    forRoots(node, cb);
  }
  function findAllElements(node, find, data) {
    var e = node.firstElementChild;
    if (!e) {
      e = node.firstChild;
      while (e && e.nodeType !== Node.ELEMENT_NODE) {
        e = e.nextSibling;
      }
    }
    while (e) {
      if (find(e, data) !== true) {
        findAllElements(e, find, data);
      }
      e = e.nextElementSibling;
    }
    return null;
  }
  function forRoots(node, cb) {
    var root = node.shadowRoot;
    while (root) {
      forSubtree(root, cb);
      root = root.olderShadowRoot;
    }
  }
  function forDocumentTree(doc, cb) {
    _forDocumentTree(doc, cb, []);
  }
  function _forDocumentTree(doc, cb, processingDocuments) {
    doc = window.wrap(doc);
    if (processingDocuments.indexOf(doc) >= 0) {
      return;
    }
    processingDocuments.push(doc);
    var imports = doc.querySelectorAll("link[rel=" + IMPORT_LINK_TYPE + "]");
    for (var i = 0, l = imports.length, n; i < l && (n = imports[i]); i++) {
      if (n.import) {
        _forDocumentTree(n.import, cb, processingDocuments);
      }
    }
    cb(doc);
  }
  scope.forDocumentTree = forDocumentTree;
  scope.forSubtree = forSubtree;
});

window.CustomElements.addModule(function(scope) {
  var flags = scope.flags;
  var forSubtree = scope.forSubtree;
  var forDocumentTree = scope.forDocumentTree;
  function addedNode(node, isAttached) {
    return added(node, isAttached) || addedSubtree(node, isAttached);
  }
  function added(node, isAttached) {
    if (scope.upgrade(node, isAttached)) {
      return true;
    }
    if (isAttached) {
      attached(node);
    }
  }
  function addedSubtree(node, isAttached) {
    forSubtree(node, function(e) {
      if (added(e, isAttached)) {
        return true;
      }
    });
  }
  var hasThrottledAttached = window.MutationObserver._isPolyfilled && flags["throttle-attached"];
  scope.hasPolyfillMutations = hasThrottledAttached;
  scope.hasThrottledAttached = hasThrottledAttached;
  var isPendingMutations = false;
  var pendingMutations = [];
  function deferMutation(fn) {
    pendingMutations.push(fn);
    if (!isPendingMutations) {
      isPendingMutations = true;
      setTimeout(takeMutations);
    }
  }
  function takeMutations() {
    isPendingMutations = false;
    var $p = pendingMutations;
    for (var i = 0, l = $p.length, p; i < l && (p = $p[i]); i++) {
      p();
    }
    pendingMutations = [];
  }
  function attached(element) {
    if (hasThrottledAttached) {
      deferMutation(function() {
        _attached(element);
      });
    } else {
      _attached(element);
    }
  }
  function _attached(element) {
    if (element.__upgraded__ && !element.__attached) {
      element.__attached = true;
      if (element.attachedCallback) {
        element.attachedCallback();
      }
    }
  }
  function detachedNode(node) {
    detached(node);
    forSubtree(node, function(e) {
      detached(e);
    });
  }
  function detached(element) {
    if (hasThrottledAttached) {
      deferMutation(function() {
        _detached(element);
      });
    } else {
      _detached(element);
    }
  }
  function _detached(element) {
    if (element.__upgraded__ && element.__attached) {
      element.__attached = false;
      if (element.detachedCallback) {
        element.detachedCallback();
      }
    }
  }
  function inDocument(element) {
    var p = element;
    var doc = window.wrap(document);
    while (p) {
      if (p == doc) {
        return true;
      }
      p = p.parentNode || p.nodeType === Node.DOCUMENT_FRAGMENT_NODE && p.host;
    }
  }
  function watchShadow(node) {
    if (node.shadowRoot && !node.shadowRoot.__watched) {
      flags.dom && console.log("watching shadow-root for: ", node.localName);
      var root = node.shadowRoot;
      while (root) {
        observe(root);
        root = root.olderShadowRoot;
      }
    }
  }
  function handler(root, mutations) {
    if (flags.dom) {
      var mx = mutations[0];
      if (mx && mx.type === "childList" && mx.addedNodes) {
        if (mx.addedNodes) {
          var d = mx.addedNodes[0];
          while (d && d !== document && !d.host) {
            d = d.parentNode;
          }
          var u = d && (d.URL || d._URL || d.host && d.host.localName) || "";
          u = u.split("/?").shift().split("/").pop();
        }
      }
      console.group("mutations (%d) [%s]", mutations.length, u || "");
    }
    var isAttached = inDocument(root);
    mutations.forEach(function(mx) {
      if (mx.type === "childList") {
        forEach(mx.addedNodes, function(n) {
          if (!n.localName) {
            return;
          }
          addedNode(n, isAttached);
        });
        forEach(mx.removedNodes, function(n) {
          if (!n.localName) {
            return;
          }
          detachedNode(n);
        });
      }
    });
    flags.dom && console.groupEnd();
  }
  function takeRecords(node) {
    node = window.wrap(node);
    if (!node) {
      node = window.wrap(document);
    }
    while (node.parentNode) {
      node = node.parentNode;
    }
    var observer = node.__observer;
    if (observer) {
      handler(node, observer.takeRecords());
      takeMutations();
    }
  }
  var forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach);
  function observe(inRoot) {
    if (inRoot.__observer) {
      return;
    }
    var observer = new MutationObserver(handler.bind(this, inRoot));
    observer.observe(inRoot, {
      childList: true,
      subtree: true
    });
    inRoot.__observer = observer;
  }
  function upgradeDocument(doc) {
    doc = window.wrap(doc);
    flags.dom && console.group("upgradeDocument: ", doc.baseURI.split("/").pop());
    var isMainDocument = doc === window.wrap(document);
    addedNode(doc, isMainDocument);
    observe(doc);
    flags.dom && console.groupEnd();
  }
  function upgradeDocumentTree(doc) {
    forDocumentTree(doc, upgradeDocument);
  }
  var originalCreateShadowRoot = Element.prototype.createShadowRoot;
  if (originalCreateShadowRoot) {
    Element.prototype.createShadowRoot = function() {
      var root = originalCreateShadowRoot.call(this);
      window.CustomElements.watchShadow(this);
      return root;
    };
  }
  scope.watchShadow = watchShadow;
  scope.upgradeDocumentTree = upgradeDocumentTree;
  scope.upgradeDocument = upgradeDocument;
  scope.upgradeSubtree = addedSubtree;
  scope.upgradeAll = addedNode;
  scope.attached = attached;
  scope.takeRecords = takeRecords;
});

window.CustomElements.addModule(function(scope) {
  var flags = scope.flags;
  function upgrade(node, isAttached) {
    if (node.localName === "template") {
      if (window.HTMLTemplateElement && HTMLTemplateElement.decorate) {
        HTMLTemplateElement.decorate(node);
      }
    }
    if (!node.__upgraded__ && node.nodeType === Node.ELEMENT_NODE) {
      var is = node.getAttribute("is");
      var definition = scope.getRegisteredDefinition(node.localName) || scope.getRegisteredDefinition(is);
      if (definition) {
        if (is && definition.tag == node.localName || !is && !definition.extends) {
          return upgradeWithDefinition(node, definition, isAttached);
        }
      }
    }
  }
  function upgradeWithDefinition(element, definition, isAttached) {
    flags.upgrade && console.group("upgrade:", element.localName);
    if (definition.is) {
      element.setAttribute("is", definition.is);
    }
    implementPrototype(element, definition);
    element.__upgraded__ = true;
    created(element);
    if (isAttached) {
      scope.attached(element);
    }
    scope.upgradeSubtree(element, isAttached);
    flags.upgrade && console.groupEnd();
    return element;
  }
  function implementPrototype(element, definition) {
    if (Object.__proto__) {
      element.__proto__ = definition.prototype;
    } else {
      customMixin(element, definition.prototype, definition.native);
      element.__proto__ = definition.prototype;
    }
  }
  function customMixin(inTarget, inSrc, inNative) {
    var used = {};
    var p = inSrc;
    while (p !== inNative && p !== HTMLElement.prototype) {
      var keys = Object.getOwnPropertyNames(p);
      for (var i = 0, k; k = keys[i]; i++) {
        if (!used[k]) {
          Object.defineProperty(inTarget, k, Object.getOwnPropertyDescriptor(p, k));
          used[k] = 1;
        }
      }
      p = Object.getPrototypeOf(p);
    }
  }
  function created(element) {
    if (element.createdCallback) {
      element.createdCallback();
    }
  }
  scope.upgrade = upgrade;
  scope.upgradeWithDefinition = upgradeWithDefinition;
  scope.implementPrototype = implementPrototype;
});

window.CustomElements.addModule(function(scope) {
  var isIE = scope.isIE;
  var upgradeDocumentTree = scope.upgradeDocumentTree;
  var upgradeAll = scope.upgradeAll;
  var upgradeWithDefinition = scope.upgradeWithDefinition;
  var implementPrototype = scope.implementPrototype;
  var useNative = scope.useNative;
  function register(name, options) {
    var definition = options || {};
    if (!name) {
      throw new Error("document.registerElement: first argument `name` must not be empty");
    }
    if (name.indexOf("-") < 0) {
      throw new Error("document.registerElement: first argument ('name') must contain a dash ('-'). Argument provided was '" + String(name) + "'.");
    }
    if (isReservedTag(name)) {
      throw new Error("Failed to execute 'registerElement' on 'Document': Registration failed for type '" + String(name) + "'. The type name is invalid.");
    }
    if (getRegisteredDefinition(name)) {
      throw new Error("DuplicateDefinitionError: a type with name '" + String(name) + "' is already registered");
    }
    if (!definition.prototype) {
      definition.prototype = Object.create(HTMLElement.prototype);
    }
    definition.__name = name.toLowerCase();
    if (definition.extends) {
      definition.extends = definition.extends.toLowerCase();
    }
    definition.lifecycle = definition.lifecycle || {};
    definition.ancestry = ancestry(definition.extends);
    resolveTagName(definition);
    resolvePrototypeChain(definition);
    overrideAttributeApi(definition.prototype);
    registerDefinition(definition.__name, definition);
    definition.ctor = generateConstructor(definition);
    definition.ctor.prototype = definition.prototype;
    definition.prototype.constructor = definition.ctor;
    if (scope.ready) {
      upgradeDocumentTree(document);
    }
    return definition.ctor;
  }
  function overrideAttributeApi(prototype) {
    if (prototype.setAttribute._polyfilled) {
      return;
    }
    var setAttribute = prototype.setAttribute;
    prototype.setAttribute = function(name, value) {
      changeAttribute.call(this, name, value, setAttribute);
    };
    var removeAttribute = prototype.removeAttribute;
    prototype.removeAttribute = function(name) {
      changeAttribute.call(this, name, null, removeAttribute);
    };
    prototype.setAttribute._polyfilled = true;
  }
  function changeAttribute(name, value, operation) {
    name = name.toLowerCase();
    var oldValue = this.getAttribute(name);
    operation.apply(this, arguments);
    var newValue = this.getAttribute(name);
    if (this.attributeChangedCallback && newValue !== oldValue) {
      this.attributeChangedCallback(name, oldValue, newValue);
    }
  }
  function isReservedTag(name) {
    for (var i = 0; i < reservedTagList.length; i++) {
      if (name === reservedTagList[i]) {
        return true;
      }
    }
  }
  var reservedTagList = [ "annotation-xml", "color-profile", "font-face", "font-face-src", "font-face-uri", "font-face-format", "font-face-name", "missing-glyph" ];
  function ancestry(extnds) {
    var extendee = getRegisteredDefinition(extnds);
    if (extendee) {
      return ancestry(extendee.extends).concat([ extendee ]);
    }
    return [];
  }
  function resolveTagName(definition) {
    var baseTag = definition.extends;
    for (var i = 0, a; a = definition.ancestry[i]; i++) {
      baseTag = a.is && a.tag;
    }
    definition.tag = baseTag || definition.__name;
    if (baseTag) {
      definition.is = definition.__name;
    }
  }
  function resolvePrototypeChain(definition) {
    if (!Object.__proto__) {
      var nativePrototype = HTMLElement.prototype;
      if (definition.is) {
        var inst = document.createElement(definition.tag);
        nativePrototype = Object.getPrototypeOf(inst);
      }
      var proto = definition.prototype, ancestor;
      var foundPrototype = false;
      while (proto) {
        if (proto == nativePrototype) {
          foundPrototype = true;
        }
        ancestor = Object.getPrototypeOf(proto);
        if (ancestor) {
          proto.__proto__ = ancestor;
        }
        proto = ancestor;
      }
      if (!foundPrototype) {
        console.warn(definition.tag + " prototype not found in prototype chain for " + definition.is);
      }
      definition.native = nativePrototype;
    }
  }
  function instantiate(definition) {
    return upgradeWithDefinition(domCreateElement(definition.tag), definition);
  }
  var registry = {};
  function getRegisteredDefinition(name) {
    if (name) {
      return registry[name.toLowerCase()];
    }
  }
  function registerDefinition(name, definition) {
    registry[name] = definition;
  }
  function generateConstructor(definition) {
    return function() {
      return instantiate(definition);
    };
  }
  var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  function createElementNS(namespace, tag, typeExtension) {
    if (namespace === HTML_NAMESPACE) {
      return createElement(tag, typeExtension);
    } else {
      return domCreateElementNS(namespace, tag);
    }
  }
  function createElement(tag, typeExtension) {
    if (tag) {
      tag = tag.toLowerCase();
    }
    if (typeExtension) {
      typeExtension = typeExtension.toLowerCase();
    }
    var definition = getRegisteredDefinition(typeExtension || tag);
    if (definition) {
      if (tag == definition.tag && typeExtension == definition.is) {
        return new definition.ctor();
      }
      if (!typeExtension && !definition.is) {
        return new definition.ctor();
      }
    }
    var element;
    if (typeExtension) {
      element = createElement(tag);
      element.setAttribute("is", typeExtension);
      return element;
    }
    element = domCreateElement(tag);
    if (tag.indexOf("-") >= 0) {
      implementPrototype(element, HTMLElement);
    }
    return element;
  }
  var domCreateElement = document.createElement.bind(document);
  var domCreateElementNS = document.createElementNS.bind(document);
  var isInstance;
  if (!Object.__proto__ && !useNative) {
    isInstance = function(obj, ctor) {
      if (obj instanceof ctor) {
        return true;
      }
      var p = obj;
      while (p) {
        if (p === ctor.prototype) {
          return true;
        }
        p = p.__proto__;
      }
      return false;
    };
  } else {
    isInstance = function(obj, base) {
      return obj instanceof base;
    };
  }
  function wrapDomMethodToForceUpgrade(obj, methodName) {
    var orig = obj[methodName];
    obj[methodName] = function() {
      var n = orig.apply(this, arguments);
      upgradeAll(n);
      return n;
    };
  }
  wrapDomMethodToForceUpgrade(Node.prototype, "cloneNode");
  wrapDomMethodToForceUpgrade(document, "importNode");
  document.registerElement = register;
  document.createElement = createElement;
  document.createElementNS = createElementNS;
  scope.registry = registry;
  scope.instanceof = isInstance;
  scope.reservedTagList = reservedTagList;
  scope.getRegisteredDefinition = getRegisteredDefinition;
  document.register = document.registerElement;
});

(function(scope) {
  var useNative = scope.useNative;
  var initializeModules = scope.initializeModules;
  var isIE = scope.isIE;
  if (useNative) {
    var nop = function() {};
    scope.watchShadow = nop;
    scope.upgrade = nop;
    scope.upgradeAll = nop;
    scope.upgradeDocumentTree = nop;
    scope.upgradeSubtree = nop;
    scope.takeRecords = nop;
    scope.instanceof = function(obj, base) {
      return obj instanceof base;
    };
  } else {
    initializeModules();
  }
  var upgradeDocumentTree = scope.upgradeDocumentTree;
  var upgradeDocument = scope.upgradeDocument;
  if (!window.wrap) {
    if (window.ShadowDOMPolyfill) {
      window.wrap = window.ShadowDOMPolyfill.wrapIfNeeded;
      window.unwrap = window.ShadowDOMPolyfill.unwrapIfNeeded;
    } else {
      window.wrap = window.unwrap = function(node) {
        return node;
      };
    }
  }
  if (window.HTMLImports) {
    window.HTMLImports.__importsParsingHook = function(elt) {
      if (elt.import) {
        upgradeDocument(wrap(elt.import));
      }
    };
  }
  function bootstrap() {
    upgradeDocumentTree(window.wrap(document));
    window.CustomElements.ready = true;
    var requestAnimationFrame = window.requestAnimationFrame || function(f) {
      setTimeout(f, 16);
    };
    requestAnimationFrame(function() {
      setTimeout(function() {
        window.CustomElements.readyTime = Date.now();
        if (window.HTMLImports) {
          window.CustomElements.elapsed = window.CustomElements.readyTime - window.HTMLImports.readyTime;
        }
        document.dispatchEvent(new CustomEvent("WebComponentsReady", {
          bubbles: true
        }));
      });
    });
  }
  if (document.readyState === "complete" || scope.flags.eager) {
    bootstrap();
  } else if (document.readyState === "interactive" && !window.attachEvent && (!window.HTMLImports || window.HTMLImports.ready)) {
    bootstrap();
  } else {
    var loadEvent = window.HTMLImports && !window.HTMLImports.ready ? "HTMLImportsLoaded" : "DOMContentLoaded";
    window.addEventListener(loadEvent, bootstrap);
  }
})(window.CustomElements);

(function(scope) {
  var style = document.createElement("style");
  style.textContent = "" + "body {" + "transition: opacity ease-in 0.2s;" + " } \n" + "body[unresolved] {" + "opacity: 0; display: block; overflow: hidden; position: relative;" + " } \n";
  var head = document.querySelector("head");
  head.insertBefore(style, head.firstChild);
})(window.WebComponents);


