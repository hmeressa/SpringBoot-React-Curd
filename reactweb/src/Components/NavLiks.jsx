import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavBarElements';

const NavLinks = () => {
return (
	<>
	<Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/home' activestyle>
			Home
		</NavLink>
		<NavLink to='/Viewpage' activestyle>
			View users
		</NavLink>
		<NavLink to='/Updatepage' activestyle>
			Update users
		</NavLink>
		<NavLink to='/team' activestyle>
			Teams
		</NavLink>
		<NavLink to='/AddUser' activestyle>
            Add Users
		</NavLink>
		<NavLink to='/Signuppage' activestyle>
			Sign Up
		</NavLink>
		<NavLink to='/Detailspage:id' activestyle>
		Details page
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signinpage'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default NavLinks;
