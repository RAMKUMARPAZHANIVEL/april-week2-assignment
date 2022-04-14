const nameelement =document.getElementById('fullname')
const emailid =document.getElementById('email')
const password =document.getElementById('password')
const confirmpassword =document.getElementById('confirmpassword')
const submitbutton =document.getElementById('submitbutton')
const small = document.getElementById('smallvalue')
const passcheck = document.getElementsByClassName('charcheck')

const entireForm =document.querySelector('form')


entireForm.addEventListener('submit', resultcalc)

function resultcalc(e){
    e.preventDefault()
    
    if(nameelement.value ===""){
        nameelement.classList='error'  
        console.log('not entered')
        small.classList='display'
    }else {
        nameelement.classList='success'
    console.groupCollapsed('entered')
    }

    if(password.value === ""){
        password.classList='error'
    }else{
        password.classList='success'
    }

    if(confirmpassword.value === ""){
        confirmpassword.classList='error'
    }else{
        confirmpassword.classList='success'
    }
    
    const passwordcondition = [ '@','#','$']
    let count = 0;
    for(let i=0; i<passwordcondition.length; i++){
        if(password.value.includes(passwordcondition[i]) === false)
        count++
    }
    if (count == passwordcondition.length){
        
        passcheck.classList='display'
    }else{
        confirmpassword.classList='success'
    }

}