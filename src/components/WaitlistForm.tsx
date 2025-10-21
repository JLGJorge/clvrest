"use client";
import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 900)); // simulate
    const ok = /\S+@\S+\.\S+/.test(email);
    setStatus(ok ? "success" : "error");
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-md gap-2">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 rounded-xl border px-4 py-3 focus:outline-none focus:ring"
      />
      <button
        disabled={status==="loading"}
        className="rounded-xl px-5 py-3 bg-black text-white hover:opacity-90 disabled:opacity-60"
      >
        {status==="loading" ? "Joining..." : "Join"}
      </button>
      {status==="success" && (
        <span className="sr-only">Success</span>
      )}
    </form>
  );
}
