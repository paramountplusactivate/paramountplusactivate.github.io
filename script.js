// Mobile menu

const menuButton = document.getElementById("menuButton");
const navigation = document.querySelector(".main-nav");

if (menuButton) {
  menuButton.addEventListener("click", function () {

    if (navigation.style.display === "flex") {
      navigation.style.display = "";
    } else {
      navigation.style.display = "flex";
      navigation.style.flexDirection = "column";
      navigation.style.position = "absolute";
      navigation.style.top = "68px";
      navigation.style.right = "15px";
      navigation.style.padding = "18px 22px";
      navigation.style.background = "#ffffff";
      navigation.style.border = "1px solid #e1e6ef";
      navigation.style.borderRadius = "8px";
      navigation.style.boxShadow = "0 10px 25px rgba(20,40,80,.12)";
      navigation.style.zIndex = "100";
    }

  });
}


// FAQ accordion

const faqButtons = document.querySelectorAll(".faq-item button");

faqButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    const currentItem = button.parentElement;

    document.querySelectorAll(".faq-item").forEach(function(item) {

      if (item !== currentItem) {
        item.classList.remove("active");
      }

    });

    currentItem.classList.toggle("active");

  });

});
