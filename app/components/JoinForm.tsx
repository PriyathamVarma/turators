"use client";

import { useState } from "react";

const roles = ["Guide or operator", "Stay or cafe", "Startup or creator", "Student", "Government or body"];
const recipient = "varma.v.travel@gmail.com";

export default function JoinForm() {
  const [role, setRole] = useState(0);
  const [sent, setSent] = useState(false);

  return (
    <form
      className="flex min-w-0 flex-1 basis-[380px] flex-col gap-5 rounded-[24px] bg-white p-5 sm:rounded-[28px] sm:p-7"
      onSubmit={(e) => {
        e.preventDefault();
        const subject = encodeURIComponent("Turators founding member request");
        const body = encodeURIComponent(`New Turators community member request\n\nRole: ${roles[role]}\nEmail: ${(e.currentTarget.elements.namedItem("email") as HTMLInputElement).value}`);
        window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
        setSent(true);
      }}
    >
      <fieldset className="m-0 min-w-0 border-0 p-0">
        <legend className="mb-2.5 p-0 text-[15px] font-bold">I am a</legend>
        <div className="flex flex-wrap gap-2">
          {roles.map((label, i) => (
            <button
              key={label}
              type="button"
              aria-pressed={role === i}
              onClick={() => setRole(i)}
              className={`min-h-11 cursor-pointer rounded-full border-[1.5px] px-4 py-2.5 text-[15px] font-bold transition ${
                role === i ? "border-ink bg-ink text-white" : "border-[#8a99ab] bg-white text-ink hover:border-ink"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </fieldset>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-[15px] font-bold">Email</label>
        <input
          id="email"
          type="email"
          required
          placeholder="you@example.com"
          className="min-h-12 w-full rounded-2xl border-[1.5px] border-[#8a99ab] px-4 py-3.5 text-base text-ink"
        />
      </div>
      <button
        type="submit"
        className="min-h-[52px] cursor-pointer rounded-full bg-ink px-7 py-4 text-[17px] font-bold text-white transition hover:-translate-y-0.5"
      >
        Count me in
      </button>
      {sent && (
        <p role="status" className="m-0 text-[15px] font-medium">
          Your email app is opening a message to {recipient}.
        </p>
      )}
    </form>
  );
}
