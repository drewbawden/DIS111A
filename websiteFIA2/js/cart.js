let cartContents = [];
let priceTotal = 0;
let itemCount = 0;
const allProducts = [hotFood].concat([coldFood], [drinks]);

function addToCart(id) {
  let product;
  // find product with ID
  for (let x = 0; x < 3; x++) {
    product = allProducts[x].find((obj) => {
      return obj.id === id;
    });
    if (product) {
      break;
    }
  }

  // add to cart else modify count & change price
  if (cartContents.find((item) => item == product.id)) {
    let prodName = document.getElementById(product.id + "CartName");
    let prodPrice = document.getElementById(product.id + "CartPrice");
    // increment count
    if (prodName.innerHTML.includes("<br>x ")) {
      let cartDetails = prodName.innerHTML.split("<br>x ");
      let newCount = parseInt(cartDetails[1]) + 1;
      prodName.innerHTML = cartDetails[0] + "<br>x " + newCount;
    }
    // increment price
    let newPrice =
      parseInt(prodPrice.innerHTML.split("$")[1]) + parseInt(product.price);
    prodPrice.innerHTML = "$" + newPrice;
  } else {
    cartContents.push(product.id);
    appendHTML({
      parentID: "cartContents",
      id: product.id,
      name: product.name,
      price: product.price,
      special: product.special,
      textID: product.id,
    });
  }
  priceTotal += parseFloat(product.price);
  itemCount++;
  displayPriceTotal();
  displayItemCount();
}

function clearCart() {
  cartContents = [];
  priceTotal = 0;
  itemCount = 0;
  document.getElementById("cartContents").innerHTML = "";
  displayPriceTotal();
  displayItemCount();
}

function cartMaxHeight() {
  // is this unnecessary? maybe
  // is it so easy that i dont care? yep
  const listContainer = document.querySelector(".productListContainer");
  const cartContainer = document.getElementById("cartContents");
  cartContainer.style.maxHeight = listContainer.offsetHeight - 69 + "px";
}

function displayPriceTotal() {
  const priceDisplay = document.getElementById("priceTotal");
  priceDisplay.innerHTML = "$" + priceTotal.toFixed(2);
}

function displayItemCount() {
  const itemDisplay = document.getElementById("cartItemCount");
  itemDisplay.innerHTML = itemCount;
}

window.addEventListener("resize", () => {
  cartMaxHeight();
});
