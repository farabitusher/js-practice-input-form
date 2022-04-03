document.getElementById('submit-btn').addEventListener('click', function () {
    console.log("click");
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    if (userEmail == 'farabi@gmail.com' && userPassword == 'hio') {
        console.log('valid user');
        window.location.href = 'banking.html';
    }
})
