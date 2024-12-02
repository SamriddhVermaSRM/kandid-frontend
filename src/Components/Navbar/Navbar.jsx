import { useEffect } from 'react';

function Navbar({ url, handlePageNavigation }) {
	const getUrl = url;

	console.log(getUrl);

	useEffect(() => {
		window.addEventListener('scroll', handleScrollNavbar);
		return () => {
			window.removeEventListener('scroll', handleScrollNavbar);
		};
	}, []);

	const handleScrollNavbar = () => {
		if (window.scrollY >= 65) {
			document.querySelector('.navbar').classList.add('navbar-scroll');
			document.querySelector('.mobile').classList.add('navbar-scroll');
		} else {
			document.querySelector('.navbar').classList.remove('navbar-scroll');
			document.querySelector('.mobile').classList.remove('navbar-scroll');
		}
	};

	return (
		<>
			<nav className='navbar'>
				<ul>
					<li>
						<a
							className={getUrl === '/' ? 'focused' : ''}
							href='/'
						>
							Home
						</a>
					</li>
					<li>
						<a
							className={getUrl === '/sign-up' ? 'focused' : ''}
							href='/sign-up'
						>
							Sign Up
						</a>
					</li>
					<li>
						<a
							className={getUrl === '/brand-onboarding' ? 'focused' : ''}
							href='/brand-onboarding'
						>
							Brand Onboarding
						</a>
					</li>
					<li>
						<a
							className={getUrl === '/contact-us' ? 'focused' : ''}
							href='/contact-us'
						>
							Contact Us
						</a>
					</li>
				</ul>
			</nav>
			<nav className='navbar mobile'>
				<input
					type='checkbox'
					id='hm-menu'
				/>
				<aside>
					<ul>
						<li>
							<a
								className={getUrl === '/' ? 'focused' : ''}
								href='/'
							>
								Home
							</a>
						</li>
						<li>
							<a
								className={getUrl === '/sign-up' ? 'focused' : ''}
								href='/sign-up'
							>
								Sign Up
							</a>
						</li>
						<li>
							<a
								className={getUrl === '/brand-onboarding' ? 'focused' : ''}
								href='/brand-onboarding'
							>
								Brand Onboarding
							</a>
						</li>
						<li>
							<a
								className={getUrl === '/contact-us' ? 'focused' : ''}
								href='/contact-us'
							>
								Contact Us
							</a>
						</li>
					</ul>
					<label htmlFor='hm-menu'></label>
				</aside>
			</nav>
		</>
	);
}

export default Navbar;
