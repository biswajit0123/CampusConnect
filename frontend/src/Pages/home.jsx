import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";
import { ShieldCheck, Globe2, MessageSquarePlus, Send, ArrowRight, Users2, Lock, Mail, Instagram, Github, Linkedin, Menu, X } from "lucide-react";

export default function CampusConnectLanding() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#why", label: "Why CampusConnect" },
    { href: "#connect", label: "Connect" },
    { href: "#share", label: "Share" },
    { href: "#safety", label: "Safety" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen w-full bg-gradient-to-b from-violet-50 via-white to-sky-50 text-slate-800">


        {/* Hero */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-violet-200/40 blur-3xl"/>
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"/>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
            <div className="grid md:grid-cols-2 items-center gap-10">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold shadow ring-1 ring-slate-200">
                  <Users2 className="h-3.5 w-3.5"/> Connecting Students Globally
                </span>
                <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-slate-900">
                  A safe, vibrant space for campus life
                </h1>
                <p className="mt-4 text-slate-600 text-base sm:text-lg">
                  CampusConnect helps students sign up securely, join their college community, share posts and images, and interact across campuses worldwide.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#why" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-violet-600 text-white hover:bg-violet-700 shadow">
                    Why CampusConnect <ArrowRight className="h-4 w-4"/>
                  </a>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-slate-300 bg-white hover:bg-slate-50">
                    Get in touch <Mail className="h-4 w-4"/>
                  </a>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
                <div className="aspect-[4/3] w-full rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 p-4">
                  <div className="h-full w-full rounded-2xl bg-gradient-to-br from-violet-500 via-indigo-500 to-sky-500 grid place-items-center text-white">
                    <div className="text-center px-6">
                      <p className="text-xs uppercase tracking-widest/loose font-semibold opacity-90">Live campus feed</p>
                      <p className="mt-1 text-2xl font-bold">Share notes, photos & wins</p>
                      <p className="mt-2 text-sm text-white/90">College-specific communities with a global explore tab</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why */}
        <section id="why" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Why CampusConnect?</h2>
              <p className="mt-3 text-slate-600">Built for students first: relevant, organized, and designed to reduce noise. Focus on your college community while exploring ideas across the globe.</p>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard icon={<Users2 className="h-5 w-5"/>} title="College-first communities" description="Join your campus feed automatically. Discover clubs, events, and peers instantly." />
              <FeatureCard icon={<Globe2 className="h-5 w-5"/>} title="Connect across the globe" description="Explore posts from other universities. Learn, network, and collaborate beyond your campus." />
              <FeatureCard icon={<MessageSquarePlus className="h-5 w-5"/>} title="Share anything you want" description="Post thoughts, photos, notes, and opportunities with simple, fast tools." />
            </div>
          </div>
        </section>

        {/* Safety */}
        <section id="safety" className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Safe & Secure by Design</h2>
              <p className="mt-3 text-slate-600">Privacy and trust are core. Verification, moderation, and secure tech keep conversations healthy and your data protected.</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SafetyCard icon={<Lock className="h-5 w-5"/>} title="Secure authentication" points={["JWT-based sessions", "Hashed passwords (bcrypt)", "Role-based access"]} />
              <SafetyCard icon={<ShieldCheck className="h-5 w-5"/>} title="Content moderation" points={["Report & review", "Spam & abuse controls", "Community guidelines"]} />
              <SafetyCard icon={<Globe2 className="h-5 w-5"/>} title="Privacy-first" points={["Minimal data collection", "College-only feeds", "Granular profile controls"]} />
            </div>
          </div>
        </section>

        {/* Connect */}
        <section id="connect" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Connect students across the globe</h2>
                <p className="mt-3 text-slate-600">Follow your college feed or explore other universities to find study partners, project teammates, internships, and more.</p>
                <ul className="mt-6 space-y-3 text-slate-700">
                  <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-600"/>Discover clubs & events</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-600"/>Find peers by course or interest</li>
                  <li className="flex items-start gap-3"><span className="mt-1 h-2.5 w-2.5 rounded-full bg-violet-600"/>Collaborate across campuses</li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <a href="#share" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-sky-600 text-white hover:bg-sky-700 shadow">Start sharing <ArrowRight className="h-4 w-4"/></a>
                  <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-slate-300 bg-white hover:bg-slate-50">Contact us</a>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[16/10] w-full rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 p-4">
                  <div className="h-full w-full rounded-2xl grid grid-cols-3 gap-3">
                    {[...Array(6)].map((_, i) => (
                      <div key={i} className="rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 p-4 flex flex-col justify-between">
                        <div className="text-xs font-semibold text-slate-500">Campus #{i+1}</div>
                        <div className="text-sm font-bold">Student voices</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Share */}
        <section id="share" className="py-16 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid sm:grid-cols-2 gap-4">
                  <PostCard title="Exam prep tips" body="Share quick notes, links and mnemonics."/>
                  <PostCard title="Cultural fest pics" body="Upload photos from events in seconds."/>
                  <PostCard title="Internship leads" body="Spread the word on openings and referrals."/>
                  <PostCard title="Lost & found" body="Help each other recover items fast."/>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Share anything you want</h2>
                <p className="mt-3 text-slate-600">Text or image — post it to your college feed. Keep conversations relevant with tags and smart filters.</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-violet-600 text-white hover:bg-violet-700 shadow">
                  Create your first post <MessageSquarePlus className="h-4 w-4"/>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Get in touch</h2>
              <p className="mt-3 text-slate-600">Have questions, ideas, or want to collaborate? Drop us a message — we usually respond within a day.</p>
            </div>

            <div className="mt-10 grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <ContactForm />
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900">Reach us</h3>
                  <p className="mt-2 text-sm text-slate-600">campusconnect@example.com</p>
                  <div className="mt-4 flex items-center gap-3">
                    <a href="#" className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50" aria-label="Instagram"><Instagram className="h-5 w-5"/></a>
                    <a href="#" className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50" aria-label="LinkedIn"><Linkedin className="h-5 w-5"/></a>
                    <a href="#" className="p-2 rounded-xl border border-slate-200 hover:bg-slate-50" aria-label="GitHub"><Github className="h-5 w-5"/></a>
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-slate-900">Security quick facts</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
                    <li>HTTPS-only, secure cookies</li>
                    <li>Encrypted passwords (bcrypt)</li>
                    <li>Content reporting & review</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </MotionConfig>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-violet-100 text-violet-700">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </motion.div>
  );
}

function SafetyCard({ icon, title, points }) {
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-green-100 text-green-700">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc list-inside">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </motion.div>
  );
}

function PostCard({ title, body }) {
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md">
      <div className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-600 to-sky-500 text-white grid place-content-center text-xs font-bold">CC</div>
        <div>
          <p className="text-sm font-semibold text-slate-900">{title}</p>
          <p className="text-xs text-slate-500">CampusConnect</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-slate-700">{body}</p>
    </motion.div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("idle");

  function onSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700">Name</label>
          <input required className="mt-1 w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-500" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700">Email</label>
          <input type="email" required className="mt-1 w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-500" placeholder="you@example.com" />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium text-slate-700">Message</label>
          <textarea required rows={4} className="mt-1 w-full rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-violet-500" placeholder="Tell us how we can help"></textarea>
        </div>
      </div>
      <button type="submit" disabled={status!=="idle" && status!=="sent"} className="mt-4 inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-slate-900 text-white hover:bg-slate-800 disabled:opacity-60">
        {status === "sent" ? "Message sent" : status === "sending" ? "Sending..." : "Send message"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
