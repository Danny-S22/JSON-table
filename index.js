import express from 'express';
import { dirname } from "path";
import { fileURLToPath } from "url";
import fs from 'fs';
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/main.html");
});

app.get("/data", (req, res) => {
    const data = fs.readFileSync(__dirname + "/public/data.json");
    res.json(JSON.parse(data));
});

app.listen(port, () => {
    console.log(`Server initialized ${port}`);
});