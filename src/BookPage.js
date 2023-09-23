import React from 'react';

import {
    Text,
    Heading,
    Center,
    VStack,
    HStack,
    Button,
    Image
} from "@chakra-ui/react";

import { useParams } from 'react-router-dom';

export default function BookPage() {

    const { titlebook, classname, price } = useParams();

    return (
        <Center>
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
                    <Button>
                        Message seller
                    </Button>
                    <Button>
                        Buy now
                    </Button>
                </HStack>

            </VStack>
        </Center>
    )
}