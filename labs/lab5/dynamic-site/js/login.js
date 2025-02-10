document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');

    // Einfache Validierung
    if (username === 'admin' && password === 'passwort') {
        message.style.color = 'green';
        message.textContent = 'Erfolgreich eingeloggt!';
    } else {
        message.style.color = 'red';
        message.textContent = 'Ungültiger Benutzername oder Passwort.';
    }
});