const MenuItems = document.querySelector("#MenuItems");
MenuItems.style.maxHeight = "0px";
function menuToggle() {
  if (MenuItems.style.maxHeight === "0px"){
    MenuItems.style.maxHeight = "200px";
  } else {
    MenuItems.style.maxHeight = "0px";
  }
}