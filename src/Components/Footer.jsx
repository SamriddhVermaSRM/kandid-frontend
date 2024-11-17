function Footer() {
	return (
		<>
			<footer className='footer'>
				<div className='footer-left'>
					<img
						className='footer-logo'
						src='/svgs/Logo - Footer.svg'
						alt=''
					/>
					<h2>Latest fashion delivered in 60 minutes!!</h2>
					<div className='footer-links'>
						<div className='footer-about-us'>
							<h3>About us</h3>
							<a href='/about-us'>who are we</a>
						</div>
						<div className='footer-buisness'>
							<h3>Buisness</h3>
							<a href='/contact-us'>Contact Us</a>
							<a href='/brand-onboarding'>Onboarding Form</a>
						</div>
						<div className='footer-policy'>
							<h3>Policies</h3>
							<a href='/privacy-policy'>privacy policy</a>
						</div>
					</div>
				</div>
				<div className='footer-right'>
					<div className='our-deets'>
						<div className='our-deets-left'>
							<h2>STALK US AT</h2>
							<h2>HIT US UP AT</h2>
							<h2>OUR HOME SPOT</h2>
						</div>
						<div className='our-deets-right'>
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
							<div>
								<h4>
									<a
										className='no'
										href='wa.me/+919305709846'
									>
										+91 9305709846
									</a>
								</h4>
							</div>
							<div>
								<h4>
									Dhalaighar Daliganj,
									<br /> Lucknow, Uttar Pradesh,
									<br /> 226020
								</h4>
							</div>
						</div>
					</div>
					<div className='copyright'>
						© 2024 by kandid consumer tech pvt ltd
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
