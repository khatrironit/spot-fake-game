import { useGameContext } from '@/contexts/game-context'
import React, { useEffect, useMemo, useState } from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import quizData from '../constants/quiz-data';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { RESULTS_ROUTE } from '@/constants/routes';
import styles from '../styles/styles.module.css';

const DEFAULT_TIMER = 15;
const TOTAL_QUESTIONS = 10;

const Quiz = () => {
	const router = useRouter()
	const {number, setNumber, setScore, notify } = useGameContext();

	const [timer, setTimer] = useState(DEFAULT_TIMER);
	const [selectedImage, setSelectedImage] = useState(null);

	const incrQuestion = () => {
		if(number >= TOTAL_QUESTIONS){
			setNumber(1);
			router.push(RESULTS_ROUTE);
		}else{
			setNumber(prevNumber => prevNumber + 1);
			setTimer(DEFAULT_TIMER);
		}
		setSelectedImage(null)
	}
	useEffect(() => {
		const quizInterval = setInterval(() => {
			setTimer(prevTimer => prevTimer - 1)
		}, 1000);
		return () => clearInterval(quizInterval)
	}, [number, timer])

	useEffect(() => {
		if(timer<0)incrQuestion()
	}, [timer])

	const {correct, fake} = useMemo(() => {
		return quizData[number-1];
	}, [number])

	const onCorrectAnswer = () => {
		notify({
			toastText: "Correct Answer!!",
		});
		incrQuestion()
		setScore(prevScore => prevScore + 1)
	}

	const onWrongAnswer = () => {
		notify({
			toastText: "Wrong Answer!!",
			theme: "dark"
		});
		incrQuestion()
	}

	const submitAnswer = () => selectedImage ? onCorrectAnswer() : onWrongAnswer

  return (
    <Container className='pt-3'>
        <Row>
					<Col><h5>Question: {number} of 10</h5></Col>
					<Col><h5 className={timer<=5?"text-danger":""}>Time Remaining: {timer}</h5></Col>
				</Row><br/>
				<Row>
					<Col>
						<h4>Spot the correct Image:</h4>
					</Col>
				</Row><br/>
				<Row>
					<Col>
						<div className={`${styles.imageWrapper} ${selectedImage === 1 ? styles.active : ""}`}>
							<Image
								src={correct}
								width={600}
								onClick={() => setSelectedImage(1)}
							/>
						</div>
					</Col>
					<Col>
						<div className={`${styles.imageWrapper} ${selectedImage === 0 ? styles.active : ""}`}>
							<Image
								src={fake}
								width={600}
								onClick={() => setSelectedImage(0)}
							/>
						</div>
					</Col>
				</Row><br/>
				<Row >
					<Col/>
					<Col xs='auto'>
						<Button color="primary" onClick={submitAnswer} disabled={selectedImage === null}>Next Question</Button>
					</Col>
				</Row>
    </Container>
  )
}

export default Quiz;
