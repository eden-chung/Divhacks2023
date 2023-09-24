import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    Input,
    Box,
    Textarea,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalCloseButton,
    useDisclosure,
    HStack,
    Icon
} from '@chakra-ui/react';
import { CheckIcon, ArrowBackIcon } from '@chakra-ui/icons';

import { MdShoppingCart } from 'react-icons/md'


function SellBooks() {
    const navigate = useNavigate();

    const { isOpen: isSubmitModalOpen, onOpen: openSubmitModal, onClose: closeSubmitModal } = useDisclosure();
    const { isOpen: isCancelModalOpen, onOpen: openCancelModal, onClose: closeCancelModal } = useDisclosure();

    const [bookName, setBookName] = useState("");
    const [className, setClassName] = useState("");
    const [price, setPrice] = useState("");
    const [menu, setMenu] = useState(false);

    const handleBookNameChange = event => {
        setBookName(event.target.value)
    }

    const handleClassNameChange = event => {
        setClassName(event.target.value)
    }

    const handlePriceChange = event => {
        setPrice(event.target.value)
    }

    let handleSubmit = e => {
        e.preventDefault();
    };

    const handleMenuChange = () => {
        setMenu(true)
    }

    const handleNewListing = () => {
        navigate(`/book/The%20Iliad/HUMA-UN1001:%20Literature%20Humanities/20/0`);
    };

    const handleSellBooks = () => {
        navigate(`/sell-books`);
      };

    const handleSignIn = () => {
        navigate(`/sign-in`);
      };

    return (
        <div>
            <Box className='nav-bar' bg='#9BCBEB' p={30} w='100%' alignContent={'center'}>
                <HStack justifyContent='space-between' alignItems='center'>
                    <HStack>
                        <button onClick={openCancelModal}>
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
            <div class="sell-books-body">
                <div class="sell-books-card">
                    <div class="sell-books-rectangle">
                        <h1>Selling Books</h1>
                        <form onSubmit={handleSubmit}>
                            <input type="text" id="book-name" placeholder="Book Name"
                                onChange={handleBookNameChange}
                                value={bookName} />
                            <div class="post-drop-down form-group">
                                <select
                                    placeholder="Choose a class"
                                    name="className"
                                    value={className}
                                    onChange={handleClassNameChange}
                                    required
                                >
                                    <option value="💬">
                                        Choose
                                    </option>
                                    <option value="lithum">
                                        Literature Humanities
                                    </option>
                                    <option value="cc">
                                        Contemporary Civilization
                                    </option>
                                    <option value="ap">
                                        Advanced Programming
                                    </option>
                                    <option value="introjava">
                                        Introduction to Java
                                    </option>
                                    <option value="scienceofpsych">
                                        The Science of Psychology
                                    </option>
                                </select>
                            </div>

                            <input type="number" id="price" placeholder="Price ($)"
                                onChange={handlePriceChange}
                                value={price}
                            />

                            <button onClick={openSubmitModal} type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <Modal onClose={closeSubmitModal} isOpen={isSubmitModalOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalHeader>
                            Book listing successful! {<CheckIcon />}
                        </ModalHeader>
                        <ModalFooter>
                            <Button onClick={handleNewListing}>OK</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
                <Modal onClose={closeCancelModal} isOpen={isCancelModalOpen} isCentered>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton />
                        <ModalHeader>
                            Are you sure you want to cancel?
                        </ModalHeader>
                        <ModalFooter>
                            <Button onClick={handleNewListing}>  YES {<CheckIcon />} </Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
        </div>
    )
}

export default SellBooks;