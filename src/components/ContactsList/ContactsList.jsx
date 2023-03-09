import PropTypes from 'prop-types';
import scss from './contacts-list.module.scss';
import ContactsItem from 'components/ContactsItem';

const ContactsList = ({ items, removeContact }) => {
  const myContacts = items.map(({ id, name, number }) => {
    return (
      <ContactsItem
        key={id}
        id={id}
        name={name}
        number={number}
        removeContact={removeContact}
      />
    );
  });
  return <ol className={scss.wrapper}>{myContacts}</ol>;
};

export default ContactsList;

ContactsList.defaultProps = {
  items: [],
};

ContactsList.propType = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
  removeContact: PropTypes.func.isRequired,
};
