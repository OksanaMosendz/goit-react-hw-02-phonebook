import React from "react";
import { v4 as uuidv4 } from 'uuid';

export class App extends React.Component {
  
  state = {
    contacts: [],
    filter:'',
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
  }

  HandleSearchContactByName = (e) => {
    this.setState({ filter: e.target.value });

    console.log(this.state.filter);
  }

  

  render() {
    const { name, contacts, number, filter } = this.state;
    const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  
    return (
      <>
      <h1>Phonebook</h1>
      <form onSubmit={this.handleFormSubmit}>
      <label>Name
  <input  
    type="text"
    name="name"
    value={name}
    onChange={this.HandleNameInput}
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required />
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

        <label> Find contacts by name
        <input
  type="text"
          
            value={filter}
             onChange={this.HandleSearchContactByName}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
  required
/> </label>
        {filteredContacts.length > 0 && <ul>{filteredContacts.map((contact) => <li key={contact.id} >{contact.name}:{contact.number}</li>)}</ul>}
        
    </>)
  };
}


