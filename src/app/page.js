import MovieBox from './components/MovieBox';
import Seats from './components/Seats';
import styles from './styles/page.module.css';
import Descriptor from './components/Descriptor';
import Sum from './components/Sum';
import Screen from './components/Screen';
import TextBox from './components/TextBox';
import { SeatsProvider } from './components/SeatsContext';

export default function Home() {
	return (
		<SeatsProvider>
			<main className={styles.container}>
				<div className={styles.contentBox}>
					<MovieBox />
					<div className={styles.contentContainer}>
						<div className={styles.seats}>
							<Seats />
						</div>
						<div className={styles.textContainer}>
							<TextBox />
						</div>
					</div>
					<Screen />
					<Descriptor />
					<Sum />
				</div>
			</main>
		</SeatsProvider>
	);
}
