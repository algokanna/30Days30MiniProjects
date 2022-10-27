const faqList = document.querySelector("#faq-list"),
  questions = faqList.querySelectorAll(".question"),
  faqToggles = faqList.querySelectorAll(".toggle");

function toggleContent(answer, question, toggle) {
  if (answer.classList.contains("hide")) {
    answer.classList.add("show");
    answer.classList.remove("hide");
  } else {
    answer.classList.add("hide");
    answer.classList.remove("show");
  }

  if (question.classList.contains("current-question")) {
    question.classList.remove("current-question");
  } else {
    question.classList.add("current-question");
  }

  if (toggle.classList.contains("toggle-up")) {
    toggle.classList.remove("toggle-up");
    toggle.classList.add("toggle-down");
  } else {
    toggle.classList.add("toggle-up");
    toggle.classList.remove("toggle-down");
  }
}



for (let i = 0; i < faqToggles.length; i++){
  faqToggles[i].addEventListener("click", (e) => {
    const faqlistItem = e.currentTarget.parentElement,
          question = faqlistItem.querySelector(".question"),
          answer = faqlistItem.querySelector(".answer");          
    toggleContent(answer,question,faqToggles[i]);
});
}

for (let i = 0; i < questions.length; i++){
    questions[i].addEventListener("click", (e) => {
      const faqListItem = e.currentTarget.parentElement,
            answer = faqListItem.querySelector(".answer"),
            toggle = faqListItem.querySelector(".toggle");
      toggleContent(answer,questions[i],toggle);
  });
  }