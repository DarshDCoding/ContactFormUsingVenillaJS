console.log("Radhe Radhe....")

const firstName= document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const termCheck = document.getElementById("term-agree");
const form = document.getElementById("main-form")
let query;
const queryError = document.getElementById("query-error")
const generalType = document.getElementById("general-query-container");
const supportType = document.getElementById("support-request-container");
const radioInputs = document.querySelectorAll(".radio-options");

// Function to handle radio button selection
radioInputs.forEach((input) => {
    input.addEventListener("change", () => {
        if (input.value === "general") {
            generalType.classList.add("active-check");
            supportType.classList.remove("active-check");
        } else if (input.value === "support") {
            supportType.classList.add("active-check");
            generalType.classList.remove("active-check");
        }
    });
});

//validating form
form.addEventListener("submit", (e)=>{
    e.preventDefault()
        if (form.checkValidity()){
        const toster= document.getElementById("toster");
        toster.classList.add("appear")
        setTimeout(()=>{
            toster.classList.remove("appear")
            form.reset()
        },2000);


    } else{
        const elementList = [firstName, lastName, email, message]
        // const allElements = [firstName, lastName, email, message, query, ]
        elementList.forEach(element =>{
            const error= element.nextElementSibling;
            if (!element.checkValidity()){
                element.style.borderColor = "var(--primary-red)";
                error.innerText = element.validationMessage;
            }
            else{
                element.style.borderColor = "var(--neutral-gray-dark)";
                error.innerText = "";
            }
        });
        try{
            query = document.querySelector('input[name="query-type"]:checked').value;
            queryError.innerText = ""
        }
        catch (error){
            queryError.innerText = "This field is required"
        }
        const termError= document.getElementById("term-error")
        try{
            document.querySelector('input[name="term-agree"]:checked').value;
            termError.innerText = ""
        }catch (error){
            termError.innerText = "To submit this form, please consent to being contacted"
        };
    }
})
