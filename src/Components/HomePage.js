import './Homepage.css';
import Navbar from './Navbar';

const HomePage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <h2>Book your train ticket</h2>
      <form>
        <div className="form-group">
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
            placeholder="Enter departure station"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="to">To</label>
          <input
            type="text"
            id="to"
            placeholder="Enter your arrival station"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input type="date" id="date" required />
        </div>
        <button type="submit">Search Trains</button>
      </form>
    </div>
  );
};

export default HomePage;
