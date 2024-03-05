const express = require('express');
const router = express.Router();
const Quiz = require('../models/quizModel');
const fetchuser = require('../middleware/fetch');
const WagaQuiz = require("../models/wagaquizModel");
const RadQuiz = require("../models/r_a_d_Model");
const RtdQuiz = require("../models/r_t_d_Model");
const RteQuiz = require("../models/r_t_e_Model");
const RtpQuiz = require("../models/r_t_p_Model");
const Rt_pQuiz = require("../models/r_t_par_Model");
const RtsQuiz = require("../models/r_t_s_Model");
const Video1Quiz = require('../models/video1Model');
const Video3Quiz = require('../models/video3Model');
const Video2Quiz = require('../models/video2Model');
// Quiz Routes

router.post('/save',fetchuser, async (req, res) => {
  const {level, isCompleted } = req.body;

  try {
    const quiz = new Quiz({
      user: req.user.id,
      level,
      isCompleted,
    });

    await quiz.save();

    res.json({ message: 'Quiz progress saved successfully' });
   } catch (error) {
    console.error('Error saving quiz progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/wagasave',fetchuser, async (req, res) => {
  const {level, isCompleted } = req.body;

  try {    
    const quiz = new WagaQuiz({
      user: req.user.id,
      level,
      isCompleted,
    });

    await quiz.save();

    res.json({ message: 'Quiz progress saved successfully' });
   } catch (error) {
    console.error('Error saving quiz progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/quiz1',fetchuser, async (req, res) => {
  const { score } = req.body;

  try {
    const quiz = new RadQuiz({
      user: req.user.id,
      score,
    });

    await quiz.save();

    res.json({ message: 'Quiz progress saved successfully' });
   } catch (error) {
    console.error('Error saving quiz progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/quiz2',fetchuser, async (req, res) => {
  const { score } = req.body;

  try {
    const quiz = new RtdQuiz({
      user: req.user.id,
      score,
    });

    await quiz.save();

    res.json({ message: 'Quiz progress saved successfully' });
   } catch (error) {
    console.error('Error saving quiz progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/quiz3',fetchuser, async (req, res) => {
  const { score } = req.body;

  try {
    const quiz = new RteQuiz({
      user: req.user.id,
      score,
    });

    await quiz.save();

    res.json({ message: 'Quiz progress saved successfully' });
   } catch (error) {
    console.error('Error saving quiz progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/quiz4',fetchuser, async (req, res) => {
  const { score } = req.body;

  try {
    const quiz = new RtpQuiz({
      user: req.user.id,
      score,
    });

    await quiz.save();

    res.json({ message: 'Quiz progress saved successfully' });
   } catch (error) {
    console.error('Error saving quiz progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/quiz5',fetchuser, async (req, res) => {
  const { score } = req.body;

  try {
    const quiz = new Rt_pQuiz({
      user: req.user.id,
      score,
    });

    await quiz.save();

    res.json({ message: 'Quiz progress saved successfully' });
   } catch (error) {
    console.error('Error saving quiz progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/quiz6',fetchuser, async (req, res) => {
  const { score } = req.body;

  try {
    const quiz = new RtsQuiz({
      user: req.user.id,
      score,
    });

    await quiz.save();

    res.json({ message: 'Quiz progress saved successfully' });
   } catch (error) {
    console.error('Error saving quiz progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/quiz7',fetchuser, async (req, res) => {
  const { score } = req.body;

  try {
    const quiz = new Video1Quiz({
      user: req.user.id,
      score,
    });

    await quiz.save();

    res.json({ message: 'Quiz progress saved successfully' });
   } catch (error) {
    console.error('Error saving quiz progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/quiz8',fetchuser, async (req, res) => {
  const { score } = req.body;

  try {
    const quiz = new Video2Quiz({
      user: req.user.id,
      score,
    });

    await quiz.save();

    res.json({ message: 'Quiz progress saved successfully' });
   } catch (error) {
    console.error('Error saving quiz progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/quiz9',fetchuser, async (req, res) => {
  const { score } = req.body;

  try {
    const quiz = new Video3Quiz({
      user: req.user.id,
      score,
    });

    await quiz.save();

    res.json({ message: 'Quiz progress saved successfully' });
   } catch (error) {
    console.error('Error saving quiz progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;
