import { ToastContainer } from 'react-toastify';
import { selectError, selectIsLoading } from 'redux/contacts/contactsSelectors';
import { BounceLoader } from 'react-spinners';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactsApi';

export default function Contacts() {
  const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>
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
      </h2>
      <Filter />
      <ContactList />
      <ToastContainer autoClose={3000} />
    </>
  );
}
