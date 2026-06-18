// |=========================NAVIGATION=========================|
const hamButton = document.querySelector("#ham-btn");
const navLink = document.querySelector("#navigation");

hamButton.addEventListener('click',() =>{
    hamButton.classList.toggle('show');
    navLink.classList.toggle('show');
});