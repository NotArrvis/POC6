'use client';

import { createContext, useContext, useState } from 'react';

const SeatsContext = createContext();

export function SeatsProvider({ children }) {
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
		<SeatsContext.Provider
			value={{ totalSelected, totalPrice, toggleSeatSelection }}
		>
			{children}
		</SeatsContext.Provider>
	);
}

export function useSeats() {
	return useContext(SeatsContext);
}
