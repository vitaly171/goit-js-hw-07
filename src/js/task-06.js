const input = document.querySelector("#validation-input");

const validateInput = () => {
        if (input.value.length !== Number(input.dataset.length))
        {
           input.classList.add("invalid");
    }
    
    input.classList.add("valid");
}

const removeValidationResult = () =>{
     input.classList.remove("valid", "invalid");
}

input.addEventListener("blur", validateInput);
input.addEventListener("focus", removeValidationResult);

