import data from '../data/data.JSON';
import MovieBox from './components/MovieBox.jsx';
import styles from '../app/styles/page.module.css';

export default function Home() {
	return (
		<main className={styles.container}>
			<div className={styles.movieBox}>
				<MovieBox />
			</div>
		</main>
	);
}
