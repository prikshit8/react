import { useState } from "react";
import "./Homepage.css";
import Navbar from "./Navbar";
import NavbarClass from "./NavbarClass";

const HomePage = () => {
  const [formData, setFormData] = useState({ from: "", to: "", date: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // let name = "ajay";
  // let obj = {
  //   [name]: 'he is good boy',
  // }
  // console.log("obj-->", obj);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="homepage">
      <NavbarClass />
      <h2>Book your train ticket</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
            placeholder="Enter departure station"
            required
            value={formData.from}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <input
            type="text"
            id="to"
            placeholder="Enter your arrival station"
            required
            value={formData.to}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            required
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Search Trains</button>
      </form>
    </div>
  );
};

export default HomePage;
