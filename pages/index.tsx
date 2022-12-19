import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Login from "../components/login";

export default function Home() {
  return (
    <>
      <Head>
        <title>Trading Bot</title>
        <meta name="description" content="Trading Bot User Interface" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
          <div className={'flex'}>
              <h1>Trading Bot</h1>
              <Login />
          </div>

      </main>
    </>
  )
}
