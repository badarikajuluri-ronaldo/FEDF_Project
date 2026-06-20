import { useState } from "react";

function Registration() {
  const [data, setData] = useState({
    name: "",
    email: "",
    college: "",
    event: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Registration Successful!");
    console.log(data);
  };

  return (
    <section id="register" className="registration">
      <h2>Register Now</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          name="name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          placeholder="College Name"
          name="college"
          onChange={handleChange}
          required
        />

        <select
          name="event"
          onChange={handleChange}
          required
        >
          <option value="">Choose Event</option>
          <option>Dance Battle</option>
          <option>Music Fest</option>
          <option>Drama</option>
          <option>Photography</option>
          <option>Fashion Show</option>
        </select>

        <button type="submit">
          Submit Registration
        </button>
      </form>
    </section>
  );
}

export default Registration;
