export const protectedMiddleware = {
  roleProtection: (allowedRoles) => {
    return (req, res, next) => {
      if (!req.session.loggedIn) {
        res.redirect("/auth/login");
        return;
      }

      if (!allowedRoles.includes(req.session.user.role)) {
        next({ status: 404, message: "Unauthorized"})
        return;
      }

      next();
    };
  },
};
