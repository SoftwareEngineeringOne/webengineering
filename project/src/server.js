import app from "./routes/router.js";

const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
