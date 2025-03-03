document
  .getElementById("loginForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const jsonData = Object.fromEntries(formData.entries());

    console.log("Sending: ", jsonData);

    const response = await fetch(form.action, {
      method: form.method,
      body: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const body = await response.json();
      const message = document.getElementById("message");
      message.style.color = "red";
      message.innerHTML = body.message;
    } else {
      const body = await response.text();
      const topic = response.headers.get("X-User-Topic");
      localStorage.setItem("topic", topic);
      document.body.innerHTML = body;
      window.history.pushState("", "Title", "/private");
      if (topic === "html") {
        document.getElementById("html").style.zIndex = "100";
      } else if (topic === "css") {
        document.getElementById("css").style.zIndex = "100";
      } else if (topic === "js") {
        document.getElementById("js").style.zIndex = "100";
      }

      const date = new Date();
      document.getElementById("time").innerHTML = date;


      navigator.geolocation.getCurrentPosition(
        (position) => {
          document.getElementById('latitude').innerHTML = position.coords.latitude;
         document.getElementById('longitude').innerHTML = position.coords.longitude;
        },
        (error) => {
          console.error("Error getting location:", error.message);
          document.getElementById('latitude').innerHTML = error.message;
        }
      );
    }
  });
