const notas = document.querySelectorAll("li");
let rate = "";
function select(e) {
  notas.forEach((nota) => {
    nota.classList.remove("select");
  });
  e.target.classList.add("select");
  rate = e.target.innerHTML;
}
notas.forEach((nota) => {
  nota.addEventListener("click", select);
});

//rate display
const rateDisplay = document.querySelector("div.rate-display");

//thanks display
const thankYouDisplay = document.querySelector("div.thank-you-display");
//button
const button = document.getElementById("button");
//feedback
const feedback = document.querySelector("div.feedback");

function submit() {
  rateDisplay.classList.add("hidden");
  thankYouDisplay.classList.remove("hidden");
  feedback.innerHTML = `<p>You selected ${rate} of 5</p>`;
}
button.addEventListener("click", submit);
