$(document).ready(function () {

    function populateCountries() {
        let countrySelect = $("#country");
        for (let i = 0; i < countries.length; i++) {
            countrySelect.append(`<option value=${countries[i].code}>${countries[i].name}</option>`);
        }
        console.log(countries);
    }

    populateCountries();

    function checkFormValidity() {
        let username = $("#username").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        let termsCheckbox = $("#termsCheckbox").prop("checked");
        let country = $("#country").val();

        let isFormValid = (username !== "" && password.length >= 12 && password === confirmPassword && termsCheckbox && country !== "");

        $("#submitButton").prop("disabled", !isFormValid);
    }

    function submitForm(event) {
        event.preventDefault();
        console.log('Submit button clicked');

        
        let username = $("#username").val();
        
        let country = $("#country").val();

        let    welcomeMessage = "Welcome    " + username + "! The Country you selected is " + country;

        $("#welcomeMessage").text(welcomeMessage).show();
    }

    $("#username, #password, #confirmPassword, #termsCheckbox, #country").on("input change", function () {
        checkFormValidity();
    });

    $("#registrationForm").submit(function (event) {
        submitForm(event);
    });
});
