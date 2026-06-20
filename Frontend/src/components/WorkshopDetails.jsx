import React from "react";
import { FaUsers, FaClock, FaLaptop, FaRupeeSign, FaCalendarAlt } from "react-icons/fa";

const details = [
  {
    icon: <FaUsers size={26} />,
    label: "Age Group",
    value: "8 – 14 Years",
    accent: "#a855f7",
    lightBg: "#faf5ff",
    border: "#e9d5ff",
    tag: "Perfect for kids",
    emoji: "👦",
  },
  {
    icon: <FaClock size={26} />,
    label: "Duration",
    value: "4 Weeks",
    accent: "#0891b2",
    lightBg: "#ecfeff",
    border: "#a5f3fc",
    tag: "Intensive learning",
    emoji: "⏱️",
  },
  {
    icon: <FaLaptop size={26} />,
    label: "Mode",
    value: "Online",
    accent: "#16a34a",
    lightBg: "#f0fdf4",
    border: "#bbf7d0",
    tag: "From anywhere",
    emoji: "🌍",
  },
  {
    icon: <FaRupeeSign size={26} />,
    label: "Workshop Fee",
    value: "₹2,999",
    accent: "#ea580c",
    lightBg: "#fff7ed",
    border: "#fed7aa",
    tag: "All inclusive",
    emoji: "💰",
  },
  {
    icon: <FaCalendarAlt size={26} />,
    label: "Start Date",
    value: "15 July 2026",
    accent: "#dc2626",
    lightBg: "#fff1f2",
    border: "#fecdd3",
    tag: "Mark your calendar",
    emoji: "📅",
  },
];

export default function WorkshopDetails() {
  return (
    <section
      id="details"
      className="relative py-20 px-5 sm:px-8 overflow-hidden"
      style={{ background: "linear-gradient(180deg,#ffffff 0%,#fafafa 100%)" }}
    >
      {/* rainbow top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg,#f43f5e,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#a855f7,#ec4899)",
        }}
      />

      {/* light pastel blobs */}
      <div
        className="pointer-events-none absolute top-10 left-0 w-80 h-80 rounded-full"
        style={{ background: "rgba(168,85,247,0.06)", filter: "blur(70px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-10 right-0 w-72 h-72 rounded-full"
        style={{ background: "rgba(6,182,212,0.07)", filter: "blur(70px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
            style={{
              background: "linear-gradient(135deg,#ede9fe,#dbeafe)",
              color: "#6d28d9",
              border: "1.5px solid #c4b5fd",
            }}
          >
            🗂️ Workshop Snapshot
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
            Everything You Need to{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#f43f5e,#f97316,#eab308,#22c55e,#06b6d4,#6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Know
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed" style={{ margin: "0 auto" }}>
            All the key details about our summer programme at a glance.
          </p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {details.map((d, i) => (
            <div
              key={i}
              className="group relative rounded-3xl p-6 cursor-default transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: d.lightBg,
                border: `2px solid ${d.border}`,
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              }}
            >
              {/* emoji corner */}
              <div
                className="absolute top-3 right-4 text-xl opacity-20 group-hover:opacity-40 transition-opacity"
              >
                {d.emoji}
              </div>

              {/* icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg"
                style={{ background: d.accent }}
              >
                {d.icon}
              </div>

              <p
                className="text-xs font-black uppercase tracking-widest mb-1"
                style={{ color: `${d.accent}bb` }}
              >
                {d.label}
              </p>
              <p className="font-black text-xl leading-tight" style={{ color: "#1e1b4b", margin: "0 0 8px" }}>
                {d.value}
              </p>

              {/* tag pill */}
              <span
                className="text-[11px] font-bold px-3 py-1 rounded-full"
                style={{
                  background: `${d.accent}15`,
                  color: d.accent,
                  border: `1px solid ${d.accent}33`,
                }}
              >
                {d.tag}
              </span>

              {/* bottom colour strip */}
              <div
                className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg,${d.accent},${d.border})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
