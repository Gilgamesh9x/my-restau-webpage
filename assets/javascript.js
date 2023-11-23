const menuButton = document.querySelector("#menu");
const navBar = document.querySelector(".my-navbar");

// show / hide menu and add close button
menuButton.addEventListener("click", function () {
  menuButton.classList.toggle("fa-times"); // this adds the close button when the menu button is clicked
  navBar.classList.toggle("active");
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    menuButton.classList.remove("fa-times");
    navBar.classList.remove("active");
  }
});

//

// Close the menu when clicking outside of it
document.addEventListener("click", function (event) {
  let isClickInsideMenu =
    navBar.contains(event.target) || menuButton.contains(event.target); // the second statement makes it so that we get to click outside the menu and the menu closes, only if the menu is opened. And the first statement is obvious

  if (!isClickInsideMenu && navBar.classList.contains("active")) {
    menuButton.classList.remove("fa-times");
    navBar.classList.remove("active");
  }
});

/////////////////////////////////////////////////////////////////////////////////////////////////
// Open/Close modals

const boxesParentElement = document.querySelector(".boxes-parent");
const modalList = document.querySelectorAll(".my-modal");
const overlay = document.querySelector(".overlay");
let closeModalBtn;

function openModal(element) {
  element.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal(ml) {
  ml.forEach((model) => model.classList.add("hidden"));
  overlay.classList.add("hidden");
}

boxesParentElement.addEventListener("click", function (e) {
  if (e.target.closest(".box")) {
    const number = e.target.closest(".box").dataset.number;
    //
    modalList.forEach((modal) => {
      if (modal.dataset.number === number) {
        modal.classList.remove("hidden");
        overlay.classList.remove("hidden");
        // select button
        closeModalBtn = modal.querySelector(".close-modal");
      }
    });
    document.body.classList.add("no-scroll");
    closeModalBtn.addEventListener("click", function () {
      closeModal(modalList);
      document.body.classList.remove("no-scroll");
    });
  }
});

overlay.addEventListener("click", function () {
  closeModal(modalList);
  document.body.classList.remove("no-scroll");
});

///////////////////////////////////////Active link style////////////////////////////////////////////////

const myNavbar = document.querySelector(".my-navbar");
const navBarLinks = myNavbar.querySelectorAll("a");

myNavbar.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    navBarLinks.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
  }
});

// highlight the link on page load

window.addEventListener("DOMContentLoaded", () => {
  const currentURL = window.location.href;
  let isAnyLinkActive = false;

  navBarLinks.forEach((link) => {
    if (link.href === currentURL) {
      link.classList.add("active");
      isAnyLinkActive = true;
    }
  });

  // If no link is active, make the home link active
  if (!isAnyLinkActive) {
    const homeLink = myNavbar.querySelector('a[href="#home"]');
    homeLink.classList.add("active");
  }
});
