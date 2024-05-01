function loadProducts() {
  const allProducts = [hotFood].concat([coldFood], [drinks]);
  const parents = ["hotFoodParent", "coldFoodParent", "drinksParent"];
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < allProducts[x].length; y++) {
      const menuObj = allProducts[x][y];
      appendHTML({
        parentID: parents[x],
        id: menuObj.id,
        name: menuObj.name,
        price: menuObj.price,
        special: menuObj.special,
      });
    }
  }
}

function appendHTML(menuItem) {
  let specialLogo = "";

  // add special logos
  if (menuItem.special == "gluten") {
    specialLogo = `<img src="images/glutenFreeLogo.png" alt="" class="glutenLogo" />`;
  } else if (menuItem.special == "vegan") {
    specialLogo = `<img src="images/veganLogo.png" alt="" class="veganLogo" />`;
  } else if (menuItem.special == "both") {
    specialLogo = `
    <img src="images/glutenFreeLogo.png" alt="" class="glutenLogo" />
    <img src="images/veganLogo.png" alt="" class="veganLogo" />
    `;
  }

  const htmlContent = `
  <div class="productContainer">
  <button class="cartContainerBtn" onClick="addToCart('${menuItem.id}, ${menuItem.price}')">
  <img
      src="images/products/${menuItem.id}.png"
      alt="${menuItem.name}"
      class="productImage"
      />
      ${specialLogo}
      <div>
      <p class="productName">${menuItem.name}</p>
      <p class="productPrice">$${menuItem.price}</p>
      </div>
    </button>
  </div>
    `;

  // append html inside container
  const parentDiv = document.getElementById(menuItem.parentID);
  parentDiv.innerHTML += htmlContent;
}

window.addEventListener("DOMContentLoaded", function () {
  // DOM has loaded, begin script
  loadProducts();
});
