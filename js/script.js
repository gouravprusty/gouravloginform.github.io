const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.loginLink');
const registerLink = document.querySelector('.registerLink');
const btnPopup = document.querySelector('.btnLoginPopup');
const closeIcon = document.querySelector('.closeIcon');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('activePopup');
});

closeIcon.addEventListener('click', ()=> {
    wrapper.classList.remove('activePopup');
});