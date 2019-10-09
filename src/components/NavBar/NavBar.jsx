import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar';
import Title from '../Title/Title';

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
        // ternary is an issue
        <div>
            <hr />
            <Title />
            <hr />
            <span className='NavBar-welcome'>Welcome, {props.user.name}</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <span>Check out your upcoming schedule</span>
            &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
            <Link to='/' className='NavBar-link' onClick={props.logout} >LOG OUT</Link>
            <hr />
        </div>
        :
        <div>
            <Link to='/login' className='NavBar-link'>LOG IN</Link>
            &nbsp;&nbsp;|&nbsp;&nbsp;
            <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
            <hr />
        </div>;

    return (
        <div className='NavBar'>
            {nav}
            <hr />
        </div>
    );
};

export default NavBar;