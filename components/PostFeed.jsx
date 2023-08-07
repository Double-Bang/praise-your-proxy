import { Container, VStack } from "@chakra-ui/react";
import Post from "./Post";

const PostFeed = () => {
  // Okay so this is my attempt at making fake data.
  const posts = [
    {
      id: 1,
      user: "Lei Ying Lo",
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
      cardImage: "https://i.imgur.com/6Y0flSS.jpg",
      cardSet: "SWED",
      cardNumber: "#420",
      seller: "USEA",
      review: "Easily the most powerful magic card ever printed. Can't believe I finally get to hold one in my hands",
    },
  ];

  return (
    <Container maxW="5xl" centerContent>
      <VStack spacing={4} align="stretch" mt={8}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </VStack>
    </Container>
  );
};

export default PostFeed;
