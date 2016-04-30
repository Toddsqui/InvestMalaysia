$('.slider').fullpage({
	paddingTop: 85,
	navigation: true,
	navigationPosition: 'right',
	onLeave: function(index, newIndex, direction){
		$('.slide-'+newIndex).addClass('is-active');
		
		if (newIndex == 5) {
			$('#fp-nav').addClass('slide-5-active');
		} else {
			$('#fp-nav').removeClass('slide-5-active');
		}
	},
	afterLoad: function(anchorLink, index){
		$('.slide-1').addClass('is-active'); 
	},
});   

function iconHovers(){
	var $icons = $('.slide-icons > span');
	
	$icons.on({
		mouseenter: function(){
			var $this = $(this);
			
			if (!$this.hasClass('active-icon')) {
				var $activeIcon = $this.parent().find('> .active-icon'),
					activeID = $activeIcon.data('id'),
					thisID = $this.data('id');
				
				$activeIcon.removeClass('active-icon');
				$activeIcon.parent().find('.icon-text [data-id="'+activeID+'"]').removeClass('active-icon');
				
				$this.addClass('active-icon');
				$this.parent().find('.icon-text [data-id="'+thisID+'"]').addClass('active-icon');
			}
		}
	})
};

iconHovers();

function menuToggle(){
	var $button = $('.site-menu-button'),
		$menu = $('.site-menu-wrap');
	
	$button.on({
		click: function(){
		
			console.log('test');
			$(this).toggleClass('menu-active');
			$menu.toggleClass('menu-active');
		},
		mouseenter: function(){
			$menu.addClass('menu-hovered');
		},
		mouseleave: function(){
			$menu.removeClass('menu-hovered');
		}
	})
};

menuToggle();

$('.nav-shortcut').on({
	mouseenter: function(){
		$(this).addClass('sc-hovered');
	},
	mouseleave: function(){
		$(this).removeClass('sc-hovered');
	}
});

$('.panel').on({
	mouseenter: function(){
		$('.page-header').css('z-index', '0');
		$(this).addClass('hovered');
	},
	mouseleave: function(){
		$('.page-header').css('z-index', '200');
		$(this).removeClass('hovered');
	}
})