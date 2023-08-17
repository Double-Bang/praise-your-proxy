import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

const handler = async ( req, res) => {
  const { email } = req.body;
  await prisma.post.create({
    data: {
      cardSet: 'Test Set',
      cardName: 'TestName',
      seller: 'USEA',
      cardNumber: "Test number",
      review: 'Test review',
      cardImage: '/images/black-lotus.jpg',
      author: {
        connectOrCreate: {
          where: {email: email},
          create: {
            email: 'test@test.com',
            name: 'Test User'
          }
        }
      }
    },
    include: {
      author: true
    }
  }).then(() => {
    return res.send({success: true,
                     message: 'Your post has been saved successfully.'});
  });
};

export default handler;
