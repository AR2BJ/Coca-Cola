// Selecting the main menu container
let menu = document.querySelector("div.wrapper > div.menu_1 > div.menu");

// Selecting individual menu items within the main menu
let menu_items = document.querySelectorAll(
	"div.wrapper > div.menu_1 > div.menu > div.menu_item > ul > li"
);

// Selecting submenus within the main menu
let submenus = document.querySelectorAll(
	"div.wrapper > div.menu_1 > div.submenu"
);

// Selecting the menu item container in the secondary menu
let menu_2 = document.querySelector("div.wrapper > div.menu_2 > div.menu_item");

// Selecting the search icon in the main menu
let search_1 = document.querySelector(
	"div.wrapper > div.menu_1 > div.menu > div.icon > a:nth-of-type(1)"
);

// Selecting the search icon in the secondary menu
let search_2 = document.querySelector(
	"div.wrapper > div.menu_2 > div.menu_item > div.icon > a:nth-of-type(1)"
);

// Selecting the search box container
let search_box = document.querySelector("div.wrapper > div.search_box");

// Selecting the cancel button within the search box
let search_cancel = document.querySelector(
	"div.wrapper > div.search_box > div.search > button"
);

// Selecting the search field within the search box
let search_field = document.querySelector(
	"div.wrapper > div.search_box > div.search > div.search > div.field > form"
);

// Selecting the input field within the search form
let search_inp = document.querySelector(
	"div.wrapper > div.search_box > div.search > div.search > div.field > form > input"
);

// Selecting individual menu items within the secondary menu
let menu_items_2 = document.querySelectorAll(
	"div.wrapper > div.menu_2 > div.menu_item > ul > li"
);

// Selecting submenus within the secondary menu
let submenus_2 = document.querySelectorAll(
	"div.wrapper > div.menu_2 > div.submenu"
);

// Selecting the back button within submenus of the secondary menu
let submenu_back = document.querySelectorAll(
	"div.wrapper > div.menu_2 > div.submenu > div.top"
);

// Selecting the bars icon in the secondary menu
let bars = document.querySelector(
	"div.wrapper > div.menu_2 > div.menu > button"
);

// Initializing a flag variable
let flag = true;

// Array of colors for styling
let colors = [
	"#f40000",
	"#ff560e",
	"#6ace7f",
	"#6ac9ce",
	"#d7b85b",
	"#f79900",
	"#b59e74",
];

// Function to show the submenu
function showSubmenu(index) {
	if (submenus[index]) {
		submenus[index].classList.replace("-top-[2000px]", "top-[75px]");
		submenus[index].classList.replace("opacity-0", "opacity-100");
	}
	menu_items[index].classList.add(`bg-[${colors[index]}]`);
	menu_items[index].classList.replace("text-[#333]", "text-white");
}

// Function to hide the submenu
function hideSubmenu(index) {
	if (submenus[index]) {
		submenus[index].classList.replace("top-[75px]", "-top-[2000px]");
		submenus[index].classList.replace("opacity-100", "opacity-0");
	}
	menu_items[index].classList.remove(`bg-[${colors[index]}]`);
	menu_items[index].classList.replace("text-white", "text-[#333]");
	if (index < menu_items.length - 1) {
		menu.classList.add("border-b");
	}
}

// Adding event listeners to each menu item for mouse enter and leave events
menu_items.forEach((elem, index) => {
	elem.addEventListener("mouseenter", () => showSubmenu(index));
	elem.addEventListener("mouseleave", () => {
		if (!submenus[index] || !submenus[index].matches(":hover")) {
			hideSubmenu(index);
		}
	});

	// Adding event listeners to adjacent elements to manage border classes
	if (index < menu_items.length - 1) {
		elem.nextElementSibling.addEventListener("mouseenter", () => {
			if (!submenus[index] || !submenus[index].matches(":hover")) {
				hideSubmenu(index);
			}
			menu.classList.add("border-b");
		});
	}
	if (index > 0) {
		elem.previousElementSibling.addEventListener("mouseenter", () => {
			if (!submenus[index] || !submenus[index].matches(":hover")) {
				hideSubmenu(index);
			}
			menu.classList.remove("border-b");
		});
	}
});

// Adding event listeners to each submenu for mouse enter and leave events
submenus.forEach((submenu, index) => {
	submenu.addEventListener("mouseenter", () => showSubmenu(index));
	submenu.addEventListener("mouseleave", () => hideSubmenu(index));
});

// Toggle menu visibility on bars icon click
bars.addEventListener("click", () => {
	if (flag) {
		// Show menu
		bars.children[0].classList.replace("fa-bars", "fa-xmark");
		bars.children[0].classList.replace("text-3xl", "text-4xl");
		menu_2.classList.replace("h-0", "h-fit");
		menu_2.classList.replace("opacity-0", "opacity-100");
		menu_2.classList.replace("-top-[800px]", "top-[3.46rem]");
		flag = false;
	} else {
		// Hide menu
		bars.children[0].classList.replace("fa-xmark", "fa-bars");
		bars.children[0].classList.replace("text-4xl", "text-3xl");
		menu_2.classList.replace("h-fit", "h-0");
		menu_2.classList.replace("opacity-100", "opacity-0");
		menu_2.classList.replace("top-[3.46rem]", "-top-[800px]");
		submenus_2.forEach((e) => {
			e.classList.replace("flex", "hidden");
		});
		document
			.querySelector("div.wrapper")
			.children[3].classList.replace("hidden", "flex");
		document
			.querySelector("div.wrapper")
			.children[4].classList.remove("hidden");
		submenus_2.forEach((e) => {
			e.classList.remove("mt-[3.46rem]");
		});
		flag = true;
	}
});

// Add click event listeners to each menu item in the secondary menu
menu_items_2.forEach((elem, index) => {
	elem.addEventListener("click", () => {
		submenus_2.forEach((e, i) => {
			if (index === i) {
				e.classList.replace("hidden", "flex");
				document
					.querySelector("div.wrapper")
					.children[3].classList.replace("flex", "hidden");
				document
					.querySelector("div.wrapper")
					.children[4].classList.add("hidden");
				e.classList.add("mt-[3.46rem]");
			}
		});
	});
});

// Add click event listeners to each back button in the submenus of the secondary menu
submenu_back.forEach((elem, index) => {
	elem.addEventListener("click", () => {
		submenus_2.forEach((e, i) => {
			if (index === i) {
				e.classList.replace("flex", "hidden");
				document
					.querySelector("div.wrapper")
					.children[3].classList.replace("hidden", "flex");
				document
					.querySelector("div.wrapper")
					.children[4].classList.remove("hidden");
				e.classList.remove("mt-[3.46rem]");
			}
		});
	});
});

// Add click event listener to the search cancel button
search_cancel.addEventListener("click", () => {
	search_box.classList.replace("flex", "hidden");
	document.body.classList.remove("h-screen", "overflow-hidden");
});

// Add click event listener to the search icon in the main menu
search_1.addEventListener("click", () => {
	search_box.classList.replace("hidden", "flex");
	document.body.classList.add("h-screen", "overflow-hidden");
});

// Add click event listener to the search icon in the secondary menu
search_2.addEventListener("click", () => {
	search_box.classList.replace("hidden", "flex");
	document.body.classList.add("h-screen", "overflow-hidden");
});

// Add focus event listener to the search input field
search_inp.addEventListener("focus", () => {
	search_field.classList.add("outline-none", "!outline-black");
});

// Add blur event listener to the search input field
search_inp.addEventListener("blur", () => {
	search_field.classList.remove("outline-none", "!outline-black");
});
