function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Regex do walidacji emaila
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Regex do walidacji hasła
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Walidacja CAPTCHA
    const captchaResponse = grecaptcha.getResponse();
    if (captchaResponse.length === 0) {
        alert("Potwierdź, że nie jesteś robotem!");
        return false;
    }

    // Walidacja emaila
    if (!emailPattern.test(email)) {
        alert("Proszę wprowadzić poprawny adres e-mail.");
        return false;
    }

    // Walidacja hasła
    if (!passwordPattern.test(password)) {
        alert("Hasło musi zawierać co najmniej 8 znaków, w tym 1 literę, 1 cyfrę i 1 znak specjalny.");
        return false;
    }

    alert("Formularz przesłany pomyślnie!");
    return true; // Formularz przechodzi walidację
}