import { useContext, useState } from 'react';
import { NavBarContext } from './NavBar.context';
import './NavBar.styles.css';

function NavBar() {
	const expand = () => {
		console.log(document.querySelector('.mobile'));
		document.querySelector('.mobile').classList.toggle('expanded');
	};
	return (
		<>
			<nav className='navbar'>
				<ul>
					<NavElement
						href='/'
						text='Home'
					/>
					<NavElement
						href='/signup'
						text='Sign Up'
					/>
					<NavElement
						href='/onboarding'
						text='Brand Onboarding'
					/>
					<NavElement
						href='/contact-us'
						text='Contact Us'
					/>
					{/* <div id='nav-active'></div> */}
				</ul>
			</nav>

			<nav className='navbar mobile'>
				<div
					id='hm-menu'
					onClick={expand}
				></div>
				<aside>
					<ul>
						<NavElement
							href='/'
							text='Home'
						/>
						<NavElement
							href='/signup'
							text='Sign Up'
						/>
						<NavElement
							href='/onboarding'
							text='Brand Onboarding'
						/>
						<NavElement
							href='/contact-us'
							text='Contact Us'
						/>
						{/* <div id='nav-active'></div> */}
					</ul>
				</aside>
			</nav>
			<div
				id='hm-menu-label'
				onClick={expand}
			></div>
		</>
	);
}

function NavElement({ href, text }) {
	const loc = useContext(NavBarContext);
	if (loc === href) {
		var className = 'active';
	} else {
		var className = '';
	}
	return (
		<>
			<li>
				<a
					className={className}
					href={href}
				>
					{text}
				</a>
			</li>
		</>
	);
}

export default NavBar;
