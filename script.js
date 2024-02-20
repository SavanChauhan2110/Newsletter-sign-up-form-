let inputEmail = document.querySelector(".Input");
let subBtn = document.querySelector("#formSubmit");
let btn = document.querySelector(".button1");

let dismissBtn = document.querySelector("#dismiss");

console.log(dismissBtn);


subBtn.addEventListener("submit", (event) => {
    event.preventDefault();
    // console.log("savan chauhan is submited");
    let inputvalue = inputEmail.value;

    let isEmailValid = validationEmail(inputvalue);

    if (isEmailValid) {
        console.log(inputvalue);
        window.location.href = "index2.html?email=" + encodeURIComponent(inputvalue);
        let resMess = document.querySelector("#respons");
        resMess.innerText = `${inputvalue}`
        // subBtn.disabled = true; 
    }
    else{
       alert("Enter the valid Email");
      
    }
});

function validationEmail(inputvalue) {
    // Regular expression for validating email
    const expre = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expre.test(inputvalue);
}











