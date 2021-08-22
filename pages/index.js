import Head from 'next/head'
import Sidebar from '../components/Sidebar';
import {Container} from "../styles/chat.styles";
import DefaultChatScreen from "../components/DefaultChatScreen";

export default function Home() {
  return (
    <div>
      <Head>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
        <title>What's App clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
          <Sidebar/>
          <DefaultChatScreen/>
      </Container>
    </div>
  )
}