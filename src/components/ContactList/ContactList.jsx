import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css';
import { removeContact } from '../../store/contactsSlice';
import { getContacts, getFilter } from '../../store/selectors';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.contactListItem}>
      {name}: {number}{' '}
      <button onClick={() => onDeleteContact(id)} className={css.buttonList}>
        Delete
      </button>
    </li>
  );
};

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getfilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      const contactName = contact.name ? contact.name.toLowerCase() : '';
      return contactName.includes(normalizedFilter);
    });
  };

  const handleDelete = id => dispatch(removeContact(id));

  const filteredContacts = getfilterContacts();
  console.log('Filtered Contacts:', filteredContacts);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDeleteContact={handleDelete}
        />
      ))}
    </ul>
  );
};
