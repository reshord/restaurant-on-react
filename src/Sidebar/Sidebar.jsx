import React from 'react'


const Sidebar = () => {
    return (
        <div className="wrapper-block__sidebar">
            <div className="wrapper-block__sidebar-menu">
                <li>Menu</li>
                <div className="wrapper-block__sidebar_element">
                   
                    <div className="sort">
                        <input id="check" type="checkbox" />
                        <label id="check" htmlFor="check">По цене</label>
                    </div>
                    <div className="sort">
                        <input id="check1" type="checkbox" />
                        <label id="check1" htmlFor="check1">По граммам</label>
                    </div>
                </div>
           </div>
        </div>

    )
}

export default Sidebar;