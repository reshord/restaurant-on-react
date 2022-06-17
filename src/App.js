import './Header/Header.css';
import './Sidebar/Sidebar.css'
import './Content/Content.css'
import './Reviews/Reviews.css'
import './Menu/Menu.css'
import './Contacts/Contacts.css'
import './App.css'
import './Post/Post.css'
import './Dialogs/Dialogs.css'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import Contacts from './Contacts/Contacts';
import Reviews from './Reviews/Reviews';
import MyPostsContainer from './Post/PostСontainer';
import DialogsContainer from './Dialogs/DialogsContainter';

import { Route, Routes } from 'react-router-dom';
import React from 'react'



const App = (props) => {
  const newPostText = props.state.MyPost.MyPost.newPostText
  const newMessageBody = props.state.dialogPage.dialogPage.NewMessageBody
  const card = props.state.MyPost.MyPost.card.map(el => el.props)
  const contacts = props.state.MyPost.MyPost.contacts
  const message = props.state.dialogPage.dialogPage.messages.map(el => el)

  return (
    <div className="App">
        <Header />

        <div className="wrapper-block">
          <Sidebar />
          <Routes>
              <Route exact path="/" element={ <Content card={card} /> } />
              <Route path="/post" element={ <MyPostsContainer store={props.store} />} />
              <Route path="/reviews" element={ <Reviews /> }/>
              <Route path="/contacts" element={ <Contacts contacts={contacts} /> }/>
              <Route path="/dialogs" element={ <DialogsContainer store={props.store}
                                                                 newMessageBody={newMessageBody}
                                                                 message={message}/> }/>
          </Routes>
            
          
                
        </div>
    </div>

  );
}  

export default App;


