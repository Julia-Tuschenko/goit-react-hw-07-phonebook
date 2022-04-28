import { useDispatch, useSelector } from "react-redux";
import { ListContact, ListItem, ListButton } from './Contacts.styled';
import { useFetchContactsQuery, useDeleteContactMutation } from 'redux/contacts/contactApi';


const ContactList = () => {
  const dispatch = useDispatch();
  const { data } = useFetchContactsQuery();
  const {deleteContact } = useDeleteContactMutation();
  const filter = useSelector(state => state.filter.filter);

console.log(useFetchContactsQuery());

  const mapFilterContacts = data?.filter(({name}) => 
  name.trim().toLowerCase().includes(filter.toLowerCase()));

  return (
    <ListContact>
      {mapFilterContacts.map((contact) => {
        return (
        <ListItem key={contact.id}>
        <p>
          {contact.name}: {contact.phone}
        </p>
        <ListButton type="button" onClick={dispatch(deleteContact(contact.id))}>
          Delete
        </ListButton>
      </ListItem>
      )}
      )}
    </ListContact>
  );
};


export default ContactList;
