import { useState } from "react";
import {
  Box,
  VStack,
  HStack,
  Text,
  Image,
  Badge,
  Button,
  Flex,
  Input,
  Stack,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const Post = ({ post }) => {
  const { id, cardName, cardImage, cardSet, cardNumber, seller, review, author } = post;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [enlargedImage, setEnlargedImage] = useState(null);
  const [isImageModalOpen, setImageModalOpen] = useState(false);


  //temporary until backend changes
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments((prevComments) => [...prevComments, newComment]);
      setNewComment("");
    }
  };

  const handleImageClick = () => {
    setEnlargedImage(cardImage);
    setImageModalOpen(true);
  };

  const handleImageModalClose = () => {
    setEnlargedImage(null);
    setImageModalOpen(false);
  };

  return (
    <Box borderWidth="1px" borderRadius="md" p={4} width="100%">
      <HStack spacing={4}>
        <Image
          src={cardImage}
          alt={cardName}
          boxSize="100px"
          objectFit="cover"
          cursor="pointer"
          onClick={handleImageClick}
        />
        <VStack align="start" flex={1}>
          <Text fontSize="xl" fontWeight="bold">
            {cardName}
          </Text>
          <Text fontSize="sm">
            Card Set: {cardSet} | Card Number: {cardNumber}
          </Text>
          <Flex align="center">
            <Badge colorScheme="blue" mr={2}>
              {seller}
            </Badge>
            <Text fontSize="sm" mr={2}>
              {author}
            </Text>
            <Button colorScheme="blue" size="sm">
              Upvote
            </Button>
          </Flex>
        </VStack>
      </HStack>
      <Box mt={4}>
        <Text>{review}</Text>
      </Box>
      <Box mt={4}>
        <Stack spacing={2}>
          <Button
            size="sm"
            leftIcon={showComments ? <CloseIcon /> : <AddIcon />}
            onClick={() => setShowComments(!showComments)}
          >
            {showComments ? "Hide Comments" : "Show Comments"}
          </Button>
          {showComments && (
            <>
              {comments.map((comment, index) => (
                <Text key={index} fontSize="sm">
                  {comment}
                </Text>
              ))}
              <form onSubmit={handleCommentSubmit}>
                <HStack>
                  <Input
                    type="text"
                    placeholder="Add a comment"
                    size="sm"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <IconButton
                    type="submit"
                    aria-label="Post comment"
                    icon={<AddIcon />}
                    size="sm"
                    colorScheme="blue"
                  />
                </HStack>
              </form>
            </>
          )}
        </Stack>
      </Box>
      <Modal isOpen={isImageModalOpen} onClose={handleImageModalClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Image src={enlargedImage} alt={cardName} objectFit="contain" maxHeight="80vh" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Post;
