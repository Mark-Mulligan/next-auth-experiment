import { db } from "../../../firebase";
import type { NextApiRequest, NextApiResponse } from 'next';
import authOptions from "../auth/[...nextauth]";
import { unstable_getServerSession} from "next-auth/next";

type Data = {
  students: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (req.method === 'GET') {
    console.log("session", session);
    console.log('authOptions', authOptions)
    res.status(200).json({ students: [] })
    return;
  }
}