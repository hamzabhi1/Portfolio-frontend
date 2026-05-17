import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("❌ Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      setStatus("Sending message...");

      const response = await fetch(
        "https://portfolio-backend-rouge-one.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      // ⚠️ SAFE CHECK (avoid crash if backend fails)
      const text = await response.text();
      let data;

      try {
        data = JSON.parse(text);
      } catch {
        data = { message: text };
      }

      if (response.ok) {
        setStatus("✅ Message sent successfully");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "❌ Something went wrong");
      }
    } catch (error) {
      console.log("CONTACT ERROR:", error);
      setStatus("❌ Server not responding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <Navbar />

      <div className="contact-container">
        <div className="contact-header">
          <h2>Contact Me</h2>
          <p>Have a project idea or collaboration? Send me a message.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;