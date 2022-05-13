"use strict";

const submit = document.querySelector(".submit");
const errorMail = document.querySelector(".error-mail");
const email = document.querySelector(".email-input");

const saveMail = function () {
  let mailtest = email.value;
  return mailtest;
};

const checkMail = function (mail) {
  const symboleTest = /\S+@\S+\.\S+/;
  return symboleTest.test(mail);
};

submit.addEventListener("click", function (e) {
  e.preventDefault;
  saveMail();
  console.log(email.value);
  console.log(!checkMail(email.value));
  if (!checkMail(email.value)) {
    errorMail.textContent = "Email not valide, please try again.";
  } else if (checkMail(email.value)) {
    errorMail.textContent = "Email valide, thank you !";
  }
});
