import React from 'react';

import {
    Input,
    Textarea,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalCloseButton,
    useDisclosure,
    Card,
    Text,
    Center,
    VStack,
    Heading,
    Image,
    HStack,
    Box,
    Icon
} from "@chakra-ui/react";

import { ArrowBackIcon } from '@chakra-ui/icons';

import { useParams, useNavigate } from 'react-router-dom';

import { MdShoppingCart } from 'react-icons/md'



export default function BookPage() {

    const { isOpen, onOpen, onClose } = useDisclosure();


    const navigate = useNavigate();

    const handleGoToMessage = (sellerUNI) => {
      navigate(`/message/`);
    };

    const handleSellBooks = () => {
        navigate(`/sell-books`);
    };

    const handleSignIn = () => {
        navigate(`/sign-in`);
    };

    const handleGoToHome = () => {
        navigate(`/`);
    };
  

    const { titlebook, classname, price, index } = useParams();

    const links = ["https://tmm.chicagodistributioncenter.com/IsbnImages/9780226470498.jpg", "https://m.media-amazon.com/images/I/517v7rb0cCL._AC_UF1000,1000_QL80_.jpg", "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg", "https://m.media-amazon.com/images/I/51L7aRvbU-L._AC_UF1000,1000_QL80_.jpg", "https://m.media-amazon.com/images/I/71yqXZeTuxL._AC_UF1000,1000_QL80_.jpg"];

    console.log(index);

    return (
        <div style={{background: "#9BCBEB"}}>
            <Box className='nav-bar' bg='#77b6e0' p={30} w='100%' alignContent={'center'}>
                <HStack justifyContent='space-between' alignItems='center'>
                    <HStack>
                        <button onClick={handleGoToHome}>
                            <ArrowBackIcon />
                        </button>
                    </HStack>
                    <HStack justify-content='flex-end'>
                    <Button colorScheme='blue' onClick={handleSellBooks}>
                        Sell books
                    </Button>
                    <Button colorScheme='blue' onClick={handleSignIn} ml='30px'>
                        Sign in/Register
                    </Button>
                    <Icon 
                        as={MdShoppingCart}
                        boxSize={10}
                        color="#3182ce"
                        ml={10}
                    />
                    </HStack>
                </HStack>
            </Box>
            <Center>
            <Card
                rounded="md" 
                bg="rgba(255, 255, 255, 0.3)"
                width="500px"
                p={10}
                variant='outline'
                style={{ margin: '40px'}}
                padding="15px"
                borderRadius="15px"
                backdropFilter="blur(10px)" // Backdrop filter for blur
                boxShadow="0 8px 16px rgba(0, 0, 0, 0.2)"
                borderWidth={0}
            >
                <VStack>
                    <Heading
                    style={{marginTop: '50px'}}>
                        {titlebook}
                    </Heading>


                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '300px' }}
                    src={links[index]}
                    alt={titlebook}
                />

                    <Text>
                        {classname}
                    </Text>

                    <Text>
                        Selling for ${price}
                    </Text>

                    <Text>
                        Seller is: ecl2160@columbia.edu
                    </Text>

                    <HStack style={{marginTop: '100px'}}>
                        <Button onClick={handleGoToMessage} colorScheme="blue">
                            Message seller
                        </Button>
                        <Button onClick={onOpen} colorScheme="blue">
                            Buy now
                        </Button>
                    </HStack>

                </VStack>
            </Card>
            </Center>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
              <ModalOverlay />
              <ModalContent>
                <ModalCloseButton />
                <ModalHeader>
                  Request sent to buyer.
                </ModalHeader>
                <ModalFooter>
                  <Button onClick={onClose}>OK</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
        </div>
    )
}