/* hamburger menu */
const hamburgerMenuCheckbox = document.querySelector('.hamburger-menu input[type="checkbox"]');
const bootstrap2Links = document.querySelectorAll('.bootstrap2 a');

bootstrap2Links.forEach(link => {
  link.addEventListener('click', () => {
    hamburgerMenuCheckbox.checked = false;
  });
});


// function sendEmail() {
//   Email.send({
//     Host: "smtp.gmail.com",
//     Username: "sd.designyourstyle+elasticemail@gmail.com",
//     Password: "0465DYS0465",
//     To: 'sd.designyourstyle+elasticemail@gmail.com',
//     From: document.getElementById("form-email").value,
//     Subject: "New Contact Form Enquiry",
//     Body: "Name: " + document.getElementById("form-name").value + 
//           "<br> Last Name: " + document.getElementById("form-name-last").value +
//           "<br> Email: " + document.getElementById("form-email").value +
//           "<br> Message: " + document.getElementById("form-message").value
//   }).then(
//     message => alert(message)
//   );
// }