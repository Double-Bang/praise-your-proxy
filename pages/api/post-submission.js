import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient({log: [{emit: 'stdout', level: 'query',}, {emit: 'stdout', level: 'error',}, {emit: 'stdout', level: 'info',}, {emit: 'stdout', level: 'warn',},],});

// const savePost = async(body) => {
//   console.log("Saving post!");
//   return prisma.post.upsert({
//     where: {
//       cardImage: body.cardImage
//     },
//     update: {},
//     create: { ...body }
//   });
// };

const handler = async (req, res) => {
  // We assume POST here
  const checkIfPostExists = async(body) => {
    console.log("Body: " + JSON.stringify(body));
    const { id } = body;
    const post = await prisma.post.findUnique({
      where: {
        id: id
      }
    });
    return post !== null;
  };

  const { body } = req;
  console.log("Endpoint was hit");
  console.log(JSON.stringify(body));

  checkIfPostExists(body)
    .then((doesExist) => {
      console.log(doesExist);
      if (doesExist) {
        console.log("Already exists: ");
        return res.send({success: false, message: "That post already exists"});
      }
      if (!doesExist) {
        console.log("creating now");
        prisma.post.create({data: body});
      }
      else return res.send({success: false, message: "Something went wrong!"});
    }).then(() => {
      return res.send({
        success: true,
        message: 'Your post has been saved successfully, redirecting.'
      });
    });
};

export default handler;
