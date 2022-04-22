import axios from 'axios';
import { createAsyncThunk} from '@reduxjs/toolkit'
// import * as contactsActions from './contactsActions'

axios.defaults.baseURL = 'https://625fbaa553a42eaa07f9d6a2.mockapi.io/contacts';

async function fetchContactsAPI() {
    const {data} = await axios.get('/contacts');
    return data;
}


export const fetchContacts = createAsyncThunk(
  'users/fetchContacts',
  async (_, { rejectWithValue }) => {
  try{
    const contacts = await fetchContactsAPI();
    return contacts;
  } catch (error){
    return rejectWithValue(error);
  }

  }
);



// export const fetchContacts = () => async dispatch => {
//     dispatch(contactsActions.fetchContactsRequest());
//     try{
//         const contacts = await fetchContactsAPI();
//         dispatch(contactsActions.fetchContactsSuccess(contacts));  
//     } catch (error){
//         dispatch(contactsActions.fetchContactsError(error));  
//     }

// }
