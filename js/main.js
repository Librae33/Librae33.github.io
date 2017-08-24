/*关于fullpage的配置*/
$(function() {
	$('#fullpage').fullpage({
			navigation: true,
			menu: true,
			loopBottom: true,
			continuousVertical: true,
			anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
			scrollingSpeed: 700,
			slidesNavigation: true,
			controlArrowColor: "#9AD2D3",
			afterLoad: function(anchorLink, index) {
				switch(index) {
					case 1:
						$(".section1").find("h1").addClass("animated zoomIn");
						break;
					case 2:
						$(".section2 .des_item").eq(0).addClass("animated bounceInUp").css("animation-delay", "0.1s");
						$(".section2 .des_item").eq(1).addClass("animated bounceInUp").css("animation-delay", "0.3s");
						$(".section2 .des_item").eq(2).addClass("animated bounceInUp").css("animation-delay", "0.5s");
						break;
					case 3:
						$(".section3 .skill_wrap").addClass("animated fadeInDown").css("animation-duration","1s");
						break;
					case 4:
						$(".section4 .project_slide").addClass("animated fadeIn").css("animation-duration","3s");
						break;
					case 5:
						$(".section5 .contact").addClass("animated fadeInDown").css("animation-duration","1s");
						break;
				}

			},
			onLeave: function(index,nextIndex,direction){
				switch(index) {
					case 1:
						$(".section1").find("h1").removeClass("zoomIn");
						break;
					case 2:
						$(".section2 .des_item").removeClass("bounceInUp");
						
						break;
					case 3:
						$(".section3 .skill_wrap").removeClass("fadeInDown");
						break;
					case 4:
						$(".section4 .project_slide").removeClass("afadeIn")
						break;
					case 5:
						$(".section5 .contact").removeClass("fadeInDown");
						break;
				}
			}

		});



});