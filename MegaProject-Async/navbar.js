// show navbar when the screen is scrolled up and hide it when the screen is scrolled down

const onScrollShowNavbar = document.querySelector(
  ".on_scroll_navbar_for_larger",
);
document.addEventListener("DOMContentLoaded", function () {
  // this variable sets or stores the initial value of the pageYOffSet
  let prevScrollPos = window.pageYOffset;
  const threshold = 100;

  window.addEventListener("scroll", function () {
    // this variable stores the latest position of the pageYOffSet when the page is scrolled
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos || currentScrollPos < threshold) {
      // Scrolling up or close to the top
      onScrollShowNavbar.classList.replace("md:hidden", "md:flex");
      onScrollShowNavbar.classList.replace("lg:hidden", "lg:flex");
      onScrollShowNavbar.classList.replace("md:max-h-0", "md:max-h-24");
    } else {
      // Scrolling down
      onScrollShowNavbar.classList.replace("md:flex", "md:hidden");
      onScrollShowNavbar.classList.replace("lg:flex", "lg:hidden");
      onScrollShowNavbar.classList.replace("md:max-h-24", "md:max-h-0");
    }

    prevScrollPos = currentScrollPos;
  });
});

// menu options drop down for smaller screens.
const menuOptions = document.querySelector(".menu_options");
const navbarOptionsButton = document.querySelector(".nav_bar_options");

// when the Bar button is clicked this increase the height of the menu options div in duration of 500ms
navbarOptionsButton.addEventListener("click", showMenuOptions);

function showMenuOptions() {
  menuOptions.classList.toggle("max-h-72");
}
