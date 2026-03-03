import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const bookingId = "CV" + Math.floor(100000 + Math.random() * 900000);

    navigate("/confirmation", {
      state: { name, email, mobile, bookingId }
    });
  };

  return (
    <div className="form-container">
      <h1>Fill Booking Details</h1>

      <form className="booking-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Enter Mobile"
          required
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookingForm;