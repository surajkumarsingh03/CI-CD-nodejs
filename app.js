const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);

  // Automatically stop the server after 5 seconds
  setTimeout(() => {
    console.log('Shutting down server...');
    server.close(() => {
      console.log('Server shut down.');
      process.exit(0); // Exit the process successfully
    });
  }, 5000);
});
