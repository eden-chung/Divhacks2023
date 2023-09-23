import React from 'react';
import { Input } from '@chakra-ui/react';
import { Textarea } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

const Message = () => {
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
          }}
        ></Input>
        <Textarea
          style={{
            maxWidth: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          placeholder="Message to the seller..."
        />
        <Button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default Message;
