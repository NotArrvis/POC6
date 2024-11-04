import MovieBox from './components/MovieBox';
import Seats from './components/Seats';
import styles from './styles/page.module.css';

export default function Home() {
	return (
		<main className={styles.container}>
			<div className={styles.contentBox}>
				<MovieBox />
				<Seats />
			</div>
		</main>
	);
}
