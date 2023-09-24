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
} from '@chakra-ui/react';
import { EmailIcon } from '@chakra-ui/icons';

const Message = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div style={{background: "#9BCBEB"}}>
      <style>
        {`
          html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            background: #9BCBEB;
          }
        `}
      </style>
      <Center>
            <Card
                rounded="md" 
                bg="rgba(255, 255, 255, 0.3)"
                width="500px"
                p={4}
                variant='outline'
                style={{ margin: '15px', marginTop: '90px'}}
                padding="15px"
                borderRadius="15px"
                backdropFilter="blur(10px)" // Backdrop filter for blur
                boxShadow="0 8px 16px rgba(0, 0, 0, 0.2)"
                borderWidth={0}
                

            >
              <VStack>
                <Text>Send a message to the seller:</Text>
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
                borderColor="blue.500"
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
                borderColor="blue.500"
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
                borderColor="blue.500"
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
                borderColor="blue.500"
              />
              <Button
                colorScheme="blue"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 15
                }}
                onClick={onOpen}
            
              >
                Send
              </Button>

              </VStack>
            </Card>
          </Center>

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
  );
};

export default Message;
