import {addFormAsJsonListener} from "./utils.js";

console.log("login.js script loaded");

addFormAsJsonListener("login-form", async (response) => {
    const previousPageUrl = document.referrer;
    const cacheBuster = `?_=${new Date().getTime()}`;
    if (previousPageUrl) {
        window.location.assign(previousPageUrl + cacheBuster);
    } else {
        window.location.assign("/" + cacheBuster);
    }
});
