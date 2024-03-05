const express = require('express');
const router = express.Router();
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "sashakt";
const fetchuser = require('../middleware/fetch');
const Puzzle = require('../models/gameLevel');
const Signup = require('../models/SignupModel');
const Waga = require('../models/wagaModel');

// User Route
router.post('/', async (req, res) => {
  const { name, age } = req.body;
  if (!name || !age) {
    return res.status(400).json({ error: 'Name and age are required fields' });
  }

  const ageNumber = parseInt(age);

  // Check if the age is between 8 and 16
  if (ageNumber < 8 || ageNumber > 16) {
    return res.status(400).json({ error: 'Only children between 8 and 16 are allowed' });
  }

  try {
    let user = await User.findOne({ name, age });

    if (!user) {
      user = new User({ name, age });
      await user.save();
    }

    const data = {
      user:{
        id: user.id
      }
    }

    const authToken = jwt.sign(data, JWT_SECRET);
    
    console.log({authToken});
    res.json({ 'authtoken':authToken, message: 'User data saved successfully' });
    // Send a response with user information, including the user ID
    // res.json({ message: 'User data saved successfully' });
  } catch (error) {
    console.error('Error saving user details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.get('/getuser', async (req, res) => {
  const { email } = req.query;
  console.log(email);
  if ( !email ) {
    return res.status(400).json({ error: 'Please enter the email!' });    
  }
  try {
    let user = await Signup.findOne({ email});

    if (!user) {
      res.json({ message: 'Email does not exists!!' });
    }
    else
    {
      const userId = user.id;
      const user_data = await Signup.findById(userId);
      const puzzle = await Puzzle.findOne({user : userId});
      const wagascore = await Waga.findOne({user : userId});
      res.json({user_data, puzzle,wagascore,  auth : true });
    }
  
  } catch (error) {
    console.error('Error saving user details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/signup', async (req, res) => {
  const { name, age, email } = req.body;
  
  if (!name || !age || !email ) {
    return res.status(400).json({ error: 'Name, age and email are required fields' });
    
  }

  const ageNumber = parseInt(age);

  // Check if the age is between 8 and 16
  if (ageNumber < 8 || ageNumber > 16) {
    return res.status(400).json({ error: 'Only children between 8 and 16 are allowed' });
  }

  try {
    let user = await Signup.findOne({ email});

    if (!user) {
      user = new Signup({ name, age, email });
      await user.save();
      const data = {
        user:{
          id: user.id
        }
      }
  
      const authToken = jwt.sign(data, JWT_SECRET);
      
      console.log({authToken});
      res.json({ auth : true ,'authtoken':authToken, message: 'User data saved successfully' });
    }
    else
    {
      res.json({ message: 'Email is already exists!!' });
    }
  } catch (error) {
    console.error('Error saving user details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


router.post('/signin', async (req, res) => {
  const { email } = req.body;
  if ( !email ) {
    return res.status(400).json({ error: 'Please enter the email!' });
    
  }

  try {
    let user = await Signup.findOne({ email});

    if (!user) {
      res.json({ message: 'Email does not exists!!' });
    }
    else
    {
      const data = {
        user:{
          id: user.id
        }
      }
      const user_name = user.name;
      const user_age = user.age;
      const authToken = jwt.sign(data, JWT_SECRET);
      
      console.log({authToken});
      res.json({ user_Name : user_name, userAge: user_age, auth : true ,'authtoken':authToken, message: 'User logined successfully' });
    }
  } catch (error) {
    console.error('Error saving user details:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
module.exports = router;

