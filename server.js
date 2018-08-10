const express = require('express');
const app = express();
const request = require('request');
const cors = require('cors')
var parseString = require('xml2js').parseString;

app.use(cors({ origin: "*" }));

app.use(express.static(__dirname + '/dist/bibVirtualKeyboard'));

app.listen(process.env.PORT || 8080);

app.route('/api/:search').get((req, res) => {
    var url = 'http://gent.staging.aquabrowser.be/api/v1/search/?q=' + req.params['search'] + '&authorization=' + process.env.API_KEY + '&branch=Oost-Vlaanderen/Gent/Hoofdbibliotheek';
    request.get(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            parseString(body, function (err, result) {
                res.send(result);
            });
        } else {
            console.log(error);
        }
    });
});

app.route('/api/availability/:frabl').get((req, res) => {
    var url = 'http://gent.staging.aquabrowser.be/api/v1/availability/?frabl=' + req.params['frabl'] + '&authorization=' + process.env.API_KEY + '&branch=Oost-Vlaanderen/Gent/Hoofdbibliotheek';
    request.get(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            // console.log("call ontvangen");
            // console.log(body);
            parseString(body, function (err, result) {
                res.send(result);
            });
        } else {
            console.log(error)
        }
    });
});

