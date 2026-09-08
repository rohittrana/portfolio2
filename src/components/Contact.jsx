import React, { useState } from "react";
import { Send, CheckCircle2, XCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwlkqrwq";

const Contact = () => {
  const [form, setForm] = useState({ name: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="px-6 sm:px-12 py-14 sm:py-20">
      <p className="font-mono text-sm text-ink-900/40 dark:text-paper-100/40 mb-4">
        {"// contact"}
      </p>

      <div className="max-w-xl rounded-lg border border-paper-200 dark:border-ink-700 bg-paper-100 dark:bg-ink-900 px-6 py-8 sm:px-8 sm:py-9">
        <h2 className="text-2xl sm:text-3xl font-display font-semibold text-ink-950 dark:text-paper-100 mb-2">
          Let's work together.
        </h2>
        <p className="text-base text-ink-900/60 dark:text-paper-100/60 mb-7">
          Drop a message and I'll get back to you by email.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block font-mono text-xs text-ink-900/50 dark:text-paper-100/50 mb-1.5"
            >
              your name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-md bg-paper-50 dark:bg-ink-950 border border-paper-200 dark:border-ink-700 text-base text-ink-950 dark:text-paper-100 focus:outline-none focus:border-brand-light dark:focus:border-brand-dark transition-colors"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-mono text-xs text-ink-900/50 dark:text-paper-100/50 mb-1.5"
            >
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-md bg-paper-50 dark:bg-ink-950 border border-paper-200 dark:border-ink-700 text-base text-ink-950 dark:text-paper-100 focus:outline-none focus:border-brand-light dark:focus:border-brand-dark transition-colors resize-none"
              placeholder="What would you like to talk about?"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-sm font-medium bg-brand-light dark:bg-brand-dark text-paper-50 dark:text-ink-950 hover:opacity-90 disabled:opacity-60 transition-opacity"
          >
            <Send size={15} />
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className="flex items-center gap-2 text-sm text-brand-light dark:text-brand-dark">
              <CheckCircle2 size={16} /> Thanks — your message is on its way.
            </p>
          )}
          {status === "error" && (
            <p className="flex items-center gap-2 text-sm text-red-500">
              <XCircle size={16} /> Something went wrong — please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
