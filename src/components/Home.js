import React from 'react';

import { MdShoppingCart } from 'react-icons/md'

import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
    HStack,
    Image,
    Icon,
    useMediaQuery,
    VStack, 
    Center,
    Card,
    CardHeader, 
    CardBody,
    CardFooter,
    Input
} from "@chakra-ui/react";

import TextbookCard from './TextbookCard';

import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    const handleGoToBooksPage = (titlebook, classname, price, index) => {
      console.log("test");

      navigate(`/book/${titlebook}/${classname}/${price}/${index}`);
    };

    const handleSellBooks = () => {
        navigate(`/sell-books`);
      };

    const handleSignIn = () => {
        navigate(`/sign-in`);
      };

    return (
        <div style={{background: "#9BCBEB"}}>
            <Box className='nav-bar' bg='#77b6e0' p={30} w='100%' alignContent={'center'}>
                <HStack>
                <Input className='search-bar' w='60%' placeholder='Search' variant='Outline' bg="white" _placeholder={{
    color: 'grey'}}/>
                <Button colorScheme='blue' ml='auto' onClick={handleSellBooks} mr='-145px'>
                    Sell books
                </Button>
                <Button colorScheme='blue' ml='auto' onClick={handleSignIn}>
                    Sign in/Register
                </Button>
                <Icon 
                    as={MdShoppingCart}
                    boxSize={10}
                    color="#3182ce"
                    ml={10}
                />
                </HStack>
            </Box>
            <Heading
            style={{ textAlign: 'center', paddingTop: '50px'}}>
                Welcome! Books currently available to buy
            </Heading>
            <Center>
                <VStack
                style={{
                    width: '500px'
                }}>
                    <TextbookCard
                        id = "1"
                        titlebook="The Iliad"
                        bookurl="https://tmm.chicagodistributioncenter.com/IsbnImages/9780226470498.jpg"
                        classname="HUMA-UN1001: Literature Humanities"
                        price="$10"
                        onClick={() => handleGoToBooksPage("The Iliad", "HUMA-UN1001: Literature Humanities", "20", 0)}
                    />
                    <TextbookCard
                        titlebook="Introduction to Java"
                        bookurl="https://m.media-amazon.com/images/I/517v7rb0cCL._AC_UF1000,1000_QL80_.jpg"
                        classname="COMS-W1004: Introduction to Java"   
                        price="$4"
                        onClick={() => handleGoToBooksPage("Introduction to Java", "COMS-W1004: Introduction to Java"  , "3", 1)}
                    />
                    <TextbookCard
                        titlebook="Pride and Prejudice"
                        bookurl = "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg"
                        classname="HUMA-UN1001: Literature Humanities" 
                        price="$3"
                        onClick={() => handleGoToBooksPage("Pride and Prejudice", "HUMA-UN1001: Literature Humanities"  , "3", 2)}
                    />
                    <TextbookCard
                        titlebook="The C programming Language"
                        bookurl = "https://m.media-amazon.com/images/I/51L7aRvbU-L._AC_UF1000,1000_QL80_.jpg"
                        classname="COMS-W3157: Advanced Programming"   
                        price="$5"
                        onClick={() => handleGoToBooksPage("The C programming Language", "COMS-W3157: Advanced Programming" , "5", 3)}
                    />
                    <TextbookCard
                        titlebook="The Wealth of Nations"
                        bookurl = "https://m.media-amazon.com/images/I/71yqXZeTuxL._AC_UF1000,1000_QL80_.jpg"
                        classname="COCI-1101: Contemporary Civilization"   
                        price="$10"
                        onClick={() => handleGoToBooksPage("The Wealth of Nations", "COCI-1101: Contemporary Civilization", "10", 4)}
                    />
                </VStack>
            </Center>
        </div>
    )
};


  
