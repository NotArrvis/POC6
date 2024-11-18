import React from 'react';
import data from '@/data/data.JSON';
import styles from '../styles/textBox.module.css';

const TextBox = () => {
	return (
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
	);
};

export default TextBox;
