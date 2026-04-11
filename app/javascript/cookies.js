document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");
  const acceptBtn = document.getElementById("accept-cookies");

  if (!banner || !acceptBtn) return;

  if (!localStorage.getItem("cookiesAccepted")) {
    setTimeout(() => {
      banner.classList.add("show");
    }, 500);
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    banner.classList.remove("show");
  });
});
