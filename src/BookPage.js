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
    HStack
} from "@chakra-ui/react";

import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function BookPage() {

    const { isOpen, onOpen, onClose } = useDisclosure();


    const navigate = useNavigate();

    const handleGoToMessage = (sellerUNI) => {
      navigate(`/message/`);
    };

    const handleBuyNow = () => {
        navigate(`/sign-in`);
      };
  

    const { titlebook, classname, price } = useParams();

    return (
        <div style={{background: "#9BCBEB"}}>
            <Center>
            <Card
                rounded="md" 
                bg="rgba(255, 255, 255, 0.3)"
                width="500px"
                p={4}
                variant='outline'
                style={{ margin: '15px'}}
                padding="10px"
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
                    src={'https://cloud.firebrandtech.com/api/v2/img/111/9780785841814/XL'}
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