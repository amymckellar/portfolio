const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querrySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.closest();
});
