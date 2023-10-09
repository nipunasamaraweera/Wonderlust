

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const contactNumberInput = document.getElementById("contactNumber");
    const startDateInput = document.getElementById("startDate");
    const endDateInput = document.getElementById("endDate");

    emailInput.addEventListener("blur", function () {
        validateEmail(emailInput);
    });

    contactNumberInput.addEventListener("blur", function () {
        validateContactNumber(contactNumberInput);
    });


    // Get references to the input fields, total, and error message elements
    const adultsInput = document.getElementById('adults');
    const teensInput = document.getElementById('teens');
    const kidsInput = document.getElementById('kids');
    const totalElement = document.getElementById('total');
    const totalError = document.getElementById('total-error');


    const startDateError = document.getElementById("startDate-error");
    const endDateError = document.getElementById("endDate-error");
    const today = new Date(); // Get the current date


    // Add blur event listeners to input fields for validation
    adultsInput.addEventListener('blur', updateTotalAndValidate);
    teensInput.addEventListener('blur', updateTotalAndValidate);
    kidsInput.addEventListener('blur', updateTotalAndValidate);

    // Function to update the total and perform validation
    function updateTotalAndValidate() {
        const adultsValue = parseInt(adultsInput.value) || 0;
        const teensValue = parseInt(teensInput.value) || 0;
        const kidsValue = parseInt(kidsInput.value) || 0;

        const total = adultsValue + teensValue + kidsValue;

        // Update the total display
        totalElement.textContent = `Total: ${total}`;

        // Check for validation errors
        if (total <= 0) {
            totalError.textContent = 'Total must be greater than 0.';
        } else {
            totalError.textContent = ''; // Clear the total error message
        }

        if (adultsValue < 0 || teensValue < 0 || kidsValue < 0) {
            totalError.textContent = 'All fields must be non-negative.';
        }

        if (adultsValue < 1 && (teensValue > 0 || kidsValue > 0)) {
            totalError.textContent = 'To add Kids or Teens you need to add adults ';
        } else {
            totalError.textContent = ''; // Clear the total error message
        }
    }



    startDateInput.addEventListener("blur", function () {
        const startDate = new Date(startDateInput.value);

        // Check if the entered date is a past date or today
        if (startDate < today) {
            startDateError.textContent = "Start date must be today or a future date.";
            startDateInput.value = ""; // Clear the input field
        } else {
            startDateError.textContent = ""; // Clear the error message
        }
    });

    endDateInput.addEventListener("blur", function () {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);

        // Check if the end date is a past date or before the start date
        if (endDate <= today || endDate < startDate) {
            endDateError.textContent = "End date must be a future date and later than the start date.";
            endDateInput.value = ""; // Clear the input field
        } else {
            endDateError.textContent = ""; // Clear the error message
        }
    });


    function validateEmail(emailInput) {
        const email = emailInput.value;
        const emailError = document.getElementById("email-error");

        if (!validateEmailFormat(email)) {
            emailError.textContent = "Invalid email address";
            emailInput.classList.remove("is-valid");
            emailInput.classList.add("is-invalid");
        } else {
            emailError.textContent = "";
            emailInput.classList.remove("is-invalid");
            emailInput.classList.add("is-valid");
        }
    }

    function validateContactNumber(contactNumberInput) {
        const contactNumber = contactNumberInput.value;
        const contactNumberError = document.getElementById("contactNumber-error");

        if (!validateContactNumberFormat(contactNumber)) {
            contactNumberError.textContent = "Invalid contact number";
            contactNumberInput.classList.remove("is-valid");
            contactNumberInput.classList.add("is-invalid");
        } else {
            contactNumberError.textContent = "";
            contactNumberInput.classList.remove("is-invalid");
            contactNumberInput.classList.add("is-valid");
        }
    }


    function validateEmailFormat(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validateContactNumberFormat(contactNumber) {

        const contactNumberPattern = /^\d{10}$/;
        return contactNumberPattern.test(contactNumber);
    }

    

    
});


