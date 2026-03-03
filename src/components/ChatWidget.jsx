import React, { useState, useRef, useEffect } from "react";
import "../styles/chat-widget.css";

export default function ChatWidget({ apiUrl }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { who: "bot", text: "👋 Hi! Ask me about my projects, AWS, or experience." }
  ]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const lastSentRef = useRef(0);

  async function send() {
    if (!apiUrl || loading) return;

    const q = question.trim();
    if (!q) return;

    const now = Date.now();
    if (now - lastSentRef.current < 1500) return;
    lastSentRef.current = now;

    setQuestion("");
    setMessages(m => [...m, { who: "me", text: q }]);
    setLoading(true);

    try {
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: q })
      });

      if (res.status === 429) {
        setMessages(m => [
          ...m,
          { who: "bot", text: "⏳ Please wait a moment before asking again." }
        ]);
        return;
      }

      if (!res.ok) throw new Error("API error");

      const data = await res.json();

      setMessages(m => [
        ...m,
        { who: "bot", text: data?.answer || "I can’t answer that question." }
      ]);
    } catch {
      setMessages(m => [
        ...m,
        { who: "bot", text: "⚠️ Unable to reach the server." }
      ]);
    } finally {
      setLoading(false);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }

  useEffect(() => {
    messagesRef.current?.scrollTo({
      top: messagesRef.current.scrollHeight,
      behavior: "smooth"
    });
  }, [messages, loading]);

  return (
    <div className="chat-root">
      <button
        className="chat-toggle"
        onClick={() => {
          setOpen(o => !o);
          requestAnimationFrame(() => inputRef.current?.focus());
        }}
        aria-label="Toggle chat"
      >
        💬
      </button>

      {open && (
        <div className="chat-panel">
          <div className="chat-messages" ref={messagesRef}>
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.who}`}>
                <div className="bubble">{m.text}</div>
              </div>
            ))}

            {loading && (
              <div className="msg bot">
                <div className="bubble">Typing…</div>
              </div>
            )}
          </div>

          <div className="chat-input">
            <input
              ref={inputRef}
              value={question}
              onChange={e => setQuestion(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  send();
                }
              }}
              placeholder="Ask about AWS, projects, skills…"
              readOnly={loading}
            />
            <button onClick={send} disabled={loading}>
              {loading ? "…" : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}