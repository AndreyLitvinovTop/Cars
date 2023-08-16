// Главная страница 
var menu = document.querySelector('.menu');
var header_content = document.querySelector('.header-content');
var header_button = document.querySelector('.header-button');

if (window.scrollY  >= 0){
   menu.classList.add('scroll-right'); 
   header_content.classList.add('scroll-left'); 
   header_button.classList.add('scroll-right'); 
}

// Информация о сервесе
var services_content = document.querySelector('.services-content');
var diagnostic = document.querySelector('.diagnostic-block');
var wheels = document.querySelector('.wheels-block');
var engines = document.querySelector('.engines-block');

var understand = document.querySelector('.understand');
var understand_content = document.querySelector('.understand-content');
var understand_image = document.querySelector('.understand-image');

// Связь с сервесом
var contacts = document.querySelector('.contacts');
var inputs_name = document.querySelector('.inputs-name');
var inputs_contact = document.querySelector('.inputs-contact');
var input_message = document.querySelector('.input-message');

window.addEventListener('scroll', function(){
   if (window.scrollY >= services_content.getBoundingClientRect().y){
      diagnostic.classList.add('scroll-bottom');
      wheels.classList.add('scroll-top');
      engines.classList.add('scroll-bottom');
   }

   if(window.scrollY >= understand.getBoundingClientRect().y){
      understand_content.classList.add('scroll-left');
      understand_image.classList.add('scroll-right');
   }

    if(window.scrollY >= contacts.getBoundingClientRect().y){
      inputs_name.classList.add('scroll-right');
      inputs_contact.classList.add('scroll-left');
      input_message.classList.add('scroll-top');
    }
});