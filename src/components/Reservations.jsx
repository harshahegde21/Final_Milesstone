import React, { useState } from 'react';
import './Reservations.css';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Reservation confirmed for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guest(s).`);
    setFormData({ name: '', date: '', time: '', guests: 1 });
  };

  return (
    <div className="reservations">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        />
        <select name="guests" value={formData.guests} onChange={handleChange}>
          {[...Array(10)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1} Guest{ i > 0 ? 's' : ''}
            </option>
          ))}
        </select>
        <button type="submit">Reserve</button>
      </form>
    </div>
  );
};

export default Reservations;


