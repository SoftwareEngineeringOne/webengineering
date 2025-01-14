import fs from 'node:fs/promises';
import path from 'node:path';

export async function homepageController(req, res) {
  console.log("HomePageController")
  try {
    const filePath = path.join(process.cwd(), 'views', 'index.html');
    const data = await fs.readFile(filePath, 'utf-8');
  console.log("HomePageController - Read File")

    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.writeHead(200);
    res.end(data);
  console.log("HomePageController - Returning")
  } catch (err) {
    console.error('Error loading homepage:', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
