import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import { selectFilter } from '../../redux/selectors';

export const ContactsFilter = () => {
  const filter = useSelector(selectFilter);
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
