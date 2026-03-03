import { useLocation, useNavigate } from "react-router-dom";

function Confirmation() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state) {
    return (
      <div className="confirmation-container">
        <h2>No Booking Found</h2>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  const { name, email, mobile, bookingId } = location.state;

  return (
    <div className="confirmation-container">
      <h1>🎉 Seat Booked Successfully!</h1>

      <div className="confirmation-card">
        <h2>Booking ID: {bookingId}</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Mobile:</strong> {mobile}</p>
      </div>

      <button onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default Confirmation;