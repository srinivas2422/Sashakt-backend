const express = require('express');
const router = express.Router();
const GameLevel = require('../models/gameLevel');
const fetchuser = require('../middleware/fetch');
const WagaScore = require('../models/wagaModel');
const JumbleScore = require('../models/jumbleModel');
const WordScore = require('../models/wordsearchModel');
const MemoryScore = require('../models/memoryModel');
// Save Puzzle game data
router.post('/level', fetchuser, async (req, res) => {
  try {
    const { level, isCompleted } = req.body;


    // Save the game progress
    const gameLevel = new GameLevel({
      user: req.user.id,
      level,
      isCompleted,
    });

    await gameLevel.save();
    res.json({ message: 'Game progress saved successfully' });
  } catch (error) {
    console.error('Error saving game level progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Save Wagascore data
router.post('/wagascore', fetchuser, async (req, res) => {
  try {
    const { score, level, isCompleted } = req.body;


    // Save the game progress
    const wagaScore = new WagaScore({
      user: req.user.id,
      score,
      level,
      isCompleted,
    });

    await wagaScore.save();
    res.json({ message: 'Game progress saved successfully' });

  } catch (error) {
    console.error('Error saving game level progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//Save Jumblescore data
router.post('/jumblescore', fetchuser, async (req, res) => {
  try {
    const { score } = req.body;


    // Save the game progress
    const jumbleScore = new JumbleScore({
      user: req.user.id,
      score
    });

    await jumbleScore.save();
    res.json({ message: 'Game progress saved successfully' });

  } catch (error) {
    console.error('Error saving game level progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Save Wagascore data
router.post('/wordscore', fetchuser, async (req, res) => {
  try {
    const { score, level } = req.body;


    // Save the game progress
    const wordScore = new WordScore({
      user: req.user.id,
      score,
      level,
    });

    await wordScore.save();
    res.json({ message: 'Game progress saved successfully' });

  } catch (error) {
    console.error('Error saving game level progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.post('/memoryscore', fetchuser, async (req, res) => {
  try {
    const { moves } = req.body;


    // Save the game progress
    const memoryScore = new MemoryScore({
      user: req.user.id,
      moves
    });

    await memoryScore.save();
    res.json({ message: 'Game progress saved successfully' });

  } catch (error) {
    console.error('Error saving game level progress:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
