function checkEmptyFieldEntry(fieldId, fieldName, minLength) {
    var fieldValue = document.getElementById(fieldId).value.trim();  // Trim to avoid white spaces
    if (!fieldValue || fieldValue.length < minLength) {
        alert("Please enter a valid " + fieldName + ".");
        document.getElementById(fieldId).focus();
        return false;
    }
    return true;
}

// Function to validate the form
function validateForm() {
    // Get the form fields
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const course = document.getElementById("course").value;
    const year = document.getElementById("year").value;
    const gpa = document.getElementById("gpa").value;

    // Check if all required fields are filled
    if (!firstName) {
        alert("Please enter your first name.");
        document.getElementById("firstName").focus();
        return false;
    }
    if (!lastName) {
        alert("Please enter your last name.");
        document.getElementById("lastName").focus();
        return false;
    }
    if (!gender) {
        alert("Please select your gender.");
        return false;
    }
    if (!dob) {
        alert("Please enter your date of birth.");
        document.getElementById("dob").focus();
        return false;
    }
    if (!email || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        document.getElementById("email").focus();
        return false;
    }
    if (!phone || !validatePhone(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        document.getElementById("phone").focus();
        return false;
    }
    if (!address) {
        alert("Please enter your address.");
        document.getElementById("address").focus();
        return false;
    }
    if (!studentId) {
        alert("Please enter your student ID.");
        document.getElementById("studentId").focus();
        return false;
    }
    if (!course || course === "") {
        alert("Please select your course.");
        document.getElementById("course").focus();
        return false;
    }
    if (!year || year === "") {
        alert("Please select your year of study.");
        document.getElementById("year").focus();
        return false;
    }
    if (!gpa || gpa < 0 || gpa > 10) {
        alert("Please enter a valid GPA between 0 and 10.");
        document.getElementById("gpa").focus();
        return false;
    }

    alert("Form submitted successfully.");
    return true;
}

// Email validation function
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// Phone number validation function (10 digits)
function validatePhone(phone) {
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
}
