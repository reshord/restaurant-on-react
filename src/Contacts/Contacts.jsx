import React from 'react'

const Contacts = (props) => {
    return (
          <div className="contacts">
                        <div className="contacts-list-block">
                            <ul>
                                <li>Country: {props.contacts.country}</li>
                                <li>City: {props.contacts.city}</li>
                                <li>Number: {props.contacts.number}</li>
                            </ul>
                        </div>
                    </div>
    )
}

export default Contacts;