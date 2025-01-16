export const cookieMiddleware = (req, res, next) => {
    req.cookies = parseCookies(req.headers.cookie);
    next();
}

function parseCookies(cookieHeader) {
    const cookies = {};
    if (!cookieHeader) return cookies;

    const parts = cookieHeader.split(";");
    for (const part of parts) {
        const [name, value] = part.trim().split("=");
        cookies[name] = value;
    }
    return cookies;
}
