jQuery(document).ready(function($) {
	$(window).scroll(function(){
		posScroll = $(document).scrollTop();
		if(posScroll >=10) 
			$('body').addClass('scroll');
		else
			$('body').removeClass('scroll');
	});
});