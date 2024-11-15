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
		} else {
			document.querySelector('.navbar').classList.remove('navbar-scroll');
		}
	};

	return (
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
	);
}

export default Navbar;
