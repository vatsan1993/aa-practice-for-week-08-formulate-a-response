// Your code here
const http = require('http');
const PORT = 3000;
const httpServer = http.createServer((req, res) => {
  // multi-line JavaScript string using a template literal
  const responseBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello World!</title>
</head>
<body>
  <h1>Hello there!</h1>
</body>
</html>
`;
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end(responseBody);
});

httpServer.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
