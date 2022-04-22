import { useSelector, useDispatch } from "react-redux";
import { ListContact, ListItem, ListButton } from './Contacts.styled';
import { mapFilterContactsList, deleteContact, fetchContacts } from '../redux/contacts';
import { useEffect } from "react";

const ContactList = () => {
  const dispatch = useDispatch();
  const mapFilterContacts = useSelector((state) => mapFilterContactsList(state));

  useEffect(()=> {
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <ListContact>
      {mapFilterContacts.map(({ id, name, phone }) => {
        return (
        <ListItem key={id}>
        <p>
          {name}: {phone}
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
