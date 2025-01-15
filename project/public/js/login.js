import { addFormAsJsonListener } from "./utils.js";

console.log("login.js script loaded");

addFormAsJsonListener("login-form", (respone) => {
  console.log("Logged in");
});
