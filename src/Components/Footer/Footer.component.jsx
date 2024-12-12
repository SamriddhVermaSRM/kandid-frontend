import './Footer.styles.css';

function Footer() {
	return (
		<footer>
			<div className='logo-section'>
				<img
					src='/svg/Logo - Footer.svg'
					alt=''
				/>
				<h1>Latest fashion delivered in 60 minutes!!</h1>
			</div>
			<div className='navlinks-section'>
				<div className='about-us'>
					<h3>About us</h3>
					<a href='/about-us'>who are we</a>
				</div>
				<div className='buisness'>
					<h3>Buisness</h3>
					<a href='/contact-us'>Contact Us</a>
					<a href='/brand-onboarding'>Onboarding Form</a>
				</div>
				<div className='policy'>
					<h3>Policies</h3>
					<a href='/privacy-policy'>privacy policy</a>
				</div>
			</div>
			<div className='deets-section'>
				<h1>STALK US AT</h1>
				<div className='footer-icons'>
					<a
						href='https://www.linkedin.com/company/getkandidd/posts/?feedView=all'
						className='footer-icon-linkedin'
						alt=''
					/>
					<a
						href='https://www.instagram.com/kandid.me/'
						className='footer-icon-insta'
						alt=''
					/>
				</div>
				<h1>HIT US UP AT</h1>
				<a
					className='no'
					href='wa.me/+919305709846'
				>
					<h4>+91 9305709846</h4>
				</a>
				<h1>OUR HOME SPOT</h1>
				<h4>
					Dhalaighar Daliganj,
					<br /> Lucknow, Uttar Pradesh,
					<br /> 226020
				</h4>
				<h6>© 2024 by kandid consumer tech pvt ltd</h6>
			</div>
			<h6 className='copy-m'>© 2024 by kandid consumer tech pvt ltd</h6>
		</footer>
	);
}

export default Footer;
