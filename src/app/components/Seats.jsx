'use client';

import { useState } from 'react';
import data from '@/data/data.JSON';
import styles from '../styles/seats.module.css';
import Sum from './Sum';

export default function Seatings() {
	const seats = data.assentos;
	const [selectedSeats, setSelectedSeats] = useState([]);
	const [totalSelected, setTotalSelected] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const toggleSeatSelection = (seat) => {
		if (selectedSeats.includes(seat.numero)) {
			setSelectedSeats(
				selectedSeats.filter((num) => num !== seat.numero)
			);
			setTotalSelected(totalSelected - 1);
			setTotalPrice(totalPrice - seat.preco);
		} else {
			setSelectedSeats([...selectedSeats, seat.numero]);
			setTotalSelected(totalSelected + 1);
			setTotalPrice(totalPrice + seat.preco);
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
					onClick={() => seat.disponivel && toggleSeatSelection(seat)}
				></button>
			))}
		</div>
	);
}
