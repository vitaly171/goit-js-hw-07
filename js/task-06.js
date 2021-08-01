const input = document.querySelector("#validation-input");

const inputValidation = Number(input.dataset.length);

function validateInput() {
        if (input.value.length !== inputValidation)
        {
           input.classList.add("invalid");
    }
    
    input.classList.add("valid");
}

function removeValidationResult () {
     input.classList.remove("valid", "invalid");
}

input.addEventListener("blur", validateInput);
input.addEventListener("focus", removeValidationResult);

