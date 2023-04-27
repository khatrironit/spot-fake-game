import { useRouter } from 'next/router';
import styles from '../styles/styles.module.css';
import { QUIZ_ROUTE } from '@/constants/routes';
import { Button } from 'reactstrap';

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.homeWrapper}>
      <Button color="primary" onClick={() => router.push(QUIZ_ROUTE)}>Start Quiz</Button>
    </div>
  )
}
