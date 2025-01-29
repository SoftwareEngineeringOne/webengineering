export const protectedMiddleware = {
  roleProtection: (allowedRoles) => {
    return (req, res, next) => {
      if (!req.session.loggedIn) {
        if (req.method == "GET") {
          res.redirect("/auth/login");
        } else {
          next({ status: 401, message: "Unauthorized" });
        }
        return;
      }
      if (!allowedRoles.includes(req.session.user.role)) {
        next({ status: 401, message: "Unauthorized" });
        return;
      }
      next();
    };
  },
};
