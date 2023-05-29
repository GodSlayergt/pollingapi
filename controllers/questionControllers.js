
const Questions = require("../models/questionModel");


const Option = require("../models/OptionsModel");
  

module.exports.createQuestion = async function (req, res) {
  try {

    for (let title of req.body.title) {
      await Questions.create({ title });
    }

    return res.status(200).json({
      message: "question created succesfully",
    });
  } catch (err) {
    // checking for the error
    return res.status(465).json({
      message: "error in creating a questions",
      error: err.message,
    });
  }
};


module.exports.deleteQuestion = async function (req, res) {
  try {

    const question = await Questions.findById(req.params.id);

    for (let id of question.options) {
      let option = await Option.findById(id);

      if (option.votes > 0) {
        return res.status(401).json({
          message: "you cannot delete that option",
        });
      }

      await option.remove();
    }

    await question.remove();

    return res.status(200).json({
      message: "question deleted succesfully",
    });
  } catch (err) {

    return res.status(465).json({
      message: "internal server error",
      error: err.message,
    });
  }
};


module.exports.getQuestionDetails = async function (req, res) {
  try {

    const question = await Questions.findById(req.params.id).populate(
      "options"
    );

    return res.status(200).json(question);
  } catch (err) {

    return res.status(465).json({
      message: "internal server error",
      error: err.message,
    });
  }
};
