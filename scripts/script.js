const btnOpen = document.getElementById("btn-open");
const modalEl = document.getElementById("modal");
const btnClose = document.getElementById("btn-close");

btnOpen.addEventListener("click", function () {
  modalEl.classList.remove("close");
  modalEl.classList.add("show");
});

btnClose.addEventListener("click", function () {
  modalEl.classList.remove("show");
  modalEl.classList.add("close");
});
