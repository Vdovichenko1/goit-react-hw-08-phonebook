import { nanoid } from 'nanoid';
import { FilterForm} from "./Filter.styled";
import { selectFilter } from 'redux/contacts/contactsSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/contactsSlice';
import { Input, Text } from '@chakra-ui/react';

export default function Filter() {
    const contactIdFilter = nanoid();
    const dispatch = useDispatch()
    const filter = useSelector(selectFilter);

    const changeFilter = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };
    return (
        <FilterForm>
            <Text mb='8px' fontSize='20px' fontWeight='700' color='purple' htmlFor={contactIdFilter}>Find <Text color='green'>{filter}</Text></Text>
            <Input focusBorderColor='lime' placeholder='Ivanov Ivan' size='lg' variant='filled' type="text" value={filter} id={contactIdFilter} onChange={changeFilter} />
        </FilterForm>
    )
}