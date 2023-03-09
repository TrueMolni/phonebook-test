import PropTypes from 'prop-types';
// import scss from './filter.module.scss';

const Filter = ({ handleChange, value }) => {
  return (
    <div>
      <label>Filter contacts</label>
      <input
        name="filter"
        value={value}
        onChange={handleChange}
        placeholder="Filter contacts"
      />
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
