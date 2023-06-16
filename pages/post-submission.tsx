import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";

const PostSubmissionPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // submit logic coming soon!!!
  };

  return (
    <>
      <Navbar />
      <Box p={8}>
        <form onSubmit={handleSubmit}>
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

          <Box mt={4}>
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

          <Button
            type="submit"
            variant="solid"
            size="sm"
            colorScheme="blue"
            mt={4}
          >
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

export default PostSubmissionPage;
