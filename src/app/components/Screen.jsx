import React from 'react';
import styles from '../styles/screen.module.css';

const Screen = () => {
	return (
		<main className={styles.container}>
			<p className={styles.text}>Tela</p>
			<div className={styles.screen}></div>
		</main>
	);
};

export default Screen;
