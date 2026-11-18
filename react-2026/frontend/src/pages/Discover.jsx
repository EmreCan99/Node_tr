
import { useState } from "react";

export default function Discover() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSend = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setReply("");

    const NODE_API_URL = import.meta.env.NODE_API_URL;

    try {
        const res = await fetch(`${NODE_API_URL}/api/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error?.message || "Request failed");

      setReply(data.reply);
    } catch (err) {
      setReply(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className='discover'>
      <form onSubmit={handleSend}>
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask the LLM..."
        />
        <button type="submit" disabled={loading}>
          {loading ? "Thinking..." : "Send"}
        </button>
      </form>

      {reply && <p>{reply}</p>}
    </main>
  );
}