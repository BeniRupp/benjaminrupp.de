const static = require("node-static");
const http = require("http");

const srcDirectory = `${__dirname}/src`;
const file = new static.Server(srcDirectory);
const PORT = 3000;

http
  .createServer(function (req, res) {
    file.serve(req, res);
  })
  .listen(PORT);

console.log(`🤖 Dev Server is running on port ${PORT}`);

var livereload = require("livereload");
var lrserver = livereload.createServer();
lrserver.watch(srcDirectory);
console.log(`🚀 LiveReload is running`);
