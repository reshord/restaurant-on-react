import React from 'react'

const Users = (props) => {

    return (
        <div className="users">
            {props.users.map(user => 
                <div key={user.id} className='userBlock'>
                    <div className="userBlock_ava-button">
                        <div className="ava">
                            <img src={user.photoUrl} alt="" />
                        </div>
                        {user.followed === false
                        ? <button onClick={() => props.follow(user.id)} 
                                  className='btn'>Follow</button> 

                        : <button onClick={() => props.unfollow(user.id)} 
                                  className='btn'>Unfollow</button>}
                        
                    </div>
                    <div className="userBlock-info">
                        <div className="userBlock-info_name">{user.fullName}</div>
                        <div className="userBlock-info_status">{user.status}</div>
                        <div className="userBlock-info_location-country">{user.location.country}</div>
                        <div className="userBlock-info_location-city">{user.location.city}</div>
                    </div>
                </div>

            )}
        </div>
    )
}

export default Users