import {addFormAsJsonListener} from "./utils.js";

console.log("register.js script loaded");

addFormAsJsonListener("register-form", async (response) => {
    window.location.assign("/");
});
