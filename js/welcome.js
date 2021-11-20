let welcomeText = document.getElementById('welcomeText');
const modal = document.getElementById('welcomeModal');
const form = document.getElementById('welcomeForm');
const closebutton = document.getElementById('closeLogo');
$('#welcomeForm').submit((e)=>{
    e.preventDefault();
    const formdata = new FormData(form);
    const email = formdata.get('email');
    if(email){
        console.log(email)
        localStorage.setItem('email',email);
        modal.classList.remove('welcomeModalActive');
    }
});
$('#closeLogo').click(()=>{
    modal.classList.remove('welcomeModalActive');
})

$('document').ready(()=>{
    const email = localStorage.getItem('email');
    if(!email){
        modal.classList.add('welcomeModalActive');
    }
    else{
        const userArr = email.split('@');
        const username = userArr[0];
        if(email && userArr.length>1){
            welcomeText.innerText= `Welcome ${username} to LeHomme! Check your email for your coupon code`
        }
    }
});

$('header').on('mouseenter',()=>{
    $('header').css({"background-color": "rgba(209, 209, 209, 0.548)"});
   
  });
  $('header').on('mouseleave',()=>{
    $('header').css({"background-color": "transparent"});

  });