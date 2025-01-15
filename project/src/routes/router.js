import {homeController} from '../controllers/homeController.js';
import {registerController} from '../controllers/registerController.js';
import {loginController} from '../controllers/loginController.js';
import {staticFileController} from '../controllers/staticFileController.js'

/**
 * @type {Object.<string, Function>}
 */
const routes = {
    'GET /': homeController.getHomepage,
    'GET /auth/register': registerController.handleGetRequest,
    'POST /auth/register': registerController.handlePostRequest,
    'GET /auth/login': loginController.handleGetRequest,
    'POST /auth/login': loginController.handlePostRequest,
}

export const router = {
    handleRequest: async (req, res) => {
        if (req.url.startsWith('/public/')) {
            return staticFileController(req, res);
        }

        const routeKey = `${req.method} ${req.url}`;
        const routeHandler = routes[routeKey] || notFoundHandler;
        return routeHandler(req, res);
    }
}

async function notFoundHandler(req, res) {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('Not Found');
}

