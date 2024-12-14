const express = require('express');
const Quest = require('../models/Quest');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, async (req, res) => {
  try {
    const quests = await Quest.find();
    res.json(quests);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
