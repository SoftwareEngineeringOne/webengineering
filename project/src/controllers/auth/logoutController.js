export const logoutController = {
  handlePostRequest: async (req, res) => {
    req.session.logout();
    res.end("User logged out successfully");
  },
};
