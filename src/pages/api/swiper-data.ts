// import path from 'path';
// import { promises as fs } from 'fs';

// export default async function handler(req, res) {
//   const jsonDirectory = path.join(process.cwd(), 'json');
//   const fileContents = await fs.readFile(jsonDirectory + '/swiper-data.json', 'utf8');
//   res.status(200).json(fileContents);
// }


import type { NextApiRequest, NextApiResponse } from 'next'

import path from 'path';
import { promises as fs } from 'fs';

type Data = {
  data: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(jsonDirectory + '/swiper-data.json', 'utf8');
  res.status(200).json({ data: fileContents })
}
