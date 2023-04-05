import React from 'react'

import './sidebar.scss'
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">JoeAdmin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <li>Dashboard</li>
            </ul>
        </div>
        <div className="bottom">color options</div>
    </div>
  )
}

export default Sidebar