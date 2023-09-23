import React from 'react';

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
    CardFooter
} from "@chakra-ui/react";

import TextbookCard from './TextbookCard';

import { Link } from 'react-router-dom';

export default function Home() {



    return (
        <>
        <Box className='nav-bar' bg='#9BCBEB' p={30} w='100%' alignContent={'center'}>
            <Input className='search-bar' w='60%' placeholder='Search' variant='Outline'/>
            <Text>
                Sign in/Register
            </Text>
            <img src={logo} alt="Logo" />
        </Box>
            <Heading
            style={{ textAlign: 'center',
            marginTop: '50px'}}>
                Welcome! Books currently available to buy
            </Heading>
            <Center>
                <VStack
                style={{
                    width: '500px'
                }}>
                    <TextbookCard
                        titlebook="The Iliad"
                        bookurl="https://cloud.firebrandtech.com/api/v2/img/111/9780785841814/XL"
                        classname="Lithum"   
                        price="20$"
                    />
                    <TextbookCard
                        titlebook="Introduction to Java"
                        bookurl="https://m.media-amazon.com/images/I/517v7rb0cCL._AC_UF1000,1000_QL80_.jpg"
                        classname="COMS-W1004: Introduction to Java"   
                        price="3$"
                    />
                    <TextbookCard
                        titlebook="Pride and Prejudice"
                        bookurl = "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg"
                        classname="Lithum"   
                        price="3$"
                    />
                    <TextbookCard
                        titlebook="The C programming Language"
                        bookurl = "https://m.media-amazon.com/images/I/51L7aRvbU-L._AC_UF1000,1000_QL80_.jpg"
                        classname="COMS-W3157: Advanced Programming"   
                        price="5$"
                    />
                </VStack>
            </Center>
        </>
    )
};


  
