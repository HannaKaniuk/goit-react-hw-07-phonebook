import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import css from './ContactList.module.css';
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../redux/services';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const { data = [] } = useGetContactsQuery();

  const [deleteContact] = useDeleteContactMutation();
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = id => deleteContact(id);

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
