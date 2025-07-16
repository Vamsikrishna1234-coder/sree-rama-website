const scriptURL = "https://script.google.com/macros/s/AKfycbwktuACghwYJdJS80zqVOYZrR74wGcnL0fV85xZp7f3EJg1cUCk1IDGy39X0V-TkoMKIw/exec";
const form = document.getElementById("contactForm");
const msg = document.getElementById("responseMsg");

form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(scriptURL, { method: "POST", body: formData })
    .then(() => {
      msg.innerHTML = "✅ Submitted successfully!";
      form.reset();
    })
    .catch(() => {
      msg.innerHTML = "❌ Failed to submit. Check your script URL and access.";
    });
});