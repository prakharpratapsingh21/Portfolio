
import { useState } from "react";
// import Background from "../../../public/bg1.jpg"

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    const res = await fetch("https://formspree.io/f/manjgoad", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email ,name,message}),
    });

    if (res.ok) {
      setName("");
      setEmail("");
      setMessage("");
      alert("✅ Thank you! Your email has been submitted.");
    } else {
      alert("❌ Something went wrong. Please try again.");
    }
  };
  return (
    <section id="contact" className=" py-20 px-6 bg-cover bg-center bg-gradient-to-t from-gray-600 to-gray-200">
      <div className="max-w-lg mx-auto bg-white/30  p-10 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-zinc-900 mb-6">
          Get In Touch
        </h2>

        <form className="space-y-4"
          action="https://formspree.io/f/manjgoad"
          method="POST"
          onSubmit={handleSubmit}>
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-md font-medium text-gray-900 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-white text-xs text-black placeholder-gray-500 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-md font-medium text-gray-900 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-white text-xs placeholder-gray-500 text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-md font-medium text-gray-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              type= "text"
              rows="5"
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border border-white placeholder-gray-500 text-xs text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400">
              </textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit"
              className="inline-block border-[1.5px] border-white hover:bg-white text-gray-50 hover:text-gray-900 font-semibold px-5 py-2 text-sm rounded-xl shadow transition">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
