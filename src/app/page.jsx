import Image from 'next/image';
import Button from '../components/Button';
import Box from '../components/Box';
import { Inter } from 'next/font/google'
import 'tailwindcss/tailwind.css'
//import styles from './page.module.css';
import styles from './globals.css';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className="layout">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
          <Button seliga={"Teste"}>Comeon</Button>
          <Box qualquer={"inter"}>Opa</Box>
        </div>
      </div>
    </main>
  )
}
