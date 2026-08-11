const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});


document.querySelectorAll("nav a").forEach(function(link) {
  link.addEventListener("click", function() {
    navMenu.classList.remove("open");
  });
});


document.querySelectorAll(".faq-item button").forEach(function(button) {

  button.addEventListener("click", function() {

    const answer = this.nextElementSibling;
    const icon = this.querySelector("span");

    document.querySelectorAll(".answer").forEach(function(item) {
      if (item !== answer) {
        item.style.display = "none";
      }
    });

    document.querySelectorAll(".faq-item button span").forEach(function(item) {
      if (item !== icon) {
        item.textContent = "+";
      }
    });

    if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.textContent = "+";
    } else {
      answer.style.display = "block";
      icon.textContent = "−";
    }

  });

});
