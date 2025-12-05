import http from 'http';

const server = http.createServer((req, res) => {
    console.log("Method:", req.method);
    console.log("URL:", req.url);

    if (req.url === '/users') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ page: "Users Page", data: ["anu", "moses"] }));
    }

    else if (req.url === '/products') {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ page: "Products Page", items: ["pen", "book"] }));
    }

    else if (req.url === '/about') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end("About Page: This is backend practice");
    }

    else if (req.url === '/contact') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end("Contact Page: 7675900104");
    }

    else {
        res.writeHead(400, { 'content-type': 'text/plain' });
        res.end("404 - Page Not Found");
    }
});

server.listen(7007, () => {
    console.log(`Server running at port 7007`);
});
