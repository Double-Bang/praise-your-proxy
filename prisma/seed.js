const { PrismaClient } = require('@prisma/client');
const { posts, comments } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: `testemail@gmail.com`,
      name: `test`,
      posts: {
        create: [
          {
            cardName: "Black Lotus",
            cardImage: "https://i.imgur.com/pYig6QF.jpg",
            cardSet: "CED",
            cardNumber: "#233",
            seller: "LOTUS",
            review: "Holy Moly Batman, I didn't even know they made these in foil. The card is so real it made me doubt my self worth ffs.",
          },
          {
            cardName: "Nicolas Mage",
            cardImage: "https://i.imgur.com/6Y0flSS.jpg",
            cardSet: "SWED",
            cardNumber: "#420",
            seller: "USEA",
            review: "Easily the most powerful magic card ever printed. Can't believe I finally get to hold one in my hands",
          }
        ]
      }
    },
  });

//   await prisma.post.createMany({
//     data: {
//       author: "2acb1aea-64b2-4613-a59a-bb5978523c6f",
//       cardName: "Black Lotus",
//       cardImage: "https://i.imgur.com/pYig6QF.jpg",
//       cardSet: "CED",
//       cardNumber: "#233",
//       seller: "LOTUS",
//       review: "Holy Moly Batman, I didn't even know they made these in foil. The card is so real it made me doubt my self worth ffs.",
//     },
//     data: {
//       author: "2acb1aea-64b2-4613-a59a-bb5978523c6f",
//       cardName: "Nicolas Mage",
//       cardImage: "https://i.imgur.com/6Y0flSS.jpg",
//       cardSet: "SWED",
//       cardNumber: "#420",
//       seller: "USEA",
//       review: "Easily the most powerful magic card ever printed. Can't believe I finally get to hold one in my hands",
//     },

//   });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
