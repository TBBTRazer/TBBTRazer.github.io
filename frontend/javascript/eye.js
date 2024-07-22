
const password = document.querySelector("#password");
const eyeIcon = document.querySelector("#Eye");

eyeIcon.addEventListener("click", function() {

    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
  
     if (password.getAttribute("type") === "password") {
          eyeIcon.classList.remove("icoeye2");
          eyeIcon.classList.add("icoeye-hidden1");
     } else {
          eyeIcon.classList.remove("icoeye-hidden1");
          eyeIcon.classList.add("icoeye2");
     }
  })
