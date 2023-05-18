import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import {AddIcon } from "@chakra-ui/icons";
import Image from "next/image";

export default function PostReviewModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Halp me Mollow lmao
    onClose();
  };

  return (
    <>
      <Button
        variant="solid"
        size="sm"
        colorScheme="blue"
        leftIcon={<AddIcon />}
        onClick={onOpen}
      >
        Post a Review
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="600px">
          <ModalHeader
            bg="blue.500"
            color="white"
            fontWeight="bold"
            fontSize="xl"
          >
            Submit a Review
          </ModalHeader>
          <ModalCloseButton color="blue.500" />

          <form onSubmit={handleSubmit}>
            <ModalBody display="grid" gridTemplateColumns="1fr 1fr" gridGap={6}>
              <Box>
                <FormControl id="cardName" isRequired>
                  <FormLabel fontWeight="bold">Card Name</FormLabel>
                  <Input type="text" placeholder="Enter the card name" />
                </FormControl>

                <FormControl id="cardImage" isRequired mt={4}>
                  <FormLabel fontWeight="bold">Card Image</FormLabel>
                  <Input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                  {selectedImage && (
                    <Box mt={2}>
                      <Image
                        src={selectedImage}
                        alt="Preview"
                        width={500}
                        height={300}
                      />
                    </Box>
                  )}
                </FormControl>
              </Box>

              <Box>
                <FormControl id="cardSet" isRequired>
                  <FormLabel fontWeight="bold">Set</FormLabel>
                  <Input type="text" placeholder="Set" maxLength={4} />
                </FormControl>

                <FormControl id="cardNumber" isRequired mt={4}>
                  <FormLabel fontWeight="bold">Number</FormLabel>
                  <Input type="text" placeholder="Number" maxLength={4} />
                </FormControl>

                <FormControl id="seller" isRequired mt={4}>
                  <FormLabel fontWeight="bold">Seller</FormLabel>
                  <Select placeholder="Select a seller">
                    <option value="USEA">USEA</option>
                    <option value="LOTUS">LOTUS</option>
                  </Select>
                </FormControl>

                <FormControl id="review" isRequired mt={4}>
                  <FormLabel fontWeight="bold">Review</FormLabel>
                  <Textarea placeholder="Write your review here" rows={4} />
                </FormControl>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" colorScheme="blue" mr={3}>
                Submit
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
