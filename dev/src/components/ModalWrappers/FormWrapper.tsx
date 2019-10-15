import { ModalBody, ModalHeader, Modal, Button } from 'reactstrap';
import ParticipantInfo from '../Forms/ParticipantInfo/ParticipantInfo';
import * as React from 'react';


interface Props {
  ModalName: string
}

interface State {
  popupState: boolean
}

class FormWrapper extends React.Component<Props, State> {



  static defaultProps: Props = {
    ModalName: 'Participant Information',
  };

  state: State = {
    popupState: true,
  };

  toggle = () => {
    this.setState(prevState => ({
      popupState: !prevState.popupState,
    }));
  };

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.ModalName}</Button>
        <Modal isOpen={this.state.popupState} toggle={this.toggle}>
          <ModalHeader>{this.props.ModalName}</ModalHeader>
          <ModalBody >
            <ParticipantInfo buttonClick={this.toggle}/>
          </ModalBody>
        </Modal>
      </div>
    );
  }


}

export default FormWrapper;