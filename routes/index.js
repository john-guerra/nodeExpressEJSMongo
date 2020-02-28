var express = require("express");
var router = express.Router();

const mu = require("../db/MongoUtils.js");

const buildQuery = query => ({
  name: new RegExp(`.*${query}.*`, "i")
});

/* GET home page. */
router.get("/", function(req, res) {
  mu.grades.find().then(grades =>
    res.render("index", {
      grades
    })
  );
});

/* GET home page. */
router.get("/searchSS", function(req, res) {
  const query = buildQuery(req.query.q);

  console.log(req.query);

  mu.grades.find(query).then(grades =>
    res.render("index", {
      grades
    })
  );
});

//  Data endpoint
router.get("/grades/:query", (req, res) => {
  console.log("params", req.params);
  const query = buildQuery(req.params.query);

  mu.grades.find(query).then(grades => res.json(grades));
});

router.post("/grades/create", (req, res) => {
  console.log("params", req.body);

  const grade = {
    name: req.body.name,
    grade: +req.body.grade,
    timestamp: new Date()
  };

  mu.grades.insert(grade).then(res.redirect("/"));
});

// Server side rendering one grade
router.get("/grade/:id", (req, res) => {
  console.log("grade/id params", req.params);

  mu.grades
    .findOneByID(req.params.id)
    .then(grade => {
      console.log("grade", grade);
      return grade;
    })
    .then(grade => res.render("grade_details", { grade }));
});

module.exports = router;
