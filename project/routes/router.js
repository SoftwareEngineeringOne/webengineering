import { homepageController } from '../controllers/homepageController.js';
import { registerController } from '../controllers/registerController.js';
import { loginController } from '../controllers/loginController.js';
import { staticFileController } from '../controllers/staticFileController.js'

export async function handleRequest(req, res) {
  console.log("-------------------")
  console.log("Handling request...")
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;
  const method = req.method.toUpperCase();
  console.log("Url:", url)
  console.log("Path:", path)
  console.log("Method:", method)

  // Basic routing
  if (path === '/' && method === 'GET') {
    console.log("Path: /")
    return homepageController(req, res);
  } else if (path === '/register' && (method === 'GET' || method === 'POST')) {
    console.log("Path: /register")
    return registerController(req, res);
  } else if (path === '/login' && (method === 'GET' || method === 'POST')) {
    console.log("Path: /login")
    return loginController(req, res);
  }

  if (path.startsWith('/public/')) {
    return staticFileController(req, res, path);
  }

  res.statusCode = 404;
  return res.end('404 - Page Not Found');
}

