var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser');
var axios = require("axios").default;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/qa', (req, res) => {
  const reqUrl = 'http://3.121.62.187:80/models/1/faq-qa/';

  axios.post(reqUrl, {
    'questions': [
      req.body.question
    ],
    'top_k_retriever': 1
  })
    .then(function (response) {
      if (Array.isArray(response.data['results']) && response.data['results'].lenght() > 0) {
        res.send({ "answer": response.data['results'][0]['answers'][0]['answer'] });
      } else {
        res.send({ "answer": "Tut mir leid. Ich habe keine Antwort gefunden!" });
      }
    })
})

//serve static file (index.html, images, css)
app.use(express.static(__dirname + '/views'));

var port = process.env.PORT || 3000
app.listen(port, function () {
  console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
