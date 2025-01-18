import express from 'express';
import path from "node:path";
import indexRouter from './routes/index.js';
import authRouter from './routes/auth.js';
import apiRouter from './routes/api.js';
import postsRouter from './routes/posts.js';
import {errorHandler, notFoundHandler} from "./middleware/errors.js";
import {loggerMiddleware} from "./middleware/logger.js";
import {sessionMiddleware} from "./middleware/session.js";
import {cookieMiddleware} from "./middleware/cookie.js";
// import livereload from 'livereload';
// import connectLivereload from 'connect-livereload';


const app = express();

console.log(`Running in ${process.env.NODE_ENV} mode`);

// if (process.env.NODE_ENV !== 'production') {
//     console.log("Activating live reload");
//     const liveReloadServer = livereload.createServer();
//     liveReloadServer.watch(path.join('src', 'public'));
//     liveReloadServer.server.once("connection", () => {
//         setTimeout(() => {
//             liveReloadServer.refresh("/");
//         }, 100);
//     })
//     app.use(connectLivereload())
// }

const PORT = process.env.PORT || 3000;


app.locals.sessions = {};

app.set('views', path.join('src', 'views'));
app.set('view engine', 'pug');


app.use(loggerMiddleware);

app.use(express.static(path.join('src', 'public')));

app.use(cookieMiddleware);
app.use(sessionMiddleware);

app.use(express.json())
app.use(express.urlencoded({extended: false}));


app.use('/', indexRouter)
app.use('/auth', authRouter)
app.use('/api', apiRouter)
app.use('/posts', postsRouter)

app.use(notFoundHandler);
app.use(errorHandler);


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

export default app
