// TODO: Create toggleMenu()
function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

// TODO: Create sendEmail()
function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "hbre0004@student.monash.edu",
        Password: "password",
        To: "hbre0004@student.monash.edu",
        From: email,
        Subject: `New Website Enquiry from ${name}
        `,
        Body: message
    }).then(function (message) {
        // Reset form after successful submission
        alert("Email sent successfully!");
    });
}

// TODO: Create reset()