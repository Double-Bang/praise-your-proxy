import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();


export const getUsers = async() => {
  return prisma.users.findAll();
}

export const getPosts = async() => {
  return prisma.post.findMany();
};
