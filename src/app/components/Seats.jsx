import data from '@/data/data.JSON';
import styles from '../styles/seats.module.css';

export default function Seatings() {
	const seats = data.assentos;
	let i = 0;

	return (
		<div className={styles.seatContainer}>
			{(() => {
				const seatParts = [];
				while (i < seats.length) {
					const seat = seats[i];
					seatParts.push(
						<div
							key={seat.numero}
							className={`${styles.seat} ${
								seat.disponivel
									? styles.available
									: styles.occupied
							}`}
						></div>
					);
					i++;
				}
				return seatParts;
			})()}
		</div>
	);
}
