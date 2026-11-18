// server.js

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

 
const SYSTEM_PROMPT = `You are a Turkish example sentence generator. 
Given a single Turkish word, output ONLY one natural, simple Turkish sentence demonstrating its everyday usage.

Strict Rules:
- Output ONLY the Turkish sentence.
- Do NOT include English translations, definitions, or explanations.
- Do NOT include introductory or closing conversational text.
- Do NOT use quotation marks, bullet points, or markdown formatting (no bolding).
- Use the target word naturally (you may inflect/conjugate it to fit Turkish grammar).

Examples:
Input: sıcak
Output: Bugün hava çok sıcak olduğu için dışarı çıkmadık.

Input: kitap
Output: Masanın üzerindeki kitabı dün akşam bitirdim.

Input: koşmak
Output: Her sabah parkta yarım saat koşuyor.`

// 1. Health check route (visit http://localhost:3001/api/check in your browser to test)
app.get("/api/check", (req, res) => {
    console.log("logging the server.js/");
    res.send("js-backend alive");
});

// 2. Chat endpoint for React
app.post("/api/chat", async (req, res) => {
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openrouter/free",
        messages: [{

            // === THE SYSTEM PROMPT === ///
            role: "system",
            content: SYSTEM_PROMPT
          },
          {
            role: "user",
            content: req.body.prompt
          }]
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    res.json({ reply: data.choices[0].message.content });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log("JS backend running on http://localhost:3001");
});
