import React from "react";
import {
  FaRobot,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaHeart,
  FaArrowUp,
} from "react-icons/fa";

const navLinks = {
  "Quick Links": [
    { label: "Workshop Details", href: "#details" },
    { label: "Learning Outcomes", href: "#outcomes" },
    { label: "FAQs", href: "#faq" },
    { label: "Register Now", href: "#register" },
  ],
  Policies: [
    { label: "Privacy Policy", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

const socials = [
  { icon: <FaFacebookF size={13} />, href: "#", label: "Facebook", color: "#4267B2" },
  { icon: <FaTwitter size={13} />,   href: "#", label: "Twitter",  color: "#1DA1F2" },
  { icon: <FaInstagram size={13} />, href: "#", label: "Instagram",color: "#E1306C" },
  { icon: <FaYoutube size={13} />,   href: "#", label: "YouTube",  color: "#FF0000" },
  { icon: <FaLinkedinIn size={13} />,href: "#", label: "LinkedIn", color: "#0077B5" },
];

const contactItems = [
  { icon: <FaMapMarkerAlt size={12} />, text: "Online — Anywhere in India", color: "#a855f7" },
  { icon: <FaEnvelope size={12} />,     text: "hello@airoboticskids.in",    color: "#0891b2" },
  { icon: <FaPhone size={12} />,         text: "+91 98765 43210",            color: "#16a34a" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#1e1b4b" }}
    >
      {/* rainbow top strip */}
      <div
        className="h-1.5 w-full"
        style={{
          background:
            "linear-gradient(90deg,#f43f5e,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#a855f7,#ec4899)",
        }}
      />

      {/* subtle blobs */}
      <div
        className="pointer-events-none absolute top-0 left-1/4 w-80 h-80 rounded-full"
        style={{ background: "rgba(99,102,241,0.08)", filter: "blur(80px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-72 h-72 rounded-full"
        style={{ background: "rgba(168,85,247,0.07)", filter: "blur(70px)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        {/* top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg,#f43f5e,#f97316,#eab308)",
                }}
              >
                <FaRobot size={22} className="text-white" />
              </div>
              <div>
                <p
                  className="font-black text-base leading-none"
                  style={{ color: "#fff", margin: 0 }}
                >
                  AI &amp; Robotics
                </p>
                <p
                  className="text-xs font-semibold leading-none mt-0.5"
                  style={{ color: "rgba(255,255,255,0.45)", margin: 0 }}
                >
                  Summer Workshop 2026
                </p>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed max-w-sm mb-6"
              style={{ color: "rgba(255,255,255,0.45)", margin: "0 0 24px" }}
            >
              Empowering young minds aged 8–14 to explore, create, and innovate through
              Artificial Intelligence, Robotics, and Coding — from the comfort of home.
            </p>

            {/* contact */}
            <div className="flex flex-col gap-3">
              {contactItems.map((c, i) => (
                <div key={i} className="flex items-center gap-2.5 text-sm">
                  <span
                    className="w-6 h-6 rounded-lg flex items-center justify-center text-white shrink-0"
                    style={{ background: c.color }}
                  >
                    {c.icon}
                  </span>
                  <span style={{ color: "rgba(255,255,255,0.55)" }}>{c.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* link columns */}
          {Object.entries(navLinks).map(([group, items]) => (
            <div key={group}>
              <p
                className="font-black text-sm uppercase tracking-widest mb-5"
                style={{ color: "#fff", margin: "0 0 20px" }}
              >
                {group}
              </p>
              <ul className="flex flex-col gap-3" style={{ padding: 0, margin: 0, listStyle: "none" }}>
                {items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-sm transition-colors duration-200 hover:text-white flex items-center gap-1.5 group"
                      style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full transition-all duration-300 group-hover:w-2"
                        style={{ background: "#6366f1", display: "inline-block" }}
                      />
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* rainbow divider */}
        <div
          className="mb-8 h-px"
          style={{
            background:
              "linear-gradient(90deg,transparent,rgba(99,102,241,0.4),rgba(168,85,247,0.4),transparent)",
          }}
        />

        {/* bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)", margin: 0 }}>
            © 2026 AI &amp; Robotics Summer Workshop. Made with{" "}
            <FaHeart
              size={10}
              className="inline-block mx-0.5"
              style={{ color: "#f43f5e" }}
            />{" "}
            for young innovators everywhere.
          </p>

          {/* socials */}
          <div className="flex items-center gap-2.5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${s.color}22`;
                  e.currentTarget.style.borderColor = `${s.color}66`;
                  e.currentTarget.style.color = s.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                }}
              >
                {s.icon}
              </a>
            ))}

            {/* back-to-top */}
            <a
              href="#"
              aria-label="Back to top"
              className="w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 ml-2"
              style={{
                background: "linear-gradient(135deg,#6366f1,#a855f7)",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              <FaArrowUp size={11} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
