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

import { useNavigate } from 'react-router-dom';

export default function Home() {

    const navigate = useNavigate();

    const handleGoToBooksPage = (titlebook, classname, price) => {
      console.log("test");

      navigate(`/book/${titlebook}/${classname}/${price}`);
    };

    return (
        <div style={{background: "#9BCBEB"}}>
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
                        bookurl="https://cloud.firebrandtech.com/api/v2/img/111/9780785841814/XL"
                        classname="HUMA-UN1001: Literature Humanities"
                        price="20$"
                        onClick={() => handleGoToBooksPage("The Iliad", "HUMA-UN1001: Literature Humanities", "20")}
                    />
                    <TextbookCard
                        titlebook="Introduction to Java"
                        bookurl="https://m.media-amazon.com/images/I/517v7rb0cCL._AC_UF1000,1000_QL80_.jpg"
                        classname="COMS-W1004: Introduction to Java"   
                        price="3$"
                        onClick={() => handleGoToBooksPage("Introduction to Java", "COMS-W1004: Introduction to Java"  , "3")}
                    />
                    <TextbookCard
                        titlebook="Pride and Prejudice"
                        bookurl = "https://m.media-amazon.com/images/I/71Q1tPupKjL._AC_UF1000,1000_QL80_.jpg"
                        classname="HUMA-UN1001: Literature Humanities" 
                        price="3$"
                        onClick={() => handleGoToBooksPage("Pride and Prejudice", "HUMA-UN1001: Literature Humanities"  , "3")}
                    />
                    <TextbookCard
                        titlebook="The C programming Language"
                        bookurl = "https://m.media-amazon.com/images/I/51L7aRvbU-L._AC_UF1000,1000_QL80_.jpg"
                        classname="COMS-W3157: Advanced Programming"   
                        price="5$"
                        onClick={() => handleGoToBooksPage("The C programming Language", "COMS-W3157: Advanced Programming" , "5")}
                    />
                </VStack>
            </Center>
        </div>
    )
};


  