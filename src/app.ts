import { sendDataToEmail } from "./callbacks";

const express = require("express");

const api = express();

api.post("/email", sendDataToEmail);