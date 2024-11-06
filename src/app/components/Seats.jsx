'use client';

import { useState } from 'react';
import { useSeats } from './SeatsContext';
import data from '@/data/data.JSON';
import styles from '../styles/seats.module.css';

export default function Seats() {
	const seats = data.assentos;
	const { toggleSeatSelection } = useSeats();
	const [selectedSeats, setSelectedSeats] = useState([]);

	const handleSeatClick = (seat) => {
		if (seat.disponivel) {
			toggleSeatSelection(seat);
			setSelectedSeats((prevSelectedSeats) =>
				prevSelectedSeats.includes(seat.numero)
					? prevSelectedSeats.filter((num) => num !== seat.numero)
					: [...prevSelectedSeats, seat.numero]
			);
		}
	};

	return (
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
					onClick={() => handleSeatClick(seat)}
				></button>
			))}
		</div>
	);
}
