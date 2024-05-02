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
  let nameIdStr = "";
  let priceIdStr = "";
  let itemCount = "";
  let buttonContainerOpen = "";
  let buttonContainerClose = "";

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

  // check if adding to cart
  if (menuItem.textID) {
    nameIdStr = `id="${menuItem.textID + "CartName"}"`;
    priceIdStr = `id="${menuItem.textID + "CartPrice"}"`;
    itemCount = "<br>x 1";
  } else {
    buttonContainerOpen = `<button class="cartContainerBtn" onClick="addToCart('${menuItem.id}')">`;
    buttonContainerClose = "</button>";
  }

  const htmlContent = `
  <div class="productContainer">
    ${buttonContainerOpen}
      <img
      src="images/products/${menuItem.id}.png"
      alt="${menuItem.name}"
      class="productImage"
      />
      ${specialLogo}
      <div>
      <p ${nameIdStr} class="productName">${menuItem.name}${itemCount}</p>
      <p ${priceIdStr} class="productPrice">$${menuItem.price}</p>
      </div>
    ${buttonContainerClose}
  </div>
    `;

  // append html inside container
  const parentDiv = document.getElementById(menuItem.parentID);
  parentDiv.innerHTML += htmlContent;
}

function loadFromURL() {
  const params = new URLSearchParams(window.location.search);
  const productID = params.get("product");
  addToCart(productID);
}

window.addEventListener("DOMContentLoaded", function () {
  // DOM has loaded, begin script
  loadProducts();
  loadFromURL();
});
