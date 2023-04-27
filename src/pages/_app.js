import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css';
import GameProvider from "@/contexts/game-context";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Spot Fake Image Quiz</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
        <GameProvider>
          <Component {...pageProps} />
        </GameProvider>
    </>
  );
}