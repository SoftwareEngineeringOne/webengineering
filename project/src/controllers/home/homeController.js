export const homeController = {
  getHomepage: async (req, res) => {
    console.log("Hello" + req.session);
    try {
      res.render("index");
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  },
};
