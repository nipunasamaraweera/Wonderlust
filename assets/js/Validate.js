

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

    // startDateInput.addEventListener("blur", function () {
    //     validateDates();
    // });

    // endDateInput.addEventListener("blur", function () {
    //     validateDates();
    // });
    

    // adultsInput.addEventListener("blur", function () {
    //     calculateTotalTravelers();
    // });

    // teensInput.addEventListener("blur", function () {
    //     calculateTotalTravelers();
    // });

    // kidsInput.addEventListener("blur", function () {
    //     calculateTotalTravelers();
    // });

    // function calculateTotalTravelers() {
    //     const adults = parseInt(adultsInput.value) || 0;
    //     const teens = parseInt(teensInput.value) || 0;
    //     const kids = parseInt(kidsInput.value) || 0;
    //     const total = adults + teens + kids;
    //     totalTravelersSpan.textContent = total;
    // }

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

    // function validateDates() {
    //     const startDate = new Date(startDateInput.value);
    //     const endDate = new Date(endDateInput.value);
    //     const dateError = document.getElementById("date-error");

    //     if (isNaN(startDate.getTime()) || isNaN(endDate.getTime()) || startDate > endDate) {
    //         dateError.textContent = "Invalid date range";
    //         startDateInput.classList.remove("is-valid");
    //         startDateInput.classList.add("is-invalid");
    //         endDateInput.classList.remove("is-valid");
    //         endDateInput.classList.add("is-invalid");
    //     } else {
    //         dateError.textContent = "";
    //         startDateInput.classList.remove("is-invalid");
    //         startDateInput.classList.add("is-valid");
    //         endDateInput.classList.remove("is-invalid");
    //         endDateInput.classList.add("is-valid");
    //     }
    // }

    function validateEmailFormat(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validateContactNumberFormat(contactNumber) {
       
        const contactNumberPattern = /^\d{10}$/;
        return contactNumberPattern.test(contactNumber);
    }
});
