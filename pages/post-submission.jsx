import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";


const PostSubmissionPage = () => {
  const [formData, setFormData] = useState({
    // Default values
    email: 'test@email.com',
    cardSet: 'Test Set',
    cardName: 'TestName',
    seller: 'USEA',
    cardNumber: "Test number",
    review: 'Test review',
    cardImage: '/black-lotus.jpg',
    id: "3"
  });

  // const handleImageChange = (event) => {
  //   const file = event.target.files[0];
  //   setSelectedImage(URL.createObjectURL(file));
  // };
  
  const updateField = (field, value) => {
    setFormData({...formData, [field]: value});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting form");
    const data = formData;
    fetch('/api/post-test', {
      body: JSON.stringify({...data}),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST"
    })
      .then((response) => {
        if (response.success) {
          router.push("/");
        }
        else console.log(response);
      })
      .catch((error) => {
        throw error;
      });

  };

  return (
    <>
      <Navbar />
      <Box p={8}>
        <form onSubmit={handleSubmit}>
          <Box>
            <FormControl id="cardName" isRequired>
              <FormLabel fontWeight="bold">Card Name</FormLabel>
              <Input type="text" placeholder={formData.cardName ? formData.cardName : "Card name"} onChange={e => updateField("cardName", e.target.value)}/>
            </FormControl>

          </Box>

          <Box mt={4}>
            <FormControl id="cardSet" isRequired>
              <FormLabel fontWeight="bold">Set</FormLabel>
              <Input type="text" placeholder={formData.cardSet ? formData.cardSet : "Card set"} maxLength={4}
                     onChange={e => updateField("cardSet", e.target.value)} />
            </FormControl>

            <FormControl id="cardNumber" isRequired mt={4}>
              <FormLabel fontWeight="bold">Number</FormLabel>
              <Input type="text" placeholder={formData.cardNumber ? formData.cardNumber : "Card number"}
                     maxLength={4}
                     onChange={e => updateField("cardNumber", e.target.value)} />
            </FormControl>

            <FormControl id="seller" isRequired mt={4}>
              <FormLabel fontWeight="bold">Seller</FormLabel>
              <RadioGroup
                onChange={(value) => updateField("seller", value)}
                value={formData.seller}>
                <Radio value="USEA">USEA</Radio>
                <Radio value="LOTUS">LOTUS</Radio>
              </RadioGroup>
            </FormControl>

            <FormControl id="review" isRequired mt={4}>
              <FormLabel fontWeight="bold">Review</FormLabel>
              <Textarea placeholder={formData.review ? formData.review : "Write your review here"}
                        rows={4} onChange={e => updateField("review", e.target.value)}/>
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
