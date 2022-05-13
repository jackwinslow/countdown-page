// Basic imported package
const express = require('express')

// Setting app and port
const app = express()

// Routing to static page
app.use('/', express.static('public'));

app.get('/', (req, res) => {
    res.send(200)
})

const port = process.env.PORT || 1800;
app.listen(port, () => {
  console.log('Express server listening on port', port)
});