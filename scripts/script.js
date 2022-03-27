"use strict";

const ratingEl = document.getElementById("rating");
const btnSubmit = document.getElementById("btn-submit");

const ratingComponent = document.getElementById("rating-component");
const thankYouComponent = document.getElementById("thank-you-component");

const  ratingButtons = document.querySelectorAll("[type = button]");

for(let ratingButton of ratingButtons){
  ratingButton.addEventListener("click",(e) =>{
    for(let ratingBtn of ratingButtons){
      ratingBtn.classList.remove("active");
    }
    e.target.classList.add("active");
    ratingEl.innerText = e.target.innerText;
  });
}


  
btnSubmit.addEventListener("click",() => {
  if(ratingEl.innerText == "" || ratingEl.innerText < 1){
    ratingComponent.style.display = "block";
  }
  else{
    ratingComponent.style.display = "none";
    thankYouComponent.style.display = "block"
  }
})
  
