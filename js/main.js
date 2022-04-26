'use strict'

const submitBtn = document.querySelector('.submit')
const hideContainer = document.querySelector('.how')
const showContainer = document.querySelector('.thankyou')

let rating = document.querySelectorAll('input')
let showValue = document.querySelector('.show--rating')

for (let i = 0; i < rating.length; i++) {
    rating[i].addEventListener('click', function () {
        showValue.innerHTML = rating[i].value
    })
}
submitBtn.addEventListener('click', () => {
    hideContainer.classList.add('display--none')
    showContainer.classList.remove('display--none')
})