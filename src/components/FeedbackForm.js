import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
import './FormAddNew.css';

const FormAddNew = (props) => {
  return (
    <Container>
      <Row>
        <Col>
          <Form className="form new-friend-form">
            <FormGroup>
              <Label for="exampleEmail">Input without validation</Label>
              <Input />
              <FormFeedback>You will not be able to see this</FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Valid input</Label>
              <Input valid />
              <FormFeedback valid>Sweet! that name is available</FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Invalid input</Label>
              <Input invalid />
              <FormFeedback>Oh noes! that name is already taken</FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Input without validation</Label>
              <Input />
              <FormFeedback tooltip>You will not be able to see this</FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Valid input</Label>
              <Input valid />
              <FormFeedback valid tooltip>Sweet! that name is available</FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Invalid input</Label>
              <Input invalid />
              <FormFeedback tooltip>Oh noes! that name is already taken</FormFeedback>
              <FormText>Example help text that remains unchanged.</FormText>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default FormAddNew;