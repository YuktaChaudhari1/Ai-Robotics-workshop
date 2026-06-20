import React from "react";
import { FaCheckCircle, FaRobot, FaBrain, FaCode, FaProjectDiagram, FaLightbulb } from "react-icons/fa";

const outcomes = [
  {
    icon: <FaCode size={20} />,
    title: "Build Real AI Projects",
    desc: "Create working AI applications using Python and beginner-friendly frameworks — no prior experience needed.",
    accent: "#6366f1",
    lightBg: "#eef2ff",
    border: "#c7d2fe",
    checkColor: "#6366f1",
    num: "01",
  },
  {
    icon: <FaRobot size={20} />,
    title: "Design & Program Robots",
    desc: "Assemble and code your own robot using sensors, actuators, and microcontrollers in guided lab sessions.",
    accent: "#0891b2",
    lightBg: "#ecfeff",
    border: "#a5f3fc",
    checkColor: "#0891b2",
    num: "02",
  },
  {
    icon: <FaBrain size={20} />,
    title: "Understand Machine Learning",
    desc: "Learn how machines learn from data through interactive games, visual tools, and hands-on experiments.",
    accent: "#16a34a",
    lightBg: "#f0fdf4",
    border: "#bbf7d0",
    checkColor: "#16a34a",
    num: "03",
  },
  {
    icon: <FaProjectDiagram size={20} />,
    title: "Solve Real-World Problems",
    desc: "Apply coding and automation to solve everyday challenges in agriculture, health, and the environment.",
    accent: "#ea580c",
    lightBg: "#fff7ed",
    border: "#fed7aa",
    checkColor: "#ea580c",
    num: "04",
  },
  {
    icon: <FaLightbulb size={20} />,
    title: "Develop an Innovator Mindset",
    desc: "Build confidence, creativity, and critical thinking — skills that last a lifetime beyond the classroom.",
    accent: "#a855f7",
    lightBg: "#faf5ff",
    border: "#e9d5ff",
    checkColor: "#a855f7",
    num: "05",
  },
];

export default function LearningOutcomes() {
  return (
    <section
      id="outcomes"
      className="relative py-20 px-5 sm:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(135deg,#fefce8 0%,#f0fdf4 35%,#ecfeff 65%,#faf5ff 100%)",
      }}
    >
      {/* rainbow top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg,#22c55e,#06b6d4,#6366f1,#a855f7,#ec4899,#f43f5e,#f97316,#eab308)",
        }}
      />

      {/* blobs */}
      <div
        className="pointer-events-none absolute -left-16 top-1/3 w-72 h-72 rounded-full"
        style={{ background: "rgba(34,197,94,0.08)", filter: "blur(70px)" }}
      />
      <div
        className="pointer-events-none absolute -right-16 bottom-1/3 w-72 h-72 rounded-full"
        style={{ background: "rgba(168,85,247,0.08)", filter: "blur(70px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* heading */}
        <div className="text-center mb-14">
          <span
            className="inline-block px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
            style={{
              background: "linear-gradient(135deg,#dcfce7,#d1fae5)",
              color: "#15803d",
              border: "1.5px solid #86efac",
            }}
          >
            ✅ What You'll Learn
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
            Learning{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#22c55e,#06b6d4,#6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Outcomes
            </span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base" style={{ margin: "0 auto" }}>
            Your child will walk away with real skills, confidence, and a portfolio of hands-on projects.
          </p>
        </div>

        {/* outcome cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {outcomes.map((o, i) => (
            <div
              key={i}
              className="group flex gap-5 items-start rounded-3xl p-6 cursor-default transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{
                background: o.lightBg,
                border: `2px solid ${o.border}`,
                boxShadow: "0 2px 14px rgba(0,0,0,0.05)",
              }}
            >
              {/* icon box */}
              <div
                className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg"
                style={{ background: o.accent }}
              >
                {o.icon}
              </div>

              <div className="flex-1 min-w-0">
                {/* number chip */}
                <span
                  className="inline-block text-[10px] font-black px-2 py-0.5 rounded-md mb-2"
                  style={{
                    background: `${o.accent}18`,
                    color: o.accent,
                    border: `1px solid ${o.accent}33`,
                  }}
                >
                  {o.num}
                </span>
                <div className="flex items-start gap-2 mb-1.5">
                  <FaCheckCircle
                    className="mt-0.5 shrink-0"
                    size={15}
                    style={{ color: o.checkColor }}
                  />
                  <h3
                    className="font-black text-base leading-snug"
                    style={{ color: "#1e1b4b", margin: 0 }}
                  >
                    {o.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280", margin: 0 }}>
                  {o.desc}
                </p>
              </div>
            </div>
          ))}

          {/* certificate banner */}
          <div
            className="md:col-span-2 rounded-3xl p-7 flex flex-col sm:flex-row items-center gap-5 justify-between"
            style={{
              background:
                "linear-gradient(135deg,#fef3c7 0%,#fce7f3 50%,#ede9fe 100%)",
              border: "2px solid #fde68a",
              boxShadow: "0 4px 24px rgba(251,191,36,0.15)",
            }}
          >
            <div>
              <p
                className="font-black text-xl mb-1"
                style={{ color: "#1e1b4b", margin: "0 0 6px" }}
              >
                🎓 Earn a Certificate of Completion
              </p>
              <p className="text-sm text-gray-500" style={{ margin: 0 }}>
                Every student receives a digitally verifiable certificate and a portfolio review
                session upon completing the programme.
              </p>
            </div>
            <a
              href="#register"
              className="shrink-0 px-7 py-3.5 rounded-2xl font-black text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg,#f43f5e,#f97316,#eab308)",
                boxShadow: "0 4px 18px rgba(244,63,94,0.3)",
                textDecoration: "none",
              }}
            >
              Get Certified →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
