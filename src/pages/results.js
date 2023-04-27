import React from 'react'
import styles from '../styles/styles.module.css';
import { Button, Col, Container, Row } from 'reactstrap';
import { useGameContext } from '@/contexts/game-context';
import { HOME_ROUTE, QUIZ_ROUTE } from '@/constants/routes';
import { useRouter } from 'next/router';

const Results = () => {
	const router = useRouter();
  const { score, resetQuiz } = useGameContext();
	
	const playAgain = () => {
		router.push(QUIZ_ROUTE);
		resetQuiz();
	}
  return (
    <div className={styles.homeWrapper}>
      <Container>
        <Row>
            <Col className='text-center'>
                <h6>Your Score: <h4>{score} / 10</h4> </h6>
            </Col>
        </Row><br/>
				<Row>
					<Col className="text-center">
						<div>
						<Button color="primary" onClick={playAgain}>
							Play Again
						</Button>{"  "}
						<Button onClick={() => router.push(HOME_ROUTE)}>
							Go Home
						</Button>
						</div>
					</Col>
				</Row>
      </Container>
    </div>
  )
}

export default Results
