document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const treatment = params.get("treatment");

  if (treatment) {
    const messageField = document.getElementById("messageField");
    const treatmentField = document.getElementById("treatmentField");

    if (messageField) {
      messageField.value = `Hi Tom, I'd like to book a ${treatment} session.\nMy preferred date/time is:`;
    }

    if (treatmentField) {
      treatmentField.value = treatment;
    }
  }
});
