  var express = require('express');
      app     = express();
  
  var path    = require("path");
  var mongoose = require("mongoose");
  var http    = require('http');
  var bodyParser = require("body-parser");
    //Twitter
  var Twit = require('twit')
  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
  

  var Twitter = new Twit({
    consumer_key:         'm7riXu8TSwYe3nn5Bxkn7i3d5'
  , consumer_secret:      'wkpePWJKBzx6JqxNvZHDyCSBqpNGUSpJ7QFQvOk9NvZGfjaTNx'
  , access_token:         '360465492-EFtsAQiCY1XJxwQvptKjmHPEDepOnYQZ6MtugDPr'
  , access_token_secret:  'ZqSFOMuCXX8Lh1BQVBDZMWREvZNjDGMR6t9ItVyhZq9zH'
});



  //  This file will include the index.html
  app.use(express.static(path.join(__dirname, "./client")));
  //require('./config/mongoose');

 //var routes = require('./config/routes')(app);

  var server = app.listen(8000,function() {
    console.log("---------My Server Starting--------");
  });

  

//   //  tweet 'hello world!'
// //
// Twitter.post('statuses/update', { status: 'hello world from my MEAN APP!' }, function(err, data, response) {
//   console.log(data)
// })

//
//  search twitter for all tweets containing the word 'banana' since Nov. 11, 2011
//
 // 
app.post('/data',function(req,res){
   
   console.log(req.body);
   var search_term = req.body.desease;

   var search_text =  "#" + search_term ;

  Twitter.get('search/tweets', { q: search_text , count: 100,result_type:"recent" }, 
                              function(err, data, response) {
  console.log(data)
  res.json(data);
  });

})

//Using geocodes to filter tweets based on location is what locative media geeks refer to as setting up a geofence.
//geocoded Twitter searches
//statuses/filter used with the locations parameter will get only tweets that have coordinates





