import { useSelector, useDispatch } from "react-redux";
import {DebounceInput} from 'react-debounce-input';
import { LabelContact, InputContact } from './Filter.styled';
import {changeFilter} from '../../redux/contacts/filterSlice';



function Filter() {
  const filterValue= useSelector((state) => state.filter.filter);
  const dispatch = useDispatch();


  return (
    <LabelContact>
      Find contacts by name
      <DebounceInput
      debounceTimeout={false ? -1 : 500}
      forceNotifyByEnter={true}
      forceNotifyOnBlur={true}
      minLength={0}
      element={"input"}
      style={InputContact}
      type="text" 
      name="filter" 
      value={filterValue} 
      onChange={(e) => dispatch(changeFilter(e.target.value))}/>
    </LabelContact>
  );
}

export default Filter;
