class Menu {
  constructor(element) {
    this.element = element;
    this.button = element.querySelector("#menu-btn");
    this.menuContent = element.querySelector(".menu");

    this.button.addEventListener("click", () => {
      this.toggleMenu();
    });
    this.menuContent.addEventListener("mouseleave", () => {
      this.disappear();
    });
  }

  toggleMenu() {
    if (this.menuContent.style.display === "none") {
      this.menuContent.style.display = "block";
      TweenMax.to(this.menuContent, 0.5, { opacity: 1 });
      TweenMax.to(this.menuContent, 0.5, { ease: Bounce.easeOut, y: 30 });
    } else {
      TweenMax.to(this.menuContent, 0.5, { opacity: 0 });
      TweenMax.to(this.menuContent, 0.5, {
        y: -30
      });
      TweenMax.to(this.menuContent, 0.5, { display: "none" });
    }
  }

  disappear() {
    TweenMax.to(this.menuContent, 0.5, { display: "none" });
  }
}

let showMenu = document
  .querySelectorAll(".main-menu")
  .forEach(show => new Menu(show));
