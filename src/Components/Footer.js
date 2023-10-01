import React, { useState } from "react";

function Footer() {
  // state variables for form inputs and errors
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  //   to get current year
  const currentYear = new Date().getFullYear();

  // Define a function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", { name, email, message });

      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <footer>
      <div className="mainDiv">
        <div className="heading">
          <h2>Newsletter</h2>
          <p>Get news about articles and updates in your inbox.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              id="name"
              value={name}
              placeholder="NAME"
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div>
            <input
              type="email"
              id="email"
              value={email}
              placeholder="EMAIL"
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div>
            <textarea
              id="message"
              value={message}
              placeholder="MESSAGE"
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <div className="btn">
            <button type="submit" className="circular-button">
              SEND
            </button>
          </div>
        </form>
      </div>

      <div className="lastText">
        <span>GET</span>
        <span> IN TOUCH</span>
      </div>
      <div className="copyright">
        <h5>Copyright {currentYear} All rights reserved By SG</h5>
      </div>
    </footer>
  );
}

export default Footer;
