const input = document.querySelector("#validation-input");

function validateInput() {
        if (input.value.length !== Number(input.dataset.length))
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

