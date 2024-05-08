let scaleNum = 1;
window.addEventListener("DOMContentLoaded", function () {
  growElem = document.querySelector("#clearCartBtn");
  const incrementInterva = setInterval(
    () => (growElem.style.transform = `scale(${scaleNum})`),
    10
  );
  const incrementInterval = setInterval(() => (scaleNum += 0.0006), 10);
});
