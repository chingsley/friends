import React from 'react';
// import FeedbackForm from './FeedbackForm';
import './FormAddNew.css';

import { Container, Row, Col, Button, Form, FormGroup, Input, FormFeedback } from 'reactstrap';


const initialFormState = {
  name: '',
  age: '',
  email: '',
  image: '',
  description: '',
  formError: '',
}

class  FormAddNew extends React.Component {
  state = {
    form: initialFormState,
    isEditing: false,
    // friends: [],
  }

  componentDidMount() {
    const friends = JSON.parse(localStorage.getItem('friends'));
    const friendId = this.props.match.params.friendId;
    const activeFriend = friends.find(friend => `${friend.id}` === `${friendId}`)
    if (activeFriend) {
      this.setState({ form: { ...activeFriend, formError: '' }, isEditing: true })
    }
  }

  changeHandler = e => {
    const fieldName = e.target.name;
    const fieldValue = fieldName === 'age' ? parseInt(e.target.value, 10): e.target.value;

    this.setState(prevState => ({
      form: {
        ...prevState.form,
        [fieldName]: fieldValue,
        formError: '',
      },
    }));

  }

  handleSubmit = e => {
    e.preventDefault();
    const { form: { name, email, image } } = this.state;
    if(name && email && image) {
      if (this.state.isEditing) {
        this.props.updateFriend(this.state.form)
      } else {
        this.props.addNewFriend(this.state.form);
      }
    } else {
      this.setState(prevState =>({
        form: {
          ...prevState.form,
          formError: 'missing fields',
        }
      }))
    }
  };
  
  render() {
    // console.log('>>>>>>>>>>>>>>>>>>>>>>', this.state.form);
    const { name } = this.state.form;
    return (
      <Container>
        <Row className="form-container-row">
          <Col className="form-container">
            <Form className="form new-friend-form" onSubmit={this.handleSubmit}>
              {/* <p className="input-error">{this.state.inputError}</p> */}
              <FormGroup row>
                <Col sm={10}>
                  <Input
                    className="form-error"
                    type="text"
                    name="formError"
                    id="formError"
                    value={this.state.form.formError}
                    readOnly
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={7}>
                  <Input
                    type="text"
                    name="name"
                    id="name" 
                    placeholder="Friend name"
                    value={this.state.form.name}
                    onChange={this.changeHandler}
                    valid={name.length > 1}
                    invalid={name !== '' && !Number.isNaN(Number(name))}
                  />
                </Col>
                <Col sm={3}>
                  <Input 
                    type="number"
                    name="age"
                    id="age" 
                    placeholder="Age"
                    value={this.state.form.age}
                    onChange={this.changeHandler}
                    valid={this.state.form.age > 0}
                    invalid={this.state.form.age < 0}
                    />
                    <FormFeedback>Invalid age</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={10}>
                  <Input 
                    type="email"
                    name="email"
                    id="email" 
                    placeholder="Friend email"
                    value={this.state.form.email}
                    onChange={this.changeHandler}
                    valid={this.state.form.email.indexOf('.com') > -1}
                    invalid={this.state.form.email !== '' && this.state.form.email.indexOf('.com') < 0}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={10}>
                  <Input 
                    type="text"
                    name="image"
                    id="image" 
                    placeholder="URL of friend image"
                    value={this.state.form.image}
                    onChange={this.changeHandler}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={10}>
                  <Input 
                    type="textarea"
                    name="description"
                    id="description" 
                    placeholder="A short description of friend"
                    value={this.state.form.description}
                    onChange={this.changeHandler}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col sm={{ size: 10}}>
                  <Button className="btn-add-friend">
                    {this.state.isEditing ? 'Update Friend' : 'Add Friend'}
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FormAddNew;
