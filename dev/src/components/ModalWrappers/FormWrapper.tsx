import {ModalBody, ModalHeader, Modal} from 'reactstrap';
import ParticipantInfo from '../Body/Body';
import * as React from 'react';

interface Props {
  popupState: boolean,
}

class FormWrapper extends React.Component<Props, {}> {

  render () {
    return (
      <div>
        <Modal isOpen={this.props.popupState} >
          <ModalHeader> Participant Information </ModalHeader>
          <ModalBody>
            <ParticipantInfo />
          </ModalBody>
        </Modal>
      </div>
    )
  }


}

export default FormWrapper