const express = require('express');
const app = express();
const port = 5000;
const request = require('request');

url = 'https://demo23.megaplan.ru/api/v3/contractorHuman/1000084/?{"access_token":"N2I5MThmNTgxN2I5NmRlZDRiYzBiM2JiYjU4YjI5MWQzMDE5NmEwODg2MDNhNWRiMjM5YjA4NmJmN2IwODhhOA"}'

app.listen(port, () => console.log(`Listening on port ${port}`));
app.get('/login', (req, res) => {
    request(url, function (error, response, body) {
        res.setHeader('Content-Type', 'application/json');
        let jsonobj = JSON.parse(body)
        res.send({
            'firstName': jsonobj['data']['firstName'],
            'middleName': jsonobj['data']['middleName'],
            'lastName': jsonobj['data']['lastName'],
            'login': jsonobj['data']['Category183CustomFieldLogin'],
            'password': jsonobj['data']['Category183CustomFieldPassword'],
        });})});