import React, { useState } from 'react';
// import { useDispatch } from "react-redux";
// import {contactsItems, addContact} from '../redux/contacts';
import { Forma, LabelPhone, InputPhone, AddContact } from './Form.styled';
import { ToastContainer, toast } from 'react-toastify';
import PhoneInput from 'react-phone-number-input';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

import { useAddContactMutation, useFetchContactsQuery } from 'redux/contacts/contactApi';

function Form({ nameId, phoneId }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  // const dispatch = useDispatch();

  // const stateContacts = useSelector((state) => contactsItems(state));
 const [addContact] = useAddContactMutation(); 
 const {data} = useFetchContactsQuery();

  const handelChange = event => {
    const onName = event.currentTarget.name;
    const value = event.currentTarget.value;

    switch (onName) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const addNewContact = async () => {  
    const availableContact = await data.some(
    (contact) => contact.name.trim().toLowerCase().includes(name.toLowerCase()))
    
    if (availableContact) {
      return toast.error(`${name} is already in contacts!`);
      } else {
      await addContact({name, phone});
      };
};

  const reset = () => {
    setName('');
    setPhone('');
  };

  const handelSubmit = event => {
    event.preventDefault();
    addNewContact();
    reset();
  };


  return (
  <>
    <Forma onSubmit={handelSubmit}>
      <LabelPhone htmlFor={nameId}>
        Name
        <InputPhone
          type="text"
          value={name}
          name="name"
          onChange={handelChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </LabelPhone>

      <LabelPhone htmlFor={phoneId}>
        Number
        <PhoneInput
          type="tel"
          value={phone}
          name="phone"
          onChange={setPhone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelPhone>

      <AddContact type="submit">Add contact</AddContact>
    </Forma>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      theme="dark"
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
  </>
  );
};


export default Form;

