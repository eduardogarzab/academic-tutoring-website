const menu = document.querySelector(".nav__menu");
const menuList = document.querySelector(".nav__list");
const links = document.querySelectorAll(".nav__link");

menu.addEventListener("click", function () {
	menuList.classList.toggle("nav__list--show");
	document.body.classList.toggle("body-no-scroll");
});

links.forEach(function (link) {
	link.addEventListener("click", function () {
		menuList.classList.remove("nav__list--show");
		document.body.classList.remove("body-no-scroll");
	});
});
