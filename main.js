//assets/images/icon-minus.svg
//assets/images/icon-plus.svg

const faqEls = document.querySelectorAll(".faq")

faqEls.forEach((faq) => {
  let icon = faq.querySelector(".question-box img")

  icon.addEventListener("click", (e) => {
    closeAllAnswer(e.target)
    let answerEl = faq.querySelector(".answer")
    answerEl.classList.toggle("hidden")
    if (icon.src == location.origin+"/assets/images/icon-plus.svg") {
      icon.src = "assets/images/icon-minus.svg"
    } else {
      icon.src = "assets/images/icon-plus.svg"
    }
    
  })
})

// closeAllAnswer() except trigerred question,s answer
function closeAllAnswer(e) {
  faqEls.forEach((faq) => {
    if (faq !== e.parentElement.parentElement) {
      let answerEl = faq.querySelector(".answer")
      let icon = faq.querySelector(".question-box img")
      answerEl.classList.add("hidden")
      icon.src = `assets/images/icon-plus.svg`
    }
  })
}
