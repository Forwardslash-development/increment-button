import Head from 'next/head';
import IncrementButton from '../components/incrementButton';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Increment Button</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <IncrementButton />
      </main>
    </div>
  );
}
