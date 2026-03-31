// 
// 
// 
const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');

console.log(loading, scussess);

function contact(event) {
   event.preventDefault();
   console.log("it worked");

loading.classlist += " modal__overlay--visible";

emailjs
.sendForm(
      'service_7usrhpq',
      'template_jmjmjt8',
       event.target,
       '02HiRZLm8_5pZurip'
)
.then(() => {
  loading.classList.remove("modal__overlay--visible");
  success.classList.add("modal__overlay--visible");
})
.catch(() => {
   loading.classList.remove("modal__overlay--visible");
   alert(
      "The email service is temporarily unavailable. Please contace me directly at spearsjonesco@gmail.com.");
   });

}
 