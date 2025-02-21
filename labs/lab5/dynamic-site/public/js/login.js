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

    if (!response.ok) {
        const body = await response.json();
        const message = document.getElementById('message');
        message.style.color = 'red';
        message.innerHTML = body.message;
    } else {
        const body = await response.text();
        document.body.innerHTML = body;
        window.history.pushState('', 'Title', '/private');
    }
});
