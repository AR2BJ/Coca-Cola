// Initializing the first swiper instance
var swiper = new Swiper(".swiper_1", {
	slidesPerView: 1.1, // Number of slides visible at the same time
	centeredSlides: true, // Center the active slide
	loop: true, // Enable continuous loop mode
	spaceBetween: window.screen.width <= 1023 ? 12 : 24, // Space between slides
	pagination: {
		el: ".swiper-pagination", // Element for pagination
		clickable: true, // Make pagination bullets clickable
	},
});

// Initializing the second swiper instance
var swiper = new Swiper(".swiper_2", {
	slidesPerView:
		window.screen.width <= 425 ? 1.25 : window.screen.width <= 1023 ? 1.16 : 3, // Number of slides visible at the same time, based on screen width
	centeredSlides: window.screen.width <= 1023 ? true : false, // Center the active slide for smaller screens
	loop: true, // Enable continuous loop mode
	spaceBetween: window.screen.width <= 1023 ? 12 : 32, // Space between slides, based on screen width
	pagination: {
		el: ".swiper-pagination", // Element for pagination
		clickable: true, // Make pagination bullets clickable
	},
});
