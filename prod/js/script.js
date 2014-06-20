$(document).ready(function(){function t(){var e=new Date;var t=e.getHours();var n=e.getMinutes();var r=e.getSeconds();n=(n<10?"0":"")+n;r=(r<10?"0":"")+r;var i=t<12?"AM":"PM";t=t>12?t-12:t;t=t==0?12:t;var s=t+":"+n+":"+r+" "+i;$("#theTime").html("<h1>"+s+"</h1>")}function o(){var e="",t="";e=e+"<div class='drop'><h3 id='hour' data-time='Hours'>Hours</h3><ul>";for(var n=1;n<=12;n++){e=e+"<li data-time='"+n+"'>"+"<p>"+n+"</p>"+"</li>"}e=e+"</ul></div>";var r="",i="";r=r+"<div class='drop'><h3 id='minute' data-time='Minutes'>Minutes</h3><ul>";for(var s=0;s<=55;s+=5){if(s<10){r=r+"<li data-time='0"+s+"'>"+"<p>"+"0"+s+"</p>"+"</li>"}else{r=r+"<li data-time='"+s+"'>"+"<p>"+s+"</p>"+"</li>"}}r=r+"</ul></div>";var o="<div class='drop'><h3 id='time' data-time='AM or PM'>AM or PM</h3><ul id='timeofday'>"+"<li data-time='AM'><p>AM</p></li>"+"<li data-time='PM'><p>PM</p></li>"+"</ul></div>";var u="<button><h3>Calculate</h3></button>";var a=e+"<h4 style='display:inline-block; font-size: 2em;'>:</h4>"+r+o+u;$("#sleep").html(a)}function u(e,t,n){var r=0;var i=0;var s=n;if(t<30){r=t*1+30*1;i=e-2}else if(t>=30){r=t-30;i=e-1}if(i<1){i=12+i;if(s=="AM"){s="PM"}else{s="AM"}}var o=[i,r,s];return o}function f(){chrome.storage.sync.get({setHour:"Hours",setMin:"Minutes",setTime:"AM or PM"},function(e){$("#hour").attr("data-time",e.setHour).html(e.setHour);$("#minute").attr("data-time",e.setMin).html(e.setMin);$("#time").attr("data-time",e.setTime).html(e.setTime)})}function l(){var e=$("#hour").attr("data-time");var t=$("#minute").attr("data-time");var n=$("#time").attr("data-time");chrome.storage.sync.set({setHour:e,setMin:t,setTime:n},function(){var e=$("#update");e.html("<h3>time saved</h3>");setTimeout(function(){e.html("")},1500)})}$("#everything").fadeIn(1000);$("#everything").css({left:($(window).width()-$("#everything").width())/2,top:($(window).height()-$("#everything").height())/2});var e=new Date;t();setInterval(t,1e3);var n=e.getDay();var r=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var s=r[n];$(".wake").html("<h3>wake time for tomorrow :</h3>");o();$(".drop").click(function(){$(this).find("ul").toggleClass("show");if($(this).find("ul").hasClass("show")){$(this).addClass("box");$(".show").animate({opacity:1,top:"100%"},150)}else{$(this).removeClass("box");$(this).find("ul").css({opacity:0,top:"80%"})}});$("li").click(function(){var e=$(this).attr("data-time");$(this).parent("ul").siblings("h3").attr("data-time",e);$(this).parent("ul").siblings("h3").html(e);if($("#minute").attr("data-time")<10){if($("#minute").attr("data-time")==0){$("#minute").html("00")}else if($("#minute").attr("data-time")==5){$("#minute").html("05")}}});$("#sleep button").click(function(){if($(".drop ul").hasClass("show")){$(".show").removeClass()}if($("#hour").attr("data-time")=="Hours"||$("#minute").attr("data-time")=="Minutes"||$("#time").attr("data-time")=="AM or PM"){return false}var e=$("#time").attr("data-time");var t=$("#hour").attr("data-time");var n=$("#minute").attr("data-time");var r=[t,n,e];if(t==12){if(e=="AM"){e="PM"}else{e="AM"}}var s=new Array;for(var o=1;o<=10;o++){var a=u(t,n,e);var f=a[0];var l=a[1];e=a[2];var c="";c=a[2];if(f==12){if(e=="AM"){c="PM"}else{c="AM"}}if(o==6||o==4||o==5||o==3){var h="";if(l>9){if(o==6){h="<h1>"+f+":"+l+"<small>"+c+"</small></h1>";s.push(h)}else{h="<h1>"+f+":"+l+"<small>"+c+"</small></h1>";s.push(h)}}else{if(o==6){h="<h1>"+f+":0"+l+"<small>"+c+"</small></h1>";s.push(h)}else{h="<h1>"+f+":0"+l+"<small>"+c+"</small></h1>";s.push(h)}}}t=f;n=l}$("#sleeptimes").html("<h3>sleep times for tonight:</h3>");var p="";for(i=3;i>=0;i--){p=p+s[i]}$("#instant").html(p).animate({opacity:"1"},1100);$("#instant h1:nth-child(1)").append("<span class='pop'>9 hours of sleep</span>");$("#instant h1:nth-child(2)").append("<span class='pop'>7.5 hours of sleep</span>");$("#instant h1:nth-child(3)").append("<span class='pop'>6 hours of sleep</span>");$("#instant h1:nth-child(4)").append("<span class='pop'>4.5 hours of sleep</span>");$("footer").show().animate({opacity:"1"},600);var d=$("#everything");var v=d.css("height");if(v!=="600px"){if($(window).width()<500){d.animate({height:"500px",left:($(window).width()-d.width())/2,top:($(window).height()-300)/2},600)}else{d.animate({height:"600px",left:($(window).width()-d.width())/2,top:($(window).height()-600)/2},600)}}});var a=$("#reset, #save");a.mouseover(function(){$(this).find("img").stop(true,false).animate({opacity:1},200)});a.mouseout(function(){$(this).find("img").stop(true,false).animate({opacity:.2},200)});$("#reset").click(function(){$(this).find("img").css({"-webkit-transform":"rotate(-180deg)"});setTimeout(function(){$("body").fadeOut(900)},250);setTimeout(function(){location.reload();chrome.storage.sync.clear()},1300)});$(window).resize(function(){$("#everything").css({left:($(window).width()-$("#everything").width())/2,top:($(window).height()-$("#everything").height())/2})});f();$("#save").on("click",l)})