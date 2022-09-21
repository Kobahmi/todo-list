const menuToggle = () => {
  const menuBtn = document.querySelector(".menu-button");
  const menu = document.querySelector(".side");

  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("hide");
  });
};

export default menuToggle;
