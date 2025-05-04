// POST endpoint to process payment & trigger Discord bot
const express = require('express');
const router = express.Router();
const botClient = require('../../bot/index');

router.post('/confirm', async (req, res) => {
  const { username, userId, product, method, proof } = req.body;

  if (!username || !userId || !product || !method) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    await botClient.createTicket({ username, userId, product, method, proof });
    res.status(200).json({ message: "✅ Ticket created successfully." });
  } catch (error) {
    console.error("❌ Ticket creation error:", error);
    res.status(500).json({ error: "Failed to create ticket." });
  }
});

module.exports = router;
