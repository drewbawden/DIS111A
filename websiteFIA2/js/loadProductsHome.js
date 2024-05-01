function chooseProducts() {
  let allProducts = hotFood.concat(coldFood, drinks);

  let products = []; // will contain 3 nested arrays of product objects

  // loop through 3 categories
  for (let x = 0; x < 3; x++) {
    let prodList = [];
    const productCount = Math.floor(Math.random() * 4) + 3; // random product count 3-6 per category
    for (let y = 0; y < productCount; y++) {
      const productIndex = Math.floor(Math.random() * allProducts.length);
      prodList.push(allProducts[productIndex]);
      allProducts.splice(productIndex, 1);
    }
    products.push(prodList);
  }
  setChanges(products);
}

function setChanges(products) {
  let parentID = "";
  // add products that require price markdown
  for (let x = 0; x < 2; x++) {
    for (let y = 0; y < products[x].length; y++) {
      let originalPrice = parseFloat(products[x][y].price);
      decreaseValue = (Math.floor(Math.random() * 5) + 5) * 0.1; // price decrease multiplier 0.5-0.9
      let markdownPrice = (originalPrice * decreaseValue).toFixed(2);

      if (x == 0) {
        parentID = "specialsParent";
      } else if (x == 1) {
        parentID = "priceDropsParent";
      }
      appendHTML({
        parentID: parentID,
        id: products[x][y].id,
        name: products[x][y].name,
        price: originalPrice,
        markdownPrice: markdownPrice,
        special: products[x][y].special,
      });
    }
  }
  // add remaining products
  parentID = "newProductsParent";
  for (let x = 0; x < products[2].length; x++) {
    appendHTML({
      parentID: parentID,
      id: products[2][x].id,
      name: products[2][x].name,
      price: products[2][x].price,
      special: products[2][x].special,
    });
  }
}

function appendHTML(menuItem) {
  let priceStr = `$${menuItem.price}`;
  let specialLogo = "";

  // check if has price markdown
  if (menuItem.markdownPrice) {
    priceStr = `<i><s>$${menuItem.price}</s></i> $${menuItem.markdownPrice}`;
  }

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
    <img
    src="images/products/${menuItem.id}.png"
    alt="${menuItem.name}"
    class="productImage"
    />
    ${specialLogo}
    <div>
    <p class="productName">${menuItem.name}</p>
    <p class="productPrice">${priceStr}</p>
    </div>
  </div>
    `;

  // append html inside container
  const parentDiv = document.getElementById(menuItem.parentID);
  parentDiv.innerHTML += htmlContent;
}

window.addEventListener("DOMContentLoaded", function () {
  // DOM has loaded, begin script
  chooseProducts();
});
