import React from 'react';
import FormWrapper from '../ModalWrappers/FormWrapper';
import { Button } from 'reactstrap';

interface Props {
  buttonLabel: string
}

interface States {
  modal: boolean
}

class Body extends React.Component <Props, States> {
  static defaultProps : Props = {
    buttonLabel: "Participant Information"
  };

  state = {
    modal: true,
  };

  toggle = ()=> {
    this.setState(prevState => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <FormWrapper popupState={this.state.modal}/>
      </div>

    );
  }
}


export default Body;