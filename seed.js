var db = require('./models');

var drummers_list = [
  {
  name: "elvin jones",
  rank: 1,
  image: "/images/elvin.jpg",
  life: "9/9/1927 - 5/18/2004",
  url: "https://www.youtube.com/watch?v=JWQjqWiGzh8",
  isAlive: false
  },
  {
  name: "tony williams",
  rank: 2,
  image: "/images/tony.jpg",
  life: "12/12/1945 - 2/23/1997",
  url: "https://www.youtube.com/watch?v=QcKgpPvzi18",
  isAlive: false
  },
  {
  name: "buddy rich",
  rank: 3,
  image: "/images/buddy.jpg",
  life: "9/30/1917 - 4/2/1987",
  url: "https://www.youtube.com/watch?v=VJh9W3Gcpmo",
  isAlive: false
  },
  {
  name: "jack dejohnette",
  rank: 4,
  image: "/images/jack.jpg",
  life: "9/9/1942 - alive",
  url: "https://www.youtube.com/watch?v=wjCguSiMXUI",
  isAlive: true
  },
  {
  name: "jeff hamilton",
  rank: 5,
  image: "/images/jeff.jpg",
  life: "9/5/1953 - alive",
  url: "https://www.youtube.com/watch?v=-xfw-BZt8pU",
  isAlive: true
  }
];

db.Drummer.remove({}, function(err, drummers) {
  console.log("removed all drummers")
  db.Drummer.create(drummers_list, function(err, drummers){
    if (err){
      return console.log("Error:", err);
    }
    console.log("Created data")
    process.exit();
  });
});
