import React from 'react';
import styles from '../styles/seats.module.css';

const Descriptor = () => {
	return (
		<div className={styles.container}>
			<p>Livre</p>
			<p>Selecionado</p>
			<p>Indisponivel</p>
		</div>
	);
};

export default Descriptor;
