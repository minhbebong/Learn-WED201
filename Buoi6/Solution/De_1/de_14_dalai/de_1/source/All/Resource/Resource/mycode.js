function checkForm() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    if (username.value == '') {
        alert('username is invalid');
    } else if (password.value == '') {
        alert('password is invalid')
    } else {
        alert('Welcome ' + username.value+',' + '\n' + 'We will respond to you as soon as posible')
    }
}
