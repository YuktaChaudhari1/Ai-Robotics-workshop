import React, { useEffect, useState } from "react";
import {
  FaRobot,
  FaCalendarAlt,
  FaClock,
  FaLaptop,
  FaRupeeSign,
  FaUsers,
  FaArrowRight,
  FaPlay,
  FaStar,
  FaBolt,
  FaCode,
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";

/* ── highlight cards data ─────────────────────────────────────────── */
const highlights = [
  { icon: <FaUsers />, label: "Age Group",  value: "8–14 Years",   bg: "#fff0fb", accent: "#e040ac", border: "#f9a8d4" },
  { icon: <FaClock />, label: "Duration",   value: "4 Weeks",      bg: "#eff6ff", accent: "#2563eb", border: "#93c5fd" },
  { icon: <FaLaptop />,label: "Mode",       value: "Online",       bg: "#f0fdf4", accent: "#16a34a", border: "#86efac" },
  { icon: <FaRupeeSign/>,label:"Fee",       value: "₹2,999",       bg: "#fff7ed", accent: "#ea580c", border: "#fdba74" },
  { icon: <FaCalendarAlt/>,label:"Starts",  value: "15 Jul 2026",  bg: "#fefce8", accent: "#ca8a04", border: "#fde047" },
];

/* ── floating blobs ───────────────────────────────────────────────── */
const blobs = [
  { size:340, top:"-80px",  left:"-60px",   color:"rgba(251,113,133,0.18)", dur:"7s",  delay:"0s"   },
  { size:280, top:"55%",    right:"-50px",  color:"rgba(99,102,241,0.15)",  dur:"9s",  delay:"1s"   },
  { size:240, bottom:"-60px",left:"35%",    color:"rgba(250,204,21,0.18)",  dur:"8s",  delay:"2s"   },
  { size:200, top:"20%",    left:"45%",     color:"rgba(52,211,153,0.15)",  dur:"6s",  delay:"0.5s" },
  { size:160, top:"70%",    left:"8%",      color:"rgba(139,92,246,0.14)",  dur:"10s", delay:"3s"   },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap');

        .hero-section { font-family:'Nunito',sans-serif; }

        @keyframes floatBlob {
          0%,100%{ transform:translateY(0) scale(1); }
          50%    { transform:translateY(-28px) scale(1.05); }
        }
        @keyframes floatImg {
          0%,100%{ transform:translateY(0); }
          50%    { transform:translateY(-12px); }
        }
        @keyframes spinRing {
          from{ transform:rotate(0deg); }
          to  { transform:rotate(360deg); }
        }
        @keyframes fadeUp {
          from{ opacity:0; transform:translateY(26px); }
          to  { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeRight {
          from{ opacity:0; transform:translateX(28px); }
          to  { opacity:1; transform:translateX(0); }
        }
        @keyframes marquee {
          from{ transform:translateX(0); }
          to  { transform:translateX(-50%); }
        }
        @keyframes orbPop {
          0%,100%{ transform:scale(1);   opacity:.6; }
          50%    { transform:scale(1.45);opacity:1;  }
        }
        @keyframes pulseRing {
          0%,100%{ box-shadow:0 0 0 0 rgba(168,85,247,0.4); }
          50%    { box-shadow:0 0 0 14px rgba(168,85,247,0); }
        }

        .h-blob  { animation:floatBlob var(--dur) var(--delay) ease-in-out infinite; }
        .h-float { animation:floatImg 4s ease-in-out infinite; }
        .h-spin  { animation:spinRing 9s linear infinite; }
        .h-spin2 { animation:spinRing 13s linear reverse infinite; }
        .h-orb   { animation:orbPop 3s ease-in-out infinite; }
        .h-fadeUp    { animation:fadeUp   0.7s ease forwards; }
        .h-fadeRight { animation:fadeRight 0.7s ease forwards; }
        .h-pulse { animation:pulseRing 2.8s ease-in-out infinite; }

        /* white frosted chip */
        .chip-white {
          background:rgba(255,255,255,0.82);
          backdrop-filter:blur(14px);
          -webkit-backdrop-filter:blur(14px);
          border:1px solid rgba(255,255,255,0.95);
          box-shadow:0 4px 20px rgba(0,0,0,0.08);
          transition:transform 0.25s;
        }
        .chip-white:hover { transform:translateY(-3px) scale(1.03); }

        /* primary CTA */
        .btn-enroll {
          background:linear-gradient(135deg,#f43f5e,#f97316,#eab308);
          transition:all 0.3s ease;
          box-shadow:0 6px 22px rgba(244,63,94,0.35);
        }
        .btn-enroll:hover {
          transform:scale(1.06) translateY(-2px);
          box-shadow:0 12px 32px rgba(244,63,94,0.45);
        }

        /* secondary CTA */
        .btn-learn {
          background:rgba(255,255,255,0.75);
          backdrop-filter:blur(10px);
          border:2px solid rgba(99,102,241,0.4);
          color:#4338ca;
          transition:all 0.3s ease;
        }
        .btn-learn:hover {
          background:rgba(255,255,255,0.95);
          border-color:#6366f1;
          transform:scale(1.05) translateY(-2px);
          box-shadow:0 8px 24px rgba(99,102,241,0.2);
        }
      `}</style>

      {/* ═══════════════════════════════ HERO ═══════════════════════════════ */}
      <section
        className="hero-section relative min-h-screen w-full overflow-hidden flex flex-col"
        style={{
          background:
            "linear-gradient(135deg,#fff0fb 0%,#fef3c7 20%,#ecfdf5 40%,#eff6ff 60%,#f5f3ff 80%,#fdf2f8 100%)",
        }}
      >
        {/* rainbow top bar */}
        <div
          className="h-1.5 w-full"
          style={{ background:"linear-gradient(90deg,#f43f5e,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#a855f7,#ec4899)" }}
        />

        {/* floating blobs */}
        {blobs.map((b, i) => (
          <div
            key={i}
            className="h-blob pointer-events-none absolute rounded-full"
            style={{
              width:b.size, height:b.size,
              top:b.top, left:b.left, right:b.right, bottom:b.bottom,
              background:b.color, filter:"blur(55px)",
              "--dur":b.dur, "--delay":b.delay,
            }}
          />
        ))}

        {/* decorative orbs */}
        {[
          { top:"10%",  left:"6%",   s:16, c:"#f43f5e" },
          { top:"18%",  right:"10%", s:12, c:"#eab308" },
          { top:"68%",  left:"4%",   s:14, c:"#22c55e" },
          { bottom:"12%",right:"6%", s:18, c:"#6366f1" },
          { top:"42%",  left:"52%",  s:10, c:"#06b6d4" },
          { top:"30%",  left:"20%",  s:8,  c:"#a855f7" },
        ].map((o, i) => (
          <div
            key={i}
            className="h-orb pointer-events-none absolute rounded-full"
            style={{
              width:o.s, height:o.s,
              top:o.top, left:o.left, right:o.right, bottom:o.bottom,
              background:o.c, animationDelay:`${i*0.5}s`,
              boxShadow:`0 0 ${o.s*2}px ${o.c}88`,
            }}
          />
        ))}

        {/* ── main grid ── */}
        <div className="relative z-10 flex-1 flex items-center">
          <div className="max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-14 py-14 lg:py-0">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">

              {/* ── LEFT: text ── */}
              <div className={`text-left ${visible ? "h-fadeUp opacity-100" : "opacity-0"}`}>

                {/* badge */}
                <div className="inline-flex items-center gap-2 mb-6">
                  <span
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-black shadow-lg"
                    style={{
                      background:"linear-gradient(135deg,#f43f5e,#f97316,#eab308)",
                      color:"#fff",
                    }}
                  >
                    <FaBolt className="animate-bounce" />
                    🚀 Summer 2026 Workshop
                    <FaStar />
                  </span>
                </div>

                {/* heading */}
                <h1
                  className="font-black leading-tight"
                  style={{
                    fontSize:"clamp(2rem,5vw,3.7rem)",
                    letterSpacing:"-0.02em",
                    lineHeight:"1.1",
                    margin:"0 0 18px",
                    color:"#1e1b4b",
                  }}
                >
                  <span
                    style={{
                      background:"linear-gradient(90deg,#f43f5e,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#a855f7)",
                      WebkitBackgroundClip:"text",
                      WebkitTextFillColor:"transparent",
                      backgroundClip:"text",
                    }}
                  >
                    AI &amp; Robotics
                  </span>
                  <br />
                  <span style={{ color:"#1e1b4b" }}>Summer Workshop</span>
                </h1>

                {/* sub-heading */}
                <p
                  className="leading-relaxed mb-8 max-w-xl"
                  style={{ fontSize:"clamp(0.97rem,2vw,1.12rem)", color:"#4b5563", margin:"0 0 28px" }}
                >
                  Explore the exciting world of{" "}
                  <span style={{ color:"#f97316", fontWeight:800 }}>Artificial Intelligence</span>,{" "}
                  <span style={{ color:"#06b6d4", fontWeight:800 }}>Robotics</span>,{" "}
                  <span style={{ color:"#ec4899", fontWeight:800 }}>Coding</span>, and{" "}
                  <span style={{ color:"#22c55e", fontWeight:800 }}>Automation</span>{" "}
                  through fun hands-on projects designed for young innovators.
                </p>

                {/* highlight cards */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {highlights.map((h, i) => (
                    <div
                      key={i}
                      className="chip-white rounded-2xl p-4 cursor-default"
                      style={{ background:h.bg, border:`1.5px solid ${h.border}` }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center text-white mb-2 text-base shadow"
                        style={{ background:h.accent }}
                      >
                        {h.icon}
                      </div>
                      <p className="text-xs font-bold uppercase tracking-wide mb-0.5" style={{ color:`${h.accent}99` }}>
                        {h.label}
                      </p>
                      <p className="font-black text-sm" style={{ color:"#1e1b4b" }}>{h.value}</p>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-4 items-center">
                  <a
                    href="#register"
                    className="btn-enroll text-white font-black px-8 py-4 rounded-2xl flex items-center gap-2 text-base"
                    aria-label="Enroll Now"
                    style={{ textDecoration:"none" }}
                  >
                    <FaRobot />
                    Enroll Now
                    <FaArrowRight className="text-sm" />
                  </a>
                  <a
                    href="#details"
                    className="btn-learn font-bold px-7 py-4 rounded-2xl flex items-center gap-2 text-base"
                    aria-label="Learn More"
                    style={{ textDecoration:"none" }}
                  >
                    <FaPlay className="text-xs" />
                    Learn More
                  </a>
                </div>

                {/* social proof */}
                <div className="mt-7 flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {["🧒","👦","👧","🧑"].map((e, i) => (
                      <div
                        key={i}
                        className="w-9 h-9 rounded-full flex items-center justify-center text-sm shadow border-2 border-white"
                        style={{ background:"#f3f4f6" }}
                      >
                        {e}
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-semibold" style={{ color:"#6b7280" }}>
                    <span style={{ color:"#f97316", fontWeight:900 }}>1,200+</span> young innovators enrolled!
                  </p>
                </div>
              </div>

              {/* ── RIGHT: robot image ── */}
              <div
                className={`flex justify-center items-center relative ${visible ? "h-fadeRight opacity-100" : "opacity-0"}`}
                style={{ animationDelay:"0.3s" }}
              >
                {/* spinning rings */}
                <div
                  className="h-spin absolute rounded-full pointer-events-none"
                  style={{ width:420, height:420, border:"2px dashed rgba(168,85,247,0.25)" }}
                />
                <div
                  className="h-spin2 absolute rounded-full pointer-events-none"
                  style={{ width:340, height:340, border:"1.5px dashed rgba(6,182,212,0.2)" }}
                />

                {/* rainbow glow */}
                <div
                  className="absolute rounded-full pointer-events-none"
                  style={{
                    width:260, height:260,
                    background:"radial-gradient(circle,rgba(244,63,94,0.12) 0%,rgba(99,102,241,0.12) 50%,transparent 70%)",
                    filter:"blur(28px)",
                  }}
                />

                {/* robot */}
                <div className="h-float relative z-10">
                  <div
                    className="h-pulse rounded-3xl overflow-hidden"
                    style={{
                      background:"linear-gradient(135deg,rgba(244,63,94,0.15),rgba(99,102,241,0.15))",
                      padding:"6px",
                    }}
                  >
                    <img
                      src="/ai_robot_hero.png"
                      alt="Friendly AI robot for kids"
                      className="rounded-3xl w-full object-contain drop-shadow-2xl"
                      style={{ maxWidth:"420px", maxHeight:"460px" }}
                    />
                  </div>

                  {/* chip: code */}
                  <div
                    className="chip-white absolute -left-8 top-10 rounded-2xl px-4 py-2.5 flex items-center gap-2"
                    style={{ border:"1.5px solid #bfdbfe" }}
                  >
                    <FaCode style={{ color:"#06b6d4", fontSize:"1.1rem" }} />
                    <div>
                      <p className="text-xs font-black leading-none" style={{ color:"#1e1b4b", margin:0 }}>Learn to Code</p>
                      <p className="text-[10px]" style={{ color:"#06b6d4", margin:0 }}>Python · Scratch · AI</p>
                    </div>
                  </div>

                  {/* chip: brain */}
                  <div
                    className="chip-white absolute -right-6 top-1/2 rounded-2xl px-4 py-2.5 flex items-center gap-2"
                    style={{ border:"1.5px solid #fbcfe8" }}
                  >
                    <GiBrain style={{ color:"#ec4899", fontSize:"1.1rem" }} />
                    <div>
                      <p className="text-xs font-black leading-none" style={{ color:"#1e1b4b", margin:0 }}>AI Projects</p>
                      <p className="text-[10px]" style={{ color:"#ec4899", margin:0 }}>Smart Apps</p>
                    </div>
                  </div>

                  {/* chip: robot */}
                  <div
                    className="chip-white absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-2xl px-5 py-2.5 flex items-center gap-2"
                    style={{ border:"1.5px solid #fde68a" }}
                  >
                    <FaRobot style={{ color:"#f97316", fontSize:"1.1rem" }} />
                    <div>
                      <p className="text-xs font-black leading-none" style={{ color:"#1e1b4b", margin:0 }}>Build Robots</p>
                      <p className="text-[10px]" style={{ color:"#f97316", margin:0 }}>Hands-on Projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* marquee strip */}
        <div
          className="relative z-10 py-3.5 overflow-hidden"
          style={{
            background:"linear-gradient(90deg,#f43f5e,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#a855f7,#ec4899)",
          }}
        >
          <div className="flex gap-8 whitespace-nowrap" style={{ animation:"marquee 22s linear infinite" }}>
            {[
              "🤖 Robotics","🧠 Artificial Intelligence","💻 Python Coding","⚙️ Automation",
              "🔬 STEM Projects","🛸 Machine Learning","🎮 Game Dev","🔭 Space Tech",
              "🤖 Robotics","🧠 Artificial Intelligence","💻 Python Coding","⚙️ Automation",
              "🔬 STEM Projects","🛸 Machine Learning","🎮 Game Dev","🔭 Space Tech",
            ].map((tag, i) => (
              <span key={i} className="text-sm font-black text-white tracking-wide">
                {tag}<span className="mx-4 opacity-60">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
