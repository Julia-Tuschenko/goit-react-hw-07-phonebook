import { useSelector, useDispatch } from "react-redux";
import { ListContact, ListItem, ListButton } from './Contacts.styled';
import { mapFilterContactsList, deleteContact } from '../redux/contacts';

const ContactList = () => {
  const dispatch = useDispatch();
  const mapFilterContacts = useSelector((state) => mapFilterContactsList(state));

  return (
    <ListContact>
      {mapFilterContacts.map(({ id, name, number }) => {
        return (
        <ListItem key={id}>
        <p>
          {name}: {number}
        </p>
        <ListButton type="button" onClick={() => dispatch(deleteContact(id))}>
          Delete
        </ListButton>
      </ListItem>
      )}
      )}
    </ListContact>
  );
};


export default ContactList;
