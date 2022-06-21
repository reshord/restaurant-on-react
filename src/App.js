import './Header/Header.css';
import './Sidebar/Sidebar.css'
import './Content/Content.css'
import './Reviews/Reviews.css'
import './Menu/Menu.css'
import './Contacts/Contacts.css'
import './App.css'
import './Post/Post.css'
import './Dialogs/Dialogs.css'
import './Users/Users.css'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import ContactsContainer from './Contacts/ContactsContainer';
import Reviews from './Reviews/Reviews';
import MyPostsContainer from './Post/PostСontainer';
import DialogsContainer from './Dialogs/DialogsContainter';
import UsersContainer from './Users/UsersContainer';

import { Route, Routes } from 'react-router-dom';
import React from 'react'



const App = (props) => {
  // const state = props.store.getState()
  // const newMessageBody = state.dialogPage.dialogPage.NewMessageBody
  // const card = state.MyPost.MyPost.card.map(el => el.props)
  // const contacts = state.MyPost.MyPost.contacts
  // const message = state.dialogPage.dialogPage.messages.map(el => el)

  return (
    <div className="App">
        <Header />

        <div className="wrapper-block">
          <Sidebar />
          <Routes>
              <Route exact path="/" element={ <Content /> } />
              <Route path="/post" element={ <MyPostsContainer />} />
              <Route path="/reviews" element={ <Reviews /> }/>
              <Route path="/contacts" element={ <ContactsContainer /> }/>
              <Route path="/dialogs" element={ <DialogsContainer /> }/>
              {/* <Route path="/users" element={ <UsersContainer /> }/> */}
          </Routes>
            
          
                
        </div>
    </div>

  );
}  

export default App;
