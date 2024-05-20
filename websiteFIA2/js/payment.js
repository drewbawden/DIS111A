// goofy payment with slider for card number, etc.
function displayPopup() {
  let popup = document.getElementById("paymentPopupContainer");
  popup.style.visibility = "visible";
}

function closePopup() {
  let popup = document.getElementById("paymentPopupContainer");
  popup.style.visibility = "hidden";
}

function genCode() {
  let codeDisplay = document.getElementById("securityCode");
  codeDisplay.innerText = Math.floor(Math.random() * (999 - 111)) + 111;
}

window.addEventListener("DOMContentLoaded", function () {
  // name
  let nameInput = document.getElementById("cardNameInput");
  nameInput.oninput = function () {
    nameReversed = nameInput.value.split("").reverse().join("");
    document.getElementById("cardName").innerText = nameReversed;
  };

  // card number
  let numberSlider = document.getElementById("cardNumberSlider");
  document.getElementById("cardNumber").innerText = numberSlider.value;
  numberSlider.oninput = function () {
    document.getElementById("cardNumber").innerText = numberSlider.value;
  };

  // date
  let dateInput = document.getElementById("cardDateInput");
  dateInput.oninput = function () {
    let date = new Date(dateInput.value * 1000);
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let formattedDate = `${month}/${year}`;
    document.getElementById("cardDate").innerText = formattedDate;
  };
});
