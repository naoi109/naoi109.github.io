"use strict";!function(){var o,r=100,c={},i=[],d=0;function e(){Array.prototype.forEach.call(o,function(o,e){var t,l;t=o,l=i[e],t.contextCache.clearRect(0,0,t.width,t.height),l[0]&&(l[1]&&l[2]?(a(t,l[0],.3,3,0),a(t,l[1],.5,2,250),a(t,l[2],.2,1.6,100)):l[1]&&!l[2]?(a(t,l[0],.4,3,0),a(t,l[1],.6,2,250)):a(t,l[0],1,3,0))}),c.seconds=c.seconds+.005,c.t=c.seconds*Math.PI,setTimeout(e,35)}function a(o,e,t,l,a){var i=o.contextCache;i.fillStyle=e,i.globalAlpha=t,i.beginPath(),function(o,e,t,l){var a=Math.floor(o.height/2),i=o.contextCache,c=e,n=Math.sin(c)/t;for(i.moveTo(0,r*n+a),d=0;d<=o.width+10;d+=10)c=e+(-0+d)/r/t,n=Math.sin(c-l)/2.4,i.lineTo(d,r*n+a)}(o,c.t/.5,l,a),i.lineTo(o.width+10,o.height),i.lineTo(0,o.height),i.closePath(),i.fill()}c.seconds=0,c.t=0,o=document.querySelectorAll(".wave-bar"),Array.prototype.forEach.call(o,function(o,e){var t,l=o.dataset,a=o.nextElementSibling;o.width=document.documentElement.clientWidth,o.width*=devicePixelRatio,o.height=.16*o.width,o.height*=devicePixelRatio,o.style.height=String(o.height/devicePixelRatio)+"px",o.contextCache=o.getContext("2d"),i.push([l.color1,l.color2,l.color3]),l.bgcolor&&(o.parentNode.style.backgroundColor=l.bgcolor),a&&((t=a.dataset).color&&(a.style.color=t.color),t.bgcolor&&(a.style.backgroundColor=t.bgcolor))}),e()}(),$(window).on("load",function(){$("#status").fadeOut(),$("#preloader").delay(350).fadeOut("slow"),$("body").delay(350).removeClass("overflow-hidden"),$(".round-logo, .round-overlay").delay(350).addClass("animated")});