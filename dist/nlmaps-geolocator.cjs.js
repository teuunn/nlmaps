"use strict";function createCommonjsModule(o,n){return n={exports:{}},o(n,n.exports),n.exports}function positionHandler(o){this.emit("position",o)}function positionErrorHandler(o){this.emit("error",o)}function geoLocator(o){if("geolocation"in navigator){var n=emitonoff(GeoLocator(o));return n.on("position",function(){this.stop()}),n}throw"geolocation is not available in your browser."}var emitonoff=createCommonjsModule(function(o){o.exports=function(o){return o||(o={}),o._subs=[],o._paused=!1,o._pending=[],o.on=function(n,t){o._subs[n]=o._subs[n]||[],o._subs[n].push(t)},o.off=function(n,t){if(o._subs[n])for(var i in o._subs[n])if(o._subs[n][i]===t){o._subs[n].splice(i);break}},o.emit=function(n){if(o._subs[n]){var t=Array.prototype.slice.call(arguments,1);if(o._paused)return o._pending[n]=o._pending[n]||[],void o._pending[n].push(t);for(var i in o._subs[n])o._subs[n][i].apply(o,t)}},o.pause=function(){o._paused=!0},o.resume=function(){o._paused=!1;for(var n in o._pending)for(var t=0;t<o._pending[n].length;t++)o.emit(n,o._pending[n][t])},o}}),geoLocateDefaultOpts={follow:!1},GeoLocator=function(o){var n=Object.assign({},geoLocateDefaultOpts,o);return{start:function(){return n.started=!0,navigator.geolocation.getCurrentPosition(positionHandler.bind(this),positionErrorHandler.bind(this),{maximumAge:6e4}),this},stop:function(){return n.started=!1,this},isStarted:function(){return n.started},log:function(){return console.log(n),this}}};module.exports=geoLocator;
