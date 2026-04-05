// template_jmjmjt8
// service_7usrhpq
// 02HiRZLm8_5pZurip

let isModalOpen = false;
let contrastToggle = false;

function toggleContrast () {
   contrastToggle = !contrastToggle;
   if (contrastToggle) {
      document.body.classList += " dark-theme"
   }
   else {
      document.body.classList.remove("dark-theme")
   }
}

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
 )
 .then (() => {
   loading.classList.remove("modal__overlay--visible");
   success.classList += " modal__overlay--visible";
  })
  .catch(() => {
   loading.classList.remove("modal__overlay--visible");
   alert(
      "The email service is temporily unavailable. Please contact me directly at spearsjonesco@gmail.com."
   );   
  });
}

function toggleModal() {
   if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
   }
   isModalOpen = true;
   document.body.classList += " modal--open";
}
