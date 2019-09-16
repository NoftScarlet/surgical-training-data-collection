import React from 'react';
import { ConsentForm, TestSessionInfo } from '../index';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      participantName: 'Did not enter',
      date: 'Did not enter',
      testDay: 'Did not select',
      testName: 'Did not select',
    };
  }

  render() {
    return (
      <>
        <ConsentForm participantName/>
        <TestSessionInfo />
      </>
    );
  }
}