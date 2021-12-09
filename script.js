const navOpen = document.querySelector("#closed");
const themeOpen = document.querySelector("#close");
const navButtonClick = document.querySelector("#navButton");
const themeButtonClick = document.querySelector("#themeButton");
const titleWebsite = document.querySelector("#titleContainer");
const NavButtonIconChanger = document.querySelector("#navButtonIcon")
let count = "";

navButtonClick.addEventListener("click", function () {
  navOpen.classList.toggle("opened");
  navOpen.classList.toggle("closed");
  titleWebsite.classList.toggle("opened");
  titleWebsite.classList.toggle("closed");
  count++;

  if (count === 1) {
      NavButtonIconChanger.className = "fas fa-times";
  }

  else {
    NavButtonIconChanger.className = "fas fa-bars";
    count = 0;
  }
});

themeButton.addEventListener("click", function () {
  themeOpen.classList.toggle("open");
  themeOpen.classList.toggle("close");
  titleWebsite.classList.toggle("opened");
  titleWebsite.classList.toggle("closed");
  
});

$(document).ready(function () {


  $('.submit').click(function (event) {    

    const email = $('.email').val()
    const subject = $('.subject').val()
    const message = $('.message').val()
    const CatElm = $('.status')

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
        
      CatElm.append('<div> email is Valid</div>')
      
    } else {
      event.preventDefault()
      CatElm.append('<div> email is not Valid</div>')

    }
    if (subject.length > 5) {
        
      CatElm.append('<div>Subject is Valid</div>')
      
    } else {
      event.preventDefault()
      CatElm.append('<div>Subject is not Valid</div>')
    }

    if (message.length > 5) {
        
      CatElm.append('<div>Message length is Valid</div>')
      
    } else {
      event.preventDefault()
      CatElm.append('<div>Message length is not Valid</div>')
    }
  })
})