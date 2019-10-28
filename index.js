const express = require('express')
const app = express()

const hostname = (process.argv.length === 3) ? process.argv[2] : '0.0.0.0'
const port = process.env.PORT || 3000

app.use(express.static('src'))
app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on http://${hostname}:${port}/`)
})