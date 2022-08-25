import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Button from '@mui/material/Button';
import axios from 'axios';
import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { status } = useSession({ required: true });

  const handleGetStudents = async () => {
    try {
      const { data } = await axios.get('/api/students');
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  if (status === 'loading') {
    return <div>Loading</div>;
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Button variant="contained" onClick={() => handleGetStudents()}>
          Get Students
        </Button>
      </div>
    </div>
  );
};

export default Home;
