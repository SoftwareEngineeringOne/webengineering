class Session {
    constructor(sessionId) {
        this.sessionId = sessionId
        this.loggedIn = false
        this.user = null
    }

    login(user) {
        this.loggedIn = true
        this.user = user
    }
}

export default Session