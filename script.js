const pass = document.getElementById("password");
const confirmation = document.getElementById("confirm");
const btn = document.querySelector("button") ;
const form = document.querySelector("form");
const small = form.querySelector('small');




form.addEventListener('submit',(event) => {


    event.preventDefault();


    if (pass.value !== confirmation.value) {


        pass.classList.add('error') ;
        confirmation.classList.add('error') ;
        small.textContent = "*Password do not match";
    }
    else {
        pass.classList.remove('error') ;
        confirmation.classList.remove('error')  ;
        small.textContent = "" ;
    }
});

