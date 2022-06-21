import React from 'react'
import StoreContext from '../store-context';
import Contacts from './Contacts'


const ContactsContainer = () => {
    return (
    <StoreContext.Consumer>
        {store => {
                return <Contacts contacts={store.getState().Contacts.contacts}/>
        }}
    </StoreContext.Consumer> )
}

export default ContactsContainer;