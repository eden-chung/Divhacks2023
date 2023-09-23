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


function TextbookCardLarge({titlebook, bookurl, classname, price}) {
    return (
        <a>
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
                <Button variant='solid' style={{ backgroundColor: '#9BCBEB', color: '#FFFFFF' }}>
                    Buy book
                </Button>
                </CardFooter>
            </Stack>
        </a>
    );
}

export default TextbookCard;