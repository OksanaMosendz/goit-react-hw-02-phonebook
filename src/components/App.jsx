import React from "react";
export class App extends React.Component {
  
  state = {
    contacts: [],
    name: '',
  };

  HandleNameInput=(e)=>{
      this.setState({ name: e.target.value });
  };

  handleFormSubmit = (e) => {
    const { name ,  contacts} = this.state;
    e.preventDefault();
    contacts.push({ "name": name });
    
    console.log ( contacts)
  }

  render() {
    const { name, contacts } = this.state;
  
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
          <button type="submit">Add contact</button>
          </form>
        <h2>Contacts</h2>
       
        {contacts.length > 0 && (contacts.map((contact) => <li >{contact.name}</li>))}
    
      
    </>)
  };
}


