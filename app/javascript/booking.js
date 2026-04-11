document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".booking-btn");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      const treatment = this.dataset.treatment;

      // Prefill message
      const messageField = document.getElementById("messageField");
      if (messageField) {
        messageField.value = `Hi Tom, I’d like to book a ${treatment} session.\nMy preferred date/time is:`;
      }

      // Optional: set hidden field
      const treatmentField = document.getElementById("treatmentField");
      if (treatmentField) {
        treatmentField.value = treatment;
      }
    });
  });
});
