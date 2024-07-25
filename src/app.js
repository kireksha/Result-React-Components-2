import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	let [isFirstIndex, isLastIndex] = [true, false];
	activeIndex === 0 ? (isFirstIndex = true) : (isFirstIndex = false);
	activeIndex === steps.length - 1 ? (isLastIndex = true) : (isLastIndex = false);

	const backClick = () => {
		setActiveIndex(activeIndex - 1);
	};

	const forwardClick = () => {
		setActiveIndex(activeIndex + 1);
	};

	const toBeginningClick = () => {
		setActiveIndex(0);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						<p>{steps[activeIndex].title}</p>
						<p>{steps[activeIndex].content}</p>
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((item, index) => {
							return (
								<li
									className={
										styles['steps-item'] +
										(index === activeIndex
											? ` ${styles.active}`
											: '') +
										(index < activeIndex ? ` ${styles.done}` : '')
									}
									key={item.id}
								>
									<button
										className={styles['steps-item-button']}
										onClick={() => setActiveIndex(index)}
									>
										{index + 1}
									</button>
									{`Шаг ${index + 1}`}
								</li>
							);
						})}
					</ul>
					<div className={styles['buttons-container']}>
						{isFirstIndex ? (
							<button
								className={styles.button}
								disabled
								onClick={() => backClick()}
							>
								Назад
							</button>
						) : (
							<button className={styles.button} onClick={() => backClick()}>
								Назад
							</button>
						)}
						{isLastIndex ? (
							<button className={styles.button} onClick={toBeginningClick}>
								Начать сначала
							</button>
						) : (
							<button className={styles.button} onClick={forwardClick}>
								Далее
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
