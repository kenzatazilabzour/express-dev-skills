var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// GET /skills (index)
router.get('/', skillsCtrl.index);

// GET route to render the add skill form
router.get('/add', (req, res) => {
  res.render('skills/new');
});

// Handle the form submission when adding a new skill
router.post('/', (req, res) => {
  const { skill, level } = req.body;

  // Create a new skill object
  const newSkill = {
    skill,
    level,

  };
  const mongoose = require('mongoose');

  // Create a schema for your skill
  const skillSchema = new mongoose.Schema({
    skill: String,
    level: String,
    dateCreated: { type: Date, default: Date.now },
  });

  // Create a model
  const Skill = mongoose.model('Skill', skillSchema);

  // Handle skill creation
  router.post('/', async (req, res) => {
    const { skill, level } = req.body;

    try {
      // Create a new skill document and save it to the database
      const newSkill = new Skill({ skill, level });
      await newSkill.save();

      // Redirect to the skills list
      res.redirect('/skills');
    } catch (error) {
      // Handle any errors that occur during database interaction
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

// Add the new skill to your database
skills.push(newSkill);

  res.redirect('/skills');
});

// DELETE skill by ID
router.delete('/:id', skillsCtrl.delete);

// Render the edit form for a skill
router.get('/:id/edit', skillsCtrl.edit);

// Handle the form submission when updating a skill
router.put('/:id', skillsCtrl.update);

module.exports = router;
