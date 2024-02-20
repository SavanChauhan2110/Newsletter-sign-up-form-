let dismissBtn = document.querySelector("#dismiss");

let responsMess = document.querySelector("#response")


const queryString = window.location.search;
console.log(queryString);
// ?product=shirt&color=blue&newuser&size=m
const urlParams = new URLSearchParams(queryString);

const emailAdd = urlParams.get('email')
console.log(emailAdd);

responsMess.innerText = `A confirmation email has been sent to
${emailAdd} Please open it and click the button inside to confirm your subscription.`


dismissBtn.addEventListener("click" , () =>{
    console.log("dismiss is cliked")
    window.location.href = "index.html"
})
