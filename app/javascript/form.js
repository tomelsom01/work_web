document.addEventListener("DOMContentLoaded", function () {

  const phoneInput = document.getElementById("phone");
  const phoneError = document.getElementById("phoneError");

  phoneInput.addEventListener("input", function () {

    const value = phoneInput.value.trim();

    phoneError.textContent = "";

    // Allowed characters
    if (!/^[0-9+\s\-()]+$/.test(value)) {
      phoneError.textContent =
        "Only numbers and valid phone symbols are allowed";
      return;
    }

    // + must be at start
    if (value.includes("+") && !value.startsWith("+")) {
      phoneError.textContent =
        "International numbers must start with +";
      return;
    }

    // Remove formatting
    const digitsOnly = value.replace(/\D/g, "");

    // UK numbers
    const ukRegex = /^(0\d{10}|44\d{10})$/;

    // International
    const internationalRegex = /^\+\d{10,15}$/;

    const cleanInternational =
      value.replace(/[\s\-()]/g, "");

    if (
      !ukRegex.test(digitsOnly) &&
      !internationalRegex.test(cleanInternational)
    ) {
      phoneError.textContent =
        "Enter a valid UK or international number";
      return;
    }

  });

});
