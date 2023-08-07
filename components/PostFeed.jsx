import { Container, VStack } from "@chakra-ui/react";
import Post from "./Post";

const PostFeed = (props) => {
  const { posts } = props;

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
