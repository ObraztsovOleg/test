import express from 'express';
import bodyParser from 'body-parser';
import { Server } from 'http';
import App_node from "./app.js";
import CORS from "./CORS.js";
import { Console } from 'console'; 
import fs from 'fs';

const logger = new Console({
  stdout: fs.createWriteStream("stdout.log", {
      flags: 'a'
  })
});
const DELAY = 10000;  // in ms
let data = {
  req_num: 0
}

const interval = setInterval(write_log, DELAY, data);

function write_log(data) {
    let date = new Date();

    logger.log("[" + date.getFullYear() + "/" +
                  + ("0" + (date.getMonth() + 1)).slice(-2) + "/" +
                  + ("0" + date.getDate()).slice(-2) + "--" +
                  + date.getHours() + ":" +
                  + date.getMinutes() + ":" +
                  + date.getSeconds() + "] " + "Number of requests: " + data.req_num);
    data.req_num = 0;
}

const app = App_node(express, bodyParser, CORS, data);
const PORT = 3000;

try {
  Server(app).listen(PORT);
} catch(e) {
  console.log(e.codeName);
}