import {addSubmitListener, passwordEncryptModifier, sendFormAsJson} from "./utils.js";

console.log("login.js script loaded");

addSubmitListener("register-form", async (event) => {
    try {
        const response = await sendFormAsJson(event.target, [passwordEncryptModifier]);
        if (response.ok) {
            window.location.assign("/");
        } else {
            console.error("Failed to log in");
        }
    } catch (err) {
        console.error(err);
    }
})
