function validation() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var subject = document.getElementById("subject").value;
    var emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (fname === '' || emailAddress === '') {
        alert("Please fill all fields...!!!!!!");
        return false;
    } else if (!(emailAddress).match(emailReg)) {
        alert("Invalid Email...!!!!!!");
        return false;
    } else {
        return true;
    }
}



function submitContactForm() {
    // Gets a reference to the form element
    var form = document.getElementById('contactForm');
    // Adds a listener for the "submit" event.
    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });
    var contact_reason = document.getElementById("contact_reason").value;
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var emailAddress = document.getElementById("emailAddress").value;
    var subject = document.getElementById("subject").value;
    var contact_send_promo = document.getElementById("contact_send_promo").value;
    if (validation()) // Calling validation function
    {
        alert(" Contact Reason : " + contact_reason + " \n Name : " + fname + "," + lname + " \n Email : " + emailAddress + " \n Email : " + emailAddress + " \n subject : " + subject + " \n Send Promotions : " + contact_send_promo + " \n Form Id : " + document.getElementById("contactForm").getAttribute("id") + "\n Form Submitted Successfully......");
        var contactForm = contact_reason + " " + fname + " " + lname + " " + emailAddress + " " + subject + " " + contact_send_promo;
        window.localStorage.setItem("contactForm", JSON.stringify(contactForm));
    }
}
