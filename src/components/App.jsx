import React from "react";
import { v4 as uuidv4 } from 'uuid';

export class App extends React.Component {
  
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  HandleNameInput=(e)=>{
    this.setState({ name: e.target.value });
  };

  HandleNumberInput=(e)=>{
    this.setState({ number: e.target.value });
  };
  
  handleFormSubmit = (e) => {
    const { name ,  contacts, number} = this.state;
    e.preventDefault();
    contacts.push({ "name": name, "id": uuidv4( ), "number": number });
    this.setState({ name: '', number:'' });
    console.log(contacts);

  }

  render() {
    const { name, contacts, number } = this.state;
  
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handleFormSubmit} >
          <label >Name
          <input
      
    type="text"
              name="name"
              value={name}
              onChange={this.HandleNameInput}
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
    required
          />
          </label>

           <label >Number
          <input
             type="tel"
              name="number"
              value={number}
              onChange={this.HandleNumberInput}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
  required
/>
</label>
          <button type="submit">Add contact</button>
          </form>

        <h2>Contacts</h2>
   
        {contacts.length > 0 && <ul>{contacts.map((contact) => <li key={contact.id} >{contact.name}:{contact.number}</li>)}</ul> }
    
      
    </>)
  };
}


