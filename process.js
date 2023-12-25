function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernameRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isUsernameValid = usernameRegex.test(username);

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]+$/;
    const isPasswordValid = passwordRegex.test(password);

    document.getElementById('usernameError').textContent = isUsernameValid ? '' : 'Enter a valid username';
    document.getElementById('passwordError').textContent = isPasswordValid ? '' : 'Password must contain an uppercase letter, a number, and only @ as a special character';

    if (isUsernameValid && isPasswordValid) {
        if (password === 'SmartServTest@123') {
            window.location.href = 'homepage.html';
        } else {
            alert('Incorrect password. Please try again.');
        }
    }
}