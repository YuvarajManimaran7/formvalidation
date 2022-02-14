document.querySelector('.myform').addEventListener('submit',(event) => {
    let validation = document.getElementById('password').value
    let validation2 = document.getElementById('password2').value
    let username = document.getElementById('username').value
    //event.preventDefault()
    if((validation === validation2) && (validation.includes(123456789 && ('@'))) && (username.includes('@gmail.com')))
    {
            alert("Sign Up Successfully");
    }
    else
    {
        alert("UserName or Password Missmatched");
    } 
    event.target.username.value = ''
    event.target.password.value = ''
    event.target.password2.value = ''
})
