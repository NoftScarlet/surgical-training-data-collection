import React from 'react';
import FormWrapper from '../ModalWrappers/FormWrapper';
import KnotVid from '../../../public/assets/knot.mp4';
import { Button } from 'reactstrap';

interface Props {
}

interface State {
  videoLink : string

}

class Body extends React.Component <Props, State> {

  state: Readonly<State> = {
    videoLink: ""
  };

  clickHandler = (videoName : string) => {

    switch (videoName) {

      case "suturing" :
        this.setState({videoLink:"http://piano.uottawa.ca/ovl/sites/default/files/video-thumbnails/2017-03/Running%20Subcuticular.mp4"});
        break;

      case "knot" :
        this.setState({videoLink: "http://piano.uottawa.ca/ovl/sites/default/files/video-thumbnails/2017-03/How%20To%20Tie%20Surgical%20Knots-%20Two-Handed%20Knot.mp4"});
        break;

      default: break;

    }
  };

  render() {
    return (
      <div>
        <FormWrapper/>
        <Button onClick={() =>this.clickHandler("suturing")}>Suturing</Button>
        <Button onClick={() =>this.clickHandler("knot")}>Knot Tying</Button>
        <Button>Start Session</Button>
        <div id={'video-section'}>
          <video
            src={this.state.videoLink}
            className="danmu-video" id="video1" controls={true} width="100%">
          </video>
        </div>
      </div>
    );
  }
}

export default Body;