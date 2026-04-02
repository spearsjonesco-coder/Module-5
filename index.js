// template_jmjmjt8
// service_7usrhpq
// 02HiRZLm8_5pZurip

function contact(event) {
   event.preventDefault();
const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');
loading.classlist += " modal__overlay--visible";
 emailjs
 .sendForm(
       'service_7usrhpq',
       'template_jmjmjt8',
        event.target,
        '02HiRZLm8_5pZurip'
 ).then (() => {
   loading.classList.remove("modal__overlay--visible");
   success.classList += " modal__overlay--visible";
  }).catch(() => {
   loading.classList.remove("modal__overlay--visible");
   alert(
      "The email service is temporily unavailable. Please contact me directly at spearsjonesco@gmail.com."
   );   
  })
}

let isModalOpen = false;
function toggleModal() {
   isModalOpen = !isModalOpen;
   if (isModalOpen) {
      return document.body.classList.remove("modal--open");
   }
   // toggle modal
   document.body.classList += " modal--open";
}
