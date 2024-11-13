'use client';

import { useSeats } from './SeatsContext';
import data from '@/data/data.JSON';
import styles from '../styles/seats.module.css';

export default function Seats() {
	const seats = data.assentos;
	const { selectedSeats, toggleSeatSelection } = useSeats();

	return (
		<main>
			<div className={styles.seatContainer}>
				{seats.map((seat) => (
					<button
						key={seat.numero}
						className={`${styles.seat} ${
							seat.disponivel ? styles.available : styles.occupied
						} ${
							selectedSeats.includes(seat.numero)
								? styles.selected
								: ''
						}`}
						onClick={() => {
							seat.disponivel && toggleSeatSelection(seat);
						}}
					></button>
				))}
			</div>

			<div className={styles.textContainer}>
				<h4>Sinopse</h4>
				<p>{data.sinopse}</p>
				<p>
					<strong>Data de Lançamento:</strong> {data.dataLancamento}
				</p>
				<p>
					<strong>Direção:</strong> {data.direcao}
				</p>
			</div>
		</main>
	);
}
