function toggleMenu() {
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("active");
}


const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function(question) {

  question.addEventListener("click", function() {

    const answer = this.nextElementSibling;
    const icon = this.querySelector("span");

    if (answer.style.display === "block") {

      answer.style.display = "none";
      icon.textContent = "+";

    } else {

      answer.style.display = "block";
      icon.textContent = "−";

    }

  });

});


const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function(link) {

  link.addEventListener("click", function() {

    const nav = document.getElementById("navMenu");

    nav.classList.remove("active");

  });

});
