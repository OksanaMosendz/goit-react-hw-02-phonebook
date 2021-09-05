export const ContactList = ({ contacts, filter, onClickDelete }) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    filteredContacts.length > 0 && (
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}:{contact.number}
            </p>
            <button id={contact.id} type="button" onClick={onClickDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    )
  );
};
