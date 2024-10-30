import React from 'react';
import data from '@/data/data.JSON';
import style from '../styles/movieBox.module.css';

const MovieBox = () => {
	return (
		<main className={style.container}>
			<section>
				<h1>{data.titulo}</h1>
				<p className={style.hora}>{data.horario}</p>
			</section>
		</main>
	);
};

export default MovieBox;
