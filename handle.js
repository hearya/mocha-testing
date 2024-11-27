const http = require("http");
const handle = require("./handle");

this.server = http.createServer(handle);

exports.listen = function () {
  // console.log(arguments);
  this.server.listen.apply(this.server, arguments);
  console.log(
    "Server is available under http://127.0.0.1:" + arguments[0] + "/"
  );
};

exports.close = function (callback) {
  this.server.close(callback);
};