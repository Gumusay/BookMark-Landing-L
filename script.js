///E-MAİL START

// function validateEmail(event) {
//     event.preventDefault(); 

//     const emailInput = document.getElementById("emailInput").value;
//     const emailValidationMessage = document.getElementById("emailValidationMessage");
    
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (emailRegex.test(emailInput)) {
//         emailValidationMessage.style.backgroundColor= "green";
//         emailValidationMessage.style.color= "white";
//         emailValidationMessage.innerHTML = "Thank you for subscribing";
//         emailValidationMessage.style.display = "block";
//     } else {
//         emailValidationMessage.style.backgroundColor= "red";
//         emailValidationMessage.style.color= "white";
//         emailValidationMessage.innerHTML = "Whoops, make sure it’s an email";
//         emailValidationMessage.style.display = "block";
//     }
// }
// MAİL START
  function validateEmail(event) {
    event.preventDefault();

    const emailInput = document.getElementById("emailInput").value;
    const errorMessageBox = document.querySelector('.error-message');
    const trueMessageBox = document.querySelector('.true-message');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(emailInput)) {
        trueMessageBox.style.display = "block";
        errorMessageBox.style.display = "none";
    } else {
        errorMessageBox.style.display = "block";
        trueMessageBox.style.display = "none";
    }
  }
// MAİL END
//E-MAİL END



//FAQ START
// let faqTitles = document.querySelectorAll(".faq-title");

// faqTitles.forEach(faqTitle => {
//   faqTitle.addEventListener("click", event => {
//     const active = document.querySelector(".faq-title.active");
//     if (active && active !== faqTitle) {
//       active.classList.toggle("active");
//       active.nextElementSibling.style.maxHeight = 0;
//     }
//     faqTitle.classList.toggle("active");
//     const answer = faqTitle.nextElementSibling;
//     if (faqTitle.classList.contains("active")) {
//       answer.style.maxHeight = answer.scrollHeight + "px";
//     } else {
//       answer.style.maxHeight = 0;
//     }
//   });
// });
document.addEventListener("DOMContentLoaded", function() {
  const accContents = document.querySelectorAll(".faq-item");

  accContents.forEach(function(content) {
    const question = content.querySelector(".faq-title");

    question.addEventListener("click", function() {
      accContents.forEach(function(innerContent) {
        if (innerContent !== content) {
          innerContent.classList.remove("active");
          innerContent.querySelector(".faq-paragraf").style.display = "none";
        }
      });
      content.classList.toggle("active");
      const answer = content.querySelector(".faq-paragraf");
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });
});
//FAQ END

//DARKMOD START
document.addEventListener('DOMContentLoaded', function () {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const darkModeEnabled = localStorage.getItem('darkMode') === 'enabled';

  darkModeToggle.checked = darkModeEnabled;

  function updateDarkMode() {
    const body = document.body;
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const toggle = document.querySelector('.toggle');

    if (darkModeToggle.checked) {
      body.classList.add('dark-mode');
      sun.style.transform = 'scale(0)';
      moon.style.transform = 'scale(1)';
      toggle.style.background = '#f8f8f8';
      localStorage.setItem('darkMode', 'enabled');
    } else {
      body.classList.remove('dark-mode');
      sun.style.transform = 'scale(1)';
      moon.style.transform = 'scale(0)';
      toggle.style.background = 'transparent';
      localStorage.setItem('darkMode', 'disabled');
    }
  }

  darkModeToggle.addEventListener('change', updateDarkMode);

  updateDarkMode();
});
//DARKMOD END

