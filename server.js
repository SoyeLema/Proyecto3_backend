const { agregarPost, getPosts } = require('./consultas')
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json())

app.listen(3000, console.log('SERVIDOR ENCENDIDO'))

app.use(cors());

app.get("/posts", async (req, res) => {
    const posts = await getPosts()
    res.json(posts)
})

app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body
    await agregarPost(titulo, url, descripcion)
    res.send("Post agregado con éxito")
})