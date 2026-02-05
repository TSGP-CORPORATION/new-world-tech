import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="header-left">
            <div className="image-and-abbrev">
                <img src="" alt="" />
                <span>NWT</span>
            </div>

            <h1>New World Technology</h1>
            <p>Vocation Traning</p>
        </div>
        <div className="middle-header"></div>
        <div className="right-header">
            <button className="btn btn-primary">Apply Now</button>

        </div>
    </div>
  )
}

export default Header