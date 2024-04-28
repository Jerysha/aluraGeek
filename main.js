/* Inputs */
const nameInput = document.getElementById("name");
const priceInput = document.getElementById("price");
const urlInput = document.getElementById("images");
/* Buttons */
const submitBtn = document.getElementById("sendBtn");
const cleanBtn = document.getElementById("cleanBtn");
/* Submit Form*/
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (validationRules()) {
    alert("PRODUCTO AGREGADO");
    nameInput.value = "";
    priceInput.value = "";
    urlInput.value = "";
  }
});
/* Clean inputs */
cleanBtn.addEventListener("click", (e) => {
  e.preventDefault();
  nameInput.value = "";
  priceInput.value = "";
  urlInput.value = "";
});
/* Validation */
const validationRules = () => {
  const name = nameInput.value.trim();
  const price = parseFloat(priceInput.value.trim());
  const url = urlInput.value.trim();

  // Validation for name input
  const nameRegex = /^[a-zA-Z´¨\s]+$/;
  if (!nameRegex.test(name)) {
    alert("El nombre debe contener sólo letras.");
    return false;
  }

  // Validation for price input
  if (isNaN(price) || price < 1) {
    alert("El precio debe ser un número mayor o igual a 1.");
    return false;
  }

  // Validation for URL input
  const imageExtensions = /\.(jpeg|jpg|gif|png)$/i;
  if (!imageExtensions.test(url)) {
    alert("La URL no apunta a una imagen válida.");
    return false;
  }

  return true;
};
