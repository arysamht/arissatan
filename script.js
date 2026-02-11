function sayHi() {
  alert("Hi! You clicked the button 🎉");
}

const form = document.getElementById("contactForm");
const successMsg = document.getElementById("formSuccess");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = new FormData(form);
  const response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
    });

  if (response.ok) {
    form.reset();
    successMsg.classList.remove("d-none");
    } else {
      alert("Oops! Something went wrong.");
    }
});
