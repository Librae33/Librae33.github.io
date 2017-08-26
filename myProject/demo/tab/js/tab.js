~function(){
	var oTab=document.getElementById("tab1");
	var oUl=oTab.getElementsByTagName("ul")[0];
	var oLis=oUl.children;
	var oDivs=utils.nextAll(oUl);
	for (var i=0;i<oLis.length;i++) {
		var curLi=oLis[i];
		curLi.index=i;
		curLi.onclick=function(){
			for (var j=0;j<oDivs.length;j++) {
				oDivs[j].style.display="none";
			}
			oDivs[this.index].style.display="block";
		};
	}
}();
