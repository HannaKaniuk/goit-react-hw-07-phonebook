import css from './ContactListItem.module.css';
export const ContactListItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <li className={css.contactListItem}>
      {name}: {number}{' '}
      <button onClick={() => onDeleteContact(id)} className={css.buttonList}>
        Delete
      </button>
    </li>
  );
};
