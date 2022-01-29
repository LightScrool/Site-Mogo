$(function(){

    let header = $('#header'),
        introH = $('#intro').innerHeight(),
        scrollOffSet = $(window).scrollTop();

//    Fixed header
    headerFixator(scrollOffSet);

    $(window).on('scroll', function() {

        scrollOffSet = $(this).scrollTop();
		introH = $('#intro').innerHeight();
        headerFixator(scrollOffSet);

    })

    function headerFixator(scrollOffSet){

        if (scrollOffSet >= introH * 0.7){
            header.addClass('header_fixed');
        } else {
            header.removeClass('header_fixed');
        }

    }

//    Smooth scroll
    $('[data-scroll]').on('click', function(event){
        event.preventDefault();

        let $this = $(this),
            elementId = $this.data('scroll'),
            blockOffset = $(elementId).offset().top;

        $('#nav a').removeClass('nav_link_active');
		
		if ($(".nav_toggle").css('display') == 'block'){
			$('#nav').slideToggle();
		}
		
		$('#nav').removeClass('nav_active');
		$('#nav_toggle').removeClass('nav_toggle_active');
		$('#header').removeClass('header_active');
		

        if ($this.attr('id') != 'header_logo'){
            $this.addClass('nav_link_active');
        }

        $('html, body').animate({
            scrollTop: blockOffset
        })

    })

//    Phone Navigation
    $('#nav_toggle').on('click', function(event){
		console.log('123');

        event.preventDefault();

		$('#nav').slideToggle();
        $('#nav').toggleClass('nav_active');
        $('#nav_toggle').toggleClass('nav_toggle_active');
        $('#header').toggleClass('header_active');
    })

    //Accordion
    $('[data-collapse]').on('click', function(event){

        event.preventDefault();
        
        let $this = $(this),
            elementId = $this.data('collapse');
        
        $(elementId).slideToggle();
        $this.toggleClass('active');
    })
    
    //Slider
    $('[data-slider]').slick({
        infinite: true, // Бесконечная прокрутка
    });
	
	// Intro Slider
	$('.intro_slider').slick({
		infinite: false,
		arrows: false,
		dots: true,
		dotsClass: 'intro_dots_inner',
		appendDots: $('#intro_dots_inner'),
	})
	
	$('.intro_dots_inner li #slick-slide-control20').replaceWith(`<span class="intro_dot_num">01</span><span class="intro_dot_name"> Intro</span>`)
	$('.intro_dots_inner li #slick-slide-control21').replaceWith(`<span class="intro_dot_num">02</span><span class="intro_dot_name"> Work</span>`)
	$('.intro_dots_inner li #slick-slide-control22').replaceWith(`<span class="intro_dot_num">03</span><span class="intro_dot_name"> About</span>`)
	$('.intro_dots_inner li #slick-slide-control23').replaceWith(`<span class="intro_dot_num">04</span><span class="intro_dot_name"> Contacts</span>`)
	$('.intro_dots_inner li').addClass('intro_dot')
});
