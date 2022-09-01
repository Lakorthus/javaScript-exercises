function foodTruckFestival(menus) {
  let flatMenus = menus.flat();

  let combineMenu = new Set();
  flatMenus.forEach((item) => {
    combineMenu.add(item);
  });

  const menuNode = document.querySelector("#combined-menu");
  for (let item of combineMenu) {
    let foodNode = document.createElement("li");
    foodNode.innerText = item;
    menuNode.appendChild(foodNode);
  }
}
