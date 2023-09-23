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
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const Message = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <h3>Send a message to the seller:</h3>
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
          backgroundColor="#9BCBEB"
          color="white"
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
            <ModalHeader>
              Message successfully sent! {<EmailIcon />}
            </ModalHeader>
            <ModalFooter>
              <Button onClick={onClose}>OK</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default Message;
