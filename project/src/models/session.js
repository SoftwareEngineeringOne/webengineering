/**
 * Represents a user session.
 */
class Session {
    /**
     * Creates a new session.
     * @param {string} sessionId - The session ID.
     */
    constructor(sessionId) {
        /** @type {string} */
        this.sessionId = sessionId;
        /** @type {boolean} */
        this.loggedIn = false;
        /** @type {Object|null} */
        this.user = null;
    }

    /**
     * Logs in a user to the session.
     * @param {Object} user - The user object.
     */
    login(user) {
        this.loggedIn = true;
        this.user = user;
    }
}

export default Session;
