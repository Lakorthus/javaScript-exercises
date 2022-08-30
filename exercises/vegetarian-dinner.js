function vegetarianMenu(menu) {
    const menuNode = document.querySelector("#menu");
    const vegetarianOptions = menu.filter(
      (option) => option.isVegetarian === true
    );
  
    vegetarianOptions.forEach((option) => {
      let dish = document.createElement("li");
      dish.textContent = option.menu;
      menuNode.appendChild(dish);
    });
  }
  
  const menu = [
    {
      name: "Chicken Parmesan",
      isVegetarian: false,
    },
    {
      name: "Beef Meatballs",
      isVegetarian: false,
    },
    {
      name: "Falafel Wrap",
      isVegetarian: true,
    },
  ];
  
  vegetarianMenu(menu);
  