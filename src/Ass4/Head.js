import React from 'react'
import {Link} from 'react-router-dom'

const Head = () => {
    return(
        <div>
            <div className='navbar'>
                <Link to='/home' className='head'>Home</Link>
                <Link to='/student' className='head'>Students</Link>
                <Link to='/contact' className='head'>Contact Us</Link>
            </div>
        </div>
    )
}

export default Head