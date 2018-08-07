const express = require('express');
const app = express();
const request = require('request');
const cors = require('cors')
var parseString = require('xml2js').parseString;

app.use(cors());

app.options('*', cors())

app.use(express.static(__dirname + '/dist'));

app.listen(8000, () => {
    console.log('Server started!');
});

app.route('/api/:search').get((req, res) => {
    var url  = 'http://gent.staging.aquabrowser.be/api/v1/search/?q=' + req.params['search'] + '&authorization='+ process.env.API_KEY;
    request.get(url, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            parseString(body, function (err, result) {
                res.send(result);
            });
        }
    });

});
