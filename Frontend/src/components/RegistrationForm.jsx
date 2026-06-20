import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaRocket, FaCheckCircle, FaShieldAlt } from "react-icons/fa";

const INITIAL = { name: "", email: "", phone: "" };

const fields = [
  {
    name: "name",
    label: "Full Name",
    type: "text",
    placeholder: "e.g. Aarav Sharma",
    icon: <FaUser size={13} />,
    accent: "#6366f1",
    lightBg: "#eef2ff",
    border: "#c7d2fe",
    focusBorder: "#6366f1",
  },
  {
    name: "email",
    label: "Email Address",
    type: "email",
    placeholder: "e.g. aarav@gmail.com",
    icon: <FaEnvelope size={13} />,
    accent: "#0891b2",
    lightBg: "#ecfeff",
    border: "#a5f3fc",
    focusBorder: "#0891b2",
  },
  {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "e.g. 9876543210",
    icon: <FaPhone size={13} />,
    accent: "#16a34a",
    lightBg: "#f0fdf4",
    border: "#bbf7d0",
    focusBorder: "#16a34a",
  },
];

export default function RegistrationForm() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) {
      e.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) {
      e.phone = "Phone number is required.";
    } else if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, ""))) {
      e.phone = "Enter a valid 10-digit Indian mobile number.";
    }
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          contact: form.phone,
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || "Failed to submit enquiry");
      }
      
      setSubmitted(true);
    } catch (err) {
      setErrors({ phone: err.message || "An error occurred while submitting." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="register"
      className="relative py-20 px-5 sm:px-8 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg,#fdf4ff 0%,#fef9ee 30%,#ecfeff 65%,#f0fdf4 100%)",
      }}
    >
      {/* rainbow top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg,#ec4899,#f43f5e,#f97316,#eab308,#22c55e,#06b6d4,#6366f1,#a855f7)",
        }}
      />

      {/* blobs */}
      <div
        className="pointer-events-none absolute -top-16 left-1/3 w-[480px] h-[480px] rounded-full"
        style={{ background: "rgba(168,85,247,0.06)", filter: "blur(90px)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-10 w-72 h-72 rounded-full"
        style={{ background: "rgba(6,182,212,0.07)", filter: "blur(80px)" }}
      />

      <div className="relative z-10 max-w-xl mx-auto">
        {/* heading */}
        <div className="text-center mb-12">
          <span
            className="inline-block px-5 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4"
            style={{
              background: "linear-gradient(135deg,#fce7f3,#fbcfe8)",
              color: "#be185d",
              border: "1.5px solid #f9a8d4",
            }}
          >
            🎟️ Limited Seats Available
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
            Register{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#ec4899,#a855f7,#6366f1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your Spot
            </span>
          </h2>
          <p className="text-gray-500 text-base leading-relaxed" style={{ margin: "0 auto" }}>
            Fill in the details below and our team will reach out within 24 hours with
            the payment link and your onboarding kit.
          </p>
        </div>

        {/* form card */}
        <div
          className="rounded-3xl p-8 sm:p-10"
          style={{
            background: "#ffffff",
            border: "2px solid #e0e7ff",
            boxShadow: "0 8px 48px rgba(99,102,241,0.1)",
          }}
        >
          {submitted ? (
            /* ── success ── */
            <div className="flex flex-col items-center text-center gap-5 py-6">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg,#dcfce7,#bbf7d0)",
                  border: "3px solid #86efac",
                }}
              >
                <FaCheckCircle size={36} style={{ color: "#16a34a" }} />
              </div>
              <div>
                <h3
                  className="font-black text-2xl mb-2"
                  style={{ color: "#1e1b4b", margin: "0 0 8px" }}
                >
                  You're Enrolled! 🎉
                </h3>
                <p className="text-sm leading-relaxed text-gray-500" style={{ margin: 0 }}>
                  Thanks,{" "}
                  <span className="font-black" style={{ color: "#6366f1" }}>
                    {form.name}
                  </span>
                  ! We've received your registration. Check{" "}
                  <span className="font-bold" style={{ color: "#0891b2" }}>
                    {form.email}
                  </span>{" "}
                  for a confirmation mail with next steps.
                </p>
              </div>

              {/* confetti pills */}
              <div className="flex flex-wrap gap-2 justify-center">
                {["🤖 AI Learning","💻 Coding","🔬 Robotics","🧠 Machine Learning"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold px-3 py-1 rounded-full"
                    style={{ background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => { setForm(INITIAL); setSubmitted(false); }}
                className="mt-1 px-7 py-3 rounded-2xl text-sm font-black text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg,#6366f1,#a855f7)",
                  boxShadow: "0 4px 16px rgba(99,102,241,0.3)",
                }}
              >
                Register Another Student
              </button>
            </div>
          ) : (
            /* ── form ── */
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              {fields.map((f) => (
                <div key={f.name} className="flex flex-col gap-1.5">
                  <label
                    htmlFor={f.name}
                    className="text-sm font-black flex items-center gap-2"
                    style={{ color: "#374151" }}
                  >
                    <span
                      className="w-6 h-6 rounded-lg flex items-center justify-center text-white"
                      style={{ background: f.accent }}
                    >
                      {f.icon}
                    </span>
                    {f.label}
                  </label>

                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    placeholder={f.placeholder}
                    value={form[f.name]}
                    onChange={handleChange}
                    aria-describedby={errors[f.name] ? `${f.name}-error` : undefined}
                    aria-invalid={!!errors[f.name]}
                    className="w-full px-4 py-3.5 rounded-2xl text-sm outline-none transition-all duration-200"
                    style={{
                      background: errors[f.name] ? "#fff1f2" : f.lightBg,
                      border: `2px solid ${errors[f.name] ? "#fca5a5" : f.border}`,
                      color: "#1e1b4b",
                      fontFamily: "inherit",
                      boxShadow: errors[f.name] ? "0 0 0 3px rgba(252,165,165,0.25)" : "none",
                    }}
                    onFocus={(e) => {
                      if (!errors[f.name]) {
                        e.target.style.border = `2px solid ${f.focusBorder}`;
                        e.target.style.boxShadow = `0 0 0 3px ${f.accent}22`;
                      }
                    }}
                    onBlur={(e) => {
                      if (!errors[f.name]) {
                        e.target.style.border = `2px solid ${f.border}`;
                        e.target.style.boxShadow = "none";
                      }
                    }}
                  />

                  {errors[f.name] && (
                    <p
                      id={`${f.name}-error`}
                      role="alert"
                      className="text-xs font-bold"
                      style={{ color: "#dc2626", margin: 0 }}
                    >
                      ⚠️ {errors[f.name]}
                    </p>
                  )}
                </div>
              ))}

              {/* submit */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full py-4 rounded-2xl font-black text-white text-base flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: loading
                    ? "#c4b5fd"
                    : "linear-gradient(135deg,#f43f5e,#f97316,#eab308)",
                  boxShadow: "0 6px 24px rgba(244,63,94,0.3)",
                }}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin"
                      width="18" height="18"
                      viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2.5"
                    >
                      <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                      <path d="M12 2a10 10 0 0 1 10 10" />
                    </svg>
                    Submitting…
                  </>
                ) : (
                  <>
                    <FaRocket />
                    Enroll Now — ₹2,999
                  </>
                )}
              </button>

              {/* trust badge */}
              <div className="flex items-center justify-center gap-2 mt-1">
                <FaShieldAlt size={12} style={{ color: "#22c55e" }} />
                <p className="text-xs text-gray-400" style={{ margin: 0 }}>
                  Your information is 100% secure and never shared with anyone.
                </p>
              </div>
            </form>
          )}
        </div>

        {/* urgency banner */}
        <div
          className="mt-5 rounded-2xl p-4 flex items-center gap-3 justify-center"
          style={{
            background: "linear-gradient(135deg,#fef9c3,#fef3c7)",
            border: "1.5px solid #fcd34d",
          }}
        >
          <span className="text-lg">⚡</span>
          <p className="text-sm font-bold" style={{ color: "#92400e", margin: 0 }}>
            Only <span style={{ color: "#dc2626" }}>12 seats</span> remaining for July batch — secure yours today!
          </p>
        </div>
      </div>
    </section>
  );
}
