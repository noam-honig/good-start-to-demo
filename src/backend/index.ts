import express from "express";
import { remultExpress } from "remult/remult-express";
import { config } from "dotenv";
config();

export const app = express();
export const api = remultExpress({});

app.use(api);
