import Image from 'next/image';
import Button from '../components/Button';
import Box from '../components/Box';
import { Inter } from 'next/font/google'
import styles from './page.module.css';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="layout">
          <Button seliga={"Teste"}>Comeon</Button>
          <Box qualquer={"inter"}>Opa</Box>
        </div>
      </div>
    </main>
  )
}
