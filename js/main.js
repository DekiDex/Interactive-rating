const btns= document.querySelectorAll('[role="button"]');
const submitBtn= document.getElementById('submit');
const feedBackBox = document.getElementById('feedback-box');
const thankYouBox = document.getElementById('thank-you-box');
const selectedRating = document.getElementById('selected-rating');


btns.forEach((btn)=>{

  btn.addEventListener('click' ,function (e) {

    let selectedBtn= e.currentTarget;
    for (let i = 0 ; i < btns.length;  i++){
 
     if (btns[i].getAttribute('aria-selected')=='true') {

      btns[i].setAttribute('aria-selected',false);
      selectedBtn.setAttribute('aria-selected',true);
      selectedRating.textContent=selectedBtn.id;


     }
  else 
       {
  	    selectedBtn.setAttribute('aria-selected',true);
      selectedRating.textContent=selectedBtn.id;
       }

    }

  })


})

submitBtn.addEventListener('click' ,function(){

  feedBackBox.setAttribute('hidden', true);
  thankYouBox.removeAttribute('hidden');

})