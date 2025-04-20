/**
 * ===================================================================
 * main js
 *
 * -------------------------------------------------------------------
 */

(function ($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */
	$(window).load(function () {

		// will first fade out the loading animation
		$("#loader").fadeOut("slow", function () {

			// will fade out the whole DIV that covers the website.
			$("#preloader").delay(300).fadeOut("slow");

		});

	})


	/*---------------------------------------------------- */
	/* FitText Settings
	------------------------------------------------------ */
	setTimeout(function () {

		$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

	}, 100);


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */
	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */
	$("#owl-slider").owlCarousel({
		navigation: false,
		pagination: true,
		itemsCustom: [
			[0, 1],
			[700, 2],
			[960, 3]
		],
		navigationText: false
	});


	/*----------------------------------------------------- */
	/* Alert Boxes
  	------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function () {
		$(this).parent().fadeOut(500);
	});


	/*----------------------------------------------------- */
	/* Stat Counter
  	------------------------------------------------------- */
	var statSection = $("#stats"),
		stats = $(".stat-count");

	statSection.waypoint({

		handler: function (direction) {

			if (direction === "down") {

				stats.each(function () {
					var $this = $(this);

					$({ Counter: 0 }).animate({ Counter: $this.text() }, {
						duration: 4000,
						easing: 'swing',
						step: function (curValue) {
							$this.text(Math.ceil(curValue));
						}
					});
				});

			}

			// trigger once only
			this.destroy();

		},

		offset: "90%"

	});


	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded(function () {

		containerProjects.masonry({
			itemSelector: '.folio-item',
			resize: true
		});

	});


	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
	$('.item-wrap a').magnificPopup({

		type: 'inline',
		fixedContentPos: false,
		removalDelay: 300,
		showCloseBtn: false,
		mainClass: 'mfp-fade'

	});

	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});


	/*-----------------------------------------------------*/
	/* Navigation Menu
------------------------------------------------------ */
	var toggleButton = $('.menu-toggle'),
		nav = $('.main-navigation');

	// toggle button
	toggleButton.on('click', function (e) {

		e.preventDefault();
		var minWidthTopBat = $('.top-bar').css('min-width');
		var bTopBarWidth = minWidthTopBat === '0px';
		if (bTopBarWidth) {
			$('.top-bar').css('min-width', '220px');
		}

		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();
		if (!bTopBarWidth) {
			$('.top-bar').css('min-width', '0px')
		}
	});

	// nav items
	nav.find('li a').on("click", function () {

		// update the toggle button
		toggleButton.toggleClass('is-clicked');
		// fadeout the navigation panel
		nav.fadeOut();
		$('.top-bar').css('min-width', '0px')

	});


	/*---------------------------------------------------- */
	/* Highlight the current section in the navigation bar
	------------------------------------------------------ */
	var sections = $("section"),
		navigation_links = $("#main-nav-wrap li a");

	sections.waypoint({

		handler: function (direction) {

			var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');

			navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		},

		offset: '25%'
	});


	/*---------------------------------------------------- */
	/* Smooth Scrolling
	------------------------------------------------------ */
	$('.smoothscroll').on('click', function (e) {

		e.preventDefault();

		var target = this.hash,
			$target = $(target);

		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 800, 'swing', function () {
			window.location.hash = target;
		});

	});


	/*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */
	$('input, textarea, select').placeholder()


	/*---------------------------------------------------- */
	/*	contact form
	------------------------------------------------------ */

	var contactform = document.getElementById('contactForm');
	contactform.setAttribute('action', '//formspree.io/' + 'murtaza.s' + '@' + 'hotmail' + '.' + 'de');

	/* local validation */
	$('#contactForm').validate({

		/* submit via ajax */


	});

	/*----------------------------------------------------- */
	/* Show Clients IP and Info to top
------------------------------------------------------- */
var getLocation = "https://ipapi.co/json/";
var geoLocation = $.getJSON(getLocation, function (data) {
	$("#client-ip").text("ip: "+data.ip)
	$("#client-country").text("country: "+data.country_name)
	$("#client-lat").text("lat: "+data.latitude)
	$("#client-lon").text("lon: "+data.longitude)
	$("#client-org").text("isp: "+data.org)
	//alert(data.query);
});

$("#bclient-info").click(function(){
	$(".client-info").toggle( "slide", function() {
		if($(".client-info").is(':visible'))
			$("#bclient-info").html("<");
		else
			$("#bclient-info").html(">");
	  });

  });




	/*----------------------------------------------------- */
	/* Back to top
------------------------------------------------------- */
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

	// Show or hide the sticky footer button
	jQuery(window).scroll(function () {

		if (!($("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}

	});



})(jQuery);
