export function addFormAsJsonListener(formId, successCallback) {
  document.getElementById(formId).addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data.password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", dataBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    data.password = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if(response.ok) {
        successCallback()
      } else {
        console.log("Failed to log in")
      }
    } catch (err) {
      console.error(err);
    }
  });
}
