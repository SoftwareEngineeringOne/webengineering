document.getElementById('registerForm').addEventListener('submit', async (event) => {
    event.preventDefault(); // Verhindert das Standardverhalten des Formulars

    const form = event.target;
      const formData = new FormData(form);

    const response = await fetch(form.action, {
        method: form.method,
        body: JSON.stringify(formData),
      });

    const body = await response.json();

    if(!response.ok) {
        const message = document.getElementById('message');
        message.style.color = 'red';
        message.textContent = body.message;
    }

});
