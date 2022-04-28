import { useSelector, useDispatch } from "react-redux";
// import { changeFilter, fitlerContacts } from "../redux/contacts";
import { LabelContact, InputContact } from './Filter.styled';
import {changeFilter} from '../../redux/contacts/filterSlice';


function Filter() {
  const filterValue= useSelector((state) => state.filter.filter);
  // console.log(filterValue);
  const dispatch = useDispatch();


  return (
    <LabelContact>
      Find contacts by name
      <InputContact type="text" 
      name="filter" 
      value={filterValue} 
      onChange={(e) => dispatch(changeFilter(e.target.value))} />
    </LabelContact>
  );
}

export default Filter;
