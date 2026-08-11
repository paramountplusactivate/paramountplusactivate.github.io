const mobileMenu = document.getElementById("mobileMenu");
const navigation = document.getElementById("navigation");

mobileMenu.addEventListener("click", function () {
  navigation.classList.toggle("active");
});


const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(function (link) {

  link.addEventListener("click", function () {
    navigation.classList.remove("active");
  });

});


const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

  question.addEventListener("click", function () {

    const currentAnswer = this.nextElementSibling;
    const currentIcon = this.querySelector("b");

    document.querySelectorAll(".faq-answer").forEach(function (answer) {

      if (answer !== currentAnswer) {
        answer.style.display = "none";
      }

    });


    document.querySelectorAll(".faq-question b").forEach(function (icon) {

      if (icon !== currentIcon) {
        icon.textContent = "+";
      }

    });


    if (currentAnswer.style.display === "block") {

      currentAnswer.style.display = "none";
      currentIcon.textContent = "+";

    } else {

      currentAnswer.style.display = "block";
      currentIcon.textContent = "−";

    }

  });

});
