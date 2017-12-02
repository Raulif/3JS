var express = require('express')
var app = express();

app.use('/public', express.static( __dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})


app.listen(8000, () => console.log('listening'))
