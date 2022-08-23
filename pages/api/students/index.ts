import { db } from "../../../firebase";
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  students: any
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ students: [] })
}