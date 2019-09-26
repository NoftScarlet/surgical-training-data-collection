import React from 'react';
import FormWrapper from '../ModalWrappers/FormWrapper';
import { Button } from 'reactstrap';

interface Props {
}

interface States {
}

class Body extends React.Component <Props, States> {

  render() {
    return (
      <div>
        <FormWrapper />
      </div>
    );
  }
}

export default Body;