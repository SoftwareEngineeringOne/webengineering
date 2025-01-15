import fs from "node:fs";
import path from "node:path";

export function staticFileController(req, res) {
  const filePath = path.join(process.cwd(), req.url);
  console.log("Serving file: " + filePath);

  fs.stat(filePath, (err, stats) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      return;
    }

    if (stats.isDirectory()) {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("Bad Request");
    } else {
      serveFile(filePath, res);
    }
  });
}

function serveFile(filePath, res) {
  const fileExtension = path.extname(filePath).toLowerCase();
  let contentType = "application/octet-stream";

  switch (fileExtension) {
    case ".html":
      contentType = "text/html";
      break;
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".json":
      contentType = "application/json";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
    case ".jpeg":
      contentType = "image/jpeg";
      break;
    case ".gif":
      contentType = "image/gif";
      break;
    default:
      contentType = "application/octet-stream";
  }

  res.writeHead(200, { "Content-Type": contentType });

  fs.createReadStream(filePath).pipe(res);
}
