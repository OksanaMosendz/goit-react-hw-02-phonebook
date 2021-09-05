import React from "react";

import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter'
import {ContactList} from './ContactList/ContactList'
import { v4 as uuidv4 } from 'uuid';

export class App extends React.Component {
  
  state = {
    contacts: [],
    filter:'',
  };

  HandleSearchContactByName = (e) => {
    this.setState({ filter: e.target.value });
  }

  HandleFormSubmit = (name, number) => {
    const { contacts } = this.state;
    contacts.push({ "name": name, "id": uuidv4(), "number": number });
    this.setState({ contacts: contacts });
  }
     

  

  render() {
    const {  contacts, filter } = this.state;
   
     return (
      <>
        <h1>Phonebook</h1>
         <ContactForm contacts={contacts} onSubmit={this.HandleFormSubmit}/>
        <h2>Contacts</h2>
        <Filter onChangeFilter={this.HandleSearchContactByName} filter={ filter}/>
        <ContactList filter={filter} contacts={contacts} />
    </>)
  };
}


