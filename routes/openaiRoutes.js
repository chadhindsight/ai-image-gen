const express = require('express');
const router = express.Router();
const { generateImage } = require('../controllers/openaiController.js')

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
// image generation
router.post('/generateimage', (req, res) => {
    res.status(200).json({
        success: true,
    });
});
// New push
module.exports = router;