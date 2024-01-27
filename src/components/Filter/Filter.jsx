import { getFilter } from '../../store/selectors';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/filterSlice';

export const ContactsFilter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const value = event.currentTarget.value.toLowerCase();
    dispatch(setFilter(value));
  };

  return (
    <input
      className={css.input}
      type="text"
      name="filter"
      value={filter}
      onChange={handleChangeFilter}
    />
  );
};
