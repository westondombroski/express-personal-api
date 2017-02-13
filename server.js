// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
//simple hard-coded JSON object of API endpoints
  res.json({
    message: "hello and welcome to weston's jazz drummers api",
    documentationUrl: "https://github.com/westondombroski/express-personal-api/README.md",
    baseUrl: "https://calm-scrubland-61487.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "all available endpoints"},
      {method: "GET", path: "/api/profile", description: "data about me"},
      {method: "GET", path: "/api/drummers", description: "my top jazz drumming influences"},
      {method: "GET", path: "/api/drummers/:id", description: "find a drummer by id"},
      {method: "POST", path: "/api/drummers", description: "add a drummer"},
      {method: "PUT", path: "/api/drummers/:id", description: "edit/update a drummer"},
      {method: "DELETE", path: "/api/drummers/:id", description: "delete a drummer"}
    ]
  })
});

app.get('/api/profile', function apiProfile(req, res){
  res.json({
    name: "weston dombroski",
    githubLink: "https://github.com/westondombroski",
    personalSiteLink: "https://westondombroski.github.io",
    currentCity: "San Francisco",
    pets: [{name: "Bodhisattva", type: "cat", disposition: "tortitude" }]
  })
});

app.get('/api/drummers', function findAllDrummers(req, res){
  res.json({
  })
});

app.get('/api/drummers/:id', function findDrummerById(req, res){
  res.json({

  })
});

app.post('/api/drummers', function addDrummer(req, res){
  res.json({

  })
});

app.put('/api/drummers/:id', function updateDrummer(req, res){
  res.json({

  })
});

app.delete('/api/drummers/:id', function deleteDrummer(req, res){
  res.json({

  })
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
