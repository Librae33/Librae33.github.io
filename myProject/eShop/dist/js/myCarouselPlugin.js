~function(){function t(t,i,n){return this.banner=document.getElementById(t),this.bannerInner=utils.firstChild(this.banner),this.tip=this.banner.getElementsByTagName("ul")[0],this.oLis=this.tip.getElementsByTagName("li"),this.divList=this.bannerInner.getElementsByTagName("div"),this.imgList=this.bannerInner.getElementsByTagName("img"),this.btnLeft=this.banner.getElementsByTagName("a")[0],this.btnRight=this.banner.getElementsByTagName("a")[1],this.val=null,this.data=null,this.url=i,this.interval=n||3e3,this.timer=null,this.index=0,this.init()}t.prototype={constructor:t,getData:function(){var t=new XMLHttpRequest,i=this;t.open("get",this.url+"?_="+Math.random(),!1),t.onreadystatechange=function(){4===t.readyState&&t.status>=200&&t.status<=300&&(i.val=t.responseText,i.data=JSON.parse(i.val))},t.send(null)},bindData:function(){var t="",i=this.data.length;if(this.data)for(n=0;n<i;n++)t+='<div><img src="" trueImg="'+this.data[n].img+'" /></div>';if(this.bannerInner.innerHTML=t,t="",this.data)for(var n=0;n<i;n++)t+=0===n?'<li class="bg"></li>':"<li></li>";this.tip.innerHTML=t},lazyLoad:function(){for(var t=0,i=this.imgList.length;t<i;t++){var n=this;~function(t){var i=n.imgList[t],e=new Image;e.src=i.getAttribute("trueImg"),e.onload=function(){if(i.src=this.src,i.style.display="block",0===t){var n=i.parentNode;n.style.zIndex=1,myAnimate(n,{opacity:1},500)}e=null}}(t)}},autoPlay:function(){this.index==this.data.length-1&&(this.index=-1),this.index++,this.setCarousel(),this.changeTip()},setCarousel:function(){for(var t=0;t<this.divList.length;t++){var i=this.divList[t];if(t===this.index)return utils.css(i,"zIndex",1),void myAnimate(i,{opacity:1},500,function(){for(var t=utils.siblings(this),i=0;i<t.length;i++)t[i].style.opacity=0});utils.css(i,"zIndex",0)}},changeTip:function(){for(var t=0,i=this.oLis.length;t<i;t++){var n=this.oLis[t];t===this.index?utils.addClass(n,"bg"):utils.removeClass(n,"bg")}},mouseEvent:function(){var t=this;this.banner.onmouseover=function(){clearInterval(t.timer)},this.banner.onmouseout=function(){t.timer=setInterval(function(){t.autoPlay(),t.changeTip()},3e3)}},tipEvent:function(){for(var t=this,i=0,n=this.oLis.length;i<n;i++){var e=this.oLis[i];e.liIndex=i,e.onmouseover=function(){t.index=this.liIndex,t.setCarousel(),t.changeTip()}}},toggleLeftRight:function(){var t=this;this.btnLeft.onclick=function(){0===t.index&&(t.index=t.data.length),t.index--,t.changeTip(),t.setCarousel()},this.btnRight.onclick=function(){t.autoPlay()}},init:function(){var t=this;return this.getData(),this.bindData(),window.setTimeout(function(){t.lazyLoad()},500),t.timer=window.setInterval(function(){t.autoPlay()},t.interval),this.tipEvent(),this.toggleLeftRight(),this}},window.myCarousel=t}();