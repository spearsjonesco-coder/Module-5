// 
// 
// 
const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');

console.log(loading, scussess);

function contact(event) {
   event.preventDefault();
   console.log("it worked")

loading.classlist += " modal__overlay--visible"
  setTimeout(() => {
   console.log('it worked 1')
  }, 500);

  // emailjs
 //  .sendForm(
 //     'service_7usrhpq',
 //     'template_jmjmjt8',
 //     event.target,
 //     '02HiRZLm8_5pZurip',
 //  ).then(() => {
  //    console.log('this worked1')
  // })
 



}