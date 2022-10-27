import PropTypes from 'prop-types';
import { FilterInput, FilterLabel } from './Filter.styled';
import { FcSearch } from 'react-icons/fc';

export const Filter = ({ changeFilter }) => {
  return (
    <FilterLabel htmlFor="">
      <span style={{ display: 'block' }}> Fild contacts by name</span>
      <span style={{ position: 'relative' }}>
        <FcSearch
          size={18}
          style={{ position: 'absolute', left: 2, top: '1' }}
        />
        <FilterInput
          type="text"
          placeholder="Aleksandr"
          onChange={changeFilter}
        />
      </span>
    </FilterLabel>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
