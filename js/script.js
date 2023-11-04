const form = document.querySelector('#newsletter-form');
const email = document.getElementById('mail');
const errorMessage = document.getElementById('email-error');
const content = document.querySelector('#content');
const success = document.getElementById('success');
const dismissBtn = success.querySelector('#dismissBtn');



email.addEventListener('input', ()=>{
    if(email.validity.valid) {
        errorMessage.textContent='';
        errorMessage.className='error';
        email.style.border = '1px solid green'; //set the border to green on valid input
        email.style.color = ''; // reset text color
        email.style.backgroundColor = ''; 
        
    }else{
        showError();
    }
});

form.addEventListener('submit', (e) => {
    if (email.value.trim() === '' || !email.validity.valid) {
        errorMessage.textContent = 'please enter your email';
        showError();
        e.preventDefault();
    }else{
        showSuccess(email.value);
        content.style.display = 'none';
        success.style.display = "block";
        
       
    }
});


function showError() {
    if (email.validity.valueMissing){
        errorMessage.textContent = "You need to enter an email address";
    }else if (email.validity.typeMismatch){
        errorMessage.textContent = "valid email required";
    }else if (email.validity.patternMismatch){
        errorMessage.textContent = "please you need to enter valid email address";
    } 
    errorMessage.className = "error active";
    email.style.border = "1px solid tomato";
    errorMessage.style.color = "tomato";  
    email.style.color= "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(4, 100%, 97%)";  
    
}


function showSuccess(userEmail) {
    success.innerHTML = `<div class=" bg-white md:w-[400px]  px-6 md:px-10  md:rounded-xl font-sans min-h-screen md:min-h-0 flex flex-col justify-between">
    <div class="mt-16 md:mt-7">
        <img src="/assets/images/icon-list.svg" alt="" class="w-9">
        <h2 class="text-4xl my-4 font-700">Thanks For Subscribing!</h2>
        <p>A confirmation email has been sent to <b>${userEmail}</b> Please open it and click the button inside to confirm your subscription.</p>
    </div>
    <button id="dismissBtn" class="text-white bg-darkSlateGrey px-3 hover:bg-tomato hover:shadow-2xl hover:shadow-tomato py-2 rounded-md md:mt-6 mb-5 md:mb-7 w-full">Dismiss message</button>             
</div>`;

// Reassign the dismissBtn variable to the new button within the success message
dismissB = success.querySelector('#dismissBtn');

// Attach the event listener to the new dismissBtn
dismissB.addEventListener('click', function () {
    success.style.display = 'none';
});
};


