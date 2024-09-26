'use server';

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/app/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { type, language, title, description, content, published } = req.body;

    try {
      const post = await prisma.post.create({
        data: {
          type,
          language,
          title,
          description,
          content,
          published: published || false,
        },
      });

      res.status(200).json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Unable to create post' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
