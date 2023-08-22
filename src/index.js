const express = require("express");
const dotenv = require("dotenv");
const prisma = require("../db/prisma");

dotenv.config();

const app = express();

const port = 5000;

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.listen(port, console.log(`App listening in port ${port}!`));
