'use server';

import { prisma } from './prisma';

// get all posts
export const getAllPosts = async () => {
  return prisma.post.findMany();
};

// get a post with ID
export const getPostById = async (id: string) => {
  return prisma.post.findUnique({
    where: { id },
  });
};

// get a post with title
export const getPostByTitle = async (title: string) => {
  return prisma.post.findUnique({
    where: { title },
  });
};

// Get 3 latest posts of type "project"
export const getLatestPosts = async (type: string) => {
  return prisma.post.findMany({
    where: {
      type: {
        equals: type 
      },
    },
    orderBy: {
      createdAt: 'desc', 
    },
    take: 3, 
  });
};
