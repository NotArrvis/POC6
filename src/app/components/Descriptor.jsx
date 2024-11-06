import React from 'react';
import styles from '../styles/Descriptor.module.css';

const Descriptor = () => {
	return (
		<main className={styles.container}>
			<div className={styles.sections}>
				<p className={styles.available}></p>
				<p>Livre</p>
			</div>
			<div className={styles.sections}>
				<p className={styles.selected}></p>
				<p>selecionado</p>
			</div>
			<div className={styles.sections}>
				<p className={styles.occupied}></p>
				<p>Indisponivel</p>
			</div>
		</main>
	);
};

export default Descriptor;
