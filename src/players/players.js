const express = require("express");
const router = express.Router();

let players = [
  {
    name: "manish",
    dob: "1/1/1995",
    gender: "male",
    city: "jalandhar",
    sports: ["swimming"],
  },
  {
    name: "gopal",
    dob: "1/09/1995",
    gender: "male",
    city: "delhi",
    sports: ["soccer"],
  },
  {
    name: "lokesh",
    dob: "1/1/1990",
    gender: "male",
    city: "mumbai",
    sports: ["soccer"],
  },
];

router.post("/players", function (req, res) {
  // console.log(req.body);
  let myvar = 0;
  for (i = 0; i < players.length - 1; i++) {
    if (req.body.name == players[i].name) {
      myvar++;
    }
  }
  if (myvar == 0) {
    players.push(req.body);
    res.send({ data: players, status: true });
  } else {
    res.send("name already exist");
  }
});

module.exports = router;
