const express = require("express");
const router = express.Router();
const personData = require("../data/personData");

router.post("/saveAPerson", async (req, res, next) => {
  const person = await personData.savePerson(req.body);
  res.status(201).json(person);
});

router.get("/getPerson", async (req, res, next) => {
  const persons = await personData.getPersons();
  res.status(200).json(persons);
});



router.get("/getAPerson/:id", async (req, res, next) => {
  const person = await personData.getAPerson(req.params.id);
  res.status(200).json(person);
});

module.exports = router;
