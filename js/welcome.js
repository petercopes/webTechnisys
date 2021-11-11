let welcomeText = document.getElementById('welcomeText');
function requestUserEmail(){
    const userEmail = prompt('Welcome to Le Homme! Please insert your email to subscribe and get a 10% discount code or leave it blank.');
    alert(`Valor ingresado: ${userEmail}`);
    return userEmail;
}
document.addEventListener('DOMContentLoaded',()=>{
    const subscriberEmail  = requestUserEmail();
    const userArr = subscriberEmail.split('@');
    const username = userArr[0];
    if(subscriberEmail && userArr.length>1){
        welcomeText.innerText= `Welcome ${username} to LeHomme! Check your email for your coupon code`
    }
})
