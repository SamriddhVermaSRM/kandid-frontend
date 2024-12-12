import { useContext } from 'react';
import { NavBarContext } from '../NavBar/NavBar.context';
import './TopBar.styles.css';

function TopBar() {
	const loc = useContext(NavBarContext);
	if (loc === '/') {
		return (
			<div className='topbar'>
				<div className='marquee'>
					<p>Assured Quality, Trendy styles, Affordable Luxury </p>
					<p>Fashion-Forward platform for Millennials and Gen Z </p>
					<p>Exclusively Available Homegrown Brands</p>
				</div>
				<div className='marquee'>
					<p>Assured Quality, Trendy styles, Affordable Luxury </p>
					<p>Fashion-Forward platform for Millennials and Gen Z </p>
					<p>Exclusively Available Homegrown Brands</p>
				</div>
				<div className='marquee'>
					<p>Assured Quality, Trendy styles, Affordable Luxury </p>
					<p>Fashion-Forward platform for Millennials and Gen Z </p>
					<p>Exclusively Available Homegrown Brands</p>
				</div>
			</div>
		);
	}
	return (
		<div className='topbar'>
			<div className='left'>
				<img
					className='logo'
					src='/svg/Logo - TC.svg'
					alt=''
				/>
			</div>
			<div className='right'>
				<p className='text'>Hit us up at</p>
				<p className='text'>+91 9305709846</p>
				<p className='text'>STALK US AT</p>
				<div className='links'>
					<a
						className='linkedin'
						href='https://www.linkedin.com/company/getkandidd/posts/?feedView=all'
					>
						<img
							src='/svg/linkedin.svg'
							alt=''
						/>
					</a>
					<a
						className='insta'
						href='https://www.instagram.com/kandid.me/'
					>
						<img
							src='/svg/instagram.svg'
							alt=''
						/>
					</a>
				</div>
			</div>
		</div>
	);
}

export default TopBar;
