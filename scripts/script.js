const btnOpen = document.getElementById("btn-open");
const modalEl = document.getElementById("modal");
const btnClose = document.getElementById("modal-close");

// function
function closeModal() {
  modalEl.classList.remove("close");
  modalEl.classList.add("show");
}

function showModal() {
  modalEl.classList.remove("show");
  modalEl.classList.add("close");
}

btnOpen.addEventListener("click", function () {
  closeModal();
});

btnClose.addEventListener("click", function () {
  showModal();
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modalEl.classList.add("close");
    modalEl.classList.remove("show");
  }
});
