const express = require("express");


const questionController = require("../controllers/questionControllers");


const optionsController = require("../controllers/optionControllers");


const router = express.Router();


router.post("/questions/create", questionController.createQuestion);


router.post("/questions/:id/options/create", optionsController.addOption);


router.get("/questions/:id/delete", questionController.deleteQuestion);


router.get("/options/:id/delete", optionsController.deleteOption);


router.get("/options/:id/add_vote", optionsController.incrementVotes);


router.get("/questions/:id", questionController.getQuestionDetails);


module.exports = router;
