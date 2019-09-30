import * as React from 'react';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
interface State {
  parName: string,
  sessionName: string,
  sessionDay: string,
  group: string,
  date: Date
}
interface Props {
  date: string,
}

export default class ParticipantInfo extends React.Component <Props, State> {
  static defaultProps: Props = {
    date: Date(), // not used for now
  }

  state: Readonly<State> = {
    parName: "Not Entered",
    sessionName: "Not Entered",
    sessionDay: "Not Entered",
    group: "Not Entered",
    date: new Date(),
  }

  handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.target);
    for (let value of data.values()) {
      console.log(value);
    }
    console.log(event.target[0].value)

    //post the values to

  }

  render() {
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label for="parName">Participant Name</Label>
          <Input type="text" name="parName" id="parName" placeholder="Please enter participant name" />
        </FormGroup>

        <FormGroup>
          <Label for="sessionName">Session Name</Label>
          <Input type="select" name="sessionName" id="sessionName">
            <option>Please Select</option>
            <option>Suturing</option>
            <option>Knot Tying</option>
            <option>Other</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="sessionDay">Session Day</Label>
          <Input type="select" name="sessionDay" id="sessionDay">
            <option>Please Select</option>
            <option>Day 1</option>
            <option>Day 2</option>
            <option>Day 3</option>
            <option>Day 4</option>
            <option>Day 5</option>
            <option>Day 5 + 1 week</option>
            <option>Day 5 + 2 week</option>
            <option>Other</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="group">Group</Label>
          <Input type="select" name="group" id="group">
            <option>Please Select</option>
            <option>CONT</option>
            <option>MUS</option>
            <option>Other</option>
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="ID">ID</Label>
          <Input type="number" name="ID" id="ID">
          </Input>
        </FormGroup>

        <FormGroup>
          <Label for="exampleText">Date</Label>
          <Input type="textarea" name="text" id="exampleText" defaultValue={this.state.date.toString()}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>

        </FormGroup>
        <Input type="submit" value="Submit" />
      </Form>
      </div>
    );
  }
}