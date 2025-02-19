const express = require('express');
const axios = require('axios');
const app = express();

// So our server can read JSON bodies in POST requests
app.use(express.json());

// This is the endpoint Roblox will call. (e.g., POST https://your-render-app.onrender.com/deepseek)
app.post('/deepseek', async (req, res) => {
  try {
    // userText is the text that came from Roblox
    const userText = req.body.userText;

    // TODO: Replace the line below with a real call to DeepSeek
    // e.g.: 
    // const deepSeekResponse = await axios.post(
    //   'https://api.deepseek.com/v1/query',
    //   { query: userText },
    //   { headers: { Authorization: `Bearer YOUR_DEEPSEEK_API_KEY` } }
    // );
    // let reply = deepSeekResponse.data.answer;

    // For now, let's just echo back the user text so you can see it working
    const reply = "DeepSeek says: " + userText;

    // Return the response to Roblox
    res.json({ reply: reply });
  } catch (err) {
    console.error("DeepSeek error:", err.message);
    res.status(500).json({ reply: "Error contacting DeepSeek" });
  }
});

// Start the server on port 3000 (Render will override this with its own port)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
