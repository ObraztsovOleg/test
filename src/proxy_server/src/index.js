import http from 'http';
import proxy from 'http-proxy';
import config from 'config'

const proxy_server = proxy.createProxyServer();
const PORT = 5100;

const targets = config.get("upstream");
let counter = 0;

function send_req(req, res) {
    counter = counter % targets.length

    proxy_server.web(req, res, {
        target: targets[counter++]
    }, (e) => {
        send_req(req, res);
    })
}

try {
    http.createServer((req, res) => {
        send_req(req, res);        
    }).listen(PORT)
} catch(e) {
    console.log(e.codeName);
}