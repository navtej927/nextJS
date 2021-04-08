const express = require('express')
const next = require('next')
const axios = require("axios");

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

const isDevelopment = process.env.NODE_ENV !== 'production'

app.prepare().then(() => {
    const server = express()

    if (isDevelopment) {
        server.get('/api/news', async (req, res) => {
            const response = await axios.get("http://localhost:3008/api/v1/news");
            console.log("response is", response.data);
            res.send(response.data);
        });

        server.get('/api/static', async (req, res) => {
            const response = await axios.get("http://localhost:3008/api/v1/static");
            res.send(response.data);
        });
    }

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })

}).catch(err => {
    console.log('Error:::::', err)
})