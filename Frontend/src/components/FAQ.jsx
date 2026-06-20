import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "Do children need any prior coding or robotics experience?",
    a: "Not at all! Our workshop is designed for complete beginners aged 8–14. Our expert instructors break down every concept into simple, fun, bite-sized activities. We start from scratch and gradually build up to exciting AI and robotics projects — so your child can jump right in with zero prior knowledge.",
    accent: "#6366f1",
    lightBg: "#eef2ff",
    border: "#c7d2fe",
    tagBg: "#e0e7ff",
    emoji: "🤔",
  },
  {
    q: "What equipment or software does my child need at home?",
    a: "All you need is a laptop or desktop computer (Windows, Mac, or Chromebook) with a stable internet connection and a modern web browser. All software tools we use are free, browser-based, and require no installation. We will send a detailed setup guide before the workshop begins.",
    accent: "#0891b2",
    lightBg: "#ecfeff",
    border: "#a5f3fc",
    tagBg: "#cffafe",
    emoji: "💻",
  },
  {
    q: "What happens if my child misses a live session?",
    a: "Every session is recorded and uploaded to our learning portal within 24 hours. Students can catch up at their own pace and still participate in all projects. Our mentors also hold weekly doubt-clearing sessions where children can ask questions and get personalised guidance — so missing a class won't slow anyone down.",
    accent: "#16a34a",
    lightBg: "#f0fdf4",
    border: "#bbf7d0",
    tagBg: "#dcfce7",
    emoji: "📹",
  },
];

function FAQItem({ item, isOpen, onToggle, index }) {
  return (
    <div
      className="rounded-3xl overflow-hidden transition-all duration-300"
      style={{
        background: isOpen ? item.lightBg : "#ffffff",
        border: `2px solid ${isOpen ? item.accent + "55" : item.border}`,
        boxShadow: isOpen
          ? `0 8px 32px ${item.accent}18`
          : "0 2px 12px rgba(0,0,0,0.05)",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left"
        aria-expanded={isOpen}
        style={{ background: "transparent", border: "none", cursor: "pointer" }}
      >
        <div className="flex items-center gap-4">
          {/* number badge */}
          <span
            className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black"
            style={{
              background: isOpen ? item.accent : item.tagBg,
              color: isOpen ? "#fff" : item.accent,
              transition: "all 0.3s",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className="font-black text-base leading-snug"
            style={{ color: "#1e1b4b" }}
          >
            {item.q}
          </span>
        </div>

        {/* chevron */}
        <span
          className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: isOpen ? item.accent : item.tagBg,
            color: isOpen ? "#fff" : item.accent,
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            border: `1.5px solid ${item.border}`,
          }}
        >
          <FaChevronDown size={12} />
        </span>
      </button>

      {/* answer */}
      <div
        style={{
          maxHeight: isOpen ? "280px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <div className="px-6 pb-6 pl-[76px]">
          <div
            className="h-0.5 mb-4 rounded-full"
            style={{
              background: `linear-gradient(90deg,${item.accent}55,transparent)`,
            }}
          />
          <p className="text-sm leading-relaxed" style={{ color: "#6b7280", margin: 0 }}>
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      className="relative py-20 px-5 sm:px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#fdf2f8 0%,#fef9ee 35%,#eff6ff 70%,#f5f3ff 100%)",
      }}
    >
      {/* rainbow top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg,#a855f7,#ec4899,#f43f5e,#f97316,#eab308,#22c55e,#06b6d4,#6366f1)",
        }}
      />

      {/* blobs */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full"
        style={{ background: "rgba(99,102,241,0.05)", filter: "blur(100px)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* heading */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
            style={{
              background: "linear-gradient(135deg,#fef9c3,#fde68a)",
              color: "#92400e",
              border: "1.5px solid #fcd34d",
            }}
          >
            ❓ FAQs
          </span>
          <h2
            className="font-black"
            style={{
              fontSize: "clamp(1.8rem,4vw,2.8rem)",
              letterSpacing: "-0.02em",
              color: "#1e1b4b",
              margin: "0 0 14px",
            }}
          >
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#f97316,#eab308,#ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Questions
            </span>
          </h2>
          <p
            className="text-gray-500 max-w-lg mx-auto text-base leading-relaxed"
            style={{ margin: "0 auto" }}
          >
            Got a question? We've got answers. If you can't find what you're looking for,
            reach out to us anytime.
          </p>
        </div>

        {/* accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>


      </div>
    </section>
  );
}
