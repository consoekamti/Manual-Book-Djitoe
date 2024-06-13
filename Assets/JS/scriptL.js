/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) =>{
    const input = document.getElementById(loginPass),
          iconEye = document.getElementById(loginEye)
 
    iconEye.addEventListener('click', () =>{
       // Change password to text
       if(input.type === 'password'){
          // Switch to text
          input.type = 'text'
 
          // Icon change
          iconEye.classList.add('ri-eye-line')
          iconEye.classList.remove('ri-eye-off-line')
       } else{
          // Change to password
          input.type = 'password'
 
          // Icon change
          iconEye.classList.remove('ri-eye-line')
          iconEye.classList.add('ri-eye-off-line')
       }
    })
 }
 
 showHiddenPass('password','login-eye')


 /*=============== Move Page ===============*/
 const form = document.querySelector("form")
 const wrong = document.getElementById("wrong")

 form.addEventListener("submit",(e)=>{
     e.preventDefault()
 
     const username = form.username.value
     const password = form.password.value
 
     const authenticated = authentication(username,password)
 
     if(authenticated){
         window.location.href = "Downloadable.html"
         document.getElementById("wrong").style.display= "none";
     }else{
         document.getElementById("wrong").style.display= "flex";
     }
 })
 
 // function for checking username and password
 
 function authentication(username,password){
     if(username === "admin" && password === "manualbookdjitoe"){
         return true
     }else{
         return false
     }
 }