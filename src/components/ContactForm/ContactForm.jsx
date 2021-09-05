import React from 'react';
import { Form, FormInput } from './ContactForm.styled';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };

  HandleNameInput = e => {
    this.setState({ name: e.target.value });
  };

  HandleNumberInput = e => {
    this.setState({ number: e.target.value });
  };

  FormSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form>
        <form onSubmit={this.FormSubmit}>
           <FormInput><label>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.HandleNameInput}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>< /FormInput>

          <FormInput> <label>
            Number
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.HandleNumberInput}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label> </FormInput>

          <button type="submit">Add contact</button>
        </form>
      </Form>
    );
  }
}
