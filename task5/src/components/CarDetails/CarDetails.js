import styles from "./CarDetails.module.css";
const Carro = ({ car }) => {
  return (
    <div>
      <p className={styles.placa}>Placa: {car.placa}</p>
      <p className={styles.marca}>Marca: {car.marca}</p>
      <p className={styles.modelo}>Modelo: {car.modelo}</p>
      ----------
    </div>
  );
};

export default Carro;
