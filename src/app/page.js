import MovieBox from './components/MovieBox';
import Seats from './components/Seats';
import styles from './styles/page.module.css';
import Descriptor from './components/Descriptor';
import Sum from './components/Sum';
import Screen from './components/Screen';
import { SeatsProvider } from './components/SeatsContext';

export default function Home() {
	return (
		<SeatsProvider>
			<main className={styles.container}>
				<div className={styles.contentBox}>
					<MovieBox />
					<Seats />
					<Screen />
					<Descriptor />
					<Sum />
				</div>
			</main>
		</SeatsProvider>
	);
}
