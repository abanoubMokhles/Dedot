// FAQs Section

let questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  question.addEventListener("click", function () {
    this.classList.toggle("d-hidden");
  });
});

// Footer Copyright Year
const year = new Date().getFullYear();
document.querySelector("#year").innerHTML = year;
