import React from 'react';
import styles from '../styles/Descriptor.module.css';

const Descriptor = () => {
	return (
		<main className={styles.container}>
			<div className={styles.sections}>
				<p className={styles.available}></p>
				<p className={styles.text}>Livre</p>
			</div>
			<div className={styles.sections}>
				<p className={styles.selected}></p>
				<p className={styles.text}>selecionado</p>
			</div>
			<div className={styles.sections}>
				<p className={styles.occupied}></p>
				<p className={styles.text}>Indisponivel</p>
			</div>
		</main>
	);
};

export default Descriptor;
