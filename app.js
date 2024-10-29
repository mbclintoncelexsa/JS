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
    const firstName = document.getElementById("txtFirstName").value.trim();
    const lastName = document.getElementById("txtLastName").value.trim();
    const gender = document.querySelector('input[name="gender"]:checked');
    const dob = document.getElementById("dteDob").value;
    const email = document.getElementById("txtEmail").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("txtAddress").value.trim();
    const studentId = document.getElementById("txtStudentId").value.trim();
    const course = document.getElementById("ddlCourse").value;
    const year = document.getElementById("ddlYear").value;
    const gpa = document.getElementById("gpa").value;

    // Check if all required fields are filled
    if (!firstName || firstName.length < 3 || firstName.length > 50) {
        alert("Please enter your first name (3 to 50 characters).");
        document.getElementById("txtFirstName").focus();
        return false;
    }
    if (!lastName || lastName.length < 3 || lastName.length > 50) {
        alert("Please enter your last name  (3 to 50 characters.");
        document.getElementById("txtLastName").focus();
        return false;
    }
    if (!gender) {
        alert("Please select your gender.");
        return false;
    }
    // Check if DOB is provided
if (!dob) {
    alert("Please enter your date of birth.");
    document.getElementById("dteDob").focus();
    return false;
}

    // Check if DOB is in the future
    const dobDate = new Date(dob);
    const today = new Date();
    if (dobDate > today) {
        alert("Date of birth cannot be in the future.");
        document.getElementById("dteDob").focus();
        return false;
    }


    {// Calculate age
    const age = today.getFullYear() - dobDate.getFullYear();
    const monthDifference = today.getMonth() - dobDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }

    // Check if age is less than 16
    if (age < 16) {
        alert("You must be at least 16 years old.");
        document.getElementById("dteDob").focus();
        return false;
    }

    }
    if (!email || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        document.getElementById("txtEmail").focus();
        return false;
    }
    if (!phone || !validatePhone(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        document.getElementById("phone").focus();
        return false;
    }
    if (!address) {
        alert("Please enter your address.");
        document.getElementById("txtAddress").focus();
        return false;
    }
    // Check student ID length and character restrictions
    if (!studentId || studentId.length < 3 || studentId.length > 10) {
        alert("Please enter a valid student ID (3 to 10 characters, alphanumeric).");
        document.getElementById("txtStudentId").focus();
        return false;
    }   

    if (!course || course === "") {
        alert("Please select your course.");
        document.getElementById("ddlCourse").focus();
        return false;
    }
    if (!year || year === "") {
        alert("Please select your year of study.");
        document.getElementById("ddlYear").focus();
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
