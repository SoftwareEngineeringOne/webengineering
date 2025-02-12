//import * as fs from "fs";
import fs from 'fs';

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const user = {
        firstname : document.getElementById('first-name').value,
        lastname : document.getElementById('last-name').value,
        username : document.getElementById('username').value,
        password : document.getElementById('password').value,
        gender : document.getElementsByName('gender').value,
        topic : document.getElementById('topic').value,
        comment : document.getElementById('comment').value,
        conditions_accepted : document.getElementById('conditions').checked,
    }

    const message = document.getElementById('message');

    message.textContent = '';

    regex = /[^A-Za-z0-9-_]/;
    if (regex.test(user.firstname) || regex.test(user.lastname) || regex.test(user.username)) {
        message.style.color = 'red';
        message.append('Eines der oberen drei Eingabefelder enthält ungültige Sonderzeichen. ');
    }

    regex = /[!#_,+\-?]/;
    if (!regex.test(user.password)) {
        message.style.color = 'red';
        message.append('Passwort enthält keines der folgenden Zeichen: !#,+-_?. ');
    }

    regex = /[0-9]/;
    if (!regex.test(user.password)) {
        message.style.color = 'red';
        message.append('Passwort enthält keine Zahl. ');
    }

    if (!(user.conditions_accepted == true)) {
        message.style.color = 'red';
        message.append('Nutzungsbedingungen nicht akzeptiert. ');
    } 

    const data = JSON.stringify(user);

    
    FileSystem.writeFileSync("data.json", data);
    
});
