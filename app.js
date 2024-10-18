function checkEmptyFieldEntry(fieldId, fieldName, minLength) {
    var fieldValue = document.getElementById(fieldId).value;
    if (!fieldValue || fieldValue.length < minLength) {
        alert("Please enter a valid " + fieldName + ".");
        document.getElementById(fieldId).focus();
        return false;
    }
    return true;
}

function validateForm() {
    var frm = document.forms['frmLogin'];

    // Check for empty fields
    if (checkEmptyFieldEntry("firstName", "First Name", 1) == false) return false;
    if (checkEmptyFieldEntry("lastName", "Last Name", 1) == false) return false;
    if (checkEmptyFieldEntry("gender", "Gender", 1) == false) return false; // Gender will need special handling
    if (checkEmptyFieldEntry("dob", "Date of Birth", 1) == false) return false;
    if (checkEmptyFieldEntry("email", "Email Address", 5) == false) return false;
    if (checkEmptyFieldEntry("phone", "Phone Number", 10) == false) return false;
    if (checkEmptyFieldEntry("address", "Address", 1) == false) return false;
    if (checkEmptyFieldEntry("studentId", "Student ID", 1) == false) return false;
    if (checkEmptyFieldEntry("course", "Course", 1) == false) return false;
    if (checkEmptyFieldEntry("year", "Year", 1) == false) return false;
    if (checkEmptyFieldEntry("gpa", "GPA", 1) == false) return false;

    // Additional checks can be added as needed
    // Example: Check gender
    var gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert("Please select your gender.");
        return false;
    }

    // Example: Check for maximum length of any specific field (e.g., address)
    if (frm.address.value.length > 255) {
        alert("Address cannot exceed 255 characters.");
        frm.address.focus();
        return false;
    }

    // Indicate that JS is enabled (if needed)
    frm.hdnIsJSEnabled.value = "True";

    alert("Form submitted successfully.");
    return true;
}
