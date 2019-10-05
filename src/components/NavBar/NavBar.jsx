import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar';

// const NavBar = () => {
//     return (
//         <div className='NavBar'>
//             <Link to="/login" className='NavBar-link'>LOG IN</Link>
//             &nbsp;&nbsp;|&nbsp;&nbsp;
//       <Link to="/signup" className='NavBar-link'>SIGN UP</Link>
//         </div>
//     );
// };

const NavBar = (props) => {
    let nav = props.user ?
        <div>
            <Link to='/schedules' className='NavBar-link'>SCHEDULE</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            {/* <Link to='' className='NavBar-link'>LOG OUT</Link> */}
            <Link to='' className='NavBar-link' onClick={props.handleLogout} >LOG OUT</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
        </div>
        :
        <div>
            <Link to='/login' className='NavBar-link'>LOG IN</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        </div>;

    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;