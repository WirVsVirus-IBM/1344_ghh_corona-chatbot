var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser');
var axios = require("axios").default;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/qa', (req, res) => {
    const reqUrl = 'http://3.121.62.187:80/models/1/faq-qa/';

    axios.post(reqUrl, {
        'questions': [
          'What is corona'
        ],
        'top_k_retriever': 1
      })
        .then(function (response) {
            res.send({"answer": response.data['results'][0]['answers'][0]['answer']});
        })
        .catch(function (error) {
            res.send('Unerwarteter Fehler!');
        })
})

//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));

var port = process.env.PORT || 3000
app.listen(port, function () {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
