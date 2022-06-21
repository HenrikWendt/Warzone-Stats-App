var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

    var parameters = req.query;
    var response = {statuscode: 0000 , data: "error"};


    console.log(parameters.username);
    console.log(parameters.platform);
    


    var requestInfo = {
        uri: 'https://s.activision.com/activision/login',
      //  body: JSON.stringify(postData),
        method: 'GET',
       // headers: {
       //     'Content-Type': 'application/json'
      //  }
    }

    

    request(requestInfo, function (error, response) {
       
        //var csrf = response.body.querySelectorAll('meta[name="csrf-token"]').content;
        var csrf = response.body;

        for(var i = 0; i < response.body.length; i++) {

            console.log(response.body[i]);

        }
        //return;
        
        res.status(200);
        res.send(response.body);
       
    });

    response.statuscode = 200;
        response.data = "Request success"
    
        //res.status(response.statuscode);
        //res.send(response.data);
});

module.exports = router;
