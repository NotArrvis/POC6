'use client';

import { createContext, useContext, useState } from 'react';
import data from '@/data/data.JSON';

const SeatsContext = createContext();

export function SeatsProvider({ children }) {
	const [selectedSeats, setSelectedSeats] = useState([]);
	const [totalSelected, setTotalSelected] = useState(0);
	const [totalPrice, setTotalPrice] = useState(0);

	const toggleSeatSelection = (seat) => {
		const seatPrice = data.preco; // Get price from movie data

		if (selectedSeats.includes(seat.numero)) {
			setSelectedSeats(
				selectedSeats.filter((num) => num !== seat.numero)
			);
			setTotalSelected((prev) => prev - 1);
			setTotalPrice((prev) => prev - seatPrice);
		} else {
			setSelectedSeats((prev) => [...prev, seat.numero]);
			setTotalSelected((prev) => prev + 1);
			setTotalPrice((prev) => prev + seatPrice);
		}
	};

	return (
		<SeatsContext.Provider
			value={{
				selectedSeats,
				totalSelected,
				totalPrice,
				toggleSeatSelection,
			}}
		>
			{children}
		</SeatsContext.Provider>
	);
}

export function useSeats() {
	const context = useContext(SeatsContext);
	if (!context) {
		throw new Error('useSeats must be used within a SeatsProvider');
	}
	return context;
}
