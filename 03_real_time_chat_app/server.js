const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const url = require("url");
const path = require("path");

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve client files
app.use("/public", express.static(path.join(__dirname, "./public")));

// In-memory message history
// const messageHistory = [];

wss.on("connection", function connection(ws, req) {
    const parsed = url.parse(req.url, true);
    const username = parsed.query.username || "Anonymous";

    console.log(`${username} connected`);

    ws.on("message", function incoming(message) {
        const fullMessage = `${username}: ${message}`;

        // Broadcast to everyone (no persistence)
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(fullMessage);
            }
        });
    });
});

server.listen(3030, () => {
    console.log("Server running at http://localhost:3000/index.html?username=YourName");
});
