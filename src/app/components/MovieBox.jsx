import React from 'react';
import data from '@/data/data.JSON';
import style from '../styles/movieBox.module.css';

const MovieBox = () => {
	return (
		<main className={style.container}>
			<section className={style.minor}>
				<h1 className={style.title}>{data.titulo}</h1>
				<p className={style.hour}>{data.horario}</p>
			</section>
		</main>
	);
};

export default MovieBox;
