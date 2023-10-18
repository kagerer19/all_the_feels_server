const fs = require("fs");

const requestListener = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === "/") {
        res.setHeader("Content-Type", 'text/html');
        res.write("<html lang='en'>");
        res.write("<head><title>All The Feels</title></head>");
        res.write('<body><h1>Hey there, welcome to your mood tracker!</h1><p>Enter your mood below and hit send to save your mood.</p>' +
            '<form action = "/mood" method="POST"><input type = "text" name="mood"><button type="submit">Send</button></body>');
        res.write("</html>");
        return res.end();
    }
    if (url === "/mood" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const mood = parsedBody.split("=")[1];
            fs.writeFile("user_mood.txt", mood, () => {
            });
        });
    }
};

module.exports = requestListener;