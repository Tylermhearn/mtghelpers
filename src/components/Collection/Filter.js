import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const Filter = () => {
  return (
    <ButtonGroup>
      <Button><img src="./images/greenMana.png" width="25" height="25" /></Button>
      <Button>Middle</Button>
      <Button>Right</Button>
    </ButtonGroup>
  );
}

export default Filter