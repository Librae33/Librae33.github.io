//->REM响应式布局
~function (desW) {
    var winW = document.documentElement.clientWidth;
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(640);


//->设置滑屏
var step = 0;
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    direction: 'vertical',
    lazyLoading: true,
    lazyLoadingInPrevNext: true,
    onSlidePrevEnd: function () {
        step--;
        if (step < 0) {
            step = 1;
        }
        change();
    },
    onSlideNextEnd: function () {
        step++;
        if (step > 3) {
            step = 2;
        }
        change();
    }
});

/*MUSIC*/
~function(){
	var musicMenu=document.getElementById("musicMenu");
	var musicAudio=document.getElementById("musicAudio");
	musicMenu.addEventListener("click",function(){
		if(musicAudio.paused){
		musicAudio.play();
		musicMenu.className="music move";
		return;
		}
		musicAudio.pause();
		musicMenu.className="music";
	},false);
	function controlMusic(){
		musicAudio.volume=0.3;
		musicAudio.play();
		musicAudio.addEventListener("canplay",function(){
			musicMenu.className="music move";
		},false);
	}
	setTimeout(controlMusic,1000);
}()

function change() {
    var divList = document.querySelectorAll(".swiper-slide");
    [].forEach.call(divList, function (curDiv, index) {
        curDiv.id = index === step ? curDiv.getAttribute("trueId") : null;
    });
}

















