const breakfastMenu = [
  "Pancakes - $12",
  "Eggs Benedict - $22.99",
  "Oatmeal - $21.99",
  "Frittata - $15",
];

const mainCourseMenu = [
  "Steak - $30",
  "Pasta - $18.50",
  "Burger - $12.75",
  "Salmon - $25",
];

const dessertMenu = [
  "Cake - $8.99",
  "Ice Cream - $5.99",
  "Pudding - $6.50",
  "Fruit Salad - $7.25",
];
const breakfastMenuItemsHTML = breakfastMenu
  .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
  .join("");
document.getElementById("breakfastMenuItems").innerHTML =
  breakfastMenuItemsHTML;

let mainCourseItem = "";
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

let dessertItem = "";
for (let i = 0; i < dessertMenu.length; i++) {
  dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML = dessertItem;
