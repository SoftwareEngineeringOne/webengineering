export const homeController = {
    getHomepage: async (req, res) => {
        console.log("Received GET request to /");
        try {
            res.render("index");
        } catch (err) {
            console.error(err);
            res.writeHead(500, {"Content-Type": "text/plain"});
            res.end("Internal Server Error");
        }
    },
};
