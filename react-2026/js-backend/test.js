// test.js for the ai API call



const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "openrouter/free", // Or a specific free ID like "nvidia/nemotron-3.5-lightning:free"
    messages: [
      { role: "user", content: "Reply with a short hello from JavaScript!" }
    ]
  })
});

const data = await response.json();

if (!response.ok) {
  console.error("Error:", data);
} else {
  console.log("Model used:", data.model);
  console.log("Reply:", data.choices[0].message.content);
}