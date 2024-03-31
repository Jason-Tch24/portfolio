const email = document.getElementById('email')
const massege = document.getElementById('message')

Email.send({
    SecureToken : "4eba4c44-fb73-4c2a-9718-01a0fcff690b",
    To : 'tchagacaleb@gmail.com',
    From : email,
    Subject : "Contacte for a job",
    Body : message
}).then(
  message => alert(message)
);