import { Typography } from '@mui/material';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import { StyledContainer } from 'components/styled';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operations';
import { selectIsLoggedIn } from '../redux/selectors';

function ContactsPage() {
  const isLogged = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    isLogged && dispatch(fetchContacts());
  }, [dispatch, isLogged]);

  return (
    <StyledContainer maxWidth="md">
      <Typography variant="h1" align="center" fontSize="60px" gutterBottom>
        Phonebook
      </Typography>
      <ContactForm />
      <Typography variant="h2" align="center" fontSize="40px" gutterBottom>
        Contacts
      </Typography>
      <Filter />
      <ContactList />
    </StyledContainer>
  );
}

export default ContactsPage;
