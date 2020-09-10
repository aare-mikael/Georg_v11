const http = require('http');
  
const server = http.createServer((req, res) => {
  res.end("Hello! This is the webserver for the discord bot on HenckeBot");
}).listen(3000);

console.log("WebServer is online!");

setInterval(() => {
  http.get(`http://henckebot-test-branch.glitch.me`);
}, 280000);