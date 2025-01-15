import { views } from "../util/views.js";

export const homeController = {
  getHomepage: async (req, res) => {
    console.log("Received GET request to /");
    try {
      let pageContent = await views.loadViewWithNavbar("index");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(pageContent);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  },
};
