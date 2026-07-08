let message = document.querySelector(".msg");
let main_content = document.querySelector("#mainContent");

message.textContent = "Crafting modern web experiences";
let arr = Array.from(message.textContent);

message.textContent = "";

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    message.append(arr[i]);
  }, i * 100);
}

setTimeout(
  () => {
    //After typing --> Fade out
    message.classList.add("fade-out");

    //show entire page now
    setTimeout(() => {
      message.style.display = "none";
      main_content.style.display = "block";

      //smooth fade-in effect
      setTimeout(() => {
        main_content.classList.add("show");
      }, 50);
    }, 1000);
  },
  arr.length * 100 + 800,
);

// Skills section

let tabs = document.querySelectorAll(".skill-tab");
let languages = document.querySelector(".language");
let devTools = document.querySelector(".dev_tools");
let others = document.querySelector(".others");

tabs[0].addEventListener("click", () => {
  tabs[0].style.backgroundColor = "#7284d1";
  tabs[1].style.backgroundColor = "transparent";
  tabs[2].style.backgroundColor = "transparent";
  languages.style.display = "flex";
  devTools.style.display = "none";
  others.style.display = "none";
});

tabs[1].addEventListener("click", () => {
  tabs[0].style.backgroundColor = "transparent";
  tabs[2].style.backgroundColor = "transparent";
  tabs[1].style.backgroundColor = "#7284d1";
  languages.style.display = "none";
  devTools.style.display = "flex";
  others.style.display = "none";
});

tabs[2].addEventListener("click", () => {
  tabs[0].style.backgroundColor = "transparent";
  tabs[1].style.backgroundColor = "transparent";
  tabs[2].style.backgroundColor = "#7284d1";
  languages.style.display = "none";
  devTools.style.display = "none";
  others.style.display = "flex";
});

// Contact Us

let form = document.querySelector(".contact-form");
let userName = document.querySelector("#name");
let userEmail = document.querySelector("#email");
let userSubject = document.querySelector("#subject");
let userMessage = document.querySelector("#message");

let send_message = (event) => {
  event.preventDefault();

  let message = JSON.parse(localStorage.getItem("user_info")) || [];

  let user_info = {
    nameInput: userName.value,
    emailInput: userEmail.value,
    subjectInput: userSubject.value,
    messageInput: userMessage.value,
  };

  message.push(user_info);

  localStorage.setItem("user_info", JSON.stringify(message));

  form.reset();

  alert("Message successfully recieved");
};

form.addEventListener("submit", send_message);
