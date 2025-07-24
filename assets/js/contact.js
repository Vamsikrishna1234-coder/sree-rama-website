const scriptURL = "https://script.google.com/macros/s/AKfycbyERucplZDF8oDXAnFQZeVYZZWOoDQIV7iOjeVOQGnu6W3k1zYVtghEOfRfWlhLOLcb/exec";
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
      msg.innerHTML = "❌ Failed to submit.";
    });
});