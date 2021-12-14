const http = require('http');
const JsReport = require('jsreport');

// a simple server initialization, the application is then availible on port 5488 
const jsreport = JsReport();

jsreport.beforeRenderListeners.add('my listener', (req, res) => {
    console.log('my custom listener')
});

jsreport.init().catch((e) => {
    console.trace(e)
    process.exit(1)
});

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
server.listen(8080);