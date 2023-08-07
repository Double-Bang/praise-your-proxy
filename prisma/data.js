const { Prisma } = require('@prisma/client');

const posts = [
  {
    id: 1,
    author: "Lei Ying Lo",
    cardName: "Black Lotus",
    cardImage: "https://i.imgur.com/pYig6QF.jpg",
    cardSet: "CED",
    cardNumber: "#233",
    seller: "LOTUS",
    review: "Holy Moly Batman, I didn't even know they made these in foil. The card is so real it made me doubt my self worth ffs.",
  },
  {
    id: 2,
    user: "I.P. Freely",
    cardName: "Nicolas Mage",
    cardImageURL: "https://i.imgur.com/6Y0flSS.jpg",
    cardSet: "SWED",
    cardNumber: "#420",
    seller: "USEA",
    review: "Easily the most powerful magic card ever printed. Can't believe I finally get to hold one in my hands",
  },
];

const comments = [
  {
    name: 'Cool helmet.',
    description: 'A nice helmet to wear on your head',
    price: new Prisma.Decimal(19.95),
    image: '/images/helmet.jpg',
    category_id: 1,
  },
  {
    name: 'Grey T-Shirt',
    description: 'A nice shirt that you can wear on your body',
    price: new Prisma.Decimal(22.95),
    image: '/images/shirt.jpg',
    category_id: 3,
  },
  {
    name: 'Socks',
    description: 'Cool socks that you can wear on your feet',
    price: new Prisma.Decimal(12.95),
    image: '/images/socks.jpg',
    category_id: 2,
  },
  {
    name: 'Sweatshirt',
    description: 'Cool sweatshirt that you can wear on your body',
    price: new Prisma.Decimal(12.95),
    image: '/images/sweatshirt.jpg',
    category_id: 3,
  },
];

module.exports = {
  products,
  categories,
};
