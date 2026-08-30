import { useContext, useRef, useState, useEffect } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { FaWhatsapp, FaMapMarkerAlt, FaGithub } from "react-icons/fa";
import { NavHoverContext } from "../../context/MenuContext";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import indiaFlag from "../../assets/india.png";
import { FlipLink1 } from "./FlipLink1";
import { SiLeetcode } from "react-icons/si";

const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

// ================= ICONS =================
function MailIcon({ size = 18, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps} className={className}>
      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function InstagramIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps} className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
    </svg>
  );
}

function GithubIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps} className={className}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  );
}

function LinkedinIcon({ size = 15, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" {...iconProps} className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A5.98 5.98 0 0 1 16 8z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// ================= LOCATION BADGE =================
function LocationBadge() {
  const [cardHovered, setCardHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      onClick={() =>
        window.open(
          "https://www.google.com/maps/place/New+Delhi,+Delhi/@28.5273522,77.2089851,49305m/data=!3m2!1e3!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x52c2b7494e204dce!8m2!3d28.6139298!4d77.2088282!16zL20vMGRsdjA?entry=ttu&g_ep=EgoyMDI2MDgxMC4wIKXMDSoASAFQAw%3D%3D",
          "_blank",
          "noopener,noreferrer"
        )
      }
    >
      <div className="w-full bg-[#9BC5E5] cursor-pointer hover:bg-red-400 rounded-[10px] px-4 sm:px-5 py-4 sm:py-5 text-[#05051A] hover:text-white cursor-target transition-colors duration-300">
        <div className="flex items-start justify-between">
          <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide">
            <FlipLink1 parentHovered={cardHovered}>LOCATION</FlipLink1>
          </span>

          <span className="text-[10px] sm:text-[11px] font-semibold">
            <FlipLink1 parentHovered={cardHovered}>INDIA</FlipLink1>
          </span>
        </div>

        <div className="mt-5 sm:mt-6 flex items-center gap-3 sm:gap-4">
          <img
            src={indiaFlag}
            alt="India"
            className="w-16 h-16 sm:w-24 sm:h-24 object-contain rounded-sm shrink-0"
          />

          <div className="min-w-0">
            <div className="text-[18px] sm:text-[22px] font-black tracking-tight">
              <FlipLink1 parentHovered={cardHovered}>INDIA</FlipLink1>
            </div>

            <div className="flex items-center gap-1.5 mt-1">
              <FaMapMarkerAlt className="text-[10px] shrink-0" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em]">
                <FlipLink1 parentHovered={cardHovered}>New Delhi</FlipLink1>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 sm:mt-6 flex justify-end">
          <FlipLink1 parentHovered={cardHovered} className="text-[18px] sm:text-[22px]">
            ➜
          </FlipLink1>
        </div>
      </div>
    </motion.div>
  );
}

// ================= CONTACT BADGE (full image card, email only) =================
function ContactBadge() {
  const [cardHovered, setCardHovered] = useState(false);
  const email = "varuntyagi0099@gmail.com";

  return (
    <motion.a
      href={`mailto:${email}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full block"
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <div className="group relative w-full h-[280px] sm:h-[340px] lg:h-[420px] rounded-[10px] overflow-hidden text-[#F5F1FF] cursor-target">
        {/* Full image background */}
        <img
          src="https://res.cloudinary.com/dgxnwlg0w/image/upload/v1788076733/Gemini_Generated_Image_3yxvip3yxvip3yxv-b0454364-0f21-4ace-b68a-57fb1298ba9e_m74jqp.jpg"
          alt="Contact"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Top gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#05051A]/90 via-[#05051A]/10 to-transparent" />
        {/* Bottom gradient for arrow readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05051A]/40 via-transparent to-transparent" />

        {/* Hover tint */}
        <div className="absolute inset-0 bg-[#E4405F]/0 group-hover:bg-[#E4405F]/10 transition-colors duration-300" />

        {/* Content — email top, arrow bottom */}
        <div className="relative z-10 h-full flex flex-col justify-between px-4 sm:px-5 py-4 sm:py-5">
          <div className="min-w-0 flex items-center justify-between gap-3 text-[13px] sm:text-[16px] font-bold tracking-tight">
            <span className="flex items-center gap-1.5 uppercase text-[10px] sm:text-[11px] tracking-[0.15em] text-white/70 font-semibold shrink-0">
              <MailIcon size={13} className="shrink-0" />
              <FlipLink1 parentHovered={cardHovered}>Email</FlipLink1>
            </span>
            <span className="truncate text-right uppercase text-[13px]">
              <FlipLink1 parentHovered={cardHovered}>{email}</FlipLink1>
            </span>
          </div>

          <div className="flex justify-end">
            <FlipLink1
              parentHovered={cardHovered}
              className="text-[18px] sm:text-[22px] shrink-0"
            >
              ↗
            </FlipLink1>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

// ================= MAIN CONTACT PAGE =================
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [token, setToken] = useState("");
  const turnstileRef = useRef(null);
  const [widgetKey, setWidgetKey] = useState(0);
  const { setNavHovered } = useContext(NavHoverContext);
  const [newsHovered, setNewsHovered] = useState(false);
  const [linkedinHovered, setLinkedinHovered] = useState(false);

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => setStatus(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      setStatus("Please complete verification.");
      return;
    }

    setStatus("");
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, token }),
      });

      const data = await response.json();

      if (response.status === 429) {
        setStatus("Too many requests. Try again after 1 minute.");
        return;
      }

      if (!response.ok) {
        setStatus(data.message || "Something went wrong.");
        return;
      }

      setStatus("✨ Message sent successfully! I'll get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
      setWidgetKey((prev) => prev + 1);
      setToken("");
    } catch (err) {
      console.error("CONTACT ERROR:", err);
      setStatus("Server is unavailable. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/varuntyagi09" },
    { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/varuntyag9i" },
    { icon: GithubIcon, label: "GitHub", href: "https://github.com/varuntyagii" },
    { icon: MailIcon, label: "Email", href: "mailto:varuntyagi0099@gmail.com" },
  ];

  return (
    <div className="min-h-screen w-full bg-[#030316] text-white overflow-hidden">
      <main
        className="
          min-h-screen
          w-full
          grid
          grid-cols-1
          lg:grid-cols-[27%_40%_33%]
        "
      >
        {/* =================================================
            LEFT SIDE — cards
        ================================================= */}
        <section className="px-5 sm:px-6 md:px-8 lg:px-10 pb-8 pt-24 sm:pt-28 lg:pt-32 flex flex-col order-2 lg:order-1">
          <div className="w-full max-w-[430px] mx-auto lg:mx-0 space-y-5 sm:space-y-6 lg:space-y-3">
            <LocationBadge />

            {/* GITHUB CARD */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              onMouseEnter={() => setNewsHovered(true)}
              onMouseLeave={() => setNewsHovered(false)}
              onClick={() =>
                window.open("https://www.github.com/varuntyagii", "_blank", "noopener,noreferrer")
              }
              className="
                w-full
                bg-[#191923]
                hover:bg-[#292633]
                rounded-[10px]
                p-3
                min-h-[130px] sm:min-h-[150px]
                flex
                gap-4
                cursor-pointer
                cursor-target
                transition-colors duration-300
              "
            >
              <div className="w-[100px] h-[100px] sm:w-[125px] sm:h-[125px] shrink-0 overflow-hidden rounded-[6px]">
                <video
                  src="https://res.cloudinary.com/dgxnwlg0w/video/upload/v1783316533/video_e925c17f6da1_wezinb.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between py-1 min-w-0">
                <div className="flex items-center gap-2 text-[11px] tracking-wide text-white/70 uppercase">
                  <FaGithub size={18} className="shrink-0" />
                  <FlipLink1 parentHovered={newsHovered}>GITHUB</FlipLink1>
                </div>

                <div className="flex items-end justify-between gap-3">
                  <span className="text-[14px] sm:text-[15px] leading-tight font-semibold">
                    <FlipLink1 parentHovered={newsHovered}>Create. Code. Craft.</FlipLink1>
                  </span>

                  <FlipLink1 parentHovered={newsHovered} className="text-xl text-white/55 shrink-0">
                    ➜
                  </FlipLink1>
                </div>
              </div>
            </motion.div>

            {/* AI TOOLS CARD */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              onMouseEnter={() => setLinkedinHovered(true)}
              onMouseLeave={() => setLinkedinHovered(false)}
              onClick={() =>
                window.open("https://www.futurepedia.io", "_blank", "noopener,noreferrer")
              }
              className="
                w-full
                bg-[#191923]
                hover:bg-[#0A66C2]
                rounded-[10px]
                p-3
                min-h-[130px] sm:min-h-[150px]
                flex
                gap-4
                cursor-pointer
                cursor-target
                transition-colors duration-300
              "
            >
              <div className="w-[100px] h-[100px] sm:w-[125px] sm:h-[125px] shrink-0 overflow-hidden rounded-[6px]">
                <video
                  src="https://res.cloudinary.com/dgxnwlg0w/video/upload/v1786557617/Ai_tool_s_Carousel_motion_graphic_animation_f9rel_hrxqed.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <div className="flex-1 min-w-0 h-[100px] sm:h-[125px] flex flex-col">
                <div className="flex items-center gap-2 text-white/45">
                  <span className="text-[18px] sm:text-[20px]">✦</span>
                  <FlipLink1 parentHovered={linkedinHovered} className="text-[11px] tracking-wide uppercase">
                    AI Tools
                  </FlipLink1>
                </div>

                <div className="mt-2 min-w-0">
                  <div className="block w-full">
                    <FlipLink1 parentHovered={linkedinHovered} className="text-[15px] sm:text-[16px] md:text-[17px] leading-tight">
                      AI Tool Carousel
                    </FlipLink1>
                  </div>

                  <div className="block w-full mt-1">
                    <FlipLink1 parentHovered={linkedinHovered} className="text-[11px] sm:text-[12px] text-white/55 leading-tight uppercase">
                      Exploring AI tools
                    </FlipLink1>
                  </div>
                </div>

                <div className="mt-auto flex items-end justify-between gap-2 min-w-0">
                  <div className="min-w-0 flex-1 hidden sm:block">
                    <FlipLink1 parentHovered={linkedinHovered} className="text-[11px] text-white/45 uppercase">
                      AI · Design · Development
                    </FlipLink1>
                  </div>

                  <FlipLink1 parentHovered={linkedinHovered} className="text-xl sm:text-2xl text-white/55 shrink-0 leading-none">
                    ↗
                  </FlipLink1>
                </div>
              </div>
            </motion.div>

            <ContactBadge />
          </div>
        </section>

        {/* =================================================
            CENTER — headline
        ================================================= */}
        <section className="flex items-start justify-center px-5 sm:px-6 md:px-10 lg:px-6 pt-20 lg:pt-32 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-[650px]"
          >
            <h1
              className="
                text-white
                uppercase
                font-black
                leading-[0.85]
                tracking-[-0.045em]
                text-[clamp(48px,14vw,130px)]
                text-center
                lg:text-left
              "
            >
              Let's
              <br />
              Talk
              <br />
              About
              <br />
              Your
              <br />
              Project
            </h1>
          </motion.div>
        </section>

        {/* =================================================
            RIGHT SIDE — FORM
        ================================================= */}
        <section className="px-5 sm:px-6 md:px-10 lg:px-8 xl:px-12 pt-10 lg:pt-32 pb-10 flex flex-col order-3">
          <form onSubmit={handleSubmit} className="w-full max-w-[520px] mx-auto lg:mx-0 lg:ml-auto">
            <div className="mb-8 sm:mb-10">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/35 mb-3">
                Get in touch
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight">
                Let's work together.
              </h2>
            </div>

            <AnimatePresence>
              {status && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`
                    mb-6
                    text-sm
                    px-4
                    py-3
                    rounded-md
                    border
                    ${
                      status.includes("successfully") || status.includes("✨")
                        ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                        : "text-rose-400 bg-rose-500/10 border-rose-500/20"
                    }
                  `}
                >
                  {status}
                </motion.div>
              )}
            </AnimatePresence>

            {/* NAME */}
            <div
              onMouseEnter={() => setNavHovered(true)}
              onMouseLeave={() => setNavHovered(false)}
              className="mb-7 sm:mb-8"
            >
              <label className="block text-[11px] uppercase tracking-[0.15em] text-white/40 mb-3">
                Full Name <span className="text-white">*</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-[16px] outline-none placeholder:text-white/25 focus:border-white transition-colors"
                required
              />
            </div>

            {/* EMAIL */}
            <div
              onMouseEnter={() => setNavHovered(true)}
              onMouseLeave={() => setNavHovered(false)}
              className="mb-7 sm:mb-8"
            >
              <label className="block text-[11px] uppercase tracking-[0.15em] text-white/40 mb-3">
                Email Address <span className="text-white">*</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-[16px] outline-none placeholder:text-white/25 focus:border-white transition-colors"
                required
              />
            </div>

            {/* MESSAGE */}
            <div
              onMouseEnter={() => setNavHovered(true)}
              onMouseLeave={() => setNavHovered(false)}
              className="mb-7 sm:mb-8"
            >
              <label className="block text-[11px] uppercase tracking-[0.15em] text-white/40 mb-3">
                Message <span className="text-white">*</span>
              </label>
              <textarea
                rows="4"
                placeholder="Tell me about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-transparent border-b border-white/20 text-white text-[16px] outline-none resize-none placeholder:text-white/25 focus:border-white transition-colors"
                required
              />
            </div>

            {/* TURNSTILE + SUBMIT */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-8 sm:mb-10">
              <Turnstile
                className="cursor-pointer cursor-target"
                key={widgetKey}
                siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                onSuccess={(t) => setToken(t)}
                ref={turnstileRef}
                options={{ theme: "dark", size: "flexible" }}
              />

              <button
                disabled={loading}
                type="submit"
                className="
                  w-full
                  sm:w-auto
                  min-w-[120px]
                  px-7
                  py-3
                  rounded-full
                  bg-white
                  text-black
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  border
                  border-white
                  disabled:opacity-40
                  disabled:cursor-not-allowed
                  hover:bg-white/90
                  transition-colors
                  duration-200
                  cursor-pointer
                  cursor-target
                "
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </div>

            <div className="w-full">
              <p className="text-[10px] leading-relaxed text-white/25 max-w-[400px] text-center sm:text-left mx-auto sm:mx-0">
                This form is protected by Turnstile and the{" "}
                <Link to="/privacy-policy" className="underline hover:text-white transition-colors">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link to="/terms" className="underline hover:text-white transition-colors">
                  Terms of Service
                </Link>{" "}
                apply.
              </p>

              <div className="mt-8 sm:mt-10">
                <div className="border-t border-white/15 pt-5">
                  <div className="flex items-center justify-center sm:justify-between flex-wrap gap-6 sm:gap-0 max-w-[430px] mx-auto sm:mx-0">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={link.label}
                          whileHover={{ y: -3 }}
                          className="text-white/55 hover:text-white transition-colors"
                        >
                          <Icon size={18} />
                        </motion.a>
                      );
                    })}

                    <motion.a
                      href="https://leetcode.com/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LeetCode"
                      whileHover={{ y: -3 }}
                      className="text-white/55 hover:text-white transition-colors"
                    >
                      <SiLeetcode size={18} />
                    </motion.a>

                    <motion.a
                      href="https://wa.me/916397011309"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="WhatsApp"
                      whileHover={{ y: -3 }}
                      className="text-white/55 hover:text-white transition-colors"
                    >
                      <FaWhatsapp size={18} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}