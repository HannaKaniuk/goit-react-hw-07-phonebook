import css from './ContactForm.module.css';
import { NotificationManager } from 'react-notifications';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../store/selectors';
import { addContact } from '../../store/contactsSlice';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChangeForm = evt => {
    const { name, value } = evt.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleFormSubmit = evt => {
    evt.preventDefault();

    const contactExists = contacts.some(
      contact =>
        contact.name && contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      NotificationManager.info(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleFormSubmit} className={css.formContact}>
      <label htmlFor="nameInput" className={css.labelInput}>
        Name
      </label>
      <input
        type="text"
        name="name"
        id="nameInput"
        value={name}
        onChange={handleChangeForm}
        className={css.inputContact}
        autoComplete="name"
      />
      <label htmlFor="phoneInput" className={css.labelInput}>
        Number
      </label>
      <input
        type="tel"
        name="number"
        id="phoneInput"
        value={number}
        required
        onChange={handleChangeForm}
        className={css.inputContact}
        autoComplete="tel"
      />
      <button type="submit" className={css.buttonContact}>
        Add Contact
      </button>
    </form>
  );
};
