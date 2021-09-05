export const ContactList = ({ contacts, filter }) => {
        const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
        return ( filteredContacts.length > 0 && <ul>{filteredContacts.map((contact) => <li key={contact.id} >{contact.name}:{contact.number}</li>)}</ul>
);
}