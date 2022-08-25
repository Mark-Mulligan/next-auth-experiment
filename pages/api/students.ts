import { db } from '../../firebase';
import type { NextApiRequest, NextApiResponse } from 'next';
import { authOptions } from './auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth/next';

type Data = {
  students: any;
};

interface Error {
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | Error>) {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (!session) {
    res.status(401).json({ message: 'You must be logged in.' });
    return;
  }

  if (req.method === 'GET') {
    console.log('session', session);

    // const result = await db.collection('users').doc(session.user.id).get();
    console.log('result', db);

    res.status(200).json({ students: [] });
    return;
  }
}
