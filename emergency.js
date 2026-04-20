const form = document.getElementById("emergencyForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // show toast
  toast.classList.add("show");

  // reset form
  form.reset();

  // hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
});
