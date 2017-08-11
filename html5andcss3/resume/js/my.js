
	
	$(function(){
		$('#dowebok').fullpage({
			menu:'menu',
//			sectionsColor:['#abb000','red','skyblue','green','orange','yellow'],
			anchors:['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
			navigation: true,
		    navigationPosition: 'right',
		    navigationTooltips: ['首页', '关于我', '自我介绍', '技术', '经验'],
		    showActiveTooltip: true,
		    slidesNavigation: true,
		    slidesNavPosition: 'bottom',
			afterRender:function(){
				
				$('.section').eq(0).addClass('current');
				$('.question ul li').click(function(){
					var index = 0;
					var h = $('.answer-say').height();
					index = $(this).index();
					$('.answer-say').css("margin-top",-index*h+"px");
				});
				
			},
			afterLoad:function(link,index){
				$('.section').removeClass('current');
				$('.section').eq(index-1).addClass('current');
			},
		});
		
	
	});
	

