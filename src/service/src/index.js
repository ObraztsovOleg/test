import express from 'express';
import bodyParser from 'body-parser';
import { Server } from 'http';
import App_node from "./app.js"
import CORS from "./CORS.js"

const app = App_node(express, bodyParser, CORS);
const PORT = 3000;

try {
  Server(app).listen(PORT);
} catch(e) {
  console.log(e.codeName);
}