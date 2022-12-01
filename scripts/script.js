const btnOpen = document.getElementById("btn-open");
const modalEl = document.getElementById("modal");
const btnClose = document.getElementById("modal-close");

function closeModal() {
  modalEl.classList.remove("close");
  modalEl.classList.add("show");
}

function showModal() {
  modalEl.classList.remove("show");
  modalEl.classList.add("close");
}

btnOpen.addEventListener("click", function () {
  showModal();
});

btnClose.addEventListener("click", function () {
  closeModal();
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});
