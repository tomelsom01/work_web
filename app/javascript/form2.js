const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  if (phoneError.textContent !== "") {
    e.preventDefault();
  }
});
