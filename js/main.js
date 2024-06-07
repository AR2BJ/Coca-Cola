// Select all image elements within the specified DOM structure
let img_slide = document.querySelectorAll(
	"div.wrapper > div.Contents > div.swiper > div.swiper-wrapper > div.swiper-slide > div.img > img"
);

// When the window loads, check the screen width and set image sources accordingly
window.addEventListener("load", () => {
	// If the screen width is less than or equal to 1023 pixels
	if (window.screen.width <= 1023) {
		// Iterate over each image element
		img_slide.forEach((elem, index) => {
			// Remove the current src attribute
			elem.removeAttribute("src");
			// Set the src attribute to the corresponding large image source
			elem.setAttribute("src", `./img/slide_${index + 1}_lg.jpg`);
		});
	}
});

// When the window is resized, adjust image sources based on screen width
window.addEventListener("resize", () => {
	// If the screen width is less than or equal to 1023 pixels
	if (window.screen.width <= 1023) {
		// Iterate over each image element
		img_slide.forEach((elem, index) => {
			// Remove the current src attribute
			elem.removeAttribute("src");
			// Set the src attribute to the corresponding large image source
			elem.setAttribute("src", `./img/slide_${index + 1}_lg.jpg`);
		});
	} else {
		// If the screen width is greater than 1023 pixels
		// Iterate over each image element
		img_slide.forEach((elem, index) => {
			// Remove the current src attribute
			elem.removeAttribute("src");
			// Set the src attribute to the corresponding regular image source
			elem.setAttribute("src", `./img/slide_${index + 1}.jpg`);
		});
	}
});
