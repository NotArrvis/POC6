'use client';

import React from 'react';
import { useSeats } from './SeatsContext';
import styles from '../styles/sum.module.css';

const Sum = () => {
	const { totalSelected, totalPrice } = useSeats();

	return (
		<div className={styles.container}>
			<button className={styles.button}>
				<h3 className={styles.text}>
					Comprar ({totalSelected} assentos)
				</h3>
				<p className={styles.text}>R$ {(totalPrice || 0).toFixed(2)}</p>
			</button>
		</div>
	);
};

export default Sum;
