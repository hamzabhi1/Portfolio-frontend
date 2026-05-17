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

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all fields ❌");
      return;
    }

    try {
      setLoading(true);
      setStatus("Sending message...");

      const response = await fetch("https://portfolio-backend-wheat-rho.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      // SAFE JSON PARSE
      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully ✅");

        // clear form
        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Something went wrong ❌");
      }

    } catch (error) {
      console.log("CONTACT ERROR:", error);

      setStatus("Server Error ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <Navbar />

      <div className="contact-container">

        {/* HEADER */}
        <div className="contact-header">
          <h2>Contact Me</h2>
          <p>
            Have a project idea or collaboration? Send me a message.
          </p>
        </div>

        {/* FORM */}
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

          {/* STATUS */}
          {status && <p className="status">{status}</p>}

        </form>
      </div>
    </div>
  );
};

export default Contact;