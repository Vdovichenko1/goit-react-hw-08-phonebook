import { ToastContainer } from 'react-toastify';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { BounceLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsApi';
import { Box, Text } from '@chakra-ui/react';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box display='grid' justifyContent='center' textAlign='center' alignItems='center'>
      <Text fontSize='24px' fontWeight='700' color='teal' marginBottom='20px'>Phonebook</Text>
      <ContactForm />
      <Text fontSize='20px' fontWeight='700' color='teal' marginBottom='20px' marginTop='20px'>
        Contacts{' '}
        {isLoading && !error && (
          <BounceLoader
            color="#4c4ad9"
            size={30}
            cssOverride={{
              display: 'block',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          />
        )}
      </Text>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} />
    </Box>
  );
}
