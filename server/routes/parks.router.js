const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', function (req, res) {
    axios({
        method: 'GET',
        url: `https://developer.nps.gov/api/v1/parks?parkCode=&limit=62&q=National%20Park&fields=images`,
        params: {
            api_key: process.env.NPS_API_KEY,
        }
    }).then((response) => {
        res.send(response.data.data);
    }).catch(error => {
        console.log('error in parks get request', error);
    });

});

module.exports = router;

