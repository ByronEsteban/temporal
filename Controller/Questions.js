import Question from '../Models/preguntas.js';

const getAllQuestions = (req, res) => {
  Question.find((err, Questions) => {
    res.status(200).json(Questions);
  });
};

const getQuestionsById = (req, res) => {
  Question.findById(req.params.id, (err, Questions) => {
    res.status(200).json(Questions);
  });
};

const createQuestion = (req, res) => {
  const id = req.params.id;
  const { text, img, answer } = req.body;
  const question = new Question({ text, img, answer });
  question.save((err, Question) => {
    res.status(201).json(question);
  });
};

const updateQuestion = (req, res) => {
  const id = req.params.id;
  const { text, img, answer } = req.body;
  const question = { text, img, answer };
  const options = {
    new: true
  };
  Question.findByIdAndUpdate(id, question, options, (err, question) => {
    res.status(200).json(question);
  });
};

const deleteQuestion = (req, res) => {
  Question.findByIdAndDelete(req.params.id, err => {
    const msg = {text: "Se borró todo OK"}
    res.status(200).json(msg);
  });
}

const Controller = {
  getAllQuestions,
  getQuestionsById,
  createQuestion,
  updateQuestion,
  deleteQuestion
};

export default Controller;
