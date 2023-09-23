import React from 'react';
import {
  Input,
  Textarea,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';

const Message = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div style={{ marginLeft: 10 }}>
        <Input
          variant="flushed"
          placeholder="First Name"
          style={{
            maxWidth: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15,
          }}
        ></Input>
        <Input
          variant="flushed"
          placeholder="Last Name"
          style={{
            maxWidth: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15,
          }}
        ></Input>
        <Input
          variant="flushed"
          placeholder="Email"
          style={{
            maxWidth: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15,
          }}
        ></Input>
        <Textarea
          style={{
            maxWidth: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 15,
          }}
          placeholder="Message to the seller..."
        />
        <Button
          colorScheme="blue"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={onOpen}
        >
          Send
        </Button>

        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>Message successfully sent!</ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default Message;
