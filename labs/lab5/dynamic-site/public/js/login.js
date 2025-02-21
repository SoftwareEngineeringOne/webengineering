document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const jsonData = Object.fromEntries(formData.entries());

    console.log("Sending: ", jsonData);

    const response = await fetch(form.action, {
        method: form.method,
        body: JSON.stringify(jsonData),
        headers: {
            "Content-Type": "application/json"
        }
    });

    const body = await response.json();

    const message = document.getElementById('message');

    if (!response.ok) {
        message.style.color = 'red';
        message.innerHTML = body.message;
    } else {
        window.location.href = body.url;
    }

});
