const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Docker!")
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Express listening at http://localhost:${PORT}`)
})
