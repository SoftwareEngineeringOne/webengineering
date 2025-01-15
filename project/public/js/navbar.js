console.log("navbar.js script loaded");

const response = await fetch("/api/session/validate", {
  method: "GET",
  credentials: "include",
});

if (!response.ok) {
  console.log("Not logged in!");
} else {
  const user = await response.json();
  console.log(`User ${user.username} is logged in`);

  document.querySelectorAll(".auth-required").forEach((el) => {
    el.classList.remove("hidden");
  });

  document.querySelectorAll(".auth-missing").forEach((el) => {
    el.classList.add("hidden");
  });

  const usernameNav = document.querySelector("nav-username");
  usernameNav.innerText = user.username;
}
