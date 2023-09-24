import React, { } from 'react';

import {
    Text,
    Stack,
    Card,
    CardBody,
    Heading,
    CardFooter,
    Button,
    IconButton,
    Center,
    Skeleton,
    Image,

} from '@chakra-ui/react';


function TextbookCard({titlebook, bookurl, classname, price, onClick}) {
    return (
        <a>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                onClick={() => console.log('test')}
                width="600px"
                bg="rgba(255, 255, 255, 0.3)"
                style={{ margin: '15px'}}
                padding="10px"
                borderRadius="15px"
                backdropFilter="blur(10px)" // Backdrop filter for blur
                boxShadow="0 8px 16px rgba(0, 0, 0, 0.2)"
                borderWidth={0}
            > 
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src={bookurl}
                alt={titlebook}
            />

            <Stack>
                <CardBody>
                <Heading size='md'>{titlebook}</Heading>

                <Text py='2'>
                    {classname}
                </Text>

                <Text py='2'>
                    {price}
                </Text>
                </CardBody>

                <CardFooter>
                <Button variant='solid' colorScheme='blue' onClick={onClick}>
                    Buy book
                </Button>
                </CardFooter>
            </Stack>
            </Card>
        </a>
    );
}

export default TextbookCard;