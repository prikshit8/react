import styles from "./TrainCard.module.css";

const TrainCard = ({ train }) => {
  return (
    <div className={styles.trainCard}>
      <h3 className={styles.heading}>{train.name}</h3>
      <p className={styles.paragraph}>
        From: {train.from} To: {train.to}
      </p>
      <p className={styles.paragraph}>Departure Time: {train.departureTime}</p>
      <p className={styles.paragraph}>Arrival Time: {train.arrivalTime}</p>
      <p className={styles.paragraph}>Fare: ${train.fare}</p>
      <button>Book now</button>
    </div>
  );
};

export default TrainCard;
